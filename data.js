// ============================================================
// JOE'S TRAINING DATA — April + May 2026
// ============================================================

const DAYS = {

// ============================================================
// APRIL
// ============================================================
april: [

// --- WEEK 3 OF PHASE 1 ---
{key:'2026-04-01',date:'Apr 1',dateNum:'1',dow:'Wednesday',tag:'run',tagLabel:'Run',
 week:'Week 3 of Phase 1',weekLabel:'Phase 1 · Cut @ 1,900 cal',summary:'Tempo 5K + mobility',
 detail:{
   left:[{h:'Tempo 5K Run',rows:[
     {n:'Warm-up walk',s:'5 min easy'},
     {n:'5K run',s:'Target 9:30–10:00/mile'},
     {n:'Cool-down walk',s:'5 min'},
   ]},{h:'Mobility (10 min)',rows:[
     {n:'Hip flexor stretch',s:'60s each side'},
     {n:'Thoracic rotation',s:'10 reps each'},
     {n:'Ankle circles',s:'20 each'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
     {n:'Carbs',v:'155g'},
     {n:'Fat',v:'50g'},
     {n:'Pre-run',v:'Banana + ½ scoop whey'},
     {n:'Post-run',v:'3 eggs + toast + berries'},
   ]}],
   note:'<strong>Pace note:</strong> 9:30–10:00/mile keeps cortisol in check on a cut. You\'re building the aerobic base, not proving fitness today. Current 5K: ~31 min. By end of April: ~29:30.'
 }
},
{key:'2026-04-02',date:'Apr 2',dateNum:'2',dow:'Thursday',tag:'lift',tagLabel:'Lift',
 week:'Week 3 of Phase 1',weekLabel:'Phase 1 · Cut @ 1,900 cal',summary:'Volume bench + abs',
 detail:{
   left:[{h:'Volume Bench + Abs',rows:[
     {n:'Band pull-aparts',s:'3×15 warm-up'},
     {n:'Barbell bench press',s:'4×8 @ 165 lbs'},
     {n:'Incline DB press',s:'3×10 @ 65 lbs'},
     {n:'Cable fly / pec deck',s:'3×12'},
     {n:'Plank',s:'3×45s'},
     {n:'Hanging knee raise',s:'3×12'},
     {n:'Cable crunch',s:'3×15'},
   ]},{h:'Warm-up mobility',rows:[
     {n:'Shoulder circles',s:'20 each direction'},
     {n:'Cat-cow',s:'10 reps'},
     {n:'Wall slides',s:'10 reps'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Pre-workout 7:15am',v:'Banana + ½ scoop whey'},
     {n:'Post-workout',v:'3 eggs + toast + berries (500 cal)'},
     {n:'Lunch',v:'7oz chicken + rice + veg (550 cal)'},
     {n:'Snack',v:'Greek yogurt + apple + almonds (300 cal)'},
     {n:'Dinner',v:'6oz salmon + sweet potato + salad (400 cal)'},
   ]}],
   note:'<strong>Bench note:</strong> Volume day — stay at 165 lbs, hit all 4×8. Do NOT go heavier. Thursday is for volume, pump, and reinforcing the groove. Rest 90s between sets max.'
 }
},
{key:'2026-04-03',date:'Apr 3',dateNum:'3',dow:'Friday',tag:'bag',tagLabel:'Lift+Bag',
 extraTags:[{cls:'pink',label:'Bag'}],
 week:'Week 3 of Phase 1',weekLabel:'Phase 1 · Cut @ 1,900 cal',summary:'Volume arms + legs + bag work',
 detail:{
   left:[{h:'Volume Arms + Light Legs',rows:[
     {n:'Barbell curl',s:'4×8 @ 85 lbs'},
     {n:'Hammer curl',s:'3×10 each'},
     {n:'Tricep pushdown',s:'4×12 @ 55 lbs'},
     {n:'Skull crusher',s:'3×10 @ 55 lbs'},
     {n:'Goblet squat',s:'3×12 @ 50 lbs (form focus)'},
     {n:'Romanian deadlift',s:'3×10 @ 165 lbs'},
     {n:'Leg press',s:'3×15 light'},
   ]},{h:'Heavy Bag — 30 min',rows:[
     {n:'Shadow boxing warm-up',s:'2 rounds × 3 min'},
     {n:'Combo work (1-2-body-kick)',s:'3 rounds × 3 min'},
     {n:'Power kicks',s:'2 rounds × 3 min'},
     {n:'Burnout round',s:'1 × 2 min'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Mobility cool-down',rows:[
     {n:'Hip flexor kneeling stretch',s:'90s each'},
     {n:'Pigeon pose',s:'60s each'},
     {n:'Shoulder cross-body',s:'30s each'},
   ]}],
   note:'<strong>Squat form:</strong> Goblet squat only — feet shoulder-width, toes 15–20° out, sit INTO the hips. Light and correct beats heavy and broken every time this month.'
 }
},
{key:'2026-04-04',date:'Apr 4',dateNum:'4',dow:'Saturday',tag:'run',tagLabel:'Run',
 week:'Week 3 of Phase 1',weekLabel:'Phase 1 · Cut @ 1,900 cal',summary:'Easy 5K — recovery pace',
 detail:{
   left:[{h:'Easy 5K',rows:[
     {n:'Warm-up walk',s:'5 min'},
     {n:'Easy 5K',s:'10:30–11:00/mile — genuinely easy'},
     {n:'Cool-down walk + stretch',s:'10 min'},
   ]},{h:'Post-run mobility',rows:[
     {n:'Standing quad stretch',s:'45s each'},
     {n:'Calf stretch on step',s:'45s each'},
     {n:'Lateral band walk',s:'2×15 each (optional)'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
     {n:'Pre-run',v:'Light — half banana or nothing'},
     {n:'Focus',v:'Hydration — 100+ oz water today'},
   ]}],
   note:'<strong>Saturday run purpose:</strong> Active recovery. This run flushes lactate, keeps the aerobic engine warm, and preps your gut for the fast starting Monday. Keep it conversational pace.'
 }
},
{key:'2026-04-05',date:'Apr 5',dateNum:'5',dow:'Sunday',tag:'rest',tagLabel:'Rest',
 week:'Week 3 of Phase 1',weekLabel:'⚠️ Fast begins tonight at 6pm',summary:'Full rest — fast begins at 6pm',
 detail:{
   left:[{h:'Today\'s Protocol',rows:[
     {n:'Training',s:'Complete rest — no gym, no run'},
     {n:'Activity',s:'Light walk 20–30 min optional'},
     {n:'Final meal',s:'6:00 PM — high fat, low carb'},
     {n:'Last meal',s:'Salmon + avocado + salad, NO rice'},
     {n:'After 6pm',s:'Water only — fast has begun'},
   ]},{h:'Fast Prep Checklist',rows:[
     {n:'Pink Himalayan salt (1 tsp/day)',s:'Have ready'},
     {n:'Nu-Salt / potassium sub',s:'Have ready'},
     {n:'Magnesium glycinate 400mg',s:'Have ready'},
     {n:'Black coffee',s:'Yes — 1–2 cups/day max'},
     {n:'Green tea',s:'Unlimited'},
   ]}],
   right:[{h:'Final day nutrition (eat 6am–6pm only)',rows:[
     {n:'Calories',v:'1,900 (normal)'},
     {n:'Carbs TODAY',v:'REDUCE to 80–100g'},
     {n:'Fat TODAY',v:'INCREASE to 80g'},
     {n:'Protein',v:'210g (keep high)'},
     {n:'Why low carb',v:'Deplete glycogen to accelerate ketosis'},
   ]}],
   note:'<strong>Mental prep:</strong> Days 1–2 are the hardest. Hunger peaks around hour 18–24, then drops. By day 3 you will feel sharp and clear. You\'ve done hard things before. This is 5 days.'
 }
},

// --- FAST DAYS ---
{key:'2026-04-06',date:'Apr 6',dateNum:'6',dow:'Monday',tag:'fast',tagLabel:'Fast D1',
 week:'5-Day Fast',weekLabel:'🔴 Zero calories · Electrolytes critical',summary:'Fast day 1 — glycogen depletion',
 detail:{
   left:[{h:'Daily Fast Protocol',rows:[
     {n:'On waking',s:'16oz water + pinch of salt'},
     {n:'Electrolytes AM',s:'½ tsp pink salt in 16oz water'},
     {n:'Electrolytes PM',s:'¼ tsp Nu-Salt + 400mg magnesium'},
     {n:'Coffee',s:'1 cup black, before noon only'},
     {n:'Green tea',s:'Unlimited afternoon'},
     {n:'Movement',s:'30–45 min walk — easy pace'},
   ]},{h:'What to Expect',rows:[
     {n:'Hunger',s:'High — peaks around hour 18–24'},
     {n:'Energy',s:'Low afternoon — completely normal'},
     {n:'Headache',s:'Possible — electrolytes fix this'},
     {n:'Mood',s:'Slightly irritable — normal'},
   ]}],
   right:[{h:'Electrolyte Targets',rows:[
     {n:'Sodium',v:'2,500mg (1 tsp pink salt total)'},
     {n:'Potassium',v:'1,500mg (½ tsp Nu-Salt)'},
     {n:'Magnesium',v:'400–600mg supplement'},
     {n:'Water',v:'100–120 oz minimum'},
   ]},{h:'Strictly Prohibited',rows:[
     {n:'Calories',v:'Zero — strict'},
     {n:'Gum / mints',v:'No — insulin response'},
     {n:'Broth',v:'No — save for refeed day'},
     {n:'Creatine / protein',v:'Skip for now'},
   ]}],
   note:'<strong>Day 1 strategy:</strong> Stay busy in the morning. Hunger is habitual before noon. After your walk, do something engaging — ministry work, family time. The afternoon slump (2–4pm) is when glycogen crashes. Electrolytes and green tea get you through it.'
 }
},
{key:'2026-04-07',date:'Apr 7',dateNum:'7',dow:'Tuesday',tag:'fast',tagLabel:'Fast D2',
 week:'5-Day Fast',weekLabel:'🔴 Ketosis beginning ~hour 36–48',summary:'Fast day 2 — entering ketosis, hunger drops',
 detail:{
   left:[{h:'Protocol',rows:[
     {n:'Morning water + salt',s:'On waking, immediately'},
     {n:'Electrolytes AM',s:'½ tsp pink salt in water'},
     {n:'Electrolytes PM',s:'¼ tsp Nu-Salt + 400mg mag'},
     {n:'Coffee',s:'1 cup black max'},
     {n:'Walk',s:'45 min — slightly longer today'},
     {n:'Green tea',s:'2–3 cups afternoon'},
   ]},{h:'What to Expect',rows:[
     {n:'Hunger',s:'Dropping — ketosis beginning'},
     {n:'Energy',s:'Variable — morning may feel better'},
     {n:'Mental clarity',s:'Starting to improve'},
     {n:'Breath',s:'May notice ketone breath — normal'},
   ]}],
   right:[{h:'Electrolyte Targets',rows:[
     {n:'Sodium',v:'2,500mg'},
     {n:'Potassium',v:'1,500mg'},
     {n:'Magnesium',v:'400mg evening'},
     {n:'Water',v:'100+ oz'},
   ]},{h:'Autophagy Status',rows:[
     {n:'Hour 24',v:'Autophagy activating'},
     {n:'Hour 36–48',v:'Ketosis — fat burning dominant'},
     {n:'Tonight',v:'Peak autophagy activation begins'},
   ]}],
   note:'<strong>Day 2 is the pivot:</strong> Most people feel worst late day 1 into day 2 morning. By afternoon day 2, ketones rise and hunger quiets. Once ketones flow (~hour 36), the mental fog lifts noticeably.'
 }
},
{key:'2026-04-08',date:'Apr 8',dateNum:'8',dow:'Wednesday',tag:'fast',tagLabel:'Fast D3',
 week:'5-Day Fast',weekLabel:'🔴 Peak autophagy begins — stay the course',summary:'Fast day 3 — peak autophagy, mental clarity high',
 detail:{
   left:[{h:'Protocol',rows:[
     {n:'Morning water + salt',s:'On waking'},
     {n:'Electrolytes AM + PM',s:'Same as days 1–2'},
     {n:'Coffee',s:'1 cup max'},
     {n:'Walk',s:'45–60 min'},
     {n:'Sauna (if available)',s:'20 min, moderate heat'},
     {n:'Cold shower',s:'Morning — 2–3 min cold'},
     {n:'Green tea',s:'Unlimited'},
   ]},{h:'What to Expect',rows:[
     {n:'Hunger',s:'Significantly reduced'},
     {n:'Energy',s:'Good to excellent'},
     {n:'Mental clarity',s:'High — use it'},
     {n:'Mood',s:'Improved — ketones are neuroprotective'},
   ]}],
   right:[{h:'Autophagy Peak',rows:[
     {n:'Hour 48–72',v:'Deep autophagy active'},
     {n:'Damaged proteins',v:'Being cleared'},
     {n:'Mitochondria',v:'Mitophagy underway'},
     {n:'Inflammation',v:'Markers dropping significantly'},
     {n:'Joints',v:'Cytokines reducing — knees + back benefiting'},
   ]}],
   note:'<strong>Day 3 is the reward:</strong> If you\'ve hit electrolytes consistently, today should feel good. Use the mental clarity for something meaningful — prayer, strategy, reading. Sauna on day 3 amplifies autophagy. Your joints are doing their best healing right now.'
 }
},
{key:'2026-04-09',date:'Apr 9',dateNum:'9',dow:'Thursday',tag:'fast',tagLabel:'Fast D4',
 week:'5-Day Fast',weekLabel:'🔴 Deepest cellular repair of the fast',summary:'Fast day 4 — deep autophagy, stem cell signals',
 detail:{
   left:[{h:'Protocol',rows:[
     {n:'Morning routine',s:'Water + salt immediately'},
     {n:'Electrolytes AM + PM',s:'Critical — don\'t skip'},
     {n:'Walk',s:'45–60 min easy'},
     {n:'Sauna',s:'20–25 min if available'},
     {n:'Cold shower',s:'Morning'},
     {n:'Green tea',s:'Throughout day'},
     {n:'Rest',s:'Prioritize sleep — 8+ hrs tonight'},
   ]},{h:'Physical Signs',rows:[
     {n:'Hunger',s:'Minimal to none'},
     {n:'Energy',s:'Moderate — don\'t overdo activity'},
     {n:'Sleep quality',s:'Often excellent day 3–4'},
     {n:'Muscle',s:'Preserved — autophagy targets damaged tissue first'},
   ]}],
   right:[{h:'Cellular Activity',rows:[
     {n:'Hour 72–96',v:'Maximum autophagy depth'},
     {n:'IGF-1',v:'Significantly reduced (anti-cancer benefit)'},
     {n:'HGH',v:'Elevated 300–500% (muscle preservation)'},
     {n:'Stem cells',v:'Beginning activation'},
     {n:'mTOR',v:'Suppressed — cellular cleanup mode'},
   ]}],
   note:'<strong>Hour 72–96</strong> is where the cellular regeneration literature focuses its biggest benefits. Your joints benefit specifically from the inflammatory reset happening now. Tomorrow at 6pm you break the fast. You\'ve already done the hard part.'
 }
},
{key:'2026-04-10',date:'Apr 10',dateNum:'10',dow:'Friday',tag:'fast',tagLabel:'Fast D5',
 week:'5-Day Fast',weekLabel:'🔴 Last day — break at 6pm with bone broth only',summary:'Final fast day — break at 6pm',
 detail:{
   left:[{h:'Final Day Protocol',rows:[
     {n:'Morning through 6pm',s:'Full fast continues'},
     {n:'Electrolytes all day',s:'Critical — don\'t ease up'},
     {n:'Walk',s:'30–45 min easy'},
     {n:'6:00 PM',s:'Break fast — 8oz bone broth'},
     {n:'6:30 PM',s:'Wait and assess stomach'},
     {n:'7:00–7:30 PM',s:'2 eggs + ½ avocado + cucumber'},
     {n:'Total tonight',s:'300–400 cal max'},
   ]},{h:'Break-Fast Order — Critical',rows:[
     {n:'Step 1',s:'Water + pinch salt — wait 15 min'},
     {n:'Step 2',s:'Bone broth 8oz — sip slowly'},
     {n:'Step 3',s:'Wait 30 min, assess stomach'},
     {n:'Step 4',s:'2 eggs + avocado + light veg only'},
     {n:'Step 5',s:'Stop. No more food tonight.'},
   ]}],
   right:[{h:'What NOT to Do',rows:[
     {n:'Don\'t',v:'Eat a full meal to celebrate'},
     {n:'Don\'t',v:'Have carbs tonight (rice/bread/potato)'},
     {n:'Don\'t',v:'Eat quickly — refeeding syndrome risk'},
     {n:'Don\'t',v:'Drink alcohol'},
     {n:'Don\'t',v:'Go above 400 cal tonight'},
   ]},{h:'Tomorrow Apr 11',rows:[
     {n:'Calories',v:'1,200–1,400 cal'},
     {n:'Meals',v:'Small, every 3–4 hours'},
     {n:'Priority',v:'Protein + healthy fats first'},
     {n:'Carbs',v:'Light — 80–100g max'},
   ]}],
   note:'<strong>Breaking the fast correctly is as important as the fast itself.</strong> Bone broth first — collagen and electrolytes repair the gut lining. Eggs and avocado second. Any nausea = stop, wait 30 min, try again smaller.'
 }
},

// --- REFEED ---
{key:'2026-04-11',date:'Apr 11',dateNum:'11',dow:'Saturday',tag:'refeed',tagLabel:'Refeed D1',
 week:'Refeed',weekLabel:'🟢 1,200 cal — gut restarting',summary:'Refeed day 1 — 1,200 cal, light movement',
 detail:{
   left:[{h:'Refeed Day 1 Meals',rows:[
     {n:'9:00 AM',s:'2 eggs + ½ avocado + spinach (350 cal)'},
     {n:'12:00 PM',s:'4oz chicken + salad + olive oil (350 cal)'},
     {n:'3:00 PM',s:'Greek yogurt plain + handful walnuts (250 cal)'},
     {n:'6:30 PM',s:'4oz salmon + roasted veg (300 cal)'},
     {n:'Total',s:'~1,250 cal / 120p / 60c / 55f'},
   ]},{h:'Movement',rows:[
     {n:'Training',s:'None — rest day'},
     {n:'Walk',s:'30 min easy only'},
     {n:'Stretching',s:'15 min full body mobility'},
   ]}],
   right:[{h:'How You Should Feel',rows:[
     {n:'Energy',v:'Variable — crash after first meal is normal'},
     {n:'Hunger',v:'May return strongly after first bite'},
     {n:'Digestion',v:'Slow — completely normal'},
     {n:'Weight',v:'Will spike 2–4 lbs immediately (glycogen)'},
     {n:'Mood',v:'Often elevated — serotonin rebound'},
   ]},{h:'Weight Context',rows:[
     {n:'Post-fast weight',v:'~210–211 lbs (mostly water)'},
     {n:'After refeed',v:'213–214 lbs (water + glycogen)'},
     {n:'True fat loss',v:'1–2 lbs actual fat from fast'},
     {n:'Don\'t panic',v:'Scale spike is glycogen — not fat'},
   ]}],
   note:'<strong>The refeed spike is not failure.</strong> Every gram of glycogen carries 3–4g of water. The scale jumps 2–4 lbs — this is expected and good. That glycogen is fuel for Monday\'s return to training.'
 }
},
{key:'2026-04-12',date:'Apr 12',dateNum:'12',dow:'Sunday',tag:'refeed',tagLabel:'Refeed D2',
 week:'Refeed',weekLabel:'🟢 1,600 cal — prep for Monday',summary:'Refeed day 2 — 1,600 cal, prep for training',
 detail:{
   left:[{h:'Refeed Day 2 Meals',rows:[
     {n:'8:00 AM',s:'3 eggs + 1 slice toast + berries (450 cal)'},
     {n:'12:00 PM',s:'5oz chicken + ½ cup rice + veg (500 cal)'},
     {n:'3:30 PM',s:'Greek yogurt + apple + almonds (300 cal)'},
     {n:'7:00 PM',s:'5oz salmon + small sweet potato + salad (400 cal)'},
     {n:'Total',s:'~1,650 cal / 175p / 130c / 50f'},
   ]},{h:'Movement',rows:[
     {n:'Training',s:'Rest — light activity only'},
     {n:'Walk',s:'45 min easy'},
     {n:'Mobility',s:'20 min — hips, shoulders, thoracic'},
     {n:'Foam roll',s:'Quads, hamstrings, lats — prep for Monday'},
   ]}],
   right:[{h:'Monday Prep Checklist',rows:[
     {n:'Gym bag',v:'Pack tonight'},
     {n:'Pre-workout meal',v:'Banana + ½ scoop whey ready'},
     {n:'Hydration',v:'120 oz water today'},
     {n:'Sleep',v:'Target 8 hrs tonight'},
   ]},{h:'Strength Expectation Monday',rows:[
     {n:'Bench approach',v:'185 lbs × 5 to feel it out'},
     {n:'Do NOT',v:'Attempt 205 lbs first session back'},
     {n:'Why',v:'CNS needs 3–5 days post-fast'},
     {n:'By Apr 20',v:'Back to 195–200 lbs'},
   ]}],
   note:'<strong>Manage expectations for Monday:</strong> A 5–10% temporary strength reduction is normal post-fast. Start conservative — 185×5 on bench, then 195×3, then decide. The strength comes back fast — within 7–10 days.'
 }
},

// --- WEEK 4 ---
{key:'2026-04-13',date:'Apr 13',dateNum:'13',dow:'Monday',tag:'lift',tagLabel:'Lift',
 week:'Week 4 — Strength Rebuild',weekLabel:'Phase 1 · Back to 1,900 cal',summary:'Heavy bench — first session post-fast',
 detail:{
   left:[{h:'Heavy Bench + Abs',rows:[
     {n:'Warm-up: 45×10, 95×8, 135×5, 165×3',s:''},
     {n:'Barbell bench — working sets',s:'3×5 @ 185 lbs'},
     {n:'DB bench',s:'3×8 @ 80 lbs'},
     {n:'Cable fly',s:'3×12'},
     {n:'Plank',s:'3×45s'},
     {n:'Hanging knee raise',s:'3×12'},
     {n:'Cable crunch',s:'3×15'},
   ]},{h:'Warm-up mobility',rows:[
     {n:'Shoulder CARs',s:'5 each direction'},
     {n:'Wall slides',s:'10 reps'},
     {n:'Band pull-aparts',s:'3×15'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
     {n:'Carbs',v:'155g'},
     {n:'Fat',v:'50g'},
   ]},{h:'Strength Context',rows:[
     {n:'Last bench PR',v:'205×3 (Mar 23)'},
     {n:'Today target',v:'185×5 — do NOT chase 205'},
     {n:'Why conservative',v:'CNS needs 3–5 days to re-engage'},
     {n:'By Apr 20',v:'Back to 195–200 lbs'},
   ]}],
   note:'<strong>This is NOT the week for PRs.</strong> 185×5 at full control is worth more right now than grinding 205×1. Your tendons need to re-adapt to load. Keep form pristine — full pause at chest, controlled eccentric. Trust the process.'
 }
},
{key:'2026-04-14',date:'Apr 14',dateNum:'14',dow:'Tuesday',tag:'lift',tagLabel:'Lift',
 week:'Week 4 — Strength Rebuild',weekLabel:'Phase 1 · Back to 1,900 cal',summary:'Arms / back / light legs',
 detail:{
   left:[{h:'Arms + Back + Legs',rows:[
     {n:'Barbell curl',s:'3×8 @ 80 lbs'},
     {n:'Incline DB curl',s:'3×10 @ 30 lbs'},
     {n:'Lat pulldown',s:'4×8 @ 130 lbs'},
     {n:'Seated cable row',s:'3×10 @ 120 lbs'},
     {n:'Goblet squat',s:'3×12 @ 50 lbs — form only'},
     {n:'Romanian deadlift',s:'3×10 @ 155 lbs'},
     {n:'Leg curl',s:'3×12'},
   ]},{h:'Mobility',rows:[
     {n:'Hip 90/90 stretch',s:'60s each side'},
     {n:'Couch stretch (hip flexor)',s:'60s each'},
     {n:'Cat-cow',s:'10 reps'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Post-Fast Notes',rows:[
     {n:'Digestion',v:'Should normalize fully today'},
     {n:'Energy',v:'80–90% back — building'},
     {n:'Hydration',v:'100+ oz water still critical'},
   ]}],
   note:'<strong>Lower back note:</strong> RDLs at 155 — intentional. Hip hinge pattern first, load second. Neutral spine throughout. If you feel lumbar rounding, drop to 135. Your lower back history means no compromised reps.'
 }
},
{key:'2026-04-15',date:'Apr 15',dateNum:'15',dow:'Wednesday',tag:'run',tagLabel:'Run',
 week:'Week 4 — Strength Rebuild',weekLabel:'Phase 1 · First run post-fast',summary:'Easy 5K — first run post-fast',
 detail:{
   left:[{h:'Easy 5K',rows:[
     {n:'Warm-up walk',s:'5 min'},
     {n:'Run',s:'10:30–11:00/mile — genuinely easy'},
     {n:'Distance',s:'3.0–3.1 miles'},
     {n:'Cool-down + stretch',s:'10 min'},
   ]},{h:'Signs to Watch',rows:[
     {n:'Dizziness',s:'Stop immediately — eat something'},
     {n:'Unusual fatigue',s:'Walk it — normal this week'},
     {n:'Pace',s:'Ignore it — feel-based only'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Pre-run',v:'Banana 30 min before'},
     {n:'Post-run',v:'Protein shake + fruit immediately'},
   ]}],
   note:'<strong>First run back:</strong> Aerobic fitness is intact after 5 days rest. But glycogen may still be restocking. Take it easy. If you feel great at mile 2, resist the urge to push. Today is data collection.'
 }
},
{key:'2026-04-16',date:'Apr 16',dateNum:'16',dow:'Thursday',tag:'lift',tagLabel:'Lift',
 week:'Week 4 — Strength Rebuild',weekLabel:'Phase 1 · Back to 1,900 cal',summary:'Volume bench + abs',
 detail:{
   left:[{h:'Volume Bench + Abs',rows:[
     {n:'Band pull-aparts',s:'3×15 warm-up'},
     {n:'Barbell bench',s:'4×8 @ 165 lbs'},
     {n:'Incline DB press',s:'3×10 @ 65 lbs'},
     {n:'Pec deck / cable fly',s:'3×12'},
     {n:'Plank',s:'3×45s'},
     {n:'Hanging knee raise',s:'3×15'},
     {n:'Cable crunch',s:'3×15'},
     {n:'Side plank',s:'2×30s each'},
   ]},{h:'Mobility',rows:[
     {n:'Neck rolls (gentle)',s:'10 each direction'},
     {n:'Thoracic extension on foam roller',s:'90s'},
     {n:'Wall slides',s:'10 reps'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Energy Check',rows:[
     {n:'Should feel',v:'80–90% normal by today'},
     {n:'Still sluggish?',v:'Add 50–100 cal from carbs today only'},
     {n:'Bench at 165',v:'Should feel normal and controlled'},
   ]}],
   note:'<strong>Neck care:</strong> For volume bench, keep your neck neutral — don\'t crank it back into the bench. Feet flat on floor, glutes slightly engaged, scapula packed. Thoracic extension work reduces neck compensation over time.'
 }
},
{key:'2026-04-17',date:'Apr 17',dateNum:'17',dow:'Friday',tag:'bag',tagLabel:'Lift+Bag',
 extraTags:[{cls:'pink',label:'Bag'}],
 week:'Week 4 — Strength Rebuild',weekLabel:'Phase 1 · Back to 1,900 cal',summary:'Volume arms + legs + 30 min bag',
 detail:{
   left:[{h:'Arms + Legs',rows:[
     {n:'Barbell curl',s:'4×8 @ 85 lbs'},
     {n:'Tricep pushdown',s:'4×12 @ 55 lbs'},
     {n:'Skull crusher',s:'3×10 @ 55 lbs'},
     {n:'Goblet squat',s:'3×12 @ 55 lbs (+5 from Wk 3)'},
     {n:'Romanian deadlift',s:'3×10 @ 165 lbs'},
     {n:'Walking lunges',s:'3×10 each (bodyweight)'},
     {n:'Leg curl',s:'3×12'},
   ]},{h:'Bag Work — 30 min',rows:[
     {n:'Shadow boxing',s:'2 × 3 min'},
     {n:'Jab-cross-hook combo',s:'3 × 3 min'},
     {n:'Body shots + round kicks',s:'2 × 3 min'},
     {n:'Burnout',s:'1 × 2 min'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Knee Protocol',rows:[
     {n:'Before bag kicks',v:'10 hip circles each direction'},
     {n:'Before bag kicks',v:'10 slow front kicks (warm up)'},
     {n:'If knee swells',v:'Switch to punching only'},
     {n:'Kick mechanics',v:'Hip rotation drives kick — not the leg'},
   ]}],
   note:'<strong>Hip rotation = power AND joint protection.</strong> The round kick is a full-body rotation from planted foot through hip, torso, shoulder. A stiff hip-kick loads the knee. A rotated kick deloads it. Practice slow-motion kicks focusing on the hip chamber.'
 }
},
{key:'2026-04-18',date:'Apr 18',dateNum:'18',dow:'Saturday',tag:'run',tagLabel:'Run',
 week:'Week 4 — Strength Rebuild',weekLabel:'Phase 1 · First tempo post-fast',summary:'Tempo 5K — first real push post-fast',
 detail:{
   left:[{h:'Tempo 5K',rows:[
     {n:'Warm-up walk/jog',s:'5–8 min easy'},
     {n:'5K tempo',s:'9:00–9:30/mile target'},
     {n:'Cool-down walk',s:'5 min'},
     {n:'Full stretch',s:'10–15 min'},
   ]},{h:'Mobility After',rows:[
     {n:'Hip flexor stretch',s:'90s each'},
     {n:'Pigeon pose',s:'60s each'},
     {n:'Standing hamstring',s:'45s each'},
     {n:'Calf / Achilles',s:'45s each'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Pre-run',v:'Banana + ½ scoop whey 30 min before'},
   ]},{h:'Pace Context',rows:[
     {n:'Current ability',v:'~31 min (10:15 pace)'},
     {n:'Today target',v:'~29:00 (9:20 pace)'},
     {n:'End of April',v:'~28:30 realistic'},
     {n:'June target',v:'~27:30 (8:50 pace)'},
   ]}],
   note:'<strong>First real tempo effort post-fast.</strong> Go by feel — 9:00–9:30/mile is a target not a mandate. If you feel good at mile 2, hold that effort through the finish. Time it and log it — this is your April baseline.'
 }
},
{key:'2026-04-19',date:'Apr 19',dateNum:'19',dow:'Sunday',tag:'rest',tagLabel:'Rest',
 week:'Week 4 — Strength Rebuild',weekLabel:'Phase 1 · Weekly review',summary:'Full rest — weekly review',
 detail:{
   left:[{h:'Recovery Day',rows:[
     {n:'Training',s:'Complete rest'},
     {n:'Walk',s:'20–30 min easy if desired'},
     {n:'Foam rolling',s:'10 min — quads and lats'},
     {n:'Sleep',s:'8+ hours — highest priority'},
   ]},{h:'Week 4 Review',rows:[
     {n:'Lifting sessions',s:'4 of 4 ✓'},
     {n:'Runs completed',s:'2 of 3 target'},
     {n:'Fast completed',s:'5 days ✓'},
     {n:'Back to 1,900 cal',s:'Mon–Sun ✓'},
   ]}],
   right:[{h:'Body Check',rows:[
     {n:'Weigh in',v:'Log it — expected 212–214 lbs'},
     {n:'Energy',v:'Should feel close to 100%'},
     {n:'Strength',v:'80–90% back — fully restored by Wk 5'},
   ]},{h:'Week Ahead',rows:[
     {n:'Monday',v:'Heavy bench — attempt 195 lbs'},
     {n:'Goal',v:'Return to pre-fast strength levels'},
     {n:'Running',v:'Hit 3 runs this week'},
   ]}],
   note:'<strong>Week 4 complete.</strong> You navigated the hardest week of the entire program — a 5-day fast mid-phase. If you completed the fast and got back to training, you\'ve done something most people never attempt. The cellular reset is done. Now build back to new PRs.'
 }
},

// --- WEEK 5 ---
{key:'2026-04-20',date:'Apr 20',dateNum:'20',dow:'Monday',tag:'lift',tagLabel:'Lift',
 week:'Week 5 — Strength Return',weekLabel:'Phase 1 · Target bench: 195–200',summary:'Heavy bench — back to working weight',
 detail:{
   left:[{h:'Heavy Bench + Abs',rows:[
     {n:'Warm-up: 45×10, 95×8, 135×5, 165×3',s:''},
     {n:'Working sets',s:'3×4 @ 195 lbs'},
     {n:'Backoff set',s:'1×8 @ 175 lbs'},
     {n:'DB bench',s:'3×8 @ 85 lbs'},
     {n:'Cable fly',s:'3×12'},
     {n:'Plank',s:'3×50s'},
     {n:'Hanging knee raise',s:'3×15'},
     {n:'Ab wheel or cable crunch',s:'3×12'},
   ]},{h:'Mobility',rows:[
     {n:'Pec minor stretch',s:'45s each'},
     {n:'Band pull-apart',s:'3×15 pre-lift'},
     {n:'Neck retraction / chin tucks',s:'2×10'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Strength Rebuild Tracker',rows:[
     {n:'Week 4 (Apr 13)',v:'185×5 — post-fast'},
     {n:'Week 5 today',v:'195×4 — returning'},
     {n:'Week 6 target',v:'200×3 → 205×2'},
     {n:'End of May',v:'225×1 (Phase 1 goal)'},
   ]}],
   note:'<strong>195×4 is a key milestone.</strong> If it moves well and bar speed is good, your strength is back. A fast 195 is better data than a grind at 205. Bar speed is the signal, not the number on the bar.'
 }
},
{key:'2026-04-21',date:'Apr 21',dateNum:'21',dow:'Tuesday',tag:'lift',tagLabel:'Lift',
 week:'Week 5 — Strength Return',weekLabel:'Phase 1 · Progressive overload',summary:'Arms / back / legs — progressive overload',
 detail:{
   left:[{h:'Arms + Back + Legs',rows:[
     {n:'Barbell curl',s:'4×8 @ 90 lbs'},
     {n:'Incline DB curl',s:'3×10 @ 32.5 lbs'},
     {n:'Lat pulldown',s:'4×8 @ 140 lbs'},
     {n:'Seated cable row',s:'3×10 @ 130 lbs'},
     {n:'Goblet squat',s:'4×10 @ 60 lbs'},
     {n:'Romanian deadlift',s:'4×8 @ 175 lbs'},
     {n:'Leg curl',s:'3×12'},
   ]},{h:'Mobility',rows:[
     {n:'World\'s greatest stretch',s:'5 each side'},
     {n:'Hip 90/90',s:'60s each'},
     {n:'Ankle dorsiflexion',s:'10 each'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Progression Notes',rows:[
     {n:'Curl: 85→90',v:'+5 lbs — earned'},
     {n:'RDL: 165→175',v:'+10 — feel the hamstring stretch'},
     {n:'Pulldown: 130→140',v:'+10 — maintain form'},
     {n:'Goblet: 55→60',v:'+5 — track knee alignment'},
   ]}],
   note:'<strong>Lower body is your weakest link right now</strong> — not a criticism, just fact based on training history. Goblet squat at 60 lbs may feel light. That\'s correct. You\'re building the pattern before the load. By June, you\'ll be doing trap bar deadlifts with serious weight.'
 }
},
{key:'2026-04-22',date:'Apr 22',dateNum:'22',dow:'Wednesday',tag:'run',tagLabel:'Run',
 week:'Week 5 — Strength Return',weekLabel:'Phase 1 · Easy run',summary:'Easy 5K — conversational pace',
 detail:{
   left:[{h:'Easy 5K',rows:[
     {n:'Warm-up walk',s:'5 min'},
     {n:'Run',s:'10:00–10:30/mile — conversational'},
     {n:'Distance',s:'3.1 miles'},
     {n:'Cool-down + stretch',s:'10 min'},
   ]},{h:'Mobility',rows:[
     {n:'IT band stretch',s:'45s each'},
     {n:'Hip circles',s:'10 each direction'},
     {n:'Standing quad stretch',s:'45s each'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'5K Progression',rows:[
     {n:'Week 4 tempo',v:'~29:00 (9:20 pace)'},
     {n:'Today easy',v:'~31 min (10:00 pace)'},
     {n:'May target',v:'Easy run at 9:45 pace'},
     {n:'Sep/Oct target',v:'Sub-25 min (8:00 pace)'},
   ]}],
   note:'The aerobic adaptation happens at easy paces, not by pushing every run. Two easy runs + one hard run per week is the classic model. Ohio April weather: dress in layers you can tie around your waist.'
 }
},
{key:'2026-04-23',date:'Apr 23',dateNum:'23',dow:'Thursday',tag:'lift',tagLabel:'Lift',
 week:'Week 5 — Strength Return',weekLabel:'Phase 1 · Volume bench',summary:'Volume bench + abs (+5 lbs from last week)',
 detail:{
   left:[{h:'Volume Bench + Abs',rows:[
     {n:'Band pull-aparts',s:'3×15 warm-up'},
     {n:'Barbell bench',s:'4×8 @ 170 lbs (+5 from Wk 4)'},
     {n:'Incline DB press',s:'3×10 @ 67.5 lbs'},
     {n:'Pec deck',s:'3×12'},
     {n:'Plank',s:'3×50s'},
     {n:'Hanging leg raise',s:'3×10'},
     {n:'Ab wheel rollout',s:'3×10'},
   ]},{h:'Mobility',rows:[
     {n:'Thoracic foam roll',s:'90s'},
     {n:'Wall slides',s:'10 reps'},
     {n:'Neck retraction',s:'2×10'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Volume Bench Notes',rows:[
     {n:'170×8',v:'All 4 sets — full range of motion'},
     {n:'Bar speed',v:'Controlled down (2s), explode up'},
     {n:'Rest',v:'90s between sets'},
     {n:'Touch chest',v:'Yes — no half reps'},
   ]}],
   note:'<strong>Incline DB at 67.5:</strong> If your gym doesn\'t have 67.5, use 65s and add a 5th set. The incline work is critical for upper chest development and shoulder health — the angle loads the anterior delt differently than flat bench.'
 }
},
{key:'2026-04-24',date:'Apr 24',dateNum:'24',dow:'Friday',tag:'bag',tagLabel:'Lift+Bag',
 extraTags:[{cls:'pink',label:'Bag'}],
 week:'Week 5 — Strength Return',weekLabel:'Phase 1 · Arms + legs + bag',summary:'Arms + legs + 35 min bag circuit',
 detail:{
   left:[{h:'Arms + Legs',rows:[
     {n:'Barbell curl',s:'4×8 @ 90 lbs'},
     {n:'Hammer curl',s:'3×10 @ 35 lbs'},
     {n:'Tricep pushdown',s:'4×12 @ 60 lbs'},
     {n:'Close-grip bench',s:'3×8 @ 135 lbs'},
     {n:'Goblet squat',s:'4×10 @ 60 lbs'},
     {n:'Romanian deadlift',s:'3×10 @ 175 lbs'},
     {n:'Walking lunge',s:'3×10 each (bodyweight)'},
   ]},{h:'Bag Work — 35 min',rows:[
     {n:'Shadow boxing',s:'2 × 3 min'},
     {n:'Jab-cross-body-kick',s:'4 × 3 min'},
     {n:'Teep + round kick focus',s:'2 × 3 min'},
     {n:'Burnout finisher',s:'1 × 2 min all out'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Bag Circuit',rows:[
     {n:'Combo to drill',v:'Jab-cross-left hook-right body kick'},
     {n:'Focus',v:'Hip rotation drives the kick'},
     {n:'If knee swells',v:'Switch to punching only'},
     {n:'Burn estimate',v:'~350–400 cal this session'},
   ]}],
   note:'<strong>Hip rotation = power AND joint protection.</strong> The round kick in Muay Thai is a full-body rotation. A stiff hip-kick loads the knee. A rotated kick deloads it. Practice slow-motion kicks focusing on the hip chamber before you add power.'
 }
},
{key:'2026-04-25',date:'Apr 25',dateNum:'25',dow:'Saturday',tag:'run',tagLabel:'Run',
 week:'Week 5 — Strength Return',weekLabel:'Phase 1 · Hard effort 5K',summary:'Hard 5K — push for sub-28:30',
 detail:{
   left:[{h:'Hard Effort 5K',rows:[
     {n:'Warm-up',s:'5 min walk + 5 min easy jog'},
     {n:'Hard 5K',s:'Push — target 9:00/mile'},
     {n:'Cool-down',s:'10 min walk + full stretch'},
     {n:'Log time',s:'Weekly PR attempt — record it'},
   ]},{h:'Running Strategy',rows:[
     {n:'Mile 1',s:'Conservative — 9:20 pace'},
     {n:'Mile 2',s:'Negative split — push to 9:00'},
     {n:'Mile 3',s:'Everything left — hold or faster'},
     {n:'Last 400m',s:'Whatever you have'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Pre-run',v:'Banana + ½ scoop whey 30 min before'},
     {n:'Post-run',v:'Protein + carbs fast'},
   ]},{h:'April 5K Tracking',rows:[
     {n:'Apr 18',v:'~29:00 (9:20 pace)'},
     {n:'Apr 25 target',v:'~28:30 (9:10 pace)'},
     {n:'May target',v:'~27:30–28:00'},
     {n:'On track for',v:'Sub-25 by September/October'},
   ]}],
   note:'<strong>Negative split strategy:</strong> Starting slightly conservative and finishing faster is both physically and psychologically more effective. If you run 9:20 / 9:10 / 8:55, you\'ll finish strong and under 28:30. Control the first mile.'
 }
},
{key:'2026-04-26',date:'Apr 26',dateNum:'26',dow:'Sunday',tag:'rest',tagLabel:'Rest',
 week:'Week 5 — Strength Return',weekLabel:'Phase 1 · Weekly review',summary:'Full rest — weekly review',
 detail:{
   left:[{h:'Rest Day',rows:[
     {n:'Training',s:'Complete rest'},
     {n:'Activity',s:'30 min walk optional'},
     {n:'Foam rolling',s:'10 min if sore'},
     {n:'Sleep',s:'8+ hours'},
   ]},{h:'Week 5 Review',rows:[
     {n:'Lifting sessions',s:'4 of 4 ✓'},
     {n:'Running sessions',s:'3 of 3 ✓ (target hit)'},
     {n:'Bag sessions',s:'2 of 2 ✓'},
     {n:'Nutrition at 1,900',s:'Log accuracy check'},
   ]}],
   right:[{h:'Body Metrics',rows:[
     {n:'Weigh in',v:'Expected 213–215 lbs'},
     {n:'Fat loss so far',v:'~1.5–2 lbs real fat since Apr 12'},
     {n:'On track for',v:'216 → 206 lbs by June 7'},
   ]},{h:'Week 6 Preview',rows:[
     {n:'Monday bench',v:'Target 200 lbs × 3'},
     {n:'Volume',v:'Maintain all progressions'},
     {n:'Running',v:'3×/week — maintain'},
   ]}],
   note:'<strong>You should feel strong at this point.</strong> Week 5 post-fast is typically when athletes notice they feel better than before the fast — lower inflammation, sharper clarity, reduced joint pain. The dividend from the hard work in week 3.'
 }
},

// --- WEEK 6 ---
{key:'2026-04-27',date:'Apr 27',dateNum:'27',dow:'Monday',tag:'lift',tagLabel:'Lift',
 week:'Week 6 — Pre-May Push',weekLabel:'Phase 1 · Bench target: 200–205',summary:'Heavy bench — 200+ territory',
 detail:{
   left:[{h:'Heavy Bench + Abs',rows:[
     {n:'Warm-up: 45×10, 95×8, 135×5, 175×3',s:''},
     {n:'Working set 1',s:'3×3 @ 200 lbs'},
     {n:'If 200×3 crisp',s:'Attempt 205×2'},
     {n:'Backoff',s:'1×6 @ 185 lbs'},
     {n:'DB bench',s:'3×8 @ 87.5 lbs'},
     {n:'Cable fly',s:'3×12'},
     {n:'Ab circuit × 3',s:'Plank 50s / knee raise 15 / crunch 15'},
   ]},{h:'Mobility',rows:[
     {n:'Pec stretch in doorway',s:'45s each'},
     {n:'Band pull-aparts',s:'3×15 pre-lift'},
     {n:'Shoulder CARs',s:'5 each'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Bench Progression Recap',rows:[
     {n:'Mar 23',v:'205×3 (pre-fast PR)'},
     {n:'Apr 13',v:'185×5 (post-fast)'},
     {n:'Apr 20',v:'195×4'},
     {n:'Apr 27',v:'200×3 → 205×2 attempt'},
     {n:'End of May goal',v:'225×1'},
   ]}],
   note:'<strong>Milestone session.</strong> Getting 200×3 clean means full strength recovery. If bar speed is good, load 205 for a double. Matching 205×2 post-fast, at lower bodyweight, in a caloric deficit — that\'s genuinely strong.'
 }
},
{key:'2026-04-28',date:'Apr 28',dateNum:'28',dow:'Tuesday',tag:'lift',tagLabel:'Lift',
 week:'Week 6 — Pre-May Push',weekLabel:'Phase 1 · Full progression',summary:'Arms / back / legs — full progression',
 detail:{
   left:[{h:'Arms + Back + Legs',rows:[
     {n:'Barbell curl',s:'4×6 @ 95 lbs'},
     {n:'Lat pulldown',s:'4×8 @ 145 lbs'},
     {n:'Seated cable row',s:'4×8 @ 135 lbs'},
     {n:'Face pull',s:'3×15 — shoulder health'},
     {n:'Goblet squat',s:'4×10 @ 65 lbs'},
     {n:'Romanian deadlift',s:'4×8 @ 185 lbs'},
     {n:'Leg press',s:'3×12 moderate'},
     {n:'Leg curl',s:'3×12'},
   ]},{h:'Mobility',rows:[
     {n:'World\'s greatest stretch',s:'5 each'},
     {n:'Hip 90/90',s:'90s each'},
     {n:'Couch stretch',s:'60s each'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Shoulder Health',rows:[
     {n:'Face pulls',v:'Non-negotiable for pressing longevity'},
     {n:'Targets',v:'Rear delt + external rotators'},
     {n:'For you',v:'Critical given shoulder history'},
     {n:'Cable height',v:'Set at face height, elbows flared'},
   ]}],
   note:'<strong>RDL at 185 lbs:</strong> Meaningful loading for your posterior chain. Slow eccentric (3 seconds down), feel the hamstrings load, drive hips through at the top. If you feel it in your lumbar, drop to 175 and reset mechanics.'
 }
},
{key:'2026-04-29',date:'Apr 29',dateNum:'29',dow:'Wednesday',tag:'run',tagLabel:'Run',
 week:'Week 6 — Pre-May Push',weekLabel:'Phase 1 · Tempo — push sub-28:30',summary:'Tempo 5K — push for sub-28:30',
 detail:{
   left:[{h:'Tempo 5K',rows:[
     {n:'Warm-up',s:'5 min walk + 3 min easy jog'},
     {n:'Tempo 5K',s:'Target 9:00 pace'},
     {n:'Goal time',s:'Sub-28:30 (28:00 stretch)'},
     {n:'Cool-down walk',s:'10 min'},
     {n:'Full stretch',s:'15 min — long holds'},
   ]},{h:'Running Mobility After',rows:[
     {n:'Hip flexor kneeling',s:'90s each'},
     {n:'Pigeon pose',s:'90s each'},
     {n:'Hamstring against wall',s:'60s each'},
     {n:'Calf / Achilles',s:'60s each'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Pre-run',v:'Banana + ½ scoop whey'},
     {n:'Post-run',v:'Protein shake + fruit'},
   ]},{h:'April 5K Benchmark',rows:[
     {n:'Month start',v:'~31:00 (10:15 pace)'},
     {n:'Today target',v:'~28:00–28:30'},
     {n:'Improvement',v:'~2:30–3:00 faster in 4 weeks'},
     {n:'Why',v:'Post-fast inflammation drop + 4 weeks training'},
   ]}],
   note:'<strong>April 5K progress summary:</strong> If you hit sub-28:30 today, you\'ve dropped roughly 2.5 minutes in one month. The combined effect of consistent training, the fast\'s inflammatory reset, and improved body composition. Log this time — it\'s your May baseline.'
 }
},
{key:'2026-04-30',date:'Apr 30',dateNum:'30',dow:'Thursday',tag:'lift',tagLabel:'Lift',
 week:'Week 6 — Pre-May Push',weekLabel:'Phase 1 · Close April strong',summary:'Volume bench + abs — close April strong',
 detail:{
   left:[{h:'Volume Bench + Abs',rows:[
     {n:'Band work',s:'3×15 pull-aparts warm-up'},
     {n:'Barbell bench',s:'4×8 @ 170–175 lbs'},
     {n:'Incline DB press',s:'3×10 @ 70 lbs'},
     {n:'Pec deck + cable fly',s:'3×12 each'},
     {n:'Plank',s:'3×55s'},
     {n:'Hanging leg raise',s:'3×12'},
     {n:'Ab wheel',s:'3×12'},
   ]},{h:'Mobility',rows:[
     {n:'Thoracic foam roll',s:'90s'},
     {n:'Neck CARs (gentle)',s:'5 each'},
     {n:'Pec doorway stretch',s:'45s each'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'April Final Stats',rows:[
     {n:'Lifting sessions',v:'16 of 16 ✓'},
     {n:'Running sessions',v:'10–11 sessions ✓'},
     {n:'Bag sessions',v:'8 sessions ✓'},
     {n:'5-day fast',v:'Completed ✓'},
     {n:'Bench',v:'Back to 200–205 lbs territory'},
     {n:'Weight (est)',v:'213–215 lbs'},
   ]}],
   note:'<strong>April complete.</strong> You started at 216 lbs, fasted for 5 days, rebuilt strength, and ran more consistently than any prior month. May goal: keep the machine moving — 1,900 cal/day, 4 lifts, 3 runs, 2 bag sessions. By May 31 you\'ll be at 207–208 lbs benching 215–220.'
 }
},

],

// ============================================================
// MAY
// ============================================================
may: [

// --- WEEK 7 ---
{key:'2026-05-01',date:'May 1',dateNum:'1',dow:'Friday',tag:'bag',tagLabel:'Lift+Bag',
 extraTags:[{cls:'pink',label:'Bag'}],
 week:'Week 7 — Phase 1',weekLabel:'Phase 1 · Cut @ 1,900 cal',summary:'Arms + legs + bag — start May strong',
 detail:{
   left:[{h:'Arms + Legs',rows:[
     {n:'Barbell curl',s:'4×6 @ 95 lbs'},
     {n:'Hammer curl',s:'3×10 @ 37.5 lbs'},
     {n:'Tricep pushdown',s:'4×12 @ 62.5 lbs'},
     {n:'Close-grip bench',s:'3×8 @ 140 lbs'},
     {n:'Goblet squat',s:'4×10 @ 65 lbs'},
     {n:'Romanian deadlift',s:'4×8 @ 185 lbs'},
     {n:'Leg press',s:'3×15 moderate'},
   ]},{h:'Bag Work — 35 min',rows:[
     {n:'Shadow boxing warm-up',s:'2 × 3 min'},
     {n:'Combo work',s:'4 × 3 min'},
     {n:'Kick focus',s:'2 × 3 min'},
     {n:'Burnout',s:'1 × 2 min'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
     {n:'Carbs',v:'155g'},
     {n:'Fat',v:'50g'},
   ]},{h:'May Goals',rows:[
     {n:'Weight target',v:'215 → 209 lbs by May 31'},
     {n:'Bench target',v:'215–220 lbs by May 31'},
     {n:'5K target',v:'Sub-27:30 by late May'},
     {n:'Runs/wk',v:'3 per week — non-negotiable'},
   ]}],
   note:'<strong>May is the execution month.</strong> No major disruptions, no fasts, no vacations. 4 lifts + 3 runs + 2 bag sessions every week for 5 weeks. The simplest month of the program — just show up and the numbers will move.'
 }
},
{key:'2026-05-02',date:'May 2',dateNum:'2',dow:'Saturday',tag:'run',tagLabel:'Run',
 week:'Week 7 — Phase 1',weekLabel:'Phase 1 · Easy 5K',summary:'Easy 5K — Ohio spring weather',
 detail:{
   left:[{h:'Easy 5K',rows:[
     {n:'Warm-up walk',s:'5 min'},
     {n:'Easy run',s:'9:45–10:15/mile — conversational'},
     {n:'Distance',s:'3.1 miles'},
     {n:'Cool-down + stretch',s:'10 min'},
   ]},{h:'Mobility',rows:[
     {n:'Hip flexor kneeling stretch',s:'90s each'},
     {n:'Standing hamstring stretch',s:'60s each'},
     {n:'Ankle circles',s:'20 each'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
     {n:'Hydration',v:'100+ oz — warmer weather now'},
   ]}],
   note:'May in Richfield, Ohio averages 55–68°F — ideal running weather. April\'s pace was ~10:15 easy. Aim for 9:45–10:00 by end of May for easy runs. The improvement is gradual — don\'t force it.'
 }
},
{key:'2026-05-03',date:'May 3',dateNum:'3',dow:'Sunday',tag:'rest',tagLabel:'Rest',
 week:'Week 7 — Phase 1',weekLabel:'Phase 1 · Rest day',summary:'Full rest — recovery',
 detail:{
   left:[{h:'Rest Day',rows:[
     {n:'Training',s:'Complete rest'},
     {n:'Walk',s:'30 min optional'},
     {n:'Mobility',s:'10 min light stretching'},
     {n:'Sleep',s:'8+ hours'},
   ]}],
   right:[{h:'Weekly Reset',rows:[
     {n:'Hydration',v:'100+ oz today'},
     {n:'Food prep',v:'Cook protein for the week'},
     {n:'Week ahead',v:'4 lifts + 3 runs + 2 bag'},
     {n:'Check weight',v:'Log daily weigh-in'},
   ]}],
   note:'Use Sundays to food prep for the week. Pre-cook 2–3 lbs of chicken, hard boil eggs, wash and prep vegetables. Having food ready removes the friction that leads to off-plan eating.'
 }
},
{key:'2026-05-04',date:'May 4',dateNum:'4',dow:'Monday',tag:'lift',tagLabel:'Lift',
 week:'Week 7 — Phase 1',weekLabel:'Phase 1 · Heavy bench',summary:'Heavy bench — push toward 210 lbs',
 detail:{
   left:[{h:'Heavy Bench + Abs',rows:[
     {n:'Warm-up: 45×10, 95×8, 135×5, 175×3',s:''},
     {n:'Working sets',s:'3×3 @ 205 lbs'},
     {n:'Attempt',s:'210×2 if 205×3 moves well'},
     {n:'Backoff',s:'1×6 @ 190 lbs'},
     {n:'DB bench',s:'3×8 @ 90 lbs'},
     {n:'Cable fly',s:'3×12'},
     {n:'Ab circuit × 3',s:'Plank 55s / leg raise 12 / wheel 10'},
   ]},{h:'Mobility',rows:[
     {n:'Pec doorway stretch',s:'45s each'},
     {n:'Band pull-aparts',s:'3×15'},
     {n:'Shoulder CARs',s:'5 each direction'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Bench Progression',rows:[
     {n:'Apr 27',v:'200×3 / 205×2'},
     {n:'May 4 target',v:'205×3 → 210×2'},
     {n:'May 18 target',v:'215×2'},
     {n:'May 25 target',v:'220×2 → 225×1'},
   ]}],
   note:'<strong>205×3 this week is the milestone.</strong> Your pre-fast PR was 205×3 (Mar 23). Matching that — 6 weeks later, at lower bodyweight, in a deficit — means you\'re actually stronger than you were. That\'s the goal of this phase.'
 }
},
{key:'2026-05-05',date:'May 5',dateNum:'5',dow:'Tuesday',tag:'lift',tagLabel:'Lift',
 week:'Week 7 — Phase 1',weekLabel:'Phase 1 · Arms + back + legs',summary:'Arms / back / legs — progressive overload',
 detail:{
   left:[{h:'Arms + Back + Legs',rows:[
     {n:'Barbell curl',s:'4×8 @ 95 lbs'},
     {n:'Incline DB curl',s:'3×10 @ 35 lbs'},
     {n:'Lat pulldown',s:'4×8 @ 150 lbs'},
     {n:'Seated cable row',s:'4×8 @ 140 lbs'},
     {n:'Face pull',s:'3×15'},
     {n:'Goblet squat',s:'4×10 @ 67.5 lbs'},
     {n:'Romanian deadlift',s:'4×8 @ 190 lbs'},
     {n:'Leg curl',s:'3×12'},
   ]},{h:'Mobility',rows:[
     {n:'World\'s greatest stretch',s:'5 each'},
     {n:'Hip 90/90',s:'90s each'},
     {n:'Ankle mob',s:'10 each'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Pulldown Note',rows:[
     {n:'At 150 lbs',v:'Full range — chest to bar'},
     {n:'Don\'t swing',v:'Lat engagement, not momentum'},
     {n:'Pause at bottom',v:'1-second squeeze'},
   ]}],
   note:'<strong>RDL at 190:</strong> You\'re approaching your Phase 1 RDL limit. Focus on quality. 3-second eccentric, full hamstring stretch, controlled hip drive. When the Phase 2 trap bar deadlift starts in June, this posterior chain work pays off immediately.'
 }
},
{key:'2026-05-06',date:'May 6',dateNum:'6',dow:'Wednesday',tag:'run',tagLabel:'Run',
 week:'Week 7 — Phase 1',weekLabel:'Phase 1 · Tempo run',summary:'Tempo 5K — target sub-28:00',
 detail:{
   left:[{h:'Tempo 5K',rows:[
     {n:'Warm-up',s:'5 min walk + 3 min jog'},
     {n:'Tempo 5K',s:'8:55–9:15/mile target'},
     {n:'Goal time',s:'Sub-28:00'},
     {n:'Cool-down',s:'10 min walk + stretch'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Pre-run',v:'Banana + ½ scoop whey'},
   ]},{h:'5K Tracker',rows:[
     {n:'Apr 29 baseline',v:'~28:00–28:30'},
     {n:'May 6 target',v:'Sub-28:00'},
     {n:'May 20 target',v:'Sub-27:30'},
     {n:'May 30 target',v:'Sub-27:00'},
   ]}],
   note:'<strong>Tempo run tip:</strong> Negative split — run the second half faster than the first. Start at 9:10, finish at 8:50. This trains your body to hold pace when fatigued, which is exactly what the sub-25 5K demands later in the season.'
 }
},
{key:'2026-05-07',date:'May 7',dateNum:'7',dow:'Thursday',tag:'lift',tagLabel:'Lift',
 week:'Week 7 — Phase 1',weekLabel:'Phase 1 · Volume bench',summary:'Volume bench + abs',
 detail:{
   left:[{h:'Volume Bench + Abs',rows:[
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
   ]}],
   note:'Volume bench at 175×8 — all 4 sets. Rest 90s max. The goal is metabolic stress and motor pattern reinforcement, not max weight. The heavy work happened Monday. Today is volume.'
 }
},
{key:'2026-05-08',date:'May 8',dateNum:'8',dow:'Friday',tag:'bag',tagLabel:'Lift+Bag',
 extraTags:[{cls:'pink',label:'Bag'}],
 week:'Week 7 — Phase 1',weekLabel:'Phase 1 · Arms + bag',summary:'Arms + light legs + 35 min bag',
 detail:{
   left:[{h:'Arms + Legs',rows:[
     {n:'Barbell curl',s:'4×6 @ 97.5 lbs'},
     {n:'Hammer curl',s:'3×10 @ 37.5 lbs'},
     {n:'Tricep pushdown',s:'4×12 @ 65 lbs'},
     {n:'Close-grip bench',s:'3×8 @ 145 lbs'},
     {n:'Goblet squat',s:'4×10 @ 67.5 lbs'},
     {n:'RDL',s:'3×10 @ 185 lbs'},
     {n:'Walking lunge',s:'3×12 each (bodyweight)'},
   ]},{h:'Bag Work — 35 min',rows:[
     {n:'Shadow boxing',s:'2 × 3 min'},
     {n:'Combos + power',s:'5 × 3 min'},
     {n:'Burnout round',s:'1 × 2 min'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]}],
   note:'<strong>Curl progression:</strong> 97.5 lbs is near your Phase 1 ceiling. If you hit all 4×6 cleanly, next week you attempt 100 lbs — a meaningful milestone. Strict form: no swinging, full range, supinate at the top.'
 }
},
{key:'2026-05-09',date:'May 9',dateNum:'9',dow:'Saturday',tag:'run',tagLabel:'Run',
 week:'Week 7 — Phase 1',weekLabel:'Phase 1 · Hard effort',summary:'Hard effort 5K — test pace',
 detail:{
   left:[{h:'Hard Effort 5K',rows:[
     {n:'Warm-up',s:'8 min easy walk/jog'},
     {n:'Hard 5K',s:'8:55–9:10/mile target'},
     {n:'Goal time',s:'Sub-27:45'},
     {n:'Cool-down + stretch',s:'15 min'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Pre-run',v:'Banana + whey 30 min before'},
     {n:'Post-run',v:'Protein + carbs immediately'},
   ]},{h:'5K Progress',rows:[
     {n:'Apr start',v:'~31:00'},
     {n:'Apr end',v:'~28:00–28:30'},
     {n:'May 9 target',v:'~27:45'},
     {n:'May 31 goal',v:'Sub-27:00'},
   ]}],
   note:'You\'ve already dropped 2.5+ minutes in one month. May should add another 1:00–1:30. The gains come faster early in a running program, then slow. Every 30 seconds now requires more work than the last 2 minutes did. That\'s normal.'
 }
},
{key:'2026-05-10',date:'May 10',dateNum:'10',dow:'Sunday',tag:'rest',tagLabel:'Rest',
 week:'Week 7 — Phase 1',weekLabel:'Phase 1 · Rest',summary:'Full rest — Mother\'s Day',
 detail:{
   left:[{h:'Rest Day — Mother\'s Day',rows:[
     {n:'Training',s:'Complete rest'},
     {n:'Family',s:'Enjoy the day — no guilt about rest'},
     {n:'Activity',s:'Walk if it happens naturally'},
   ]}],
   right:[{h:'Week 7 Review',rows:[
     {n:'Lifting',v:'4 of 4 ✓'},
     {n:'Runs',v:'3 of 3 ✓'},
     {n:'Bag',v:'2 of 2 ✓'},
     {n:'Weigh in',v:'Expected 213–214 lbs'},
   ]}],
   note:'Rest days are training days. Muscle is built during recovery, not during the workout. The workout is the stimulus — sleep and rest are where the adaptation happens.'
 }
},

// --- WEEK 8 ---
{key:'2026-05-11',date:'May 11',dateNum:'11',dow:'Monday',tag:'lift',tagLabel:'Lift',
 week:'Week 8 — Phase 1',weekLabel:'Phase 1 · Bench: 210–215 lbs',summary:'Heavy bench — 210–215 territory',
 detail:{
   left:[{h:'Heavy Bench + Abs',rows:[
     {n:'Warm-up: 45×10, 95×8, 135×5, 185×3',s:''},
     {n:'Working sets',s:'3×3 @ 210 lbs'},
     {n:'Attempt',s:'215×1 if 210×3 moves fast'},
     {n:'Backoff',s:'1×5 @ 195 lbs'},
     {n:'DB bench',s:'3×8 @ 90 lbs'},
     {n:'Cable fly',s:'3×12'},
     {n:'Full ab circuit × 3',s:'Plank 60s / leg raise 12 / wheel 12'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Bench Track',rows:[
     {n:'May 4',v:'205×3'},
     {n:'May 11',v:'210×3 → 215×1 attempt'},
     {n:'May 18',v:'215×3 → 220×1 attempt'},
     {n:'May 25',v:'220×3 → 225×1 (goal)'},
   ]}],
   note:'<strong>210×3 puts you at an estimated 1RM of ~222 lbs.</strong> You\'re within striking distance of 225. Stay patient — one week at a time. Attempting 225 before you\'ve built to it properly is how you fail or get hurt. The progression map above works.'
 }
},
{key:'2026-05-12',date:'May 12',dateNum:'12',dow:'Tuesday',tag:'lift',tagLabel:'Lift',
 week:'Week 8 — Phase 1',weekLabel:'Phase 1 · Back + legs',summary:'Arms / back / legs — big posterior push',
 detail:{
   left:[{h:'Arms + Back + Legs',rows:[
     {n:'Barbell curl',s:'4×6 @ 100 lbs (milestone!)'},
     {n:'Lat pulldown',s:'4×8 @ 155 lbs'},
     {n:'Seated cable row',s:'4×8 @ 145 lbs'},
     {n:'Face pull',s:'3×15'},
     {n:'Goblet squat',s:'4×10 @ 70 lbs'},
     {n:'Romanian deadlift',s:'4×8 @ 195 lbs'},
     {n:'Leg press',s:'3×15 @ working weight'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Milestones This Week',rows:[
     {n:'Curl: 100 lbs',v:'Significant strength marker'},
     {n:'RDL: 195 lbs',v:'Near Phase 1 top end'},
     {n:'Pulldown: 155',v:'Building toward bodyweight'},
   ]}],
   note:'<strong>100 lb barbell curl:</strong> This is a meaningful strength milestone for most lifters. Strict form only — no swinging. If you get all 4×6 strict, note it. By Phase 2 you\'ll be doing weighted chins which will drive bicep strength further.'
 }
},
{key:'2026-05-13',date:'May 13',dateNum:'13',dow:'Wednesday',tag:'run',tagLabel:'Run',
 week:'Week 8 — Phase 1',weekLabel:'Phase 1 · Easy run',summary:'Easy 5K — conversational pace',
 detail:{
   left:[{h:'Easy 5K',rows:[
     {n:'Warm-up walk',s:'5 min'},
     {n:'Easy run',s:'9:30–10:00/mile'},
     {n:'Cool-down + stretch',s:'10 min'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Pre-run',v:'Light — half banana or nothing'},
     {n:'Hydration',v:'100+ oz — May warmth'},
   ]}],
   note:'Easy pace is dropping — 9:30 that feels conversational in May would have been tempo in March. That\'s real fitness improvement. Notice it.'
 }
},
{key:'2026-05-14',date:'May 14',dateNum:'14',dow:'Thursday',tag:'lift',tagLabel:'Lift',
 week:'Week 8 — Phase 1',weekLabel:'Phase 1 · Volume bench',summary:'Volume bench + abs',
 detail:{
   left:[{h:'Volume Bench + Abs',rows:[
     {n:'Band pull-aparts',s:'3×15'},
     {n:'Barbell bench',s:'4×8 @ 180 lbs (+5)'},
     {n:'Incline DB press',s:'3×10 @ 75 lbs'},
     {n:'Pec deck',s:'3×12'},
     {n:'Ab circuit × 3',s:'Plank 60s / leg raise 15 / wheel 12'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]}],
   note:'Volume bench moving to 180×8 — each 5 lb jump here is meaningful. Your chest, anterior delt, and triceps are all getting stronger simultaneously. The incline work at 75 lbs is now serious loading.'
 }
},
{key:'2026-05-15',date:'May 15',dateNum:'15',dow:'Friday',tag:'bag',tagLabel:'Lift+Bag',
 extraTags:[{cls:'pink',label:'Bag'}],
 week:'Week 8 — Phase 1',weekLabel:'Phase 1 · Arms + bag',summary:'Arms + legs + bag — peak bag session',
 detail:{
   left:[{h:'Arms + Legs',rows:[
     {n:'Barbell curl',s:'4×6 @ 100 lbs'},
     {n:'Cable curl',s:'3×12 @ light (stretch emphasis)'},
     {n:'Tricep pushdown',s:'4×12 @ 67.5 lbs'},
     {n:'Overhead tricep extension',s:'3×10 @ 70 lbs'},
     {n:'Goblet squat',s:'4×10 @ 72.5 lbs'},
     {n:'RDL',s:'3×10 @ 190 lbs'},
     {n:'Walking lunge',s:'3×12 each (bodyweight)'},
   ]},{h:'Bag Work — 40 min',rows:[
     {n:'Shadow boxing',s:'2 × 3 min'},
     {n:'Power combos',s:'5 × 3 min'},
     {n:'Kick focus rounds',s:'2 × 3 min'},
     {n:'Burnout',s:'2 × 2 min'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]}],
   note:'40-minute bag session — your conditioning should be noticeably better than early April. Rounds that felt hard in week 1 should now feel manageable. If you can hold technique through round 7, your cardiovascular adaptation is working.'
 }
},
{key:'2026-05-16',date:'May 16',dateNum:'16',dow:'Saturday',tag:'run',tagLabel:'Run',
 week:'Week 8 — Phase 1',weekLabel:'Phase 1 · Hard run',summary:'Hard effort 5K — push sub-27:30',
 detail:{
   left:[{h:'Hard Effort 5K',rows:[
     {n:'Warm-up',s:'8 min easy'},
     {n:'Hard 5K',s:'8:50–9:00/mile target'},
     {n:'Goal time',s:'Sub-27:30'},
     {n:'Cool-down',s:'15 min + full stretch'},
   ]}],
   right:[{h:'5K Tracker',rows:[
     {n:'May 9',v:'~27:45'},
     {n:'May 16 target',v:'Sub-27:30'},
     {n:'May 30 goal',v:'Sub-27:00'},
     {n:'Oct goal',v:'Sub-25:00'},
   ]}],
   note:'Sub-27:30 means you\'re running roughly 8:52/mile. That\'s real progress from 10:15 in early April — over 1:20 faster per mile in 6 weeks. This is what consistent training + reduced body fat does.'
 }
},
{key:'2026-05-17',date:'May 17',dateNum:'17',dow:'Sunday',tag:'rest',tagLabel:'Rest',
 week:'Week 8 — Phase 1',weekLabel:'Phase 1 · Rest',summary:'Full rest — weekly review',
 detail:{
   left:[{h:'Rest Day',rows:[
     {n:'Training',s:'Complete rest'},
     {n:'Walk',s:'30 min optional'},
     {n:'Sleep',s:'8+ hours priority'},
   ]}],
   right:[{h:'Week 8 Body Check',rows:[
     {n:'Weigh in',v:'Expected 212–213 lbs'},
     {n:'Body fat',v:'Estimated ~16–17%'},
     {n:'Fat loss Apr–May',v:'~3–4 lbs real fat'},
     {n:'On track',v:'206 lbs by June 7 — yes'},
   ]}],
   note:'<strong>Week 8 check-in:</strong> You are now 4 weeks from the end of Phase 1. Weight should be 2–3 lbs lighter than April 12 refeeed. Bench should be the strongest it\'s ever been at this bodyweight. You\'re ahead of pace.'
 }
},

// --- WEEK 9 ---
{key:'2026-05-18',date:'May 18',dateNum:'18',dow:'Monday',tag:'lift',tagLabel:'Lift',
 week:'Week 9 — Phase 1',weekLabel:'Phase 1 · Bench: 215–220 lbs zone',summary:'Heavy bench — 215 working sets',
 detail:{
   left:[{h:'Heavy Bench + Abs',rows:[
     {n:'Warm-up: 45×10, 95×8, 145×5, 185×2',s:''},
     {n:'Working sets',s:'3×3 @ 215 lbs'},
     {n:'Attempt',s:'220×1 if 215×3 moves fast'},
     {n:'Backoff',s:'1×5 @ 200 lbs'},
     {n:'DB bench',s:'3×8 @ 92.5 lbs'},
     {n:'Cable fly',s:'3×12'},
     {n:'Ab circuit × 3',s:'All components at max reps'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Bench Week 9',rows:[
     {n:'215×3',v:'Est 1RM ≈ 228 lbs'},
     {n:'220×1',v:'Approaching goal'},
     {n:'225 week',v:'May 25 — the target'},
     {n:'Approach',v:'Don\'t rush — let the progression deliver it'},
   ]}],
   note:'<strong>215×3:</strong> If you hit this cleanly, your estimated 1RM is ~228 lbs. 225 is within reach next week. Stay technical — don\'t let the weight tempt you into a back arch that\'s outside your normal range. Clean reps only.'
 }
},
{key:'2026-05-19',date:'May 19',dateNum:'19',dow:'Tuesday',tag:'lift',tagLabel:'Lift',
 week:'Week 9 — Phase 1',weekLabel:'Phase 1 · Big back + leg session',summary:'Arms / back / legs — big numbers',
 detail:{
   left:[{h:'Arms + Back + Legs',rows:[
     {n:'Barbell curl',s:'4×6 @ 100 lbs — hold this'},
     {n:'Lat pulldown',s:'4×8 @ 157.5 lbs'},
     {n:'Seated row',s:'4×8 @ 150 lbs'},
     {n:'Face pull',s:'3×15'},
     {n:'Goblet squat',s:'4×10 @ 75 lbs'},
     {n:'Romanian deadlift',s:'4×8 @ 200 lbs'},
     {n:'Leg press',s:'3×15'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Leg Work Status',rows:[
     {n:'Goblet squat',v:'75 lbs × 10 — strong foundation'},
     {n:'RDL 200',v:'Serious hamstring work — log depth'},
     {n:'Phase 2 preview',v:'Trap bar DL starts at 185 lbs in June'},
     {n:'Now',v:'This RDL work builds the hip hinge'},
   ]}],
   note:'<strong>RDL at 200 lbs</strong> is a significant posterior chain load. Your Phase 2 trap bar deadlift starts at 185 in June and builds to 380 by July 19. This work is directly building that capacity.'
 }
},
{key:'2026-05-20',date:'May 20',dateNum:'20',dow:'Wednesday',tag:'run',tagLabel:'Run',
 week:'Week 9 — Phase 1',weekLabel:'Phase 1 · Tempo — sub-27:30 push',summary:'Tempo 5K — target sub-27:30',
 detail:{
   left:[{h:'Tempo 5K',rows:[
     {n:'Warm-up',s:'5 min walk + 3 min jog'},
     {n:'Tempo 5K',s:'8:50 pace — hold it'},
     {n:'Goal',s:'Sub-27:30 (8:50/mile)'},
     {n:'Cool-down',s:'10 min + full stretch'},
   ]}],
   right:[{h:'5K Milestone',rows:[
     {n:'Sub-27:30',v:'= 8:50/mile pace'},
     {n:'You started at',v:'10:15/mile (Apr 1)'},
     {n:'Improvement',v:'1:25/mile faster in 7 weeks'},
     {n:'Remaining to goal',v:'0:50/mile to sub-25 pace'},
   ]}],
   note:'Sub-27:30 at mid-May puts you solidly on track for sub-25 by September/October. The remaining 1:30 of improvement (from 27:30 to 25:00) takes longer than the first 3:30 did — plan for gradual improvement through summer.'
 }
},
{key:'2026-05-21',date:'May 21',dateNum:'21',dow:'Thursday',tag:'lift',tagLabel:'Lift',
 week:'Week 9 — Phase 1',weekLabel:'Phase 1 · Volume bench',summary:'Volume bench + abs — heavy volume',
 detail:{
   left:[{h:'Volume Bench + Abs',rows:[
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
   ]}],
   note:'Volume bench at 182.5 × 8 — your total weekly bench volume is now very high (heavy sets + volume sets combined). This is building the muscle and the endurance you need to hold 225 for reps, not just grind one single.'
 }
},
{key:'2026-05-22',date:'May 22',dateNum:'22',dow:'Friday',tag:'bag',tagLabel:'Lift+Bag',
 extraTags:[{cls:'pink',label:'Bag'}],
 week:'Week 9 — Phase 1',weekLabel:'Phase 1 · Arms + bag',summary:'Arms + legs + 40 min bag',
 detail:{
   left:[{h:'Arms + Legs',rows:[
     {n:'Barbell curl',s:'4×6 @ 100 lbs'},
     {n:'Hammer curl',s:'3×10 @ 40 lbs'},
     {n:'Tricep pushdown',s:'4×12 @ 70 lbs'},
     {n:'Close-grip bench',s:'3×8 @ 150 lbs'},
     {n:'Goblet squat',s:'4×10 @ 75 lbs'},
     {n:'RDL',s:'3×10 @ 195 lbs'},
     {n:'Walking lunge',s:'3×12 each (bodyweight)'},
   ]},{h:'Bag Work — 40 min',rows:[
     {n:'Shadow + movement',s:'2 × 3 min'},
     {n:'Full combo rounds',s:'6 × 3 min'},
     {n:'Burnout',s:'2 × 2 min'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]}],
   note:'Close-grip bench at 150 is strong accessory work — this directly assists your regular bench and builds your triceps for the 225 attempt next week. 3×8 at this weight requires real tricep strength.'
 }
},
{key:'2026-05-23',date:'May 23',dateNum:'23',dow:'Saturday',tag:'run',tagLabel:'Run',
 week:'Week 9 — Phase 1',weekLabel:'Phase 1 · Hard 5K',summary:'Hard effort 5K — push sub-27:00',
 detail:{
   left:[{h:'Hard Effort 5K',rows:[
     {n:'Warm-up',s:'8 min easy'},
     {n:'Hard 5K',s:'8:40–8:50/mile — race effort'},
     {n:'Goal time',s:'Sub-27:00'},
     {n:'Cool-down',s:'15 min + full stretch'},
   ]}],
   right:[{h:'5K Status',rows:[
     {n:'May 16',v:'~27:30'},
     {n:'May 23 target',v:'Sub-27:00'},
     {n:'May 30 final',v:'Sub-26:45'},
     {n:'June target',v:'Sub-26:30'},
   ]}],
   note:'Sub-27:00 means you\'re running 8:41/mile. This is meaningful — 8:41 average pace requires actual fitness, not just effort. Your aerobic system is rebuilding from the ground up this season.'
 }
},
{key:'2026-05-24',date:'May 24',dateNum:'24',dow:'Sunday',tag:'rest',tagLabel:'Rest',
 week:'Week 9 — Phase 1',weekLabel:'Phase 1 · Rest — big week ahead',summary:'Full rest — 225 attempt week starts tomorrow',
 detail:{
   left:[{h:'Rest Day',rows:[
     {n:'Training',s:'Complete rest'},
     {n:'Sleep',s:'8+ hours — critical before 225 week'},
     {n:'Mobility',s:'10 min light — hips and shoulders'},
     {n:'Mental prep',s:'Visualize the 225 bench'},
   ]}],
   right:[{h:'Week 10 Preview',rows:[
     {n:'Monday',v:'225 lb bench attempt — the goal'},
     {n:'Approach',v:'Conservative warm-up, then 220×1, then 225'},
     {n:'If 225 moves',v:'Log the PR and stop — don\'t chase more'},
     {n:'If not',v:'215×3 is still excellent — 225 next week'},
   ]}],
   note:'<strong>Tomorrow is a milestone day.</strong> Sleep well tonight. Eat normally tomorrow morning. Don\'t overthink it. You\'ve been building to this for 10 weeks. 225 is within your calculated range based on your current progressions. Trust the work.'
 }
},

// --- WEEK 10 ---
{key:'2026-05-25',date:'May 25',dateNum:'25',dow:'Monday',tag:'lift',tagLabel:'Lift',
 week:'Week 10 — Phase 1 Peak',weekLabel:'Phase 1 · 🎯 225 lb attempt',summary:'Heavy bench — 225 lb attempt 🎯',
 detail:{
   left:[{h:'Heavy Bench + Abs — 225 Week',rows:[
     {n:'Warm-up: 45×10, 95×8, 135×5, 185×3',s:''},
     {n:'Build set',s:'205×3 — feel the bar'},
     {n:'Approach set',s:'215×2 — bar should feel light'},
     {n:'Attempt set',s:'220×1 — final prep'},
     {n:'225 attempt',s:'1 rep — full setup, pause at chest'},
     {n:'If successful',s:'Back down to 185×5 — done'},
     {n:'Ab circuit × 3',s:'Standard — don\'t skip'},
   ]},{h:'Setup Protocol',rows:[
     {n:'Arch',s:'Natural — not exaggerated'},
     {n:'Scapula',s:'Packed and squeezed hard into bench'},
     {n:'Feet',s:'Flat on floor, drive through heels'},
     {n:'Grip',s:'Slightly wider than shoulder width'},
     {n:'Spotter',s:'Use one — serious weight'},
   ]}],
   right:[{h:'Nutrition — 225 Day',rows:[
     {n:'Calories',v:'1,900 normal'},
     {n:'Pre-workout meal',v:'3 eggs + ½ cup oats + banana'},
     {n:'Creatine',v:'5g pre-workout if using'},
     {n:'Hydration',v:'32 oz water before you touch the bar'},
   ]},{h:'Context',rows:[
     {n:'Mar 23',v:'205×3 (pre-program PR)'},
     {n:'Today',v:'225×1 — the goal'},
     {n:'Improvement',v:'+20 lbs in 9 weeks'},
     {n:'At lower bodyweight',v:'This is a big strength-to-weight jump'},
   ]}],
   note:'<strong>The 225 attempt.</strong> Warm up methodically — don\'t rush. Every warm-up set should feel controlled. When you unrack 225, take a big breath into your belly (Valsalva), lock the lats, lower controlled to the chest, pause 1 second, then drive. If it goes, that\'s a new PR. If it doesn\'t move, you learned exactly where you are. Either way, you win today.'
 }
},
{key:'2026-05-26',date:'May 26',dateNum:'26',dow:'Tuesday',tag:'lift',tagLabel:'Lift',
 week:'Week 10 — Phase 1 Peak',weekLabel:'Phase 1 · Deload prep week',summary:'Arms / back / legs — deload rep ranges',
 detail:{
   left:[{h:'Arms + Back + Legs — Deload Reps',rows:[
     {n:'Barbell curl',s:'3×8 @ 85 lbs (drop weight, higher reps)'},
     {n:'Lat pulldown',s:'3×10 @ 140 lbs'},
     {n:'Seated row',s:'3×10 @ 130 lbs'},
     {n:'Face pull',s:'3×15'},
     {n:'Goblet squat',s:'3×12 @ 65 lbs'},
     {n:'RDL',s:'3×10 @ 175 lbs'},
     {n:'Leg curl',s:'3×12'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Why Deload Now',rows:[
     {n:'10 weeks into Phase 1',v:'CNS fatigue accumulates'},
     {n:'225 attempt yesterday',v:'High neural demand'},
     {n:'Phase 2 starts June 8',v:'Arrive fresh and recovered'},
     {n:'This week',v:'60–70% intensity — maintain movement'},
   ]}],
   note:'This is a planned deload — not weakness, not going backwards. The fatigue you\'ve accumulated over 10 weeks needs to dissipate before Phase 2. Athletes who skip deloads plateau; athletes who include them break through to new levels.'
 }
},
{key:'2026-05-27',date:'May 27',dateNum:'27',dow:'Wednesday',tag:'run',tagLabel:'Run',
 week:'Week 10 — Phase 1 Peak',weekLabel:'Phase 1 · Easy run — deload week',summary:'Easy 5K — deload week running',
 detail:{
   left:[{h:'Easy 5K',rows:[
     {n:'Warm-up walk',s:'5 min'},
     {n:'Easy run',s:'9:30–10:00/mile — no pushing'},
     {n:'Cool-down',s:'10 min + full stretch'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]}],
   note:'Easy deload run. This is not a workout — it\'s active recovery. Don\'t let it become a tempo run. The goal is blood flow, mood, and maintaining the running habit.'
 }
},
{key:'2026-05-28',date:'May 28',dateNum:'28',dow:'Thursday',tag:'lift',tagLabel:'Lift',
 week:'Week 10 — Phase 1 Peak',weekLabel:'Phase 1 · Deload volume bench',summary:'Volume bench — deload weight',
 detail:{
   left:[{h:'Volume Bench — Deload',rows:[
     {n:'Band pull-aparts',s:'3×15'},
     {n:'Barbell bench',s:'3×10 @ 155 lbs (deload weight)'},
     {n:'Incline DB press',s:'3×12 @ 60 lbs'},
     {n:'Cable fly',s:'3×15 — light'},
     {n:'Ab circuit × 2',s:'Reduced volume'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]}],
   note:'Bench at 155 after weeks at 175–185 will feel easy. That\'s the point. You\'re allowing the connective tissue to recover. The 3-day fast starts June 1 — this deload sets you up to fast from a position of recovery, not exhaustion.'
 }
},
{key:'2026-05-29',date:'May 29',dateNum:'29',dow:'Friday',tag:'bag',tagLabel:'Bag',
 week:'Week 10 — Phase 1 Peak',weekLabel:'Phase 1 · Light bag — deload',summary:'Light bag only — 25 min easy rounds',
 detail:{
   left:[{h:'Bag Work — 25 min Light',rows:[
     {n:'Shadow boxing',s:'3 × 3 min (easy, technical focus)'},
     {n:'Light bag work',s:'3 × 3 min (50–60% effort)'},
     {n:'Technique only',s:'Focus on form, not power'},
   ]}],
   right:[{h:'Nutrition',rows:[
     {n:'Calories',v:'1,900'},
     {n:'Protein',v:'210g'},
   ]},{h:'Pre-Fast Nutrition Shift',rows:[
     {n:'Today',v:'Normal 1,900 cal'},
     {n:'Tomorrow (May 30)',v:'Start reducing carbs to 100g'},
     {n:'Sunday (May 31)',v:'Low carb — 80g, increase fat to 80g'},
     {n:'Fast starts',v:'June 1 morning'},
   ]}],
   note:'<strong>Last real training session before the 3-day fast.</strong> Keep it light. No need to push today. Focus on technique in the bag work — shadowbox your Phase 2 version of yourself.'
 }
},
{key:'2026-05-30',date:'May 30',dateNum:'30',dow:'Saturday',tag:'run',tagLabel:'Run',
 week:'Week 10 — Phase 1 Peak',weekLabel:'Phase 1 · Final May run',summary:'Final May 5K — benchmark run',
 detail:{
   left:[{h:'May Final 5K Benchmark',rows:[
     {n:'Warm-up',s:'8 min easy'},
     {n:'5K — moderate effort',s:'8:40–9:00/mile'},
     {n:'Goal',s:'Sub-27:00 — May final benchmark'},
     {n:'Cool-down',s:'15 min + full stretch'},
   ]}],
   right:[{h:'May 5K Progress',rows:[
     {n:'May 1 start',v:'~27:45'},
     {n:'May 30 target',v:'Sub-27:00'},
     {n:'June target',v:'Sub-26:30'},
     {n:'October target',v:'Sub-25:00'},
   ]},{h:'Pre-Fast Carb Reduction',rows:[
     {n:'Today\'s carbs',v:'~100g (reduced from 155g)'},
     {n:'Today\'s fat',v:'~70g (increased)'},
     {n:'Purpose',v:'Begin depleting glycogen for faster ketosis'},
   ]}],
   note:'<strong>May final benchmark.</strong> If you\'ve hit sub-27:00 today, you\'ve dropped 4 full minutes from your April 1 pace. That\'s exceptional progress. Log the time. June 3-day fast bridge starts Monday, then Phase 2 begins June 8.'
 }
},
{key:'2026-05-31',date:'May 31',dateNum:'31',dow:'Sunday',tag:'rest',tagLabel:'Rest',
 week:'Week 10 — Phase 1 Peak',weekLabel:'⚠️ Phase 1 complete · Fast starts tomorrow',summary:'Phase 1 complete — fast begins tomorrow',
 detail:{
   left:[{h:'Phase 1 Complete',rows:[
     {n:'Training',s:'Complete rest'},
     {n:'Final meal',s:'6pm — high fat, low carb, no rice'},
     {n:'After 6pm',s:'Water only — fast begins'},
     {n:'Electrolytes',s:'Have everything ready tonight'},
   ]},{h:'Pre-Fast Checklist',rows:[
     {n:'Pink salt (1 tsp/day)',s:'Ready'},
     {n:'Nu-Salt potassium',s:'Ready'},
     {n:'Magnesium glycinate 400mg',s:'Ready'},
     {n:'Green tea',s:'Ready'},
     {n:'Black coffee',s:'Ready'},
   ]}],
   right:[{h:'Phase 1 Final Stats',rows:[
     {n:'Duration',v:'12 weeks (Mar 16 – May 31)'},
     {n:'Weight change',v:'216 → ~207 lbs (est)'},
     {n:'Bench progress',v:'205×3 → 225×1 (goal met)'},
     {n:'5K progress',v:'~31:00 → ~27:00 (4 min improvement)'},
     {n:'Lifting sessions',v:'~48 sessions (4×/wk × 12 wks)'},
     {n:'Fasts completed',v:'1 × 5-day + 1 × 3-day (June 1)'},
   ]},{h:'Phase 2 Preview',rows:[
     {n:'Fast',v:'Jun 1–3 (3 days)'},
     {n:'Refeed',v:'Jun 4–7'},
     {n:'Phase 2 start',v:'June 8'},
     {n:'Goal',v:'207 → 200 lbs + functional strength'},
   ]}],
   note:'<strong>Phase 1 complete.</strong> 12 weeks of consistent work. You hit the bench goal, dropped 8–9 lbs, and built a running base from near zero. Phase 2 is where training becomes genuinely athletic — trap bar deadlifts, box jumps, weighted chins, and real functional strength. You earned it.'
 }
},

]
};

// ============================================================
// PHASES
// ============================================================
const PHASES = [
  {
    title: 'Phase 1: Cut + strength foundation',
    dates: 'Mar 16 – May 31, 2026',
    status: '🔵 IN PROGRESS',
    color: '#3b82f6',
    icon: '⚡',
    iconBg: 'rgba(59,130,246,0.2)',
    goals: [
      'Target: 216 → 206 lbs at 1,900 cal/day',
      'Bench press: 205×3 → 225×1',
      'Running: Build to 3×5K/week, target sub-27:00 by May',
      'Muay Thai / bag work: 2×/week alongside lifting',
      'Daily mobility: Built into every warm-up and cool-down',
      '5-day fast: Apr 5–9 (cellular reset, autophagy)',
      'Structure: 4 lifts/week — Mon heavy bench, Tue arms/back/legs, Thu volume bench, Fri arms/bag',
    ]
  },
  {
    title: '3-Day Fast bridge',
    dates: 'Jun 1–3, 2026',
    status: '⏳ UPCOMING',
    color: '#ef4444',
    icon: '🔴',
    iconBg: 'rgba(239,68,68,0.2)',
    goals: [
      'Water + electrolytes only — same protocol as April fast',
      'Body leaner at ~207 lbs = faster ketosis, deeper autophagy',
      'No training disruption — natural deload between phases',
      'Joint inflammation reset before functional loading begins',
      'Refeed Jun 4–7, resume training June 8',
    ]
  },
  {
    title: 'Phase 2: Functional strength cut',
    dates: 'Jun 8 – Jul 19, 2026',
    status: '⏳ UPCOMING',
    color: '#22c55e',
    icon: '🏋️',
    iconBg: 'rgba(34,197,94,0.2)',
    goals: [
      'Target: 207 → 200 lbs, 12–13% body fat',
      'Mon: Max effort lower (trap bar DL, goblet/safety bar squat)',
      'Tue: Max effort upper (bench, weighted chin-ups)',
      'Thu: Dynamic lower (box jumps, speed deadlifts, farmer carries)',
      'Fri: Dynamic upper (speed bench, explosive work)',
      'Bench target by Jul 19: 230×3 (est 245 1RM)',
      'Trap bar DL target: 380×1',
      'Squat target: 270×3 (est 290 1RM)',
      '5K target: approaching 8:30/mile pace',
      'Outdoor running 3×/week + Muay Thai 2×/week continues',
    ]
  },
  {
    title: 'Phase 3: Maintenance + strength build',
    dates: 'Aug – Nov 2026',
    status: '⏳ FUTURE',
    color: '#a855f7',
    icon: '🎯',
    iconBg: 'rgba(168,85,247,0.2)',
    goals: [
      'Hold 200 lbs permanently — 2,100–2,200 cal/day',
      'Same functional split — full volume, progressive overload',
      'Bench target: 235–240 lbs by October',
      'Squat target: 285 lbs',
      'Trap bar DL: 385–395 lbs',
      '5K target: sub-25:00 by September/October',
      '3-day fast in early September',
      'Outdoor running through Thanksgiving',
      'Muay Thai / bag 2×/week year-round',
    ]
  },
  {
    title: '5-Day fast + Winter strength phase',
    dates: 'Dec 2026 – Mar 2027',
    status: '⏳ FUTURE',
    color: '#f59e0b',
    icon: '❄️',
    iconBg: 'rgba(245,158,11,0.2)',
    goals: [
      '5-day fast Dec 1–5 — best autophagy response of the year',
      '5 days/week lifting: Mon squat, Tue bench, Wed DL, Thu OHP, Fri volume',
      'Framework: 5/3/1 or Texas Method',
      'Bench target: 225×6–8 reps (endurance, not just 1RM)',
      'Squat target: 275×3',
      'Trap bar DL target: 375×1',
      'Treadmill 2×/week to maintain 5K fitness base',
      'No outdoor running — pure strength focus',
      '3-day fast in March to bridge into spring',
    ]
  },
  {
    title: 'Phase 5–7: Peak strength + year 2',
    dates: 'Apr 2027 – Nov 2027',
    status: '⏳ FUTURE',
    color: '#14b8a6',
    icon: '🏆',
    iconBg: 'rgba(20,184,166,0.2)',
    goals: [
      'All original strength goals achieved or exceeded by June 2027',
      'Bench: 225×6–8 locked in — target 235×6',
      'Squat: 275–285 lbs',
      'Trap bar DL: 375–390 lbs',
      '5K: sub-25:00 locked in — target sub-23:00 by fall 2027',
      'Annual fasting rhythm established: 5-day June, 3-day Sep, 5-day Dec',
      '200 lbs held for 12+ consecutive months',
      'Strongest, healthiest, most athletic state of your adult life',
    ]
  },
];

// ============================================================
// METRICS / GOALS
// ============================================================
const METRICS = [
  {
    title: 'Body composition',
    items: [
      { label: 'Body weight', current: 200, target: 216, currentLabel: '216 lbs', targetLabel: 'Goal: 200 lbs', color: 'blue', note: 'Currently at 216 lbs — target 200 lbs by Jul 19, 2026' },
      { label: 'Body fat %', current: 81, target: 100, currentLabel: '~19%', targetLabel: 'Goal: 12–15%', color: 'purple', note: 'Estimated 19% now — target 12–15% at 200 lbs' },
    ]
  },
  {
    title: 'Strength targets',
    items: [
      { label: 'Bench press', current: 205, target: 225, currentLabel: '205 lbs', targetLabel: 'Goal: 225×1 (May)', color: 'blue', note: 'Mar 23 PR: 205×3. Phase 1 goal: 225×1 by May 31' },
      { label: 'Bench (long-term)', current: 205, target: 225, currentLabel: '205 lbs', targetLabel: 'Goal: 225×6–8', color: 'green', note: 'Winter 2026–27 goal: 225 for 6–8 reps' },
      { label: 'Squat (trap/goblet)', current: 70, target: 275, currentLabel: '70 lbs', targetLabel: 'Goal: 275 lbs', color: 'amber', note: 'Starting from scratch — goblet squat building to barbell' },
      { label: 'Deadlift (trap bar)', current: 0, target: 375, currentLabel: 'Starting', targetLabel: 'Goal: 375 lbs', color: 'red', note: 'Trap bar DL starts Phase 2 — target 375–380×1 by Jul 19' },
    ]
  },
  {
    title: 'Running',
    items: [
      { label: '5K time', current: 155, target: 186, currentLabel: '~31 min', targetLabel: 'Goal: sub-25 min', color: 'purple', note: 'April: 31 min → May: ~27 min → Oct: sub-25 min target' },
      { label: 'Weekly runs', current: 2, target: 3, currentLabel: '2–3/wk', targetLabel: 'Goal: 3×/week', color: 'teal', note: 'Target: 3 runs/week through outdoor season (Apr–Nov)' },
    ]
  },
  {
    title: 'Health markers',
    items: [
      { label: 'Joint inflammation', current: 60, target: 100, currentLabel: 'Reduced', targetLabel: 'Goal: Minimal', color: 'green', note: 'Fasting cycles + fish oil + mobility work reducing inflammation' },
      { label: 'Annual fasts', current: 1, target: 3, currentLabel: '1 complete', targetLabel: 'Goal: 3/year', color: 'red', note: 'Apr 5-day complete. Jun 3-day + Dec 5-day upcoming' },
    ]
  }
];
