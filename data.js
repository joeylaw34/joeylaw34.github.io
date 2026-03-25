// ============================================================
// JOE'S TRAINING DATA — April + May 2026
// Rebuilt March 2026 — full corrections applied
// ============================================================

// ============================================================
// AFTERNOON SESSION TEMPLATES
// These vary intelligently based on the morning session type
// ============================================================
const PM = {

  upper: {
    label:'PM · Upper day (lighter push/pull)',
    note:'Morning was heavy upper — protect the pressing muscles. Jump rope, abs, and pull-up volume today. No push-ups.',
    rows:[
      {n:'Jump rope warm-up',s:'3 × 2 min / 30s rest'},
      {n:'Pull-ups or chin-ups',s:'4 × max reps (stop 2 shy of failure)'},
      {n:'Hanging knee raise',s:'3 × 15'},
      {n:'Ab wheel or plank',s:'3 × 45s'},
      {n:'Bag combos (jab-cross-hook)',s:'3 × 2 min / 1 min rest'},
      {n:'Hip flexor + shoulder stretch',s:'5 min'},
    ]
  },

  lower: {
    label:'PM · Leg day (push/pull focus)',
    note:'Morning was lower body — legs are loaded. Shift afternoon to upper-body calisthenics and bag work. More push-ups and pull-ups today.',
    rows:[
      {n:'Jump rope warm-up',s:'2 × 2 min'},
      {n:'Push-ups',s:'4 × max reps (target 20+)'},
      {n:'Pull-ups or chin-ups',s:'4 × max reps'},
      {n:'Bag combos + kicks',s:'4 × 2 min / 1 min rest'},
      {n:'Abs circuit',s:'3 × (15 crunches + 10 leg raise + 20s plank)'},
      {n:'Thoracic + hip stretch',s:'5 min'},
    ]
  },

  volume_upper: {
    label:'PM · Volume upper day (abs + light bag)',
    note:'Thursday is volume bench — chest and triceps are worked. Keep push volume minimal. Abs, jump rope, and technique bag work only.',
    rows:[
      {n:'Jump rope',s:'4 × 2 min / 30s rest'},
      {n:'Abs circuit',s:'4 × (15 crunches + 12 leg raise + 30s plank)'},
      {n:'Pull-ups (underhand grip)',s:'3 × max reps'},
      {n:'Bag — technique only (slow combos)',s:'3 × 2 min'},
      {n:'Full body stretch',s:'5 min'},
    ]
  },

  arms: {
    label:'PM · Arms/back day (jump rope + abs heavy)',
    note:'Arms and back are worked in the morning. No pulling or curling. Jump rope conditioning and abs are the focus.',
    rows:[
      {n:'Jump rope',s:'5 × 2 min / 30s rest'},
      {n:'Abs circuit',s:'4 × (15 crunches + 12 leg raise + 15 oblique)'},
      {n:'Bag — power kicks only (no punching)',s:'3 × 2 min'},
      {n:'Hip flexor + hamstring stretch',s:'5 min'},
    ]
  },

  rest: {
    label:'PM · Rest day (balanced full session)',
    note:'No morning gym session — this is your most complete afternoon session of the week.',
    rows:[
      {n:'Jump rope warm-up',s:'3 × 2 min / 30s rest'},
      {n:'Push-ups',s:'4 × max reps'},
      {n:'Pull-ups or chin-ups',s:'4 × max reps'},
      {n:'Bag combos (full combos + kicks)',s:'4 × 2 min / 1 min rest'},
      {n:'Abs circuit',s:'3 × (15 crunches + 12 leg raise + 30s plank)'},
      {n:'Full body stretch + mobility',s:'7 min'},
    ]
  },

  vacation: {
    label:'PM · Vacation (optional light movement)',
    note:'No pressure. If energy is there, a quick 10-min jump rope and stretch is enough. Skip it if you\'re genuinely resting.',
    rows:[
      {n:'Jump rope (optional)',s:'5–10 min easy'},
      {n:'Push-ups (optional)',s:'2–3 sets × 10–15 reps'},
      {n:'Full body stretch',s:'5 min'},
    ]
  },

  fast: {
    label:'PM · Fast day (walking only)',
    note:'No training during the fast. A slow 30–45 min walk is all that\'s appropriate. Preserve muscle, maximize autophagy.',
    rows:[
      {n:'Easy walk',s:'30–45 min — leisurely pace'},
      {n:'Light stretching',s:'5–10 min if desired'},
      {n:'NO bag work',s:'Conserve energy for autophagy'},
      {n:'NO jump rope',s:'Too intense during fasting'},
    ]
  },

  refeed: {
    label:'PM · Refeed day (walk + gentle stretch only)',
    note:'Gut is restarting. No bag work, no jump rope. Walk and mobility only — let the body focus on digestion and glycogen replenishment.',
    rows:[
      {n:'Easy walk',s:'30–40 min'},
      {n:'Gentle full body stretch',s:'10–15 min'},
      {n:'Hip 90/90',s:'60s each side'},
      {n:'Thoracic extension',s:'60s on foam roller'},
    ]
  }
};

// ============================================================
// JOINT PROTOCOL — Daily 8 minutes, every training day
// ============================================================
const JOINT = {
  h:'Daily joint protocol (8 min — do this FIRST)',
  rows:[
    {n:'Knee CARs (controlled articular rotations)',s:'5 slow circles each leg — 2 min'},
    {n:'Hip 90/90 with rotation',s:'60s each side — 2 min'},
    {n:'Thoracic extension on foam roller',s:'Hold 10s, move 1 vertebra down — 2 min'},
    {n:'Neck CARs (slow, gentle, full range)',s:'5 each direction — 1 min'},
    {n:'Ankle dorsiflexion against wall',s:'10 reps each foot — 1 min'},
  ]
};

const DAYS = {

// ============================================================
// APRIL
// ============================================================
april: [

// --- VACATION (Mar 29 – Apr 4) ---
{key:'2026-04-01',date:'Apr 1',dateNum:'1',dow:'Wednesday',tag:'rest',tagLabel:'Vacation',
 week:'Vacation — Mar 29–Apr 4',weekLabel:'🏖️ Maintenance cal · Walk daily · Hotel gym optional',
 summary:'Vacation — light hotel gym or walking',
 detail:{
   left:[{h:'Vacation activity',rows:[
     {n:'Planned workout',s:'None — intentional rest'},
     {n:'Walking',s:'8,000–12,000 steps naturally'},
     {n:'Hotel gym (optional)',s:'20–30 min max if you feel like it'},
     {n:'If you do gym',s:'DB chest press, rows, bodyweight squats, plank'},
   ]},{h:'Optional hotel PM session',rows:PM.vacation.rows}],
   right:[{h:'Nutrition — vacation mode',rows:[
     {n:'Calories',v:'2,200–2,400'},
     {n:'Protein',v:'180g+ minimum'},
     {n:'Approach',v:'Enjoy freely — this is a programmed refeed'},
     {n:'Alcohol',v:'Moderate — blunts sleep and recovery'},
   ]}],
   note:'<strong>Vacation is programmed.</strong> This refeed week resets leptin, restores glycogen, and gives joints and CNS full recovery. You will come back April 13 stronger than if you\'d ground through another week.'
 }
},
{key:'2026-04-02',date:'Apr 2',dateNum:'2',dow:'Thursday',tag:'rest',tagLabel:'Vacation',
 week:'Vacation — Mar 29–Apr 4',weekLabel:'🏖️ Maintenance cal · Walk daily',
 summary:'Vacation — rest and explore',
 detail:{
   left:[{h:'Today',rows:[
     {n:'Training',s:'No planned workout'},
     {n:'Activity',s:'Walking, sightseeing, family time'},
     {n:'Hotel gym',s:'Optional 20–30 min if energy is high'},
   ]},{h:'Optional PM',rows:PM.vacation.rows}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'2,200–2,400'},
     {n:'Protein',v:'180g+ minimum'},
   ]}],
   note:'Enjoy the vacation. The fast starts Sunday April 5 — use these days to genuinely rest and recharge mentally.'
 }
},
{key:'2026-04-03',date:'Apr 3',dateNum:'3',dow:'Friday',tag:'rest',tagLabel:'Vacation',
 week:'Vacation — Mar 29–Apr 4',weekLabel:'🏖️ Start reducing carbs today',
 summary:'Vacation — begin low-carb pre-fast prep',
 detail:{
   left:[{h:'Today',rows:[
     {n:'Training',s:'No planned workout'},
     {n:'Activity',s:'Walking, family time'},
     {n:'Carbs today',s:'Reduce to ~120g — drop rice, bread, potatoes'},
     {n:'Fat today',s:'Increase — avocado, olive oil, salmon'},
   ]},{h:'Optional PM',rows:PM.vacation.rows}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'2,000–2,200 (slightly lower)'},
     {n:'Carbs',v:'~120g — begin depletion'},
     {n:'Fat',v:'~80g — increase today'},
     {n:'Protein',v:'180g+'},
   ]},{h:'Tomorrow Apr 4',rows:[
     {n:'Carbs',v:'Drop to 80–100g'},
     {n:'Fat',v:'Increase further'},
     {n:'Final meal Apr 5',v:'6pm — salmon + avocado + salad, no rice'},
   ]}],
   note:'Starting to deplete glycogen now means you\'ll enter ketosis in 24–30 hours once the fast begins instead of 36–48. Deeper autophagy, faster.'
 }
},
{key:'2026-04-04',date:'Apr 4',dateNum:'4',dow:'Saturday',tag:'rest',tagLabel:'Vacation',
 week:'Vacation — Mar 29–Apr 4',weekLabel:'🏖️ Last vacation day',
 summary:'Last vacation day — carb taper continues',
 detail:{
   left:[{h:'Pre-fast carb reduction',rows:[
     {n:'Training',s:'No planned workout'},
     {n:'Carbs today',s:'80–100g only'},
     {n:'Fat',s:'~80g — avocado, nuts, olive oil, salmon'},
     {n:'Protein',s:'180g+'},
     {n:'Final meal tomorrow',s:'6pm Apr 5 — high fat, low carb'},
   ]},{h:'Have ready for fast',rows:[
     {n:'Pink Himalayan salt',s:'1 tsp/day'},
     {n:'Nu-Salt (potassium)',s:'½ tsp/day'},
     {n:'Magnesium glycinate',s:'400mg/day'},
     {n:'Green tea',s:'Unlimited'},
     {n:'Black coffee',s:'1–2 cups max/day'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'2,000'},
     {n:'Carbs',v:'80–100g'},
     {n:'Fat',v:'~80g'},
     {n:'Protein',v:'180g+'},
   ]}],
   note:'<strong>Last day of eating freely.</strong> Keep carbs low today. Going in glycogen-depleted means faster ketosis onset and more efficient autophagy from hour 1.'
 }
},
{key:'2026-04-05',date:'Apr 5',dateNum:'5',dow:'Sunday',tag:'rest',tagLabel:'Rest',
 week:'Vacation — Mar 29–Apr 4',weekLabel:'⚠️ Fast begins tonight at 6pm',
 summary:'Full rest — fast begins at 6pm tonight',
 detail:{
   left:[{h:'Today\'s protocol',rows:[
     {n:'Training',s:'Complete rest — no gym, no run'},
     {n:'Activity',s:'Light walk 20–30 min optional'},
     {n:'Final meal',s:'6:00 PM sharp — do not eat after'},
     {n:'Final meal composition',s:'Salmon + avocado + salad — NO rice or carbs'},
     {n:'After 6pm',s:'Water only — fast has begun'},
   ]},{h:'Fast checklist — have all ready',rows:[
     {n:'Pink salt (1 tsp/day)',s:'✓ Ready'},
     {n:'Nu-Salt potassium (½ tsp/day)',s:'✓ Ready'},
     {n:'Magnesium glycinate 400mg',s:'✓ Ready'},
     {n:'Green tea',s:'✓ Unlimited'},
     {n:'Black coffee',s:'✓ 1–2 cups max'},
   ]}],
   right:[{h:'Final day nutrition (eat 6am–6pm only)',rows:[
     {n:'Calories',v:'1,900 (normal)'},
     {n:'Carbs',v:'80–100g — keep low'},
     {n:'Fat',v:'80g — higher than normal'},
     {n:'Protein',v:'180g+'},
   ]},{h:'PM session',rows:PM.fast.rows}],
   note:'<strong>Mental prep:</strong> Days 1–2 are the hardest. Hunger peaks around hour 18–24, then drops sharply. By day 3 you will feel clear and sharp. You\'ve done hard things. This is 5 days.'
 }
},

