import type { ScenarioTemplate } from './scenarioTemplates';

/** Additional human-written scenario templates (batch 2) — 18 templates */
export const EXTRA_SCENARIO_TEMPLATES: ScenarioTemplate[] = [
  {
    id: 'restaurant_complaint',
    title: 'A Complaint at a Restaurant',
    titleZh: '餐廳申訴',
    level: ['elementary', 'highschool', 'toeic'],
    domain: 'daily',
    content:
      'The soup arrived cold, so I decided to {{s1}} the problem politely. The waiter looked {{s2}} and offered to replace the dish at once. The manager later gave us a small {{s3}} on the bill. Overall, the staff handled the situation in a {{s4}} way.',
    contentZh:
      '湯送來時是冷的，因此我決定有禮貌地{{s1}}這個問題。服務生看起來很{{s2}}，並立刻表示要換一道菜。經理後來在帳單上給了我們一點{{s3}}。整體來說，員工用相當{{s4}}的方式處理了這件事。',
    slots: [
      { id: 's1', pos: 'v', tags: ['communication', 'action'] },
      { id: 's2', pos: 'adj', tags: ['emotion'] },
      { id: 's3', pos: 'n', tags: ['abstract', 'quantity', 'object'] },
      { id: 's4', pos: 'adj', tags: ['evaluation', 'positive'] },
    ],
  },
  {
    id: 'library_study',
    title: 'Studying in the Library',
    titleZh: '在圖書館讀書',
    level: ['elementary', 'highschool'],
    domain: 'campus',
    content:
      'I went to the library to {{s1}} for the final exam. The reading room was quiet and {{s2}}. After two hours I still could not {{s3}} one difficult concept. A classmate helped me with a short, {{s4}} explanation.',
    contentZh:
      '我到圖書館{{s1}}期末考。閱覽室安靜且{{s2}}。兩小時後我仍無法{{s3}}一個困難的概念。同學用簡短又{{s4}}的說明幫助了我。',
    slots: [
      { id: 's1', pos: 'v', tags: ['cognitive', 'process', 'action'] },
      { id: 's2', pos: 'adj', tags: ['evaluation', 'physical'] },
      { id: 's3', pos: 'v', tags: ['cognitive'] },
      { id: 's4', pos: 'adj', tags: ['evaluation', 'positive'] },
    ],
  },
  {
    id: 'job_interview',
    title: 'A Job Interview',
    titleZh: '一場面試',
    level: ['toeic', 'highschool', 'toefl_ielts'],
    domain: 'workplace',
    content:
      'Before the interview, I tried to {{s1}} my main strengths in a few sentences. The interviewer asked how I would {{s2}} a tight deadline. I gave a {{s3}} example from my last project. By the end I felt more {{s4}} about the outcome.',
    contentZh:
      '面試前，我試著用幾句話{{s1}}自己的主要優勢。面試官問我會如何{{s2}}緊迫的截止日期。我舉了一個上次專案中{{s3}}的例子。到了最後，我對結果感覺比較{{s4}}。',
    slots: [
      { id: 's1', pos: 'v', tags: ['communication', 'cognitive'] },
      { id: 's2', pos: 'v', tags: ['process', 'action'] },
      { id: 's3', pos: 'adj', tags: ['evaluation'] },
      { id: 's4', pos: 'adj', tags: ['emotion', 'positive'] },
    ],
  },
  {
    id: 'online_shopping',
    title: 'An Online Order Problem',
    titleZh: '網購出問題',
    level: ['elementary', 'highschool', 'toeic'],
    domain: 'daily',
    content:
      'My package did not arrive on the promised date, so I had to {{s1}} customer service. The agent was patient and {{s2}}. She explained that a local {{s3}} had slowed delivery. They offered to {{s4}} the item for free the next day.',
    contentZh:
      '包裹沒有在承諾日期送達，所以我必須{{s1}}客服。客服人員有耐心又{{s2}}。她解釋是當地的{{s3}}拖慢了配送。他們提出隔天免費{{s4}}這項商品。',
    slots: [
      { id: 's1', pos: 'v', tags: ['communication', 'action'] },
      { id: 's2', pos: 'adj', tags: ['evaluation', 'emotion', 'positive'] },
      { id: 's3', pos: 'n', tags: ['abstract', 'state_change'] },
      { id: 's4', pos: 'v', tags: ['process', 'action'] },
    ],
  },
  {
    id: 'team_conflict',
    title: 'Resolving a Team Conflict',
    titleZh: '化解團隊衝突',
    level: ['highschool', 'toeic', 'toefl_ielts'],
    domain: 'social',
    content:
      'Two members began to {{s1}} over the project direction. The tension was becoming {{s2}} for everyone else. I suggested we {{s3}} each person five minutes to speak. After that, the group found a more {{s4}} compromise.',
    contentZh:
      '兩位成員開始為專案方向{{s1}}。緊張氣氛對其他人來說愈來愈{{s2}}。我建議讓每人{{s3}}五分鐘發言。之後，小組找到較{{s4}}的折衷方案。',
    slots: [
      { id: 's1', pos: 'v', tags: ['communication', 'social'] },
      { id: 's2', pos: 'adj', tags: ['emotion', 'evaluation', 'negative'] },
      { id: 's3', pos: 'v', tags: ['process', 'social'] },
      { id: 's4', pos: 'adj', tags: ['evaluation', 'positive'] },
    ],
  },
  {
    id: 'health_routine',
    title: 'Building a Health Routine',
    titleZh: '建立健康習慣',
    level: ['elementary', 'highschool'],
    domain: 'daily',
    content:
      'I decided to {{s1}} a simple morning routine last month. At first the change felt {{s2}}. After a few weeks, my energy levels began to {{s3}}. Now the habit feels almost {{s4}}.',
    contentZh:
      '上個月我決定{{s1}}一套簡單的晨間作息。一開始這項改變感覺{{s2}}。幾週後，我的精力開始{{s3}}。現在這個習慣幾乎變得{{s4}}。',
    slots: [
      { id: 's1', pos: 'v', tags: ['process', 'action'] },
      { id: 's2', pos: 'adj', tags: ['evaluation', 'emotion'] },
      { id: 's3', pos: 'v', tags: ['state_change', 'positive'] },
      { id: 's4', pos: 'adj', tags: ['evaluation', 'time'] },
    ],
  },
  {
    id: 'news_article',
    title: 'A Short News Report',
    titleZh: '一則短新聞',
    level: ['highschool', 'toefl_ielts', 'advanced'],
    domain: 'science',
    content:
      'City officials plan to {{s1}} a new public transport line next year. Critics say the budget is too {{s2}}. Supporters argue the project will {{s3}} traffic in the long run. Public opinion remains {{s4}}.',
    contentZh:
      '市府計劃明年{{s1}}一條新的大眾運輸路線。批評者認為預算過於{{s2}}。支持者主張這項計畫長期將{{s3}}交通。民意目前仍{{s4}}。',
    slots: [
      { id: 's1', pos: 'v', tags: ['process', 'action'] },
      { id: 's2', pos: 'adj', tags: ['evaluation', 'quantity', 'negative'] },
      { id: 's3', pos: 'v', tags: ['state_change', 'action'] },
      { id: 's4', pos: 'adj', tags: ['evaluation'] },
    ],
  },
  {
    id: 'lab_experiment',
    title: 'A Lab Experiment',
    titleZh: '一場實驗',
    level: ['toefl_ielts', 'advanced', 'highschool'],
    domain: 'academic',
    content:
      'Students were asked to {{s1}} the effect of temperature on the reaction. The first trial produced {{s2}} results. After they adjusted the method, the data became more {{s3}}. The teacher praised their {{s4}} notes.',
    contentZh:
      '學生被要求{{s1}}溫度對反應的影響。第一次試驗產生了{{s2}}的結果。調整方法後，資料變得更{{s3}}。老師稱讚他們的筆記很{{s4}}。',
    slots: [
      { id: 's1', pos: 'v', tags: ['cognitive', 'process'] },
      { id: 's2', pos: 'adj', tags: ['evaluation', 'negative'] },
      { id: 's3', pos: 'adj', tags: ['evaluation', 'positive'] },
      { id: 's4', pos: 'adj', tags: ['evaluation'] },
    ],
  },
  {
    id: 'volunteer_day',
    title: 'A Day of Volunteering',
    titleZh: '志工的一天',
    level: ['elementary', 'highschool', 'toeic'],
    domain: 'social',
    content:
      'We spent the morning helping to {{s1}} food packages for families in need. The work was simple but {{s2}}. By noon we had finished a {{s3}} number of boxes. Everyone left feeling {{s4}}.',
    contentZh:
      '我們整個早上幫忙{{s1}}給有需要家庭的食物包裹。工作簡單卻{{s2}}。中午之前我們完成了{{s3}}數量的箱子。大家離開時都覺得{{s4}}。',
    slots: [
      { id: 's1', pos: 'v', tags: ['process', 'action', 'social'] },
      { id: 's2', pos: 'adj', tags: ['evaluation', 'emotion'] },
      { id: 's3', pos: 'adj', tags: ['quantity'] },
      { id: 's4', pos: 'adj', tags: ['emotion', 'positive'] },
    ],
  },
  {
    id: 'presentation_nerves',
    title: 'Presenting to the Class',
    titleZh: '在課堂上台報告',
    level: ['elementary', 'highschool'],
    domain: 'campus',
    content:
      'I felt {{s1}} before walking to the front of the room. I tried to {{s2}} slowly and look at the audience. After the first slide, my fear began to {{s3}}. The teacher said my points were clear and {{s4}}.',
    contentZh:
      '走到教室前方之前，我覺得很{{s1}}。我試著慢慢{{s2}}並看著聽眾。第一張投影片之後，恐懼開始{{s3}}。老師說我的重點清楚又{{s4}}。',
    slots: [
      { id: 's1', pos: 'adj', tags: ['emotion', 'negative'] },
      { id: 's2', pos: 'v', tags: ['communication', 'action'] },
      { id: 's3', pos: 'v', tags: ['state_change'] },
      { id: 's4', pos: 'adj', tags: ['evaluation', 'positive'] },
    ],
  },
  {
    id: 'budget_review',
    title: 'A Budget Review Meeting',
    titleZh: '預算檢討會議',
    level: ['toeic', 'toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      "The finance team met to {{s1}} next quarter's spending plan. Several items looked {{s2}} compared with last year. The director asked everyone to {{s3}} unnecessary costs. The final plan was more {{s4}} than the first draft.",
    contentZh:
      '財務團隊開會{{s1}}下季的支出計畫。有幾項與去年相比顯得{{s2}}。主管要求大家{{s3}}不必要的成本。最終版本比初稿更{{s4}}。',
    slots: [
      { id: 's1', pos: 'v', tags: ['cognitive', 'process'] },
      { id: 's2', pos: 'adj', tags: ['evaluation', 'quantity'] },
      { id: 's3', pos: 'v', tags: ['action', 'process'] },
      { id: 's4', pos: 'adj', tags: ['evaluation', 'positive'] },
    ],
  },
  {
    id: 'travel_plan',
    title: 'Planning a Trip',
    titleZh: '規劃一趟旅行',
    level: ['elementary', 'highschool', 'toeic'],
    domain: 'travel',
    content:
      'We needed to {{s1}} a route that fit both time and budget. The coastal road looked {{s2}} on the map. In the end we chose a shorter path to {{s3}} long drives. The whole plan felt {{s4}}.',
    contentZh:
      '我們需要{{s1}}一條同時符合時間與預算的路線。地圖上海邊的路看起來很{{s2}}。最後我們選了較短的路徑以{{s3}}長途開車。整個計畫感覺{{s4}}。',
    slots: [
      { id: 's1', pos: 'v', tags: ['cognitive', 'process'] },
      { id: 's2', pos: 'adj', tags: ['evaluation', 'positive'] },
      { id: 's3', pos: 'v', tags: ['action'] },
      { id: 's4', pos: 'adj', tags: ['evaluation', 'positive'] },
    ],
  },
  {
    id: 'essay_feedback',
    title: 'Feedback on an Essay',
    titleZh: '作文回饋',
    level: ['highschool', 'toefl_ielts', 'advanced'],
    domain: 'academic',
    content:
      'My tutor asked me to {{s1}} the main argument in the introduction. She said some examples were not {{s2}} enough. I revised the conclusion to {{s3}} the key points more clearly. The second draft was far more {{s4}}.',
    contentZh:
      '指導老師要我在引言{{s1}}主要論點。她說有些例子不夠{{s2}}。我修改結論，更清楚地{{s3}}重點。第二稿明顯更{{s4}}。',
    slots: [
      { id: 's1', pos: 'v', tags: ['communication', 'cognitive'] },
      { id: 's2', pos: 'adj', tags: ['evaluation'] },
      { id: 's3', pos: 'v', tags: ['communication', 'cognitive'] },
      { id: 's4', pos: 'adj', tags: ['evaluation', 'positive'] },
    ],
  },
  {
    id: 'customer_call',
    title: 'A Customer Service Call',
    titleZh: '客服電話',
    level: ['toeic', 'highschool'],
    domain: 'workplace',
    content:
      'The caller sounded {{s1}} about a billing error. I listened carefully and tried to {{s2}} the account details. After a quick check, I was able to {{s3}} the mistake. The customer thanked me in a {{s4}} tone.',
    contentZh:
      '來電者對帳單錯誤顯得相當{{s1}}。我仔細聆聽並試著{{s2}}帳戶細節。快速核對後，我成功{{s3}}了錯誤。客戶用{{s4}}的語氣向我道謝。',
    slots: [
      { id: 's1', pos: 'adj', tags: ['emotion', 'negative'] },
      { id: 's2', pos: 'v', tags: ['cognitive', 'process'] },
      { id: 's3', pos: 'v', tags: ['process', 'action'] },
      { id: 's4', pos: 'adj', tags: ['emotion', 'evaluation', 'positive'] },
    ],
  },
  {
    id: 'museum_visit',
    title: 'A Visit to the Museum',
    titleZh: '參觀博物館',
    level: ['elementary', 'highschool'],
    domain: 'daily',
    content:
      'The exhibition helped visitors {{s1}} how people lived two centuries ago. Some displays were especially {{s2}}. I took notes so I could {{s3}} the main ideas later. The whole afternoon felt {{s4}}.',
    contentZh:
      '展覽幫助訪客{{s1}}兩百年前人們如何生活。有些展品特別{{s2}}。我做了筆記，方便之後{{s3}}主要概念。整個下午感覺很{{s4}}。',
    slots: [
      { id: 's1', pos: 'v', tags: ['cognitive'] },
      { id: 's2', pos: 'adj', tags: ['evaluation', 'emotion'] },
      { id: 's3', pos: 'v', tags: ['cognitive', 'action'] },
      { id: 's4', pos: 'adj', tags: ['evaluation', 'positive', 'emotion'] },
    ],
  },
  {
    id: 'startup_pitch',
    title: 'Pitching a Startup Idea',
    titleZh: '提案新創構想',
    level: ['toeic', 'toefl_ielts', 'advanced'],
    domain: 'workplace',
    content:
      'The founders had only ten minutes to {{s1}} their product. Investors asked how the team would {{s2}} early competition. The financial model still looked a bit {{s3}}. Even so, several people found the vision {{s4}}.',
    contentZh:
      '創辦人只有十分鐘可以{{s1}}他們的產品。投資人問團隊將如何{{s2}}早期競爭。財務模型看起來仍有點{{s3}}。即便如此，仍有幾位認為願景很{{s4}}。',
    slots: [
      { id: 's1', pos: 'v', tags: ['communication', 'action'] },
      { id: 's2', pos: 'v', tags: ['process', 'action'] },
      { id: 's3', pos: 'adj', tags: ['evaluation', 'negative'] },
      { id: 's4', pos: 'adj', tags: ['evaluation', 'positive', 'emotion'] },
    ],
  },
  {
    id: 'weather_warning',
    title: 'A Weather Warning',
    titleZh: '一則氣象警訊',
    level: ['highschool', 'toeic', 'toefl_ielts'],
    domain: 'science',
    content:
      'Authorities urged residents to {{s1}} outdoor activities during the storm. Winds were expected to {{s2}} overnight. Local shelters prepared to {{s3}} people who needed a safe place. Officials described the risk as {{s4}}.',
    contentZh:
      '當局敦促居民在暴風雨期間{{s1}}戶外活動。風勢預計會在夜間{{s2}}。地方收容所準備{{s3}}需要安全處所的人。官員形容風險相當{{s4}}。',
    slots: [
      { id: 's1', pos: 'v', tags: ['action'] },
      { id: 's2', pos: 'v', tags: ['state_change'] },
      { id: 's3', pos: 'v', tags: ['process', 'social', 'action'] },
      { id: 's4', pos: 'adj', tags: ['evaluation', 'negative', 'quantity'] },
    ],
  },
  {
    id: 'language_exchange',
    title: 'A Language Exchange Meetup',
    titleZh: '語言交換聚會',
    level: ['elementary', 'highschool'],
    domain: 'social',
    content:
      'At the meetup I tried to {{s1}} a short story in English. My partner was patient and {{s2}}. When I made a mistake, she helped me {{s3}} the sentence. By the end I felt less {{s4}} about speaking.',
    contentZh:
      '在聚會上我試著用英文{{s1}}一個小故事。搭檔很有耐心又{{s2}}。我說錯時，她幫我{{s3}}句子。到了最後，我對開口說話比較不那麼{{s4}}。',
    slots: [
      { id: 's1', pos: 'v', tags: ['communication', 'action'] },
      { id: 's2', pos: 'adj', tags: ['evaluation', 'emotion', 'positive'] },
      { id: 's3', pos: 'v', tags: ['process', 'communication'] },
      { id: 's4', pos: 'adj', tags: ['emotion', 'negative'] },
    ],
  },
];
