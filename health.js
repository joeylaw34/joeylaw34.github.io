// ============================================================
// APPLE HEALTH INTEGRATION
// Uses navigator.health (Web Health API — Safari iOS 17+)
// Falls back to manual entry when unavailable
// ============================================================

const HEALTH = {

  supported: false,
  permitted: false,

  // Data types we want to read
  types: {
    weight:    'HKQuantityTypeIdentifierBodyMass',
    steps:     'HKQuantityTypeIdentifierStepCount',
    calories:  'HKQuantityTypeIdentifierDietaryEnergyConsumed',
    protein:   'HKQuantityTypeIdentifierDietaryProtein',
    carbs:     'HKQuantityTypeIdentifierDietaryCarbohydrates',
    fat:       'HKQuantityTypeIdentifierDietaryFatTotal',
    heartRate: 'HKQuantityTypeIdentifierHeartRate',
    hrv:       'HKQuantityTypeIdentifierHeartRateVariabilitySDNN',
    restHR:    'HKQuantityTypeIdentifierRestingHeartRate',
  },

  async init() {
    this.supported = !!(navigator.health && navigator.health.requestAuthorization);
    if (!this.supported) return false;
    try {
      await navigator.health.requestAuthorization(Object.values(this.types));
      this.permitted = true;
      return true;
    } catch(e) {
      console.log('Health auth declined or unavailable:', e);
      return false;
    }
  },

  async query(type, options = {}) {
    if (!this.permitted) return null;
    const now = new Date();
    const start = options.start || new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const end = options.end || now;
    try {
      const results = await navigator.health.query({
        type,
        startDate: start.toISOString(),
        endDate: end.toISOString(),
        limit: options.limit || 10,
        ascending: false,
      });
      return results;
    } catch(e) {
      return null;
    }
  },

  async getTodayMetrics() {
    const today = new Date();
    today.setHours(0,0,0,0);
    const metrics = {};

    // Weight — most recent reading
    const weightData = await this.query(this.types.weight, {
      start: new Date(today.getTime() - 7 * 86400000), limit: 1
    });
    if (weightData && weightData.length) {
      const kg = weightData[0].value;
      metrics.weight = Math.round(kg * 2.20462 * 10) / 10;
      metrics.weightDate = new Date(weightData[0].endDate);
    }

    // Steps — today's total
    const stepsData = await this.query(this.types.steps, { start: today, limit: 100 });
    if (stepsData && stepsData.length) {
      metrics.steps = stepsData.reduce((sum, s) => sum + s.value, 0);
    }

    // Calories — today from MFP via Health
    const calData = await this.query(this.types.calories, { start: today, limit: 100 });
    if (calData && calData.length) {
      metrics.calories = Math.round(calData.reduce((sum, s) => sum + s.value, 0));
    }

    // Protein
    const protData = await this.query(this.types.protein, { start: today, limit: 100 });
    if (protData && protData.length) {
      metrics.protein = Math.round(protData.reduce((sum, s) => sum + s.value, 0));
    }

    // Carbs
    const carbData = await this.query(this.types.carbs, { start: today, limit: 100 });
    if (carbData && carbData.length) {
      metrics.carbs = Math.round(carbData.reduce((sum, s) => sum + s.value, 0));
    }

    // Fat
    const fatData = await this.query(this.types.fat, { start: today, limit: 100 });
    if (fatData && fatData.length) {
      metrics.fat = Math.round(fatData.reduce((sum, s) => sum + s.value, 0));
    }

    // Resting heart rate — most recent
    const restHRData = await this.query(this.types.restHR, {
      start: new Date(today.getTime() - 2 * 86400000), limit: 1
    });
    if (restHRData && restHRData.length) {
      metrics.restingHR = Math.round(restHRData[0].value);
    }

    // HRV — last night's reading
    const hrvData = await this.query(this.types.hrv, {
      start: new Date(today.getTime() - 2 * 86400000), limit: 1
    });
    if (hrvData && hrvData.length) {
      metrics.hrv = Math.round(hrvData[0].value);
    }

    return metrics;
  },

  // 7-day weight trend for chart
  async getWeightTrend() {
    const start = new Date();
    start.setDate(start.getDate() - 30);
    start.setHours(0,0,0,0);
    const data = await this.query(this.types.weight, { start, limit: 60 });
    if (!data || !data.length) return null;
    return data.map(d => ({
      date: new Date(d.endDate),
      lbs: Math.round(d.value * 2.20462 * 10) / 10
    })).reverse();
  },

  // Manual entry fallback — stored in localStorage key 'health_manual'
  saveManual(metrics) {
    const existing = this.loadManual();
    const today = new Date().toDateString();
    existing[today] = { ...existing[today], ...metrics, updated: Date.now() };
    try { localStorage.setItem('health_manual', JSON.stringify(existing)); } catch(e) {}
  },

  loadManual() {
    try {
      return JSON.parse(localStorage.getItem('health_manual') || '{}');
    } catch(e) { return {}; }
  },

  getTodayManual() {
    const today = new Date().toDateString();
    return this.loadManual()[today] || {};
  },

  // Get 30-day manual weight history
  getManualWeightTrend() {
    const data = this.loadManual();
    return Object.entries(data)
      .filter(([,v]) => v.weight)
      .map(([d,v]) => ({ date: new Date(d), lbs: v.weight }))
      .sort((a,b) => a.date - b.date)
      .slice(-30);
  }
};