// --- FAST ---
{key:'2026-04-06',date:'Apr 6',dateNum:'6',dow:'Monday',tag:'fast',tagLabel:'Fast D1',
 week:'5-Day Fast',weekLabel:'🔴 Zero calories · Electrolytes critical',
 summary:'Fast day 1 — glycogen depletion, hunger peaks',
 detail:{
   left:[{h:'Daily fast protocol',rows:[
     {n:'On waking',s:'16oz water + pinch of salt immediately'},
     {n:'Electrolytes AM',s:'½ tsp pink salt in 16oz water'},
     {n:'Electrolytes PM',s:'¼ tsp Nu-Salt + 400mg magnesium'},
     {n:'Coffee',s:'1 cup black before noon only'},
     {n:'Green tea',s:'Unlimited throughout day'},
     {n:'Movement',s:'30–45 min easy walk only'},
   ]},{h:'What to expect',rows:[
     {n:'Hunger',s:'High — peaks around hour 18–24'},
     {n:'Energy',s:'Low afternoon — normal'},
     {n:'Headache',s:'Possible — electrolytes fix this'},
     {n:'Mood',s:'Slightly irritable — completely normal'},
   ]}],
   right:[{h:'Electrolyte targets',rows:[
     {n:'Sodium',v:'2,500mg (1 tsp pink salt total)'},
     {n:'Potassium',v:'1,500mg (½ tsp Nu-Salt)'},
     {n:'Magnesium',v:'400–600mg supplement'},
     {n:'Water',v:'100–120 oz minimum'},
   ]},{h:'PM session',rows:PM.fast.rows}],
   note:'<strong>Day 1 strategy:</strong> Stay busy in the morning. Hunger is habitual before noon. The afternoon slump (2–4pm) is when glycogen crashes — electrolytes and green tea get you through it. Do NOT lie around fixating on food.'
 }
},
{key:'2026-04-07',date:'Apr 7',dateNum:'7',dow:'Tuesday',tag:'fast',tagLabel:'Fast D2',
 week:'5-Day Fast',weekLabel:'🔴 Ketosis beginning ~hour 36',
 summary:'Fast day 2 — entering ketosis, hunger drops',
 detail:{
   left:[{h:'Protocol',rows:[
     {n:'Morning water + salt',s:'On waking immediately'},
     {n:'Electrolytes AM',s:'½ tsp pink salt in water'},
     {n:'Electrolytes PM',s:'¼ tsp Nu-Salt + 400mg mag'},
     {n:'Coffee',s:'1 cup black max'},
     {n:'Walk',s:'45 min — slightly longer today'},
     {n:'Green tea',s:'2–3 cups afternoon'},
   ]},{h:'What to expect',rows:[
     {n:'Hunger',s:'Dropping — ketosis beginning'},
     {n:'Energy',s:'Variable — morning better than yesterday'},
     {n:'Mental clarity',s:'Starting to improve'},
     {n:'Breath',s:'Ketone breath possible — normal'},
   ]}],
   right:[{h:'Autophagy status',rows:[
     {n:'Hour 24',v:'Autophagy activating'},
     {n:'Hour 36–48',v:'Ketosis — fat burning dominant'},
     {n:'Tonight',v:'Peak autophagy activation begins'},
   ]},{h:'PM session',rows:PM.fast.rows}],
   note:'<strong>Day 2 is the pivot:</strong> By afternoon, ketones rise and hunger quiets. The irritability you feel is your brain resisting the fuel-source switch. Once ketones flow (~hour 36), the mental fog lifts noticeably.'
 }
},
{key:'2026-04-08',date:'Apr 8',dateNum:'8',dow:'Wednesday',tag:'fast',tagLabel:'Fast D3',
 week:'5-Day Fast',weekLabel:'🔴 Peak autophagy — stay the course',
 summary:'Fast day 3 — peak autophagy, mental clarity high',
 detail:{
   left:[{h:'Protocol',rows:[
     {n:'Morning water + salt',s:'On waking'},
     {n:'Electrolytes AM + PM',s:'Same as days 1–2'},
     {n:'Coffee',s:'1 cup max'},
     {n:'Walk',s:'45–60 min'},
     {n:'Sauna (if available)',s:'20 min moderate heat'},
     {n:'Cold shower',s:'Morning — 2–3 min cold'},
   ]},{h:'What to expect',rows:[
     {n:'Hunger',s:'Significantly reduced'},
     {n:'Energy',s:'Good to excellent'},
     {n:'Mental clarity',s:'High — use it for meaningful work'},
     {n:'Joints',s:'Inflammatory cytokines reducing — knees + back benefiting'},
   ]}],
   right:[{h:'Autophagy peak',rows:[
     {n:'Hour 48–72',v:'Deep autophagy active'},
     {n:'Damaged proteins',v:'Being cleared'},
     {n:'Mitochondria',v:'Mitophagy underway'},
     {n:'Inflammation',v:'Markers dropping significantly'},
   ]},{h:'PM session',rows:PM.fast.rows}],
   note:'<strong>Day 3 is the reward.</strong> If you\'ve hit electrolytes consistently, today should feel genuinely good. Use the clarity for prayer, strategy, or reading. Sauna on day 3 amplifies autophagy. Your joints are doing their most repair work right now.'
 }
},
{key:'2026-04-09',date:'Apr 9',dateNum:'9',dow:'Thursday',tag:'fast',tagLabel:'Fast D4',
 week:'5-Day Fast',weekLabel:'🔴 Deepest cellular repair',
 summary:'Fast day 4 — deep autophagy, stem cell signals',
 detail:{
   left:[{h:'Protocol',rows:[
     {n:'Morning water + salt',s:'On waking'},
     {n:'Electrolytes AM + PM',s:'Critical — don\'t skip'},
     {n:'Walk',s:'45–60 min easy'},
     {n:'Sauna',s:'20–25 min if available'},
     {n:'Cold shower',s:'Morning'},
     {n:'Sleep priority',s:'8+ hrs tonight — recovery critical'},
   ]},{h:'Physical signs',rows:[
     {n:'Hunger',s:'Minimal to none'},
     {n:'Energy',s:'Moderate — don\'t overdo activity'},
     {n:'Sleep quality',s:'Often excellent day 3–4'},
   ]}],
   right:[{h:'Cellular activity',rows:[
     {n:'Hour 72–96',v:'Maximum autophagy depth'},
     {n:'HGH',v:'Elevated 300–500% (muscle preservation)'},
     {n:'Stem cells',v:'Beginning activation'},
     {n:'mTOR',v:'Suppressed — cellular cleanup mode'},
   ]},{h:'PM session',rows:PM.fast.rows}],
   note:'<strong>Hour 72–96</strong> is where the cellular regeneration research focuses its biggest benefits. Your joints specifically benefit from the inflammatory reset. Tomorrow at 6pm you break the fast — you\'ve already done the hard part.'
 }
},
{key:'2026-04-10',date:'Apr 10',dateNum:'10',dow:'Friday',tag:'fast',tagLabel:'Fast D5',
 week:'5-Day Fast',weekLabel:'🔴 Final day — break at 6pm with bone broth',
 summary:'Final fast day — break carefully at 6pm',
 detail:{
   left:[{h:'Final day + break-fast order',rows:[
     {n:'Morning through 6pm',s:'Full fast continues'},
     {n:'6:00 PM — Step 1',s:'Water + pinch salt, wait 15 min'},
     {n:'6:15 PM — Step 2',s:'8oz bone broth — sip slowly'},
     {n:'6:45 PM — Step 3',s:'Wait, assess stomach'},
     {n:'7:15 PM — Step 4',s:'2 eggs + ½ avocado + cucumber'},
     {n:'Stop',s:'No more food tonight — 300–400 cal max'},
   ]},{h:'What NOT to do',rows:[
     {n:'Don\'t',s:'Eat a full meal to celebrate'},
     {n:'Don\'t',s:'Have carbs tonight (rice/bread)'},
     {n:'Don\'t',s:'Eat quickly — refeeding syndrome risk'},
     {n:'Don\'t',s:'Drink alcohol'},
   ]}],
   right:[{h:'Tomorrow Apr 11',rows:[
     {n:'Calories',v:'1,200–1,400 cal'},
     {n:'Meals',v:'Small, every 3–4 hours'},
     {n:'Priority',v:'Protein + healthy fats first'},
     {n:'Carbs',v:'Light — 80–100g max'},
   ]},{h:'PM session',rows:PM.fast.rows}],
   note:'<strong>Breaking the fast correctly is as important as the fast itself.</strong> Bone broth first — collagen and electrolytes repair the gut lining. Eggs and avocado second. Any nausea = stop, wait 30 min, try again smaller.'
 }
},
{key:'2026-04-11',date:'Apr 11',dateNum:'11',dow:'Saturday',tag:'refeed',tagLabel:'Refeed D1',
 week:'Refeed',weekLabel:'🟢 1,200 cal — gut restarting',
 summary:'Refeed day 1 — 1,200 cal, walk and stretch only',
 detail:{
   left:[{h:'Refeed day 1 meals',rows:[
     {n:'9:00 AM',s:'2 eggs + ½ avocado + spinach (350 cal)'},
     {n:'12:00 PM',s:'4oz chicken + salad + olive oil (350 cal)'},
     {n:'3:00 PM',s:'Greek yogurt plain + walnuts (250 cal)'},
     {n:'6:30 PM',s:'4oz salmon + roasted veg (300 cal)'},
     {n:'Total',s:'~1,250 cal / 120p / 60c / 55f'},
   ]}],
   right:[{h:'Movement only',rows:[
     {n:'Training',v:'None'},
     {n:'Walk',v:'30 min easy'},
     {n:'Stretching',v:'15 min full body'},
   ]},{h:'Weight context',rows:[
     {n:'Post-fast weight',v:'~210–211 lbs (mostly water)'},
     {n:'After refeed',v:'213–214 lbs (glycogen + water)'},
     {n:'True fat loss',v:'1–2 lbs actual fat'},
     {n:'Don\'t panic',v:'Scale spike is glycogen — not fat'},
   ]},{h:'PM session',rows:PM.refeed.rows}],
   note:'<strong>The refeed spike is not failure.</strong> Every gram of glycogen carries 3–4g of water. Scale will jump 2–4 lbs — this is expected and good. That glycogen fuels Monday\'s return to training.'
 }
},
{key:'2026-04-12',date:'Apr 12',dateNum:'12',dow:'Sunday',tag:'refeed',tagLabel:'Refeed D2',
 week:'Refeed',weekLabel:'🟢 1,600 cal — prep for Monday',
 summary:'Refeed day 2 — 1,600 cal, prep for training',
 detail:{
   left:[{h:'Refeed day 2 meals',rows:[
     {n:'8:00 AM',s:'3 eggs + 1 slice toast + berries (450 cal)'},
     {n:'12:00 PM',s:'5oz chicken + ½ cup rice + veg (500 cal)'},
     {n:'3:30 PM',s:'Greek yogurt + apple + almonds (300 cal)'},
     {n:'7:00 PM',s:'5oz salmon + small sweet potato + salad (400 cal)'},
     {n:'Total',s:'~1,650 cal / 175p / 130c / 50f'},
   ]}],
   right:[{h:'Movement',rows:[
     {n:'Training',v:'Rest — light activity only'},
     {n:'Walk',v:'45 min easy'},
     {n:'Foam roll',v:'Quads, hamstrings, lats — prep for Monday'},
   ]},{h:'Monday prep',rows:[
     {n:'Gym bag',v:'Pack tonight'},
     {n:'Pre-workout meal ready',v:'Banana + ½ scoop whey'},
     {n:'Sleep',v:'8 hrs — training resumes tomorrow'},
     {n:'Bench expectation',v:'185×5 — not 205. CNS needs 3–5 days'},
   ]},{h:'PM session',rows:PM.refeed.rows}],
   note:'<strong>Manage expectations for Monday.</strong> 5–10% temporary strength reduction is normal post-fast. Start conservative — 185×5 on bench, 185×5 on squat. The strength comes back within 7–10 days.'
 }
},

// --- WEEK 4 ---
{key:'2026-04-13',date:'Apr 13',dateNum:'13',dow:'Monday',tag:'lift',tagLabel:'Lift',
 week:'Week 4 — Strength Rebuild',weekLabel:'Phase 1 · Back to 1,900 cal',
 summary:'Heavy bench + squat — first session post-fast',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Heavy bench + squat',rows:[
     {n:'Bench warm-up: 45×10, 95×8, 135×5, 165×3',s:''},
     {n:'Bench working sets',s:'3×5 @ 185 lbs (conservative post-fast)'},
     {n:'Squat warm-up: 45×10, 95×8, 135×5',s:''},
     {n:'Squat working sets',s:'3×5 @ 185 lbs (returning to pattern)'},
     {n:'DB bench backoff',s:'3×8 @ 80 lbs'},
     {n:'Plank',s:'3×45s'},
     {n:'Hanging knee raise',s:'3×12'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
     {n:'Carbs',v:'155g'},
     {n:'Fat',v:'50g'},
     {n:'Pre-workout 7:15am',v:'Banana + ½ scoop whey'},
   ]},{h:'PM session — upper day',rows:PM.upper.rows}],
   note:'<strong>Squat is back.</strong> You hit 295×8 in 2023 — this is a rebuild, not a start. 185×5 today is conservative but appropriate post-fast. Muscle memory is real: the nervous system pattern is there. Expect rapid progression over the coming weeks.'
 }
},
{key:'2026-04-14',date:'Apr 14',dateNum:'14',dow:'Tuesday',tag:'lift',tagLabel:'Lift',
 week:'Week 4 — Strength Rebuild',weekLabel:'Phase 1 · Arms + back + legs',
 summary:'Arms / back / legs — squat added to Tuesday',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Arms + back + legs',rows:[
     {n:'Barbell curl',s:'3×8 @ 80 lbs'},
     {n:'Lat pulldown',s:'4×8 @ 130 lbs'},
     {n:'Seated cable row',s:'3×10 @ 120 lbs'},
     {n:'Barbell squat',s:'3×8 @ 175 lbs (volume work)'},
     {n:'Romanian deadlift',s:'3×10 @ 155 lbs'},
     {n:'Leg curl',s:'3×12'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'PM session — arms day',rows:PM.arms.rows}],
   note:'<strong>Tuesday now has barbell squats permanently.</strong> 175×8 — lighter than Monday\'s working weight, higher reps. This volume work builds the quad base and reinforces the pattern twice a week. Your 2023 peak of 295×8 was built on consistent frequency — that\'s how you get back there.'
 }
},
{key:'2026-04-15',date:'Apr 15',dateNum:'15',dow:'Wednesday',tag:'run',tagLabel:'Run',
 week:'Week 4 — Strength Rebuild',weekLabel:'Phase 1 · First run post-fast',
 summary:'Easy 5K — first run post-fast',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Easy 5K',rows:[
     {n:'Warm-up walk',s:'5 min'},
     {n:'Run',s:'10:30–11:00/mile — genuinely easy'},
     {n:'Distance',s:'3.0–3.1 miles'},
     {n:'Cool-down walk + stretch',s:'10 min'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Pre-run',v:'Banana 30 min before'},
     {n:'Post-run',v:'Protein shake + fruit immediately'},
   ]},{h:'PM session — rest day type',rows:PM.rest.rows}],
   note:'<strong>First run back:</strong> Aerobic fitness is intact after 5 days rest. Take it easy — if you feel great at mile 2, resist the urge to push. Today is data collection.'
 }
},
{key:'2026-04-16',date:'Apr 16',dateNum:'16',dow:'Thursday',tag:'lift',tagLabel:'Lift',
 week:'Week 4 — Strength Rebuild',weekLabel:'Phase 1 · Volume bench',
 summary:'Volume bench + abs',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Volume bench + abs',rows:[
     {n:'Band pull-aparts warm-up',s:'3×15'},
     {n:'Barbell bench',s:'4×8 @ 165 lbs'},
     {n:'Incline DB press',s:'3×10 @ 65 lbs'},
     {n:'Pec deck / cable fly',s:'3×12'},
     {n:'Plank',s:'3×45s'},
     {n:'Hanging knee raise',s:'3×15'},
     {n:'Cable crunch',s:'3×15'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'PM session — volume upper day',rows:PM.volume_upper.rows}],
   note:'<strong>Neck care:</strong> Keep neck neutral on bench — don\'t crank it into the pad. Feet flat on floor, scapula packed. The thoracic work in your joint protocol directly reduces neck compensation over time.'
 }
},
{key:'2026-04-17',date:'Apr 17',dateNum:'17',dow:'Friday',tag:'lift',tagLabel:'Lift',
 week:'Week 4 — Strength Rebuild',weekLabel:'Phase 1 · Arms + legs',
 summary:'Volume arms + legs',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Arms + legs',rows:[
     {n:'Barbell curl',s:'4×8 @ 85 lbs'},
     {n:'Tricep pushdown',s:'4×12 @ 55 lbs'},
     {n:'Skull crusher',s:'3×10 @ 55 lbs'},
     {n:'Barbell squat',s:'3×10 @ 165 lbs (volume — higher reps)'},
     {n:'Romanian deadlift',s:'3×10 @ 165 lbs'},
     {n:'Walking lunges',s:'3×10 each (bodyweight)'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'PM session — lower day',rows:PM.lower.rows}],
   note:'<strong>Squat on Friday too.</strong> Three squat sessions per week (Mon heavy, Tue volume, Fri volume) is how your 2023 peak was built. Your joints need frequency to stay healthy — the movement is medicine for arthritic knees when loaded progressively and correctly.'
 }
},
{key:'2026-04-18',date:'Apr 18',dateNum:'18',dow:'Saturday',tag:'run',tagLabel:'Run',
 week:'Week 4 — Strength Rebuild',weekLabel:'Phase 1 · Tempo run',
 summary:'Tempo 5K — first real push post-fast',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Tempo 5K',rows:[
     {n:'Warm-up walk/jog',s:'5–8 min easy'},
     {n:'5K tempo',s:'9:00–9:30/mile target'},
     {n:'Cool-down walk',s:'5 min'},
     {n:'Full stretch',s:'10–15 min'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Pre-run',v:'Banana + ½ scoop whey 30 min before'},
   ]},{h:'5K context',rows:[
     {n:'Current ability',v:'~31 min (10:15 pace)'},
     {n:'Today target',v:'~29:00 (9:20 pace)'},
     {n:'End of April',v:'~28:30 realistic'},
   ]}],
   note:'<strong>First real tempo effort post-fast.</strong> Go by feel — 9:00–9:30 is a target not a mandate. Time it and log it — this is your April baseline number.'
 }
},
{key:'2026-04-19',date:'Apr 19',dateNum:'19',dow:'Sunday',tag:'rest',tagLabel:'Rest',
 week:'Week 4 — Strength Rebuild',weekLabel:'Phase 1 · Weekly review',
 summary:'Full rest — weekly review',
 detail:{
   left:[{h:'Rest day',rows:[
     {n:'Training',s:'Complete rest'},
     {n:'Walk',s:'20–30 min easy if desired'},
     {n:'Foam rolling',s:'10 min — quads, lats, thoracic'},
     {n:'Sleep',s:'8+ hours'},
   ]},{h:'Week 4 review',rows:[
     {n:'Lifting sessions',s:'4 of 4 ✓'},
     {n:'Runs',s:'2 of 3 target'},
     {n:'Fast',s:'5 days completed ✓'},
     {n:'PM sessions',s:'5 of 5 weekdays ✓'},
   ]}],
   right:[{h:'Body check',rows:[
     {n:'Weigh in',v:'Expected 212–214 lbs'},
     {n:'Energy',v:'Should be close to 100%'},
     {n:'Squat',v:'185×5 Mon — how did it feel?'},
   ]},{h:'Week 5 preview',rows:[
     {n:'Monday bench',v:'Target 195 lbs'},
     {n:'Monday squat',v:'Target 195 lbs'},
     {n:'Goal',v:'3 runs this week — hit it'},
   ]}],
   note:'<strong>Week 4 complete.</strong> You navigated the hardest week of the program — a 5-day fast mid-phase and a return to squatting twice a week. The cellular reset is done. The squat is back. Now build.'
 }
},

// --- WEEK 5 ---
{key:'2026-04-20',date:'Apr 20',dateNum:'20',dow:'Monday',tag:'lift',tagLabel:'Lift',
 week:'Week 5 — Strength Return',weekLabel:'Phase 1 · Bench + squat building',
 summary:'Heavy bench + squat — strength returning',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Heavy bench + squat',rows:[
     {n:'Bench warm-up: 45×10, 95×8, 135×5, 165×3',s:''},
     {n:'Bench working sets',s:'3×4 @ 195 lbs'},
     {n:'Bench backoff',s:'1×8 @ 175 lbs'},
     {n:'Squat warm-up: 45×10, 95×8, 155×5',s:''},
     {n:'Squat working sets',s:'3×4 @ 195 lbs'},
     {n:'DB bench',s:'3×8 @ 85 lbs'},
     {n:'Plank',s:'3×50s'},
     {n:'Hanging knee raise',s:'3×15'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Strength rebuild tracker',rows:[
     {n:'Wk 4 bench',v:'185×5 — post-fast'},
     {n:'Wk 5 bench',v:'195×4 — returning'},
     {n:'Wk 4 squat',v:'185×5 — restart'},
     {n:'Wk 5 squat',v:'195×4 — building fast'},
   ]},{h:'PM session — upper day',rows:PM.upper.rows}],
   note:'<strong>Squat muscle memory is real.</strong> You hit 295×8 in 2023. Getting back to 195 should feel familiar — not heavy. Bar speed will tell you more than the number. Fast reps at 195 = time to push next week. Grindy reps = stay here one more week.'
 }
},
{key:'2026-04-21',date:'Apr 21',dateNum:'21',dow:'Tuesday',tag:'lift',tagLabel:'Lift',
 week:'Week 5 — Strength Return',weekLabel:'Phase 1 · Progressive overload',
 summary:'Arms / back / squat — progressive overload',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Arms + back + squat',rows:[
     {n:'Barbell curl',s:'4×8 @ 90 lbs'},
     {n:'Lat pulldown',s:'4×8 @ 140 lbs'},
     {n:'Seated cable row',s:'3×10 @ 130 lbs'},
     {n:'Face pull',s:'3×15 — shoulder health'},
     {n:'Barbell squat',s:'4×8 @ 185 lbs (volume)'},
     {n:'Romanian deadlift',s:'4×8 @ 175 lbs'},
     {n:'Leg curl',s:'3×12'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'PM session — arms day',rows:PM.arms.rows}],
   note:'<strong>Two squat sessions per week from here on.</strong> Monday heavy, Tuesday and Friday volume. This is the frequency that built your 2023 peak. By end of May you should be back at 245–255 lbs — well ahead of the 275 target for October.'
 }
},
{key:'2026-04-22',date:'Apr 22',dateNum:'22',dow:'Wednesday',tag:'run',tagLabel:'Run',
 week:'Week 5 — Strength Return',weekLabel:'Phase 1 · Easy run',
 summary:'Easy 5K — conversational pace',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Easy 5K',rows:[
     {n:'Warm-up walk',s:'5 min'},
     {n:'Run',s:'10:00–10:30/mile — conversational'},
     {n:'Cool-down + stretch',s:'10 min'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'PM session — balanced',rows:PM.rest.rows}],
   note:'Two easy runs + one hard run per week is the model. The aerobic adaptation happens at easy paces — not by pushing every run.'
 }
},
{key:'2026-04-23',date:'Apr 23',dateNum:'23',dow:'Thursday',tag:'lift',tagLabel:'Lift',
 week:'Week 5 — Strength Return',weekLabel:'Phase 1 · Volume bench',
 summary:'Volume bench + abs (+5 lbs)',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Volume bench + abs',rows:[
     {n:'Band pull-aparts warm-up',s:'3×15'},
     {n:'Barbell bench',s:'4×8 @ 170 lbs (+5 from Wk 4)'},
     {n:'Incline DB press',s:'3×10 @ 67.5 lbs'},
     {n:'Pec deck',s:'3×12'},
     {n:'Plank',s:'3×50s'},
     {n:'Hanging leg raise',s:'3×10'},
     {n:'Ab wheel rollout',s:'3×10'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'PM session — volume upper day',rows:PM.volume_upper.rows}],
   note:'Volume bench at 170×8 — all 4 sets, full range. Controlled eccentric (2 seconds down), explode up. Rest 90s max between sets.'
 }
},
{key:'2026-04-24',date:'Apr 24',dateNum:'24',dow:'Friday',tag:'lift',tagLabel:'Lift',
 week:'Week 5 — Strength Return',weekLabel:'Phase 1 · Arms + legs',
 summary:'Arms + legs + squat volume',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Arms + legs',rows:[
     {n:'Barbell curl',s:'4×8 @ 90 lbs'},
     {n:'Hammer curl',s:'3×10 @ 35 lbs'},
     {n:'Tricep pushdown',s:'4×12 @ 60 lbs'},
     {n:'Close-grip bench',s:'3×8 @ 135 lbs'},
     {n:'Barbell squat',s:'4×10 @ 175 lbs'},
     {n:'Romanian deadlift',s:'3×10 @ 175 lbs'},
     {n:'Walking lunge',s:'3×10 each (bodyweight)'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'PM session — lower day',rows:PM.lower.rows}],
   note:'<strong>Friday squat at 175×10.</strong> Higher reps, lower load — builds muscle endurance and reinforces the pattern. Three squat sessions per week (Mon 195×4, Tue 185×8, Fri 175×10) creates a complete stimulus for rebuilding your 2023 strength level.'
 }
},
{key:'2026-04-25',date:'Apr 25',dateNum:'25',dow:'Saturday',tag:'run',tagLabel:'Run',
 week:'Week 5 — Strength Return',weekLabel:'Phase 1 · Hard effort 5K',
 summary:'Hard 5K — push for sub-28:30',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Hard effort 5K',rows:[
     {n:'Warm-up',s:'5 min walk + 5 min easy jog'},
     {n:'Hard 5K',s:'Push — target 9:00/mile'},
     {n:'Strategy',s:'Mile 1: 9:20 / Mile 2: 9:05 / Mile 3: all out'},
     {n:'Cool-down',s:'10 min walk + full stretch'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Pre-run',v:'Banana + ½ scoop whey 30 min before'},
   ]},{h:'5K April tracking',rows:[
     {n:'Apr 18',v:'~29:00 (9:20 pace)'},
     {n:'Apr 25 target',v:'~28:30 (9:10 pace)'},
     {n:'May target',v:'~27:30–28:00'},
     {n:'Oct target',v:'Sub-25:00'},
   ]}],
   note:'<strong>Negative split strategy:</strong> Start conservative and finish faster. 9:20 / 9:10 / 8:55 finishes under 28:30 and feels strong. Going out at 8:45 and dying feels terrible and is slower. Control mile 1.'
 }
},
{key:'2026-04-26',date:'Apr 26',dateNum:'26',dow:'Sunday',tag:'rest',tagLabel:'Rest',
 week:'Week 5 — Strength Return',weekLabel:'Phase 1 · Weekly review',
 summary:'Full rest — weekly review',
 detail:{
   left:[{h:'Rest day',rows:[
     {n:'Training',s:'Complete rest'},
     {n:'Walk',s:'30 min optional'},
     {n:'Foam rolling',s:'10 min — quads, hips, thoracic'},
     {n:'Sleep',s:'8+ hours'},
   ]},{h:'Week 5 review',rows:[
     {n:'Lifting',s:'4 of 4 ✓'},
     {n:'Runs',s:'3 of 3 ✓ — target hit'},
     {n:'PM sessions',s:'5 of 5 weekdays'},
     {n:'Joint protocol',s:'Every training day ✓'},
   ]}],
   right:[{h:'Squat check',rows:[
     {n:'Mon 195×4',v:'How did it feel?'},
     {n:'Tue 185×8',v:'Solid volume?'},
     {n:'Fri 175×10',v:'Controlled all reps?'},
     {n:'Next week',v:'Mon: 205×3, Tue/Fri: +10 lbs'},
   ]}],
   note:'<strong>The squat rebuild is underway.</strong> Three sessions per week, progressive overload. By end of May you should be approaching 245–255 lbs — your intermediate goal before Phase 2 ramps to 275 by October.'
 }
},

// --- WEEK 6 ---
{key:'2026-04-27',date:'Apr 27',dateNum:'27',dow:'Monday',tag:'lift',tagLabel:'Lift',
 week:'Week 6 — Pre-May Push',weekLabel:'Phase 1 · Bench 200+ · Squat 205',
 summary:'Heavy bench 200+ · Squat 205',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Heavy bench + squat',rows:[
     {n:'Bench warm-up: 45×10, 95×8, 135×5, 175×3',s:''},
     {n:'Bench working set 1',s:'3×3 @ 200 lbs'},
     {n:'Bench — if 200×3 crisp',s:'Attempt 205×2'},
     {n:'Bench backoff',s:'1×6 @ 185 lbs'},
     {n:'Squat warm-up: 45×10, 95×8, 165×5',s:''},
     {n:'Squat working sets',s:'3×3 @ 205 lbs'},
     {n:'Ab circuit × 3',s:'Plank 50s / knee raise 15 / crunch 15'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Benchmark',rows:[
     {n:'Bench pre-fast PR',v:'205×3 (Mar 23)'},
     {n:'Today bench',v:'200×3 → 205×2 attempt'},
     {n:'Squat restart',v:'185×5 (Apr 13)'},
     {n:'Today squat',v:'205×3 — moving fast'},
   ]},{h:'PM session — upper day',rows:PM.upper.rows}],
   note:'<strong>Milestone session.</strong> 200×3 bench means full recovery from the fast. Squat at 205 two weeks after restarting at 185 — that\'s muscle memory working exactly as expected. The nervous system pattern was always there.'
 }
},
{key:'2026-04-28',date:'Apr 28',dateNum:'28',dow:'Tuesday',tag:'lift',tagLabel:'Lift',
 week:'Week 6 — Pre-May Push',weekLabel:'Phase 1 · Full progression',
 summary:'Arms / back / squat — full progression',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Arms + back + squat',rows:[
     {n:'Barbell curl',s:'4×6 @ 95 lbs'},
     {n:'Lat pulldown',s:'4×8 @ 145 lbs'},
     {n:'Seated cable row',s:'4×8 @ 135 lbs'},
     {n:'Face pull',s:'3×15'},
     {n:'Barbell squat',s:'4×8 @ 195 lbs (volume)'},
     {n:'Romanian deadlift',s:'4×8 @ 185 lbs'},
     {n:'Leg press',s:'3×12 moderate'},
     {n:'Leg curl',s:'3×12'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'PM session — arms day',rows:PM.arms.rows}],
   note:'<strong>RDL at 185:</strong> Slow eccentric (3 seconds down), full hamstring stretch, drive hips through at the top. This posterior chain work directly translates to your Phase 2 trap bar deadlift numbers.'
 }
},
{key:'2026-04-29',date:'Apr 29',dateNum:'29',dow:'Wednesday',tag:'run',tagLabel:'Run',
 week:'Week 6 — Pre-May Push',weekLabel:'Phase 1 · Tempo — sub-28:30',
 summary:'Tempo 5K — push for sub-28:30',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Tempo 5K',rows:[
     {n:'Warm-up',s:'5 min walk + 3 min easy jog'},
     {n:'Tempo 5K',s:'9:00 pace target'},
     {n:'Goal time',s:'Sub-28:30 (28:00 stretch)'},
     {n:'Cool-down walk',s:'10 min'},
     {n:'Full stretch',s:'15 min — long holds'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Pre-run',v:'Banana + ½ scoop whey'},
   ]},{h:'April 5K summary',rows:[
     {n:'Month start',v:'~31:00 (10:15 pace)'},
     {n:'Today target',v:'~28:00–28:30'},
     {n:'Drop',v:'~2:30–3:00 min in 4 weeks'},
   ]},{h:'PM session — balanced',rows:PM.rest.rows}],
   note:'<strong>April 5K progress summary:</strong> If you hit sub-28:30 today, you\'ve dropped roughly 2.5 minutes in one month. Combined effect of training, the fast\'s inflammatory reset, and improved body composition. Log this — it\'s your May baseline.'
 }
},
{key:'2026-04-30',date:'Apr 30',dateNum:'30',dow:'Thursday',tag:'lift',tagLabel:'Lift',
 week:'Week 6 — Pre-May Push',weekLabel:'Phase 1 · Close April strong',
 summary:'Volume bench + abs — close April strong',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Volume bench + abs',rows:[
     {n:'Band pull-aparts warm-up',s:'3×15'},
     {n:'Barbell bench',s:'4×8 @ 170–175 lbs'},
     {n:'Incline DB press',s:'3×10 @ 70 lbs'},
     {n:'Pec deck + cable fly',s:'3×12 each'},
     {n:'Plank',s:'3×55s'},
     {n:'Hanging leg raise',s:'3×12'},
     {n:'Ab wheel',s:'3×12'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'April final numbers',rows:[
     {n:'Lifting sessions',v:'16 of 16 ✓'},
     {n:'Runs',v:'~10–11 sessions ✓'},
     {n:'PM sessions',v:'~18–20 sessions ✓'},
     {n:'Fast',v:'5 days completed ✓'},
     {n:'Bench',v:'Back to 200–205 lbs'},
     {n:'Squat',v:'Back to 205 lbs (from 155 in March)'},
   ]},{h:'PM session — volume upper day',rows:PM.volume_upper.rows}],
   note:'<strong>April complete.</strong> You restarted squats, fasted for 5 days, rebuilt all strength, ran consistently, and added daily joint work and PM sessions. The squat jumped from 155 to 205 in 3 weeks — muscle memory is real. May target: squat 245 by end of month, bench 225×1.'
 }
},

],

// ============================================================
// MAY
// ============================================================
may: [

{key:'2026-05-01',date:'May 1',dateNum:'1',dow:'Friday',tag:'lift',tagLabel:'Lift',
 week:'Week 7 — Phase 1',weekLabel:'Phase 1 · Cut @ 1,900 cal',
 summary:'Arms + legs + squat — start May strong',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Arms + legs',rows:[
     {n:'Barbell curl',s:'4×6 @ 95 lbs'},
     {n:'Hammer curl',s:'3×10 @ 37.5 lbs'},
     {n:'Tricep pushdown',s:'4×12 @ 62.5 lbs'},
     {n:'Close-grip bench',s:'3×8 @ 140 lbs'},
     {n:'Barbell squat',s:'4×10 @ 185 lbs'},
     {n:'Romanian deadlift',s:'4×8 @ 185 lbs'},
     {n:'Leg press',s:'3×15 moderate'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
     {n:'Carbs',v:'155g'},
     {n:'Fat',v:'50g'},
   ]},{h:'May goals',rows:[
     {n:'Weight',v:'215 → 209 lbs by May 31'},
     {n:'Bench',v:'225×1 by May 25'},
     {n:'Squat',v:'245–255 lbs by May 31'},
     {n:'5K',v:'Sub-27:00 by late May'},
   ]},{h:'PM session — lower day',rows:PM.lower.rows}],
   note:'<strong>May is execution month.</strong> No major disruptions, no fasts. 4 lifts + 3 runs + 5 PM sessions every week. The squat goal of 245–255 by end of May puts 275 squarely in reach by October.'
 }
},
{key:'2026-05-02',date:'May 2',dateNum:'2',dow:'Saturday',tag:'run',tagLabel:'Run',
 week:'Week 7 — Phase 1',weekLabel:'Phase 1 · Easy 5K',
 summary:'Easy 5K — Ohio spring running',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Easy 5K',rows:[
     {n:'Warm-up walk',s:'5 min'},
     {n:'Easy run',s:'9:45–10:15/mile — conversational'},
     {n:'Distance',s:'3.1 miles'},
     {n:'Cool-down + stretch',s:'10 min'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Hydration',v:'100+ oz — warmer weather now'},
   ]}],
   note:'May in Richfield averages 55–68°F — ideal running weather. Easy pace improving: 10:15 in April → targeting 9:45 easy by end of May. Gradual and sustainable.'
 }
},
{key:'2026-05-03',date:'May 3',dateNum:'3',dow:'Sunday',tag:'rest',tagLabel:'Rest',
 week:'Week 7 — Phase 1',weekLabel:'Phase 1 · Rest',
 summary:'Full rest — food prep day',
 detail:{
   left:[{h:'Rest day',rows:[
     {n:'Training',s:'Complete rest'},
     {n:'Walk',s:'30 min optional'},
     {n:'Mobility',s:'10 min light stretching'},
     {n:'Sleep',s:'8+ hours'},
   ]}],
   right:[{h:'Weekly reset',rows:[
     {n:'Food prep',v:'Cook 2–3 lbs chicken, hard boil eggs, prep veg'},
     {n:'Week ahead',v:'4 lifts + 3 runs + 5 PM sessions'},
     {n:'Weigh in',v:'Log daily average'},
   ]}],
   note:'Food prep on Sundays removes the friction that leads to off-plan eating. Having protein ready to grab means the 1,900 cal target stays easy to hit.'
 }
},
{key:'2026-05-04',date:'May 4',dateNum:'4',dow:'Monday',tag:'lift',tagLabel:'Lift',
 week:'Week 7 — Phase 1',weekLabel:'Phase 1 · Bench 205+ · Squat 215',
 summary:'Heavy bench 205+ · Squat 215',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Heavy bench + squat',rows:[
     {n:'Bench warm-up: 45×10, 95×8, 135×5, 175×3',s:''},
     {n:'Bench working sets',s:'3×3 @ 205 lbs'},
     {n:'Bench attempt',s:'210×2 if 205×3 moves well'},
     {n:'Bench backoff',s:'1×6 @ 190 lbs'},
     {n:'Squat warm-up: 45×10, 95×8, 165×5',s:''},
     {n:'Squat working sets',s:'3×3 @ 215 lbs'},
     {n:'Ab circuit × 3',s:'Plank 55s / leg raise 12 / wheel 10'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Squat progression',rows:[
     {n:'Apr 13',v:'185×5 — restart'},
     {n:'Apr 20',v:'195×4'},
     {n:'Apr 27',v:'205×3'},
     {n:'May 4',v:'215×3 — on track for 255 by May 31'},
   ]},{h:'PM session — upper day',rows:PM.upper.rows}],
   note:'<strong>205×3 bench this week matches your pre-fast PR.</strong> Matching that at lower bodyweight in a deficit means you are actually stronger than you were in March. Squat at 215 — this is genuinely impressive progress from 155 in March. Muscle memory is doing exactly what it should.'
 }
},
{key:'2026-05-05',date:'May 5',dateNum:'5',dow:'Tuesday',tag:'lift',tagLabel:'Lift',
 week:'Week 7 — Phase 1',weekLabel:'Phase 1 · Arms + back + legs',
 summary:'Arms / back / squat — progressive overload',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Arms + back + squat',rows:[
     {n:'Barbell curl',s:'4×8 @ 95 lbs'},
     {n:'Incline DB curl',s:'3×10 @ 35 lbs'},
     {n:'Lat pulldown',s:'4×8 @ 150 lbs'},
     {n:'Seated cable row',s:'4×8 @ 140 lbs'},
     {n:'Face pull',s:'3×15'},
     {n:'Barbell squat',s:'4×8 @ 205 lbs (volume)'},
     {n:'Romanian deadlift',s:'4×8 @ 190 lbs'},
     {n:'Leg curl',s:'3×12'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'PM session — arms day',rows:PM.arms.rows}],
   note:'<strong>Squat volume at 205×8.</strong> Tuesday volume work is what builds the muscular endurance to hold technique under heavy load on Mondays. Don\'t skip these — they\'re as important as the Monday heavy sets.'
 }
},
{key:'2026-05-06',date:'May 6',dateNum:'6',dow:'Wednesday',tag:'run',tagLabel:'Run',
 week:'Week 7 — Phase 1',weekLabel:'Phase 1 · Tempo run',
 summary:'Tempo 5K — target sub-28:00',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Tempo 5K',rows:[
     {n:'Warm-up',s:'5 min walk + 3 min jog'},
     {n:'Tempo 5K',s:'8:55–9:15/mile target'},
     {n:'Goal time',s:'Sub-28:00'},
     {n:'Cool-down',s:'10 min walk + stretch'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Pre-run',v:'Banana + ½ scoop whey'},
   ]},{h:'PM session — balanced',rows:PM.rest.rows}],
   note:'<strong>Tempo tip:</strong> Negative split — run second half faster than first. Start at 9:10, finish at 8:50. This trains your body to hold pace when fatigued, which is exactly what the sub-25 5K demands later in the season.'
 }
},
{key:'2026-05-07',date:'May 7',dateNum:'7',dow:'Thursday',tag:'lift',tagLabel:'Lift',
 week:'Week 7 — Phase 1',weekLabel:'Phase 1 · Volume bench',
 summary:'Volume bench + abs',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Volume bench + abs',rows:[
     {n:'Band pull-aparts',s:'3×15'},
     {n:'Barbell bench',s:'4×8 @ 175 lbs'},
     {n:'Incline DB press',s:'3×10 @ 72.5 lbs'},
     {n:'Cable fly',s:'3×12'},
     {n:'Plank',s:'3×55s'},
     {n:'Hanging leg raise',s:'3×12'},
     {n:'Ab wheel',s:'3×12'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'PM session — volume upper day',rows:PM.volume_upper.rows}],
   note:'Volume bench at 175×8 — four sets, full range. The combined weekly bench volume (heavy Mon + volume Thu) is what builds the muscle base needed for 225×6–8 by March 2027, not just the heavy singles.'
 }
},
{key:'2026-05-08',date:'May 8',dateNum:'8',dow:'Friday',tag:'lift',tagLabel:'Lift',
 week:'Week 7 — Phase 1',weekLabel:'Phase 1 · Arms + legs',
 summary:'Arms + legs + squat volume',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Arms + legs',rows:[
     {n:'Barbell curl',s:'4×6 @ 97.5 lbs'},
     {n:'Hammer curl',s:'3×10 @ 37.5 lbs'},
     {n:'Tricep pushdown',s:'4×12 @ 65 lbs'},
     {n:'Close-grip bench',s:'3×8 @ 145 lbs'},
     {n:'Barbell squat',s:'4×10 @ 195 lbs'},
     {n:'RDL',s:'3×10 @ 185 lbs'},
     {n:'Walking lunge',s:'3×12 each (bodyweight)'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'PM session — lower day',rows:PM.lower.rows}],
   note:'<strong>Curl progression:</strong> 97.5 lbs — if you hit all 4×6 cleanly next week you attempt 100 lbs. A meaningful milestone. Strict form: no swinging, full range, supinate at the top.'
 }
},
{key:'2026-05-09',date:'May 9',dateNum:'9',dow:'Saturday',tag:'run',tagLabel:'Run',
 week:'Week 7 — Phase 1',weekLabel:'Phase 1 · Hard effort',
 summary:'Hard effort 5K — push sub-27:45',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Hard effort 5K',rows:[
     {n:'Warm-up',s:'8 min easy walk/jog'},
     {n:'Hard 5K',s:'8:55–9:10/mile target'},
     {n:'Goal time',s:'Sub-27:45'},
     {n:'Cool-down + stretch',s:'15 min'},
   ]}],
   right:[{h:'5K progress',rows:[
     {n:'Apr start',v:'~31:00'},
     {n:'Apr end',v:'~28:00–28:30'},
     {n:'May 9 target',v:'~27:45'},
     {n:'May 31 goal',v:'Sub-27:00'},
   ]}],
   note:'You\'ve already dropped 2.5+ minutes in one month. May should add another 1:00–1:30. The gains slow — every 30 seconds now requires more work than the last 2 minutes did. That\'s normal and expected.'
 }
},
{key:'2026-05-10',date:'May 10',dateNum:'10',dow:'Sunday',tag:'rest',tagLabel:'Rest',
 week:'Week 7 — Phase 1',weekLabel:'Phase 1 · Mother\'s Day rest',
 summary:'Full rest — Mother\'s Day',
 detail:{
   left:[{h:'Rest day',rows:[
     {n:'Training',s:'Complete rest'},
     {n:'Family',s:'Enjoy the day'},
     {n:'Activity',s:'Walk if it happens naturally'},
   ]}],
   right:[{h:'Week 7 review',rows:[
     {n:'Lifting',v:'4 of 4 ✓'},
     {n:'Runs',v:'3 of 3 ✓'},
     {n:'PM sessions',v:'5 of 5 ✓'},
     {n:'Weigh in',v:'Expected 213–214 lbs'},
   ]}],
   note:'Rest days are training days. Muscle is built during recovery, not during the workout. The workout is the stimulus — sleep and rest are where adaptation happens.'
 }
},

// --- WEEK 8 ---
{key:'2026-05-11',date:'May 11',dateNum:'11',dow:'Monday',tag:'lift',tagLabel:'Lift',
 week:'Week 8 — Phase 1',weekLabel:'Phase 1 · Bench 210+ · Squat 225',
 summary:'Heavy bench 210 · Squat 225 — big week',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Heavy bench + squat',rows:[
     {n:'Bench warm-up: 45×10, 95×8, 135×5, 185×3',s:''},
     {n:'Bench working sets',s:'3×3 @ 210 lbs'},
     {n:'Bench attempt',s:'215×1 if 210×3 moves fast'},
     {n:'Bench backoff',s:'1×5 @ 195 lbs'},
     {n:'Squat warm-up: 45×10, 95×8, 175×5',s:''},
     {n:'Squat working sets',s:'3×3 @ 225 lbs'},
     {n:'Ab circuit × 3',s:'Full circuit at max reps'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Squat milestone',rows:[
     {n:'225 lbs',v:'Halfway to your 275 goal'},
     {n:'From 155 (Mar)',v:'70 lbs gained in 9 weeks'},
     {n:'By May 31',v:'Target 250–255'},
     {n:'By Oct 2026',v:'Target 275 — on track'},
   ]},{h:'PM session — upper day',rows:PM.upper.rows}],
   note:'<strong>Squat 225 is a milestone.</strong> This is the two-plate squat — same psychological marker as the bench press goal. You were here before in 2023 and blew past it to 295. The difference this time is you\'re never going to deprioritize legs again.'
 }
},
{key:'2026-05-12',date:'May 12',dateNum:'12',dow:'Tuesday',tag:'lift',tagLabel:'Lift',
 week:'Week 8 — Phase 1',weekLabel:'Phase 1 · Back + legs heavy',
 summary:'Arms / back / squat — big numbers',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Arms + back + squat',rows:[
     {n:'Barbell curl',s:'4×6 @ 100 lbs (milestone)'},
     {n:'Lat pulldown',s:'4×8 @ 155 lbs'},
     {n:'Seated cable row',s:'4×8 @ 145 lbs'},
     {n:'Face pull',s:'3×15'},
     {n:'Barbell squat',s:'4×8 @ 215 lbs (volume)'},
     {n:'Romanian deadlift',s:'4×8 @ 195 lbs'},
     {n:'Leg press',s:'3×15'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'PM session — arms day',rows:PM.arms.rows}],
   note:'<strong>100 lb barbell curl milestone.</strong> Strict form only — no swinging. If you get all 4×6 strict, note it in Strong. By Phase 2, weighted chin-ups will drive bicep strength further than curls ever could.'
 }
},
{key:'2026-05-13',date:'May 13',dateNum:'13',dow:'Wednesday',tag:'run',tagLabel:'Run',
 week:'Week 8 — Phase 1',weekLabel:'Phase 1 · Easy run',
 summary:'Easy 5K — conversational pace',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Easy 5K',rows:[
     {n:'Warm-up walk',s:'5 min'},
     {n:'Easy run',s:'9:30–10:00/mile'},
     {n:'Cool-down + stretch',s:'10 min'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Pre-run',v:'Light — half banana or nothing'},
     {n:'Hydration',v:'100+ oz today'},
   ]},{h:'PM session — balanced',rows:PM.rest.rows}],
   note:'Easy pace is dropping — 9:30 that feels conversational in May would have been tempo in March. That\'s real fitness. Notice it.'
 }
},
{key:'2026-05-14',date:'May 14',dateNum:'14',dow:'Thursday',tag:'lift',tagLabel:'Lift',
 week:'Week 8 — Phase 1',weekLabel:'Phase 1 · Volume bench',
 summary:'Volume bench + abs',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Volume bench + abs',rows:[
     {n:'Band pull-aparts',s:'3×15'},
     {n:'Barbell bench',s:'4×8 @ 180 lbs (+5)'},
     {n:'Incline DB press',s:'3×10 @ 75 lbs'},
     {n:'Pec deck',s:'3×12'},
     {n:'Ab circuit × 3',s:'Plank 60s / leg raise 15 / wheel 12'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'PM session — volume upper day',rows:PM.volume_upper.rows}],
   note:'Volume bench moving to 180×8. Your total weekly bench volume is now high — heavy Mon sets + volume Thu sets combined. This builds the muscular endurance base for 225×6–8 in winter.'
 }
},
{key:'2026-05-15',date:'May 15',dateNum:'15',dow:'Friday',tag:'lift',tagLabel:'Lift',
 week:'Week 8 — Phase 1',weekLabel:'Phase 1 · Arms + legs',
 summary:'Arms + legs + squat volume',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Arms + legs',rows:[
     {n:'Barbell curl',s:'4×6 @ 100 lbs'},
     {n:'Cable curl',s:'3×12 @ light (stretch emphasis)'},
     {n:'Tricep pushdown',s:'4×12 @ 67.5 lbs'},
     {n:'Overhead tricep extension',s:'3×10 @ 70 lbs'},
     {n:'Barbell squat',s:'4×10 @ 205 lbs'},
     {n:'RDL',s:'3×10 @ 190 lbs'},
     {n:'Walking lunge',s:'3×12 each (bodyweight)'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'PM session — lower day',rows:PM.lower.rows}],
   note:'Three squat sessions this week (Mon 225×3, Tue 215×8, Fri 205×10). That\'s how your 2023 peak was built and how you\'re going to surpass it.'
 }
},
{key:'2026-05-16',date:'May 16',dateNum:'16',dow:'Saturday',tag:'run',tagLabel:'Run',
 week:'Week 8 — Phase 1',weekLabel:'Phase 1 · Hard run',
 summary:'Hard effort 5K — push sub-27:30',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Hard effort 5K',rows:[
     {n:'Warm-up',s:'8 min easy'},
     {n:'Hard 5K',s:'8:50–9:00/mile target'},
     {n:'Goal time',s:'Sub-27:30'},
     {n:'Cool-down',s:'15 min + full stretch'},
   ]}],
   right:[{h:'5K tracker',rows:[
     {n:'May 9',v:'~27:45'},
     {n:'May 16 target',v:'Sub-27:30'},
     {n:'May 30 goal',v:'Sub-27:00'},
     {n:'Oct goal',v:'Sub-25:00'},
   ]}],
   note:'Sub-27:30 means ~8:52/mile average. From 10:15 in April — over 1:20 faster per mile in 6 weeks. Consistent training + reduced body weight is doing exactly what it should.'
 }
},
{key:'2026-05-17',date:'May 17',dateNum:'17',dow:'Sunday',tag:'rest',tagLabel:'Rest',
 week:'Week 8 — Phase 1',weekLabel:'Phase 1 · Rest',
 summary:'Full rest — weekly review',
 detail:{
   left:[{h:'Rest day',rows:[
     {n:'Training',s:'Complete rest'},
     {n:'Walk',s:'30 min optional'},
     {n:'Sleep',s:'8+ hours priority'},
   ]}],
   right:[{h:'Week 8 body check',rows:[
     {n:'Weigh in',v:'Expected 212–213 lbs'},
     {n:'Squat',v:'225×3 — how did it feel?'},
     {n:'On track',v:'255 squat by May 31 — realistic'},
     {n:'On track',v:'206 lbs by June 7 — yes'},
   ]}],
   note:'<strong>Week 8 check-in:</strong> Bench should be strongest it\'s ever been at this bodyweight. Squat is at 225 — back to 2023 territory. You\'re 4 weeks from the end of Phase 1 and ahead of pace on every goal.'
 }
},

// --- WEEK 9 ---
{key:'2026-05-18',date:'May 18',dateNum:'18',dow:'Monday',tag:'lift',tagLabel:'Lift',
 week:'Week 9 — Phase 1',weekLabel:'Phase 1 · Bench 215 · Squat 235',
 summary:'Heavy bench 215 · Squat 235',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Heavy bench + squat',rows:[
     {n:'Bench warm-up: 45×10, 95×8, 145×5, 185×2',s:''},
     {n:'Bench working sets',s:'3×3 @ 215 lbs'},
     {n:'Bench attempt',s:'220×1 if 215×3 moves fast'},
     {n:'Bench backoff',s:'1×5 @ 200 lbs'},
     {n:'Squat warm-up: 45×10, 95×8, 185×3',s:''},
     {n:'Squat working sets',s:'3×3 @ 235 lbs'},
     {n:'Ab circuit × 3',s:'All components at max reps'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Bench week 9',rows:[
     {n:'215×3',v:'Est 1RM ≈ 228 lbs'},
     {n:'220×1',v:'Approaching the goal'},
     {n:'225 week',v:'May 25 — the target'},
   ]},{h:'PM session — upper day',rows:PM.upper.rows}],
   note:'<strong>215×3 bench:</strong> Estimated 1RM of ~228. You\'re within striking distance of 225. Squat at 235 — you\'re approaching your 2023 peak territory. The body remembers.'
 }
},
{key:'2026-05-19',date:'May 19',dateNum:'19',dow:'Tuesday',tag:'lift',tagLabel:'Lift',
 week:'Week 9 — Phase 1',weekLabel:'Phase 1 · Back + legs',
 summary:'Arms / back / squat — big posterior push',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Arms + back + squat',rows:[
     {n:'Barbell curl',s:'4×6 @ 100 lbs — hold this'},
     {n:'Lat pulldown',s:'4×8 @ 157.5 lbs'},
     {n:'Seated row',s:'4×8 @ 150 lbs'},
     {n:'Face pull',s:'3×15'},
     {n:'Barbell squat',s:'4×8 @ 225 lbs (volume)'},
     {n:'Romanian deadlift',s:'4×8 @ 200 lbs'},
     {n:'Leg press',s:'3×15'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'PM session — arms day',rows:PM.arms.rows}],
   note:'<strong>RDL at 200 lbs</strong> is serious posterior chain loading. Your Phase 2 trap bar deadlift starts at 185 in June and builds toward 375 by July. This RDL work is building that directly.'
 }
},
{key:'2026-05-20',date:'May 20',dateNum:'20',dow:'Wednesday',tag:'run',tagLabel:'Run',
 week:'Week 9 — Phase 1',weekLabel:'Phase 1 · Tempo — sub-27:30',
 summary:'Tempo 5K — target sub-27:30',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Tempo 5K',rows:[
     {n:'Warm-up',s:'5 min walk + 3 min jog'},
     {n:'Tempo 5K',s:'8:50 pace — hold it'},
     {n:'Goal',s:'Sub-27:30 (8:50/mile)'},
     {n:'Cool-down',s:'10 min + full stretch'},
   ]}],
   right:[{h:'5K milestone',rows:[
     {n:'Sub-27:30',v:'= 8:50/mile pace'},
     {n:'Started at',v:'10:15/mile (Apr 1)'},
     {n:'Improvement',v:'1:25/mile faster in 7 weeks'},
     {n:'To goal',v:'0:50/mile remaining to sub-25'},
   ]},{h:'PM session — balanced',rows:PM.rest.rows}],
   note:'Sub-27:30 mid-May puts you solidly on track for sub-25 by September/October. The remaining improvement from 27:30 to 25:00 takes longer than the first gains — plan for gradual progress through summer.'
 }
},
{key:'2026-05-21',date:'May 21',dateNum:'21',dow:'Thursday',tag:'lift',tagLabel:'Lift',
 week:'Week 9 — Phase 1',weekLabel:'Phase 1 · Volume bench heavy',
 summary:'Volume bench + abs — heavy volume',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Volume bench + abs',rows:[
     {n:'Band pull-aparts',s:'3×15'},
     {n:'Barbell bench',s:'4×8 @ 182.5 lbs'},
     {n:'Incline DB press',s:'3×10 @ 77.5 lbs'},
     {n:'Cable fly',s:'3×12'},
     {n:'Plank',s:'3×60s'},
     {n:'Hanging leg raise',s:'3×15'},
     {n:'Ab wheel',s:'3×15'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'PM session — volume upper day',rows:PM.volume_upper.rows}],
   note:'Volume bench at 182.5×8 is now serious loading. Combined with Monday\'s heavy sets, your chest, anterior delt, and triceps are getting a comprehensive weekly stimulus.'
 }
},
{key:'2026-05-22',date:'May 22',dateNum:'22',dow:'Friday',tag:'lift',tagLabel:'Lift',
 week:'Week 9 — Phase 1',weekLabel:'Phase 1 · Arms + legs',
 summary:'Arms + legs + squat volume',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Arms + legs',rows:[
     {n:'Barbell curl',s:'4×6 @ 100 lbs'},
     {n:'Hammer curl',s:'3×10 @ 40 lbs'},
     {n:'Tricep pushdown',s:'4×12 @ 70 lbs'},
     {n:'Close-grip bench',s:'3×8 @ 150 lbs'},
     {n:'Barbell squat',s:'4×10 @ 215 lbs'},
     {n:'RDL',s:'3×10 @ 195 lbs'},
     {n:'Walking lunge',s:'3×12 each (bodyweight)'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'PM session — lower day',rows:PM.lower.rows}],
   note:'Close-grip bench at 150 is strong tricep work — directly assists your regular bench and builds the lockout strength you need for 225.'
 }
},
{key:'2026-05-23',date:'May 23',dateNum:'23',dow:'Saturday',tag:'run',tagLabel:'Run',
 week:'Week 9 — Phase 1',weekLabel:'Phase 1 · Hard 5K',
 summary:'Hard effort 5K — push sub-27:00',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Hard effort 5K',rows:[
     {n:'Warm-up',s:'8 min easy'},
     {n:'Hard 5K',s:'8:40–8:50/mile — race effort'},
     {n:'Goal time',s:'Sub-27:00'},
     {n:'Cool-down',s:'15 min + full stretch'},
   ]}],
   right:[{h:'5K status',rows:[
     {n:'May 16',v:'~27:30'},
     {n:'May 23 target',v:'Sub-27:00'},
     {n:'May 30',v:'Sub-26:45'},
     {n:'June target',v:'Sub-26:30'},
   ]}],
   note:'Sub-27:00 means 8:41/mile. This is real aerobic fitness — not just effort. Your cardiovascular system is rebuilding from the ground up this season.'
 }
},
{key:'2026-05-24',date:'May 24',dateNum:'24',dow:'Sunday',tag:'rest',tagLabel:'Rest',
 week:'Week 9 — Phase 1',weekLabel:'Phase 1 · Rest — 225 bench week ahead',
 summary:'Full rest — 225 bench attempt week starts tomorrow',
 detail:{
   left:[{h:'Rest day',rows:[
     {n:'Training',s:'Complete rest'},
     {n:'Sleep',s:'8+ hours — critical before 225 week'},
     {n:'Mobility',s:'10 min light — hips and shoulders'},
     {n:'Mental prep',s:'Visualize the 225 bench'},
   ]}],
   right:[{h:'Week 10 preview',rows:[
     {n:'Monday bench',v:'225 lb attempt — the goal'},
     {n:'Monday squat',v:'245 lbs — approaching 2023 peak'},
     {n:'If 225 moves',v:'Log the PR and stop — don\'t chase more'},
     {n:'If not',v:'215×3 is excellent — 225 next week'},
   ]}],
   note:'<strong>Tomorrow is a milestone day — for both bench AND squat.</strong> Sleep well. Eat normally in the morning. Trust the 10 weeks of work. 225 bench is in your calculated range. 245 squat means you\'re approaching your 2023 peak — this time with no intention of letting it slip away again.'
 }
},

// --- WEEK 10 ---
{key:'2026-05-25',date:'May 25',dateNum:'25',dow:'Monday',tag:'lift',tagLabel:'Lift',
 week:'Week 10 — Phase 1 Peak',weekLabel:'Phase 1 · 🎯 225 bench · 245 squat',
 summary:'225 bench attempt · 245 squat 🎯',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'225 bench + 245 squat',rows:[
     {n:'Bench: 45×10, 95×8, 135×5, 185×3, 205×3',s:'Warm-up fully'},
     {n:'Bench attempt',s:'220×1 — final prep set'},
     {n:'Bench goal set',s:'225×1 — full setup, pause at chest'},
     {n:'Bench done',s:'Back down to 185×5 — stop there'},
     {n:'Squat: 45×10, 95×8, 155×5, 205×3',s:'Warm-up fully'},
     {n:'Squat working sets',s:'3×3 @ 245 lbs'},
     {n:'Ab circuit × 3',s:'Standard — don\'t skip'},
   ]},{h:'Bench setup protocol',rows:[
     {n:'Scapula',s:'Packed hard into bench — non-negotiable'},
     {n:'Feet',s:'Flat on floor, drive through heels'},
     {n:'Breath',s:'Big belly breath (Valsalva) before unrack'},
     {n:'Spotter',s:'Use one — this is serious weight'},
   ]}],
   right:[{h:'Nutrition — milestone day',rows:[
     {n:'Pre-workout meal',v:'3 eggs + ½ cup oats + banana'},
     {n:'Creatine',v:'5g pre-workout if using'},
     {n:'Hydration',v:'32 oz water before you touch the bar'},
   ]},{h:'Context',rows:[
     {n:'Bench Mar 23',v:'205×3 (pre-program PR)'},
     {n:'Today bench',v:'225×1 — the goal (+20 lbs)'},
     {n:'Squat Mar 9',v:'155×8 (recent restart)'},
     {n:'Today squat',v:'245×3 (+90 lbs in 10 weeks)'},
   ]},{h:'PM session — upper day',rows:PM.upper.rows}],
   note:'<strong>Bench setup:</strong> Take a big belly breath (Valsalva), lock the lats, lower controlled to chest, pause 1 second, then drive. For the squat at 245 — brace hard, sit back into the hips, drive the floor away. You\'ve been at these weights before. Today you\'re taking them back permanently.'
 }
},
{key:'2026-05-26',date:'May 26',dateNum:'26',dow:'Tuesday',tag:'lift',tagLabel:'Lift',
 week:'Week 10 — Phase 1 Peak',weekLabel:'Phase 1 · Deload prep',
 summary:'Arms / back / squat — deload rep ranges',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Arms + back + squat — deload',rows:[
     {n:'Barbell curl',s:'3×8 @ 85 lbs (drop weight, higher reps)'},
     {n:'Lat pulldown',s:'3×10 @ 140 lbs'},
     {n:'Seated row',s:'3×10 @ 130 lbs'},
     {n:'Face pull',s:'3×15'},
     {n:'Barbell squat',s:'3×8 @ 185 lbs (deload — lighter)'},
     {n:'RDL',s:'3×10 @ 175 lbs'},
   ]}],
   right:[{h:'Why deload now',rows:[
     {n:'10 weeks into Phase 1',v:'CNS fatigue accumulated'},
     {n:'225 attempt yesterday',v:'High neural demand'},
     {n:'Phase 2 starts June 8',v:'Arrive fresh and recovered'},
     {n:'This week',v:'60–70% intensity — maintain movement'},
   ]},{h:'PM session — arms day',rows:PM.arms.rows}],
   note:'This is a planned deload — not weakness. The fatigue accumulated over 10 weeks needs to dissipate before Phase 2. Athletes who skip deloads plateau; athletes who include them break through.'
 }
},
{key:'2026-05-27',date:'May 27',dateNum:'27',dow:'Wednesday',tag:'run',tagLabel:'Run',
 week:'Week 10 — Phase 1 Peak',weekLabel:'Phase 1 · Easy run — deload week',
 summary:'Easy 5K — deload week running',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Easy 5K',rows:[
     {n:'Warm-up walk',s:'5 min'},
     {n:'Easy run',s:'9:30–10:00/mile — no pushing'},
     {n:'Cool-down',s:'10 min + full stretch'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'PM session — balanced',rows:PM.rest.rows}],
   note:'Easy deload run — this is active recovery, not a workout. Don\'t let it become a tempo effort.'
 }
},
{key:'2026-05-28',date:'May 28',dateNum:'28',dow:'Thursday',tag:'lift',tagLabel:'Lift',
 week:'Week 10 — Phase 1 Peak',weekLabel:'Phase 1 · Deload volume bench',
 summary:'Volume bench — deload weight',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Volume bench — deload',rows:[
     {n:'Band pull-aparts',s:'3×15'},
     {n:'Barbell bench',s:'3×10 @ 155 lbs (deload weight)'},
     {n:'Incline DB press',s:'3×12 @ 60 lbs'},
     {n:'Cable fly',s:'3×15 — light'},
     {n:'Ab circuit × 2',s:'Reduced volume'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Fast preview',rows:[
     {n:'Fast starts',v:'June 1 morning'},
     {n:'Pre-fast carbs',v:'Start reducing May 30'},
     {n:'Phase 2',v:'Begins June 8'},
   ]},{h:'PM session — volume upper day',rows:PM.volume_upper.rows}],
   note:'Bench at 155 after weeks at 175–185 feels easy. That\'s the point — connective tissue and CNS are recovering. The 3-day fast starts June 1 — arrive at it rested, not exhausted.'
 }
},
{key:'2026-05-29',date:'May 29',dateNum:'29',dow:'Friday',tag:'lift',tagLabel:'Lift',
 week:'Week 10 — Phase 1 Peak',weekLabel:'Phase 1 · Light deload + last PM bag session',
 summary:'Light deload session — last full week of Phase 1',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'Light deload',rows:[
     {n:'Barbell squat',s:'3×10 @ 155 lbs — light, technical'},
     {n:'RDL',s:'3×10 @ 155 lbs — light'},
     {n:'Barbell curl',s:'3×10 @ 80 lbs'},
     {n:'Tricep pushdown',s:'3×12 @ 55 lbs'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Pre-fast carb shift tomorrow',rows:[
     {n:'May 30',v:'Reduce carbs to ~100g'},
     {n:'May 31',v:'80g carbs, increase fat to 80g'},
     {n:'June 1',v:'Fast begins — zero calories'},
   ]},{h:'PM session — lower day',rows:PM.lower.rows}],
   note:'<strong>Last real training session of Phase 1 before the deload fast.</strong> Keep it light and technical. Focus on movement quality, not load. Shadow the Phase 2 version of yourself — what does it look like to train legs with the same discipline as bench?'
 }
},
{key:'2026-05-30',date:'May 30',dateNum:'30',dow:'Saturday',tag:'run',tagLabel:'Run',
 week:'Week 10 — Phase 1 Peak',weekLabel:'Phase 1 · Final May benchmark run',
 summary:'Final May 5K — benchmark run',
 detail:{
   left:[{h:'Joint protocol — do this first',rows:JOINT.rows},
   {h:'May final 5K benchmark',rows:[
     {n:'Warm-up',s:'8 min easy'},
     {n:'5K — moderate effort',s:'8:40–9:00/mile'},
     {n:'Goal',s:'Sub-27:00 — May final benchmark'},
     {n:'Cool-down',s:'15 min + full stretch'},
   ]}],
   right:[{h:'May 5K progress',rows:[
     {n:'May 1 start',v:'~27:45'},
     {n:'May 30 target',v:'Sub-27:00'},
     {n:'June target',v:'Sub-26:30'},
     {n:'October target',v:'Sub-25:00'},
   ]},{h:'Pre-fast carb reduction',rows:[
     {n:'Today\'s carbs',v:'~100g (reduced from 155g)'},
     {n:'Today\'s fat',v:'~70g (increased)'},
     {n:'Tomorrow',v:'80g carbs, 80g fat, fast starts Monday'},
   ]}],
   note:'<strong>May final benchmark.</strong> Sub-27:00 today means you\'ve dropped 4 minutes from your April 1 pace. That\'s exceptional. Log the time. 3-day fast bridge starts Monday, Phase 2 begins June 8.'
 }
},
{key:'2026-05-31',date:'May 31',dateNum:'31',dow:'Sunday',tag:'rest',tagLabel:'Rest',
 week:'Week 10 — Phase 1 Peak',weekLabel:'⚠️ Phase 1 complete · Fast starts tomorrow',
 summary:'Phase 1 complete — fast begins tomorrow morning',
 detail:{
   left:[{h:'Phase 1 complete',rows:[
     {n:'Training',s:'Complete rest'},
     {n:'Final meal tonight',s:'6pm — high fat, low carb, no rice'},
     {n:'After 6pm',s:'Water only — fast begins'},
     {n:'Electrolytes ready',s:'Have everything set tonight'},
   ]}],
   right:[{h:'Phase 1 final stats',rows:[
     {n:'Duration',v:'12 weeks (Mar 16 – May 31)'},
     {n:'Weight change',v:'216 → ~207 lbs (est)'},
     {n:'Bench',v:'205×3 → 225×1 (goal met)'},
     {n:'Squat',v:'155×8 → 245×3 (from rebuild)'},
     {n:'5K',v:'~31:00 → ~27:00 (4 min drop)'},
     {n:'PM sessions',v:'~45 sessions completed'},
     {n:'Joint protocol',v:'Daily — inflammation down'},
   ]},{h:'Phase 2 preview',rows:[
     {n:'Fast',v:'Jun 1–3 (3 days)'},
     {n:'Refeed',v:'Jun 4–7'},
     {n:'Phase 2 start',v:'June 8'},
     {n:'Goals',v:'200 lbs · Trap bar DL 375 · Squat 275 Oct'},
   ]}],
   note:'<strong>Phase 1 complete.</strong> 12 weeks. You hit the bench goal, rebuilt your squat from 155 to 245, dropped 8–9 lbs, ran consistently, and built two new daily habits (joint protocol + PM sessions). Phase 2 is where the training becomes genuinely athletic. You earned it.'
 }
},

]
};

// ============================================================
// PHASES
// ============================================================
const PHASES = [
  {
    title:'Phase 1: Cut + strength foundation',
    dates:'Mar 16 – May 31, 2026',
    status:'🔵 IN PROGRESS',
    color:'#3b82f6',
    icon:'⚡',
    iconBg:'rgba(59,130,246,0.2)',
    goals:[
      'Target: 216 → 206 lbs at 1,900 cal/day',
      'Bench: 205×3 → 225×1 (Phase 1 milestone)',
      'Squat: Rebuilt from 155 → 245+ lbs by May 31',
      'Deadlift: RDL building to 200 lbs — trap bar starts Phase 2',
      'Running: 3×5K/week — target sub-27:00 by May',
      'AM: 4 gym sessions/week — Mon/Thu bench focus, Tue/Fri legs equal',
      'PM: 5 days/week calisthenics — 15–20 min (jump rope, push-ups, pull-ups, abs, bag)',
      'Daily: 8-min joint protocol every training day (knees, hips, thoracic, neck, ankles)',
      '5-day fast Apr 5–9 (cellular reset, autophagy)',
      'Vacation Mar 29–Apr 4 (maintenance/refeed — programmed)',
    ]
  },
  {
    title:'3-Day fast bridge',
    dates:'Jun 1–3, 2026',
    status:'⏳ UPCOMING',
    color:'#ef4444',
    icon:'🔴',
    iconBg:'rgba(239,68,68,0.2)',
    goals:[
      'Water + electrolytes only — same protocol as April fast',
      'Body leaner at ~207 lbs = faster ketosis, deeper autophagy',
      'Natural deload between phases — no training disruption',
      'Joint inflammation reset before functional loading begins in Phase 2',
      'Refeed Jun 4–7, resume full training June 8',
    ]
  },
  {
    title:'Phase 2: Functional strength cut',
    dates:'Jun 8 – Jul 19, 2026',
    status:'⏳ UPCOMING',
    color:'#22c55e',
    icon:'🏋️',
    iconBg:'rgba(34,197,94,0.2)',
    goals:[
      'Target: 207 → 200 lbs / 12–13% body fat',
      'Mon: Max effort lower (trap bar DL + barbell squat to heavy triple)',
      'Tue: Max effort upper (bench + weighted chin-ups)',
      'Thu: Dynamic lower (box jumps, speed deadlifts, farmer carries)',
      'Fri: Dynamic upper (speed bench, explosive work)',
      'PM sessions continue daily — 15–20 min (same structure)',
      'Daily joint protocol continues — non-negotiable',
      'Bench target by Jul 19: 230×3 (est 245 1RM)',
      'Trap bar DL target: 375–380×1',
      'Squat target by Jul 19: 265×3 — building toward 275 by October',
      '5K: approaching 8:30/mile by end of phase',
      'Outdoor running 3×/week + Muay Thai conditioning continues',
    ]
  },
  {
    title:'Phase 3: Maintenance + strength build',
    dates:'Aug – Nov 2026',
    status:'⏳ FUTURE',
    color:'#a855f7',
    icon:'🎯',
    iconBg:'rgba(168,85,247,0.2)',
    goals:[
      'Hold 200 lbs permanently — recalibrate true maintenance calories (likely 2,400–2,600)',
      'Same functional split — full volume, progressive overload',
      'Bench: 225×3 by October → building toward 225×6–8 in winter',
      'Squat: 275 lbs by October — original goal met',
      'Trap bar DL: 385–395 lbs',
      '5K: sub-25:00 by September/October',
      '3-day fast in early September — between training blocks',
      'Outdoor running through Thanksgiving',
      'PM sessions continue daily — Muay Thai rounds increasing as fitness builds',
      'Daily joint protocol — permanent habit',
    ]
  },
  {
    title:'Winter: Pure strength phase',
    dates:'Dec 2026 – Mar 2027',
    status:'⏳ FUTURE',
    color:'#f59e0b',
    icon:'❄️',
    iconBg:'rgba(245,158,11,0.2)',
    goals:[
      '5-day fast Dec 1–5 — best autophagy response of the year',
      '5 days/week lifting: Mon squat, Tue bench, Wed DL, Thu OHP, Fri volume',
      'Framework: 5/3/1 with training max set at 205 bench / 255 squat / 375 DL',
      'Bench goal: 225×6–8 by March 2027 — the real bench target',
      'Squat goal: maintain 275+ through winter, build to 285',
      'Trap bar DL goal: 390–400 lbs',
      'Treadmill 2×/week — maintain 5K base over winter',
      'PM sessions continue: push-ups, pull-ups, abs — bag work 1×/week',
      '3-day fast in March to bridge into spring season',
      'Joint protocol daily — critical in cold Ohio winters for arthritis',
    ]
  },
  {
    title:'Phase 5–7: Peak strength + year 2',
    dates:'Apr 2027 – Nov 2027',
    status:'⏳ FUTURE',
    color:'#14b8a6',
    icon:'🏆',
    iconBg:'rgba(20,184,166,0.2)',
    goals:[
      'All original strength goals met or exceeded by summer 2027',
      'Bench: 225×6–8 locked in — build toward 235×6',
      'Squat: 275–285 lbs maintained year-round',
      'Trap bar DL: 390–410 lbs',
      '5K: sub-25:00 locked in — target sub-23:00 by fall 2027',
      'Annual fasting rhythm: 5-day June, 3-day Sep, 5-day Dec',
      '200 lbs held for 12+ consecutive months — never cutting again',
      'PM sessions evolved: full Muay Thai rounds as fitness base is solid',
      'Strongest, leanest, most athletic state of your adult life',
    ]
  },
];

// ============================================================
// METRICS
// ============================================================
const METRICS = [
  {
    title:'Body composition',
    items:[
      {label:'Body weight',current:200,target:216,currentLabel:'216 lbs',targetLabel:'Goal: 200 lbs',color:'blue',note:'Currently 216 lbs — target 200 lbs by Jul 19, 2026. Never cutting again after this.'},
      {label:'Body fat %',current:81,target:100,currentLabel:'~19%',targetLabel:'Goal: 12–15%',color:'purple',note:'Estimated 19% now — target 12–15% at 200 lbs'},
    ]
  },
  {
    title:'Strength targets',
    items:[
      {label:'Bench — Phase 1 goal',current:205,target:225,currentLabel:'205×3',targetLabel:'225×1 by May',color:'blue',note:'Mar 23 PR: 205×3. May 25 goal: 225×1'},
      {label:'Bench — real goal',current:205,target:225,currentLabel:'205×3',targetLabel:'225×6–8 by Mar 2027',color:'green',note:'Winter 5/3/1 phase delivers 225 for reps — the true goal'},
      {label:'Squat (barbell)',current:245,target:275,currentLabel:'~245 lbs',targetLabel:'275 by Oct 2026',color:'amber',note:'2023 peak was 295×8. Rebuilt from 155 in March — 245 by end of May, 275 by October.'},
      {label:'Deadlift (trap bar)',current:0,target:375,currentLabel:'Starting Jun 8',targetLabel:'375 by Jul 19',color:'red',note:'Trap bar DL starts Phase 2. RDL at 200 lbs confirms posterior chain is ready.'},
    ]
  },
  {
    title:'Running',
    items:[
      {label:'5K time',current:155,target:186,currentLabel:'~31 min',targetLabel:'Goal: sub-25 min',color:'purple',note:'Apr: 31 min → May: ~27 min → Sep/Oct: sub-25 min target'},
      {label:'Weekly runs',current:2,target:3,currentLabel:'2–3/wk',targetLabel:'Goal: 3×/week',color:'teal',note:'3 runs/week through outdoor season (Apr–Nov). 2×/week treadmill in winter.'},
    ]
  },
  {
    title:'Daily habits',
    items:[
      {label:'Joint protocol',current:70,target:100,currentLabel:'Building',targetLabel:'Every training day',color:'green',note:'8 min daily: knee CARs, hip 90/90, thoracic ext, neck CARs, ankle mob. Treats arthritis proactively.'},
      {label:'PM sessions',current:60,target:100,currentLabel:'Building',targetLabel:'5 days/week',color:'teal',note:'15–20 min: jump rope, push-ups, pull-ups, abs, bag work. Varies by morning session type.'},
      {label:'Annual fasts',current:1,target:3,currentLabel:'1 complete',targetLabel:'Goal: 3/year',color:'red',note:'Apr 5-day complete. Jun 3-day + Dec 5-day upcoming. Annual rhythm: 5-day Jun, 3-day Sep, 5-day Dec.'},
    ]
  },
  {
    title:'Health markers',
    items:[
      {label:'Joint inflammation',current:65,target:100,currentLabel:'Improving',targetLabel:'Goal: minimal',color:'green',note:'Fasting cycles + daily joint protocol + fish oil (3–4g EPA/DHA) + vitamin D3 (2,000–4,000 IU). Knees, lower back, neck all targeted.'},
    ]
  }
];
