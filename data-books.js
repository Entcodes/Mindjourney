/* 书架数据：第一、二层，各五本（第三层见 data-books-shelf3.js）
 * 全部内容为中英双语；教授的话用第三人称叙述（"教授说，学生可以……"）
 */
window.BOOKS = [
  /* ================= 第一层：情绪之书 ================= */
  {
    id: 'anger',
    shelf: 1,
    slot: 0,
    colorName: { zh: '红', en: 'Red' },
    skin: { cover: '#c0392b', spine: '#8e2218', edge: '#3b120c', gold: '#f2c14e', pages: '#f7e9cf' },
    title: { zh: '怒潮', en: 'The Tide of Anger' },
    subtitle: { zh: '心情暴怒时，先握住这几句话', en: 'Sentences to hold when anger peaks' },
    mood: { zh: '暴怒 / 义愤', en: 'Rage / righteous anger' },
    intro: {
      zh: '学生翻开第一本红色的书。教授没有立刻说话——她知道人在气头上听不进长句子。书页上只有短句，一句一行，像可以扶着走的台阶。',
      en: 'The student opens the first red book. The professor says nothing at once; she knows a furious person cannot hold a long sentence. The page carries short lines only, one per row, like a handrail on stairs.'
    },
    relief: [
      {
        zh: '我现在很怒，这说明我在保护一样东西。',
        en: 'I am furious, which means something of mine is being defended.',
        note: { zh: '给愤怒找理由，比压住它更快降温。', en: 'Naming the purpose of anger cools it faster than suppressing it.' }
      },
      {
        zh: '先让身体降下来，再让事情讲清楚。',
        en: 'Let the body come down first; let the facts be said second.',
        note: { zh: '愤怒是生理唤醒，前 6～20 秒不适合做决定。', en: 'Anger is physiological arousal; the first 6–20 seconds are bad for decisions.' }
      },
      {
        zh: '我可以生气，但我不必按下发送键。',
        en: 'I am allowed to be angry, and still not allowed to press send.',
        note: { zh: '把"感受"和"动作"分开，是情绪调节最省事的一刀。', en: 'Separating feeling from action is the cheapest cut in emotion regulation.' }
      },
      {
        zh: '这句话三年后我还想让它成立吗？',
        en: 'Do I want this sentence to still be true of me in three years?',
        note: { zh: '时间透视（temporal distancing）能自动降低愤怒强度。', en: 'Temporal distancing reliably lowers anger intensity.' }
      },
      {
        zh: '我要的是被听见，不是被治好。',
        en: 'I want to be heard, not cured.',
        note: { zh: '把需求说具体，怒气会转成可表达的要求。', en: 'Making the need specific turns rage into a request that can be spoken.' }
      }
    ],
    literature: [
      {
        work: { zh: '《简·爱》夏洛蒂·勃朗特，1847，第二十三章', en: 'Jane Eyre, Charlotte Brontë, 1847, ch. 23' },
        quote: {
          zh: '你以为，因为我穷、低微、不美、矮小，我就没有灵魂，也没有心吗？你想错了！——我的灵魂跟你一样，我的心也跟你的完全一样。',
          en: 'Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless? You think wrong! — I have my feelings as well as you.'
        },
        kind: { zh: '原文英译对照', en: 'Original' },
        show: {
          zh: '示范的是"义愤"：简没有被羞辱压成沉默，她把愤怒整理成一段可以被听见的论证——先反驳前提，再声明平等，最后提出要求。',
          en: 'What is demonstrated is righteous anger: Jane is not crushed into silence. She organises fury into an argument — reject the premise, declare equality, then state the demand.'
        }
      },
      {
        work: { zh: '《李尔王》莎士比亚，第三幕第二场', en: 'King Lear, Shakespeare, Act III sc. 2' },
        quote: {
          zh: '吹吧，风啊！把你们的腮帮子都吹破！……我是一个人，一个被人得罪比得罪人更多的人。',
          en: 'Blow, winds, and crack your cheeks! … I am a man / More sinned against than sinning.'
        },
        kind: { zh: '中译（据英文原文回译）', en: 'Translated back from English' },
        show: {
          zh: '示范的是"暴怒加绝望"：李尔在暴风雨里对着天喊，教授说，这是愤怒最诚实的样子——它常常不是攻击，而是受伤的人在确认自己还活着。',
          en: 'What is demonstrated is rage layered on grief: Lear shouts at the storm. The professor says this is anger at its most honest — often not attack, but a wounded person checking that they are still alive.'
        }
      },
      {
        work: { zh: '《记念刘和珍君》鲁迅，1926', en: '“In Memory of Miss Liu Hezhen”, Lu Xun, 1926' },
        quote: {
          zh: '不在沉默中爆发，就在沉默中灭亡。',
          en: 'Out of silence bursts fury, or out of silence comes death.'
        },
        kind: { zh: '原文（中文）', en: 'Original (Chinese)' },
        show: {
          zh: '示范的是"愤怒的两种命运"：教授说，所以书屋给怒气找了第三条路——不爆发也不灭亡，而是把它写成一句话、说给一个人。',
          en: 'What is demonstrated is the two fates of anger. The professor adds a third path: not explosion, not perishing, but turning it into one sentence said to one person.'
        }
      },
      {
        work: { zh: '《红楼梦》第三十一回 撕扇子作千金一笑', en: '“Dream of the Red Chamber”, ch. 31 (the torn fans)' },
        quote: {
          zh: '（情节大意）晴雯把扇子嗤嗤地撕了，宝玉笑着说，这些东西原是为哄人一笑的。',
          en: '(Scene, paraphrased) She tears the fans one by one; he laughs and says such things were made to buy a smile.'
        },
        kind: { zh: '情节大意，非逐字原文', en: 'Paraphrased scene, not verbatim' },
        show: {
          zh: '示范的是"怒气的转移"：把怒气换成一个可以撕的物件。教授提醒：撕东西只对一次有效，第二次要用语言。',
          en: 'What is demonstrated is displacement — trading rage for a tearable object. The professor warns: it works once; the second time, use words.'
        }
      },
      {
        work: { zh: '《愤怒的葡萄》斯坦贝克，1939，汤姆·约德的告别', en: 'The Grapes of Wrath, Steinbeck, 1939 — Tom Joad’s farewell' },
        quote: {
          zh: ' wherever you look in the dark, there I’ll be. … 你生气的时候，我就在那里。',
          en: 'Wherever you look in the dark, there I’ll be … wherever you’re mad, there I am.'
        },
        kind: { zh: '大意（英译文为通行译法）', en: 'Paraphrase of a famous closing monologue' },
        show: {
          zh: '示范的是"愤怒被赋予意义"：怒气不再只是热度，而成了一个人在世界上的位置。',
          en: 'What is demonstrated is anger given meaning: no longer mere heat, but a place a person occupies in the world.'
        }
      }
    ],
    methods: [
      {
        name: { zh: '六秒法则 + 生理叹息', en: 'Six-second rule + physiological sigh' },
        source: { zh: '源自 Huberman Lab 对 Andrew Huberman 呼吸方案的科普；与 APA 对"降温期 (time-out)"的建议一致', en: 'Popularised breathing protocol; consistent with the APA’s advice on taking a time-out' },
        when: { zh: '心跳很快、手在抖、想说狠话的那一刻', en: 'Heart racing, hands shaking, about to say the cruel thing' },
        steps: [
          { zh: '两次短吸气接一次长呼气，重复 3 次。', en: 'Two quick inhales, one long exhale; repeat three times.' },
          { zh: '把要说的话写在纸上，不发送。', en: 'Write the sentence you want to say. Do not send it.' },
          { zh: '数六秒再开口；愤怒的化学浪潮大约在这个窗口退去。', en: 'Wait six seconds before speaking; the chemical surge of anger begins to ebb in that window.' }
        ]
      },
      {
        name: { zh: 'TIPP：冷、剧烈运动、肌肉放松', en: 'TIPP: temperature, intense exercise, paced breathing' },
        source: { zh: 'DBT 辩证行为疗法痛苦耐受模块（Marsha Linehan 提出）', en: 'Dialectical Behaviour Therapy distress-tolerance module (Marsha Linehan)' },
        when: { zh: '怒气已经到 9～10 分，脑子开始不听使唤', en: 'When anger is at 9–10/10 and thinking has gone quiet' },
        steps: [
          { zh: '冷水敷脸 15～30 秒（或握冰块）。', en: 'Cold on the face for 15–30 seconds, or hold ice.' },
          { zh: '快走 / 开合跳 1～3 分钟，把肾上腺素用掉。', en: 'Walk fast or do jumping jacks for 1–3 minutes to burn the adrenaline.' },
          { zh: '再谈那件事，此时语言系统已经上线。', en: 'Only then discuss the issue; the language system is back online.' }
        ]
      },
      {
        name: { zh: '认知重评：换个说法', en: 'Cognitive reappraisal' },
        source: { zh: 'James Gross 情绪调节过程模型（斯坦福大学）', en: 'James Gross’s process model of emotion regulation (Stanford)' },
        when: { zh: '反复想同一件让自己生气的事（反刍）', en: 'When the same infuriating event keeps replaying (rumination)' },
        steps: [
          { zh: '写下"他让我觉得……"', en: 'Write “He made me feel …”.' },
          { zh: '改写成"我在乎的是……"', en: 'Rewrite it as “What I care about is …”.' },
          { zh: '列出三种对对方动机的解释，各给一个证据强度。', en: 'List three explanations of their motive and rate how much evidence each has.' }
        ]
      }
    ],
    memory: [
      { zh: '我需要先降温，再讲理。', en: 'Cool the body first, argue second.' },
      { zh: '我的怒气里有我的价值观。', en: 'My anger contains my values.' },
      { zh: '简·爱：我也一样有感情。 / I have my feelings as well as you.', en: 'Jane Eyre: I have my feelings as well as you.' },
      { zh: '感受 ≠ 动作。', en: 'Feeling ≠ action.' }
    ]
  },

  {
    id: 'moodmap',
    shelf: 1,
    slot: 1,
    colorName: { zh: '绿', en: 'Green' },
    skin: { cover: '#3f7d3a', spine: '#2a5727', edge: '#12280f', gold: '#e8d27a', pages: '#f3f0d8' },
    title: { zh: '心情地图', en: 'The Mood Map' },
    subtitle: { zh: '用权威量表把心情归类，再配方法与场景', en: 'Classify mood with standard instruments, then match a method to it' },
    mood: { zh: '全部心情的分类', en: 'Classification of all moods' },
    intro: {
      zh: '第二本书是绿色的。教授在这一页放的不是安慰，而是尺子——先把心情归好类，方法才谈得上适用场景。',
      en: 'The second book is green. The professor places rulers here rather than comfort — name the category first, and only then does a method have a place where it fits.'
    },
    moodMapIntro: {
      zh: '分类依据来自三套公开发表的量表与两套公开资源：POMS 心境状态量表（McNair、Lorr 与 Dropple，1971；Norton 1983 修订版）把心境分为六个维度；PANAS 正性负性情绪量表（Watson、Clark 与 Tellegen，1988）用两个独立维度打分；罗素的情绪环状模型（Russell，1980）用"愉悦度 × 唤醒度"画出一张地图。方法一侧则按 Gross 情绪调节过程模型的五个时机来配。美国心理学会 APA、美国国立精神卫生研究所 NIMH 与世界卫生组织 WHO 的公开心理科普资料是这些方法的应用出处。',
      en: 'Categories follow three published instruments and two public resources: the POMS mood states scale (McNair, Lorr & Dropple, 1971; Norton, 1983 revision) splits mood into six factors; PANAS (Watson, Clark & Tellegen, 1988) scores positive and negative affect as separate axes; Russell’s circumplex (1980) maps mood on pleasantness × arousal. Methods are then matched to the five timing points of Gross’s process model. Public education material from the American Psychological Association, the U.S. National Institute of Mental Health and the World Health Organization is where those methods are applied.'
    },
    groups: [
      {
        key: 'tension',
        name: { zh: '紧张 – 焦虑', en: 'Tension – Anxiety' },
        poms: 'POMS-1',
        quadrant: { zh: '不愉快 × 高唤醒', en: 'Unpleasant × high arousal' },
        sign: {
          zh: '心跳快、胃里发紧、反复检查已经做完的事、睡不着但脑子很亮。',
          en: 'Fast heart, tight stomach, re-checking finished work, unable to sleep while the mind stays bright.'
        },
        method: [
          { zh: '5-4-3-2-1 接地：说出看到 5、摸到 4、听到 3、闻到 2、尝到 1。', en: '5-4-3-2-1 grounding: name 5 seen, 4 touched, 3 heard, 2 smelled, 1 tasted.' },
          { zh: '担忧时间：每天固定 15 分钟专门用来担心，其余时间把担忧记一行延后。', en: 'Worry window: 15 fixed minutes a day for worrying; at other times note the worry in one line and defer it.' },
          { zh: '渐进式肌肉放松：从脚到脸，每组绷紧 5 秒、松开 15 秒。', en: 'Progressive muscle relaxation: feet to face, tense 5 s, release 15 s.' }
        ],
        scene: { zh: '考试前、上台前、等成绩、等人回消息', en: 'Before an exam, before going on stage, waiting for a grade or a reply' },
        fitStage: { zh: 'Gross 模型的"反应调节"与"注意分配"', en: 'Response modulation and attention deployment in Gross’s model' },
        book: 'anxiety'
      },
      {
        key: 'depression',
        name: { zh: '抑郁 – 沮丧', en: 'Depression – Melancholy' },
        poms: 'POMS-2',
        quadrant: { zh: '不愉快 × 低唤醒', en: 'Unpleasant × low arousal' },
        sign: {
          zh: '对原本喜欢的事失去兴趣、说话变少、白天也想躺着、觉得努力没意义。',
          en: 'Loss of interest in things once loved, less speech, wanting to lie down in daylight, effort feeling pointless.'
        },
        method: [
          { zh: '行为激活（BA）：先做小事，动机跟在行动后面，而不是等心情好了再做。', en: 'Behavioural activation: do the small thing first; motivation follows action rather than preceding it.' },
          { zh: '表达性书写：连续 3～4 天、每天 15 分钟写下最深的想法（Pennebaker 范式）。', en: 'Expressive writing: 15 minutes a day for 3–4 consecutive days on the deepest thoughts (Pennebaker paradigm).' },
          { zh: '两周规则：低落持续两周以上且影响功能，就去找专业评估。', en: 'Two-week rule: if low mood lasts beyond two weeks and harms function, seek a professional assessment.' }
        ],
        scene: { zh: '连续失败后、学期末的空、人际疏离期、季节变化', en: 'After repeated failure, end-of-term emptiness, social distance, seasonal shifts' },
        fitStage: { zh: '"情境选择"最重要：先安排一个能让人出现在世界里的场景', en: 'Situation selection matters most: schedule one scene that puts the person in the world' },
        book: 'meaning'
      },
      {
        key: 'anger',
        name: { zh: '愤怒 – 敌意', en: 'Anger – Hostility' },
        poms: 'POMS-3',
        quadrant: { zh: '不愉快 × 高唤醒', en: 'Unpleasant × high arousal' },
        sign: { zh: '下颌绷紧、想提高音量、对别人的动机做最坏解释。', en: 'Jaw tight, volume rising, worst-case reading of other people’s motives.' },
        method: [
          { zh: '六秒 + 生理叹息，再开口（见第一本红书）。', en: 'Six seconds plus a physiological sigh before speaking (see the red book).' },
          { zh: '把"他总是"改成"这一次"，去掉概括化。', en: 'Change “he always” into “this once”, removing over-generalisation.' },
          { zh: '写一封不寄出的信，把要求留在最后一行。', en: 'Write an unsent letter; keep the request in the last line.' }
        ],
        scene: { zh: '被误解、边界被侵犯、不公平的分派', en: 'Being misread, a boundary crossed, an unfair share of work' },
        fitStage: { zh: '"认知改变"（重评）+ 身体先行', en: 'Cognitive change (reappraisal) with the body going first' },
        book: 'anger'
      },
      {
        key: 'vigor',
        name: { zh: '活力 – 精力充沛', en: 'Vigor – Activity' },
        poms: 'POMS-4',
        quadrant: { zh: '愉快 × 高唤醒', en: 'Pleasant × high arousal' },
        sign: { zh: '愿意开始难的事、注意力能拉长、想跟人说话。', en: 'Willing to start hard work, attention spans lengthen, wanting company.' },
        method: [
          { zh: '这是资源窗口：把最需要提取练习的任务（背单词、写作文）放在这里。', en: 'A resource window: put the tasks that need retrieval practice (vocab, essay drafts) here.' },
          { zh: '记录"我今天在什么时候状态最好"，两周后就能预测自己。', en: 'Log when you felt best; after two weeks you can predict yourself.' },
          { zh: '存一点给明天：不要在状态最好时把所有额度用完。', en: 'Save some for tomorrow: do not spend everything at the peak.' }
        ],
        scene: { zh: '睡足之后、运动之后、刚完成一件小事的成就感里', en: 'After full sleep, after exercise, in the glow of one finished small thing' },
        fitStage: { zh: '"情境修改"：主动改造环境让自己更难分心', en: 'Situation modification: redesign the environment so distraction costs more' },
        book: 'learning'
      },
      {
        key: 'fatigue',
        name: { zh: '疲劳 – 迟钝', en: 'Fatigue – Inertia' },
        poms: 'POMS-5',
        quadrant: { zh: '不愉快或平淡 × 低唤醒', en: 'Unpleasant or flat × low arousal' },
        sign: { zh: '眼睛干、读两行就走神、咖啡因开始不管用。', en: 'Dry eyes, drifting after two lines, caffeine losing its grip.' },
        method: [
          { zh: '把"我不够努力"换成"我的睡眠不够"，先去查睡眠剂量。', en: 'Replace “I don’t try hard enough” with “I don’t sleep enough”, and audit the sleep dose.' },
          { zh: '20 分钟小睡或 10 分钟日光；下午三点后不摄入咖啡因。', en: 'A 20-minute nap or 10 minutes of daylight; no caffeine after 3 p.m.' },
          { zh: '疲劳时只做低认知任务：整理笔记、抄清单，不做新学习。', en: 'In fatigue, only low-load tasks: tidy notes, copy lists, no new material.' }
        ],
        scene: { zh: '连续熬夜后、经期前后、长午后、久坐不动的日子', en: 'After all-nighters, around a cycle, long afternoons, days of sitting still' },
        fitStage: { zh: '"情境选择"：改变一天里的时段，而不是硬扛', en: 'Situation selection: move the hour rather than grind through it' },
        book: 'body'
      },
      {
        key: 'confusion',
        name: { zh: '困惑 – 混乱', en: 'Confusion – Bewilderment' },
        poms: 'POMS-6',
        quadrant: { zh: '不愉快 × 中高唤醒（认知侧）', en: 'Unpleasant × mid-high arousal (cognitive side)' },
        sign: { zh: '不知道先做哪个、打开十个页面、"我到底想干什么"反复出现。', en: 'No idea what to start with, ten tabs open, “what do I even want” on repeat.' },
        method: [
          { zh: '外部化：把全部待办写在一页纸上，大脑只负责判断不负责存储。', en: 'Externalise: write every open loop on one page; the brain judges, it does not store.' },
          { zh: '单任务 + 计时器 25 分钟，只允许一个窗口。', en: 'Single task on a 25-minute timer, one window only.' },
          { zh: '决策降级：把"我该学什么"改成"接下来 25 分钟做哪一道题"。', en: 'Downgrade the decision: turn “what should I study” into “which one question for the next 25 minutes”.' }
        ],
        scene: { zh: '多任务并行期、选科选专业、信息过载的晚上', en: 'Parallel-task weeks, choosing a major, information-heavy evenings' },
        fitStage: { zh: '"注意分配"：把注意力从噪声收回主线', en: 'Attention deployment: pull focus back from noise to the main line' },
        book: 'procrastination'
      }
    ],
    methods: [
      {
        name: { zh: '情绪命名（affect labelling）', en: 'Affect labelling' },
        source: { zh: 'Lieberman 等人关于"给情绪贴标签可降低杏仁核反应"的研究；也是 NIMH 心理科普中常见的建议', en: 'Lieberman and colleagues on labelling reducing amygdala response; a common recommendation in NIMH psychoeducation' },
        when: { zh: '说不清自己怎么了的时候——先在这本书的签到区选维度', en: 'When you cannot say what is wrong — pick a dimension in the check-in below first' },
        steps: [
          { zh: '选一个 POMS 维度词，不要选"心情不好"这种模糊词。', en: 'Choose one POMS factor word, not a vague “I feel bad”.' },
          { zh: '加一句触发点："因为刚才……"', en: 'Add the trigger: “because just now …”.' },
          { zh: '再选方法：高唤醒先降温，低唤醒先行动。', en: 'Then pick the method: high arousal cools down first, low arousal acts first.' }
        ]
      },
      {
        name: { zh: '情绪环状定位（valence × arousal）', en: 'Circumplex location (valence × arousal)' },
        source: { zh: 'Russell, 1980 情绪环状模型', en: 'Russell’s circumplex model of affect, 1980' },
        when: { zh: '每天一次签到，两周后能看到自己的心情地形图', en: 'One check-in a day; after two weeks your own mood terrain appears' },
        steps: [
          { zh: '拖动两个滑块：舒服吗？有劲吗？', en: 'Drag two sliders: pleasant? energised?' },
          { zh: '记下自动落在哪个象限，以及那本书。', en: 'Note which quadrant you land in, and which book belongs to it.' }
        ]
      }
    ],
    memory: [
      { zh: 'POMS 六维度：紧张、抑郁、愤怒、活力、疲劳、困惑。', en: 'POMS six factors: tension, depression, anger, vigor, fatigue, confusion.' },
      { zh: '愉悦度 × 唤醒度 = 情绪环状模型的两把尺。', en: 'Pleasantness × arousal: the two rulers of the circumplex.' },
      { zh: '高唤醒先降温，低唤醒先行动。', en: 'High arousal: cool down first. Low arousal: act first.' },
      { zh: 'Gross 五个调节时机：情境选择、情境修改、注意分配、认知改变、反应调节。', en: 'Gross’s five timing points: situation selection, situation modification, attention deployment, cognitive change, response modulation.' }
    ]
  },

  {
    id: 'anxiety',
    shelf: 1,
    slot: 2,
    colorName: { zh: '蓝', en: 'Blue' },
    skin: { cover: '#2f6f9f', spine: '#1e4b6e', edge: '#0c2233', gold: '#cfe4f2', pages: '#eef4f9' },
    title: { zh: '焦虑的独白', en: 'Anxiety’s Monologue' },
    subtitle: { zh: '身体先报警时，怎么跟它说话', en: 'Talking to a body that sounds the alarm early' },
    mood: { zh: '焦虑 / 担忧', en: 'Anxiety / worry' },
    intro: {
      zh: '第三本书是蓝的。教授说，焦虑最喜欢的是"未来"，所以处理它的办法都发生在现在。',
      en: 'The third book is blue. The professor says anxiety loves the future, so every method for it works in the present tense.'
    },
    relief: [
      { zh: '这不是危险，这是唤醒。我的身体在给我能量。', en: 'This is not danger, this is arousal. My body is handing me energy.' },
      { zh: '我只需要处理好 25 分钟，不需要处理好一生。', en: 'I only need to handle 25 minutes, not a whole life.' },
      { zh: '最坏的结果我见过，它没有杀死我。', en: 'I have seen the worst outcome before. It did not kill me.' },
      { zh: '先呼气，再想事情。', en: 'Exhale first, think second.' }
    ],
    literature: [
      {
        work: { zh: '《少年维特的烦恼》歌德，1774', en: 'The Sorrows of Young Werther, Goethe, 1774' },
        quote: { zh: '（书信体大意）我的心像一台永不停下的机器，我无法坐着，非走动不可。', en: '(Letter, paraphrased) My heart is a machine that never stops; I cannot sit still, I must walk.' },
        kind: { zh: '情节大意', en: 'Paraphrased' },
        show: { zh: '示范"躯体性焦虑"：坐立不安是焦虑的表现，不是性格缺陷。教授说，维特缺的正是散步、写作和一段能说的时间。', en: 'Demonstrates somatic anxiety: restlessness is a symptom, not a character flaw. What Werther lacked, the professor says, was a walk, a page of writing, and a stretch of speakable time.' }
      },
      {
        work: { zh: '《达洛维夫人》弗吉尼亚·伍尔夫，1925', en: 'Mrs Dalloway, Virginia Woolf, 1925' },
        quote: { zh: '（大意）她会突然感到一阵寒意，仿佛有什么东西刺穿了她。', en: '(Paraphrased) A sudden chill, as if something pierced through her.' },
        kind: { zh: '情节大意', en: 'Paraphrased' },
        show: { zh: '示范"预期焦虑"：伍尔夫写的是身体先于念头到达恐惧。所以接地技术要从感官入手，而不是从道理入手。', en: 'Demonstrates anticipatory anxiety: the body arrives before the thought does. Which is why grounding starts with the senses, not with argument.' }
      },
      {
        work: { zh: '《罪与罚》陀思妥耶夫斯基，1866', en: 'Crime and Punishment, Dostoevsky, 1866' },
        quote: { zh: '（大意）他像躲一件东西似的躲着所有人。', en: '(Paraphrased) He avoided everyone as one avoids a thing he has left lying about.' },
        kind: { zh: '情节大意', en: 'Paraphrased' },
        show: { zh: '示范"愧疚型焦虑 + 回避"。回避让焦虑短期下降、长期上涨，这是暴露疗法的逻辑起点。', en: 'Demonstrates guilt-anxiety with avoidance. Avoidance lowers anxiety now and raises it later — the starting logic of exposure.' }
      }
    ],
    methods: [
      {
        name: { zh: '担忧清单 + 担忧时间', en: 'Worry list plus a worry window' },
        source: { zh: '时间限定担忧技术，出自 Borkovec 关于担忧的心理学研究', en: 'Stimulated-control / time-limited worry techniques from Borkovec’s work on worry' },
        when: { zh: '睡前脑子停不下来', en: 'When the mind will not stop before sleep' },
        steps: [
          { zh: '随时记一行担忧，注明时间和"可解决吗"。', en: 'Log each worry in one line with the time and whether it is solvable.' },
          { zh: '固定 15 分钟集中处理能解决的；不能解决的划掉。', en: 'Spend a fixed 15 minutes on solvable ones; cross out the unsolvable.' }
        ]
      },
      {
        name: { zh: '4-7-8 呼吸 / 延长呼气', en: '4-7-8 breathing / long exhale' },
        source: { zh: 'APA stress 专题中推荐的深呼吸放松', en: 'Deep-breathing relaxation recommended in the APA’s stress materials' },
        when: { zh: '心跳快、手抖、进考场前', en: 'Racing heart, shaking hands, before entering the exam room' },
        steps: [
          { zh: '吸 4 秒、屏 7 秒、呼 8 秒，做 4 轮。', en: 'In 4 s, hold 7 s, out 8 s, four rounds.' },
          { zh: '呼气比吸气长，副交感神经才会接手。', en: 'A longer exhale than inhale is what hands control to the parasympathetic system.' }
        ]
      }
    ],
    memory: [
      { zh: '回避让焦虑短期降、长期升。', en: 'Avoidance drops anxiety now, raises it later.' },
      { zh: '担忧只在未来，方法只在现在。', en: 'Worry lives in the future; methods live in the present.' },
      { zh: '长呼气 = 刹车。', en: 'A long exhale is the brake.' }
    ]
  },

  {
    id: 'burnout',
    shelf: 1,
    slot: 3,
    colorName: { zh: '黄', en: 'Yellow' },
    skin: { cover: '#d9a441', spine: '#a8762a', edge: '#3d2a0d', gold: '#fff2c2', pages: '#fbf3dd' },
    title: { zh: '灯油与火', en: 'Lamp Oil and Flame' },
    subtitle: { zh: '倦怠不是懒，是收支失衡', en: 'Burnout is not laziness, it is a balance-sheet problem' },
    mood: { zh: '倦怠 / 无力', en: 'Burnout / drained' },
    intro: {
      zh: '第四本书是黄的。学生问，我是不是太懒了。教授说，懒的人不难受，难受的人不是懒。',
      en: 'The fourth book is yellow. The student asks, am I just lazy? The professor answers that lazy people do not ache; aching people are not lazy.'
    },
    relief: [
      { zh: '我不是不想学，我是太久没有从学习里拿到东西。', en: 'I do not refuse to study; I have gone too long without receiving anything from studying.' },
      { zh: '休息是任务，不是奖励。', en: 'Rest is a task, not a reward.' },
      { zh: '今天只需要做一件最小的、可完成的事。', en: 'Today needs one smallest completable thing.' },
      { zh: '我的价值不由今日产量决定。', en: 'My worth is not set by today’s output.' }
    ],
    literature: [
      {
        work: { zh: '《致塞涅卡〈道德书简〉》塞涅卡，约公元 65 年', en: 'Seneca, Moral Letters, c. 65 AD' },
        quote: { zh: '（大意）我们并不是短暂地拥有生命，而是长久地浪费它。', en: 'It is not that we have a short time to live, but that we waste a lot of it.' },
        kind: { zh: '原文英译 / 中译', en: 'Translated' },
        show: { zh: '示范"精力账本"的想法：斯多葛学派关心的是资源分配，不是自我攻击。', en: 'Demonstrates the energy-ledger idea: Stoicism is about allocation, not self-attack.' }
      },
      {
        work: { zh: '《随笔集》蒙田，1580', en: 'Montaigne, Essays, 1580' },
        quote: { zh: '（大意）给自己留一间后屋，完全自由，属于你自己。', en: 'Keep a back room entirely your own and free.' },
        kind: { zh: '大意', en: 'Paraphrased' },
        show: { zh: '示范"心理所有权"：倦怠常常来自时间不属于自己。找回一小块"我的"时间，比加大力度有效。', en: 'Demonstrates psychological ownership: burnout often means the hours are not yours. A small reclaimed slice beats more effort.' }
      }
    ],
    methods: [
      {
        name: { zh: '恢复账户（recovery diary）', en: 'Recovery diary' },
        source: { zh: '工作要求—资源模型（JD-R，Bakker 与 Demerouti）在学业情境中的应用', en: 'The job demands–resources model (Bakker & Demerouti) applied to study life' },
        when: { zh: '学一整天却没有收获感', en: 'A full study day with no sense of gain' },
        steps: [
          { zh: '每晚写两栏：今天消耗了什么、补回了什么。', en: 'Two columns each night: what was spent, what was refunded.' },
          { zh: '连续三天只有消耗，就强制安排一个补回项（人、运动、无目的爱好）。', en: 'Three spend-only days in a row means a forced refund: a person, movement, or a purposeless hobby.' }
        ]
      },
      {
        name: { zh: '最小可完成单元', en: 'Smallest completable unit' },
        source: { zh: '与自我效能理论（Bandura）中的"掌握性经验"一致', en: 'Consistent with mastery experience in Bandura’s self-efficacy theory' },
        when: { zh: '打开书却动不了', en: 'The book is open and you cannot move' },
        steps: [
          { zh: '把任务降到 2 分钟：读一段、做一题、抄三行。', en: 'Cut it to two minutes: one paragraph, one question, three copied lines.' },
          { zh: '做完就打勾；打勾本身就是掌握性经验。', en: 'Tick it when done; the tick itself is a mastery experience.' }
        ]
      }
    ],
    memory: [
      { zh: '懒不难受，难受不懒。', en: 'Laziness does not ache; aching is not laziness.' },
      { zh: '消耗 / 补回 两栏记账。', en: 'Spend / refund — keep the two-column ledger.' },
      { zh: '2 分钟单元 = 掌握性经验。', en: 'A two-minute unit is a mastery experience.' }
    ]
  },

  {
    id: 'shame',
    shelf: 1,
    slot: 4,
    colorName: { zh: '粉', en: 'Pink' },
    skin: { cover: '#e06a92', spine: '#b34d70', edge: '#3d1220', gold: '#ffe0ef', pages: '#fdeef5' },
    title: { zh: '羞耻与边界', en: 'Shame and Boundaries' },
    subtitle: { zh: '关于被看见、被比较、被拒绝', en: 'On being seen, compared, refused' },
    mood: { zh: '羞耻 / 人际难过', en: 'Shame / social hurt' },
    intro: {
      zh: '第五本书是粉的。教授说这一本最难翻开，因为羞耻的规则是"不许说出来"。',
      en: 'The fifth book is pink. The professor calls it the hardest to open, because shame’s only rule is that it must not be spoken.'
    },
    relief: [
      { zh: '羞耻说的是"我这个人不行"，愧疚说的是"这件事我没做好"。', en: 'Shame says “I am wrong”; guilt says “what I did was wrong”.' },
      { zh: '我可以拒绝一个邀请，同时还是个好相处的人。', en: 'I can decline an invitation and still be easy to love.' },
      { zh: '别人怎么看我，是他们的课题。', en: 'How others see me is their task, not mine.' },
      { zh: '说出来一句，羞耻就少一半。', en: 'Say one sentence aloud and shame halves.' }
    ],
    literature: [
      {
        work: { zh: '《傲慢与偏见》简·奥斯汀，1813，第十五章', en: 'Pride and Prejudice, Jane Austen, 1813, ch. 15' },
        quote: { zh: '（大意）凡是傲慢的人，内心都有自卑，只是不肯让人看出来。', en: 'Where there is a great deal of pride, there is often a great deal of diffidence too.' },
        kind: { zh: '原文英译', en: 'Translated' },
        show: { zh: '示范"骄傲是羞耻的盔甲"。达西和伊丽莎白都在用距离保护自己，被指出这一点后才有成长。', en: 'Demonstrates pride as shame’s armour: both Darcy and Elizabeth use distance as protection, and grow only when it is named.' }
      },
      {
        work: { zh: '《小妇人》路易莎·梅·奥尔科特，1868', en: 'Little Women, Louisa May Alcott, 1868' },
        quote: { zh: '（大意）我这些年一直在跟自己脾气打仗，我赢不了。', en: 'I’ve been fighting my temper for years and I haven’t got the better of it yet.' },
        kind: { zh: '情节大意', en: 'Paraphrased' },
        show: { zh: '示范"把缺点当作可练习的对象"：乔没有给自己贴坏标签，而是承认战斗仍在进行。', en: 'Demonstrates treating a flaw as something practised rather than a label: Jo admits the fight continues without calling herself bad.' }
      }
    ],
    methods: [
      {
        name: { zh: '自我关怀三步骤', en: 'Three steps of self-compassion' },
        source: { zh: 'Kristin Neff 自我关怀模型（善待自己、共通人性、正念）', en: 'Kristin Neff’s model: self-kindness, common humanity, mindfulness' },
        when: { zh: '考砸、说错话、被比较之后', en: 'A failed exam, a wrong sentence, after being compared' },
        steps: [
          { zh: '这一刻真难受（正念）。', en: 'This hurts right now (mindfulness).' },
          { zh: '难受是人都会有的部分（共通人性）。', en: 'Hurting is part of being human (common humanity).' },
          { zh: '如果朋友这样，我会说什么？把它说给自己。', en: 'What would I say to a friend? Say it to myself.' }
        ]
      },
      {
        name: { zh: '边界句式', en: 'Boundary sentences' },
        source: { zh: '断言式沟通（assertiveness）训练，常见于 APA 与心理咨询科普资料', en: 'Assertiveness training, widely covered in APA and counselling education material' },
        when: { zh: '不想参加、不想帮忙、不想被追问', en: 'Not wanting to attend, to help, or to be questioned' },
        steps: [
          { zh: '事实：这周我有两次考试。', en: 'Fact: I have two exams this week.' },
          { zh: '感受：我担心自己撑不住。', en: 'Feeling: I worry I won’t cope.' },
          { zh: '要求：所以这次我不能去，下次提前叫我。', en: 'Request: so I can’t come this time; ask me earlier next time.' }
        ]
      }
    ],
    memory: [
      { zh: '羞耻＝我不好；愧疚＝我没做好。', en: 'Shame = I am wrong; guilt = I did wrong.' },
      { zh: 'Neff 三件套：善待、共通、正念。', en: 'Neff’s three: kindness, common humanity, mindfulness.' },
      { zh: '边界句式：事实—感受—要求。', en: 'Boundary form: fact — feeling — request.' }
    ]
  },

  /* ================= 第二层：方法与名著 ================= */
  {
    id: 'meaning',
    shelf: 2,
    slot: 0,
    colorName: { zh: '紫', en: 'Purple' },
    skin: { cover: '#6b4b9a', spine: '#4a3269', edge: '#1e1230', gold: '#e3d1ff', pages: '#f2ecfb' },
    title: { zh: '意义的抽屉', en: 'The Drawer of Meaning' },
    subtitle: { zh: '迷茫时读的三个人的答案', en: 'Three people’s answers for the lost hours' },
    mood: { zh: '迷茫 / 无意义感', en: 'Lost / meaningless' },
    intro: { zh: '第二层的第一本书是紫的。教授说，意义不是想出来的，是被某件具体的事勾出来的。', en: 'The first book on the second shelf is purple. Meaning, the professor says, is not thought up; it is hooked out of you by one concrete thing.' },
    relief: [
      { zh: '我不需要一生意义的版本，只需要今天的一个理由。', en: 'I do not need a whole-life answer, only one reason for today.' },
      { zh: '我可以先做，再相信它值得。', en: 'I may do it first and believe it is worth it afterwards.' }
    ],
    literature: [
      {
        work: { zh: '《活出生命的意义》维克多·弗兰克尔，1946', en: 'Man’s Search for Meaning, Viktor Frankl, 1946' },
        quote: { zh: '（大意）人所寻求的意义，会在具体的时刻向他招手；重要的不是我们期待生活给什么，而是生活向我们期待什么。', en: 'Everything comes down to this: not what we expect from life, but what life expects from us.' },
        kind: { zh: '大意 / 通行译法', en: 'Paraphrase' },
        show: { zh: '示范"应答式意义"：意义被理解为生活向你要的一个回答。教授把这句话变成每日问题：今天有什么在向我要一个回应？', en: 'Demonstrates responsive meaning: life asks you for an answer. The professor turns it into a daily question — what is asking for my response today?' }
      },
      {
        work: { zh: '《西西弗神话》加缪，1942', en: 'The Myth of Sisyphus, Camus, 1942' },
        quote: { zh: 'Il faut imaginer Sisyphe heureux. 应当想象西西弗是幸福的。', en: 'One must imagine Sisyphus happy.' },
        kind: { zh: '原文（法/英）', en: 'Original (French/English)' },
        show: { zh: '示范在重复中找到属于自己的动作：推石上山这条路本身可以是他的。', en: 'Demonstrates owning a gesture inside repetition: the slope itself may belong to him.' }
      },
      {
        work: { zh: '《德米安》赫尔曼·黑塞，1919', en: 'Demian, Hermann Hesse, 1919' },
        quote: { zh: '（大意）鸟从蛋里挣脱出来。蛋是世界。要出生，就必须先打碎一个世界。', en: 'The bird fights its way out of the egg. The egg is the world; to be born one must destroy a world.' },
        kind: { zh: '通行译法', en: 'Paraphrase' },
        show: { zh: '示范"迷茫是外壳在裂"，不是走错路。', en: 'Demonstrates that being lost is the shell cracking, not the wrong road.' }
      }
    ],
    methods: [
      {
        name: { zh: '意义三问', en: 'Three meaning questions' },
        source: { zh: '源自Frankl 的意义治疗（logotherapy）思路与正念写作练习', en: 'Drawn from Frankl’s logotherapy and reflective writing practice' },
        when: { zh: '不知道为什么要学、为什么起床', en: 'When study and getting up both lose their point' },
        steps: [
          { zh: '今天有一件什么事因为我的参与而变好了一点？', en: 'What went slightly better today because I took part?' },
          { zh: '我今天回应了谁的什么需要？', en: 'Whose need did I answer today?' },
          { zh: '我把哪一分钟当成"我的"来用了？', en: 'Which minute did I spend as mine?' }
        ]
      }
    ],
    memory: [
      { zh: '意义是生活向我提的问题。', en: 'Meaning is a question life asks me.' },
      { zh: '鸟要出生，先要打破一个世界。', en: 'To be born, the bird must break a world.' }
    ]
  },

  {
    id: 'procrastination',
    shelf: 2,
    slot: 1,
    colorName: { zh: '橙', en: 'Orange' },
    skin: { cover: '#d1682a', spine: '#9b4a1a', edge: '#331607', gold: '#ffd9a8', pages: '#fdf1e3' },
    title: { zh: '明天的人', en: 'The Person Called Tomorrow' },
    subtitle: { zh: '拖延与自我效能', en: 'Procrastination and self-efficacy' },
    mood: { zh: '拖延 / 自我怀疑', en: 'Procrastination / self-doubt' },
    intro: { zh: '第六本书是橙的。教授说，拖延的人不是没有时间问题，而是有情绪问题——推迟的是难受，不是工作。', en: 'The sixth book is orange. Procrastinators, the professor says, do not have a time problem but a mood problem: what gets postponed is the discomfort, not the work.' },
    relief: [
      { zh: '我不是在偷懒，我是在躲那种"我可能做不好"的感觉。', en: 'I am not idling; I am dodging the feeling that I might do it badly.' },
      { zh: '先做 5 分钟，动机跟在开始后面。', en: 'Five minutes first; motivation follows the start.' },
      { zh: '把"我要写好"换成"我要写完"。', en: 'Swap “I must do it well” for “I must finish a draft”.' }
    ],
    literature: [
      {
        work: { zh: '《包法利夫人》福楼拜，1856', en: 'Madame Bovary, Flaubert, 1856' },
        quote: { zh: '（大意）她想学的东西很多：她想弹得让人赞叹，想读很多书，想懂意大利文。', en: 'She wished to know many things — to play the piano, to read, to learn Italian.' },
        kind: { zh: '情节大意', en: 'Paraphrased' },
        show: { zh: '示范"理想自我透支"：靠幻想未来的自己来缓解当下的无力。教授说，解药是把幻想换成一个可做的动作。', en: 'Demonstrates overdrawing on an ideal self. The remedy, says the professor, is trading the fantasy for one doable action.' }
      },
      {
        work: { zh: '《局外人》加缪，1942', en: 'The Stranger, Camus, 1942' },
        quote: { zh: '（大意）今天，妈妈死了。也许是昨天，我不清楚。', en: 'Mama died today. Or yesterday, I don’t know.' },
        kind: { zh: '通行译法', en: 'Paraphrase' },
        show: { zh: '示范"情感延迟"的风险：默尔索不是无情，而是感受与表达不同步。教授借此讲情绪的名字要自己说出来，否则别人只看到冷淡。', en: 'Demonstrates delayed feeling: Meursault is not unfeeling, only out of sync. Feelings must be named by oneself, or they read as coldness.' }
      }
    ],
    methods: [
      {
        name: { zh: '自我效能四来源', en: 'Four sources of self-efficacy' },
        source: { zh: '班杜拉（Albert Bandura，斯坦福大学）自我效能理论', en: 'Albert Bandura’s self-efficacy theory (Stanford)' },
        when: { zh: '"我肯定不行"的念头一出现', en: 'The moment “I definitely can’t” appears' },
        steps: [
          { zh: '掌握经验：拆出一定能做成功的 5 分钟。', en: 'Mastery: carve out five minutes you cannot fail.' },
          { zh: '替代经验：找一个和你起点差不多的人的路径。', en: 'Modelling: find someone who started where you are.' },
          { zh: '言语说服：把"你不行"换成"这一步你行"。', en: 'Verbal persuasion: replace “you can’t” with “this step, you can”.' },
          { zh: '生理状态：先睡够再评估难度。', en: 'Physiological state: sleep, then re-rate the difficulty.' }
        ]
      },
      {
        name: { zh: '实施意图 if-then', en: 'Implementation intentions (if–then)' },
        source: { zh: 'Peter Gollwitzer 的 if-then 计划研究', en: 'Peter Gollwitzer’s research on if–then planning' },
        when: { zh: '计划定了却从不开始', en: 'Plans made and never started' },
        steps: [
          { zh: '写完形："如果〔时间/地点〕，那么我做〔具体动作〕。"', en: 'Write: if [time/place], then I do [specific action].' },
          { zh: '再写障碍形："如果出现〔分心〕，那么我〔替代动作〕。"', en: 'Add the obstacle form: if [distraction] appears, then I [alternative action].' }
        ]
      }
    ],
    memory: [
      { zh: '拖延推迟的是情绪，不是任务。', en: 'Procrastination postpones mood, not tasks.' },
      { zh: '班杜拉四来源：掌握、替代、说服、生理。', en: 'Bandura’s four: mastery, modelling, persuasion, physiology.' },
      { zh: 'If–then：如果……那么我就……', en: 'If–then planning: if …, then I …' }
    ]
  },

  {
    id: 'body',
    shelf: 2,
    slot: 2,
    colorName: { zh: '白', en: 'White' },
    skin: { cover: '#e8e3d6', spine: '#c3bba6', edge: '#6d6357', gold: '#9aa7b8', pages: '#ffffff' },
    title: { zh: '身体这本书', en: 'The Book That Is a Body' },
    subtitle: { zh: '睡眠、日光、动一动', en: 'Sleep, daylight, movement' },
    mood: { zh: '疲劳 / 麻木', en: 'Fatigue / numbness' },
    intro: { zh: '第七本书几乎是白的。教授说，所有情绪都住在身体里，改身体往往比改想法快。', en: 'The seventh book is nearly white. Every mood lives in a body, the professor says, and the body is usually quicker to change than a thought.' },
    relief: [
      { zh: '我的状态差，可能只是因为剂量差：睡眠、水、日光、走动。', en: 'A bad state may be only a dose problem: sleep, water, daylight, walking.' },
      { zh: '我不需要想通，我需要先躺够 20 分钟。', en: 'I do not need insight, I need twenty minutes of rest.' }
    ],
    literature: [
      {
        work: { zh: '《麦克白》莎士比亚，第二幕第二场', en: 'Macbeth, Shakespeare, II.ii' },
        quote: { zh: 'Macbeth does murder sleep — the innocent sleep… 麦克白谋杀了睡眠——那无辜的睡眠……', en: 'Macbeth does murder sleep — the innocent sleep, the balm of hurt minds.' },
        kind: { zh: '原文（英文）', en: 'Original' },
        show: { zh: '示范"愧疚与失眠互相喂养"。莎士比亚比现代睡眠医学早两百年说出：睡眠是受伤心智的香脂。', en: 'Demonstrates guilt and insomnia feeding each other. Shakespeare said two centuries before sleep medicine that sleep is the balm of hurt minds.' }
      }
    ],
    methods: [
      {
        name: { zh: '睡眠卫生七条', en: 'Seven points of sleep hygiene' },
        source: { zh: '综合 NIMH 与各国卫生机构的睡眠科普建议', en: 'Synthesis of public sleep guidance from the NIMH and other health agencies' },
        when: { zh: '入睡超过 30 分钟、凌晨醒来、白天全靠咖啡', en: 'Taking over 30 minutes to fall asleep, waking at dawn, running on coffee' },
        steps: [
          { zh: '固定起床时间比固定入睡时间更重要。', en: 'A fixed wake time beats a fixed bedtime.' },
          { zh: '起床后 30 分钟内见自然光 10 分钟。', en: 'Ten minutes of daylight within 30 minutes of waking.' },
          { zh: '床只用来睡觉；躺 20 分钟没睡着就起来。', en: 'The bed is for sleep only; up again after 20 awake minutes.' },
          { zh: '睡前 60 分钟把手机放在房间外，换成纸质书。', en: 'Phone outside the bedroom 60 minutes before sleep; paper book instead.' }
        ]
      },
      {
        name: { zh: '运动剂量：3×10', en: 'Movement dose: 3×10' },
        source: { zh: '运动对情绪的作用在 APA 与各国卫生指南中都有科普说明', en: 'Exercise–mood effects are described in APA and public health guidelines' },
        when: { zh: '心情低但没有到起不来床', en: 'Low mood, but not bed-stuck' },
        steps: [
          { zh: '每天 3 次、每次 10 分钟快走，比一周一次猛练有效。', en: 'Three 10-minute walks a day beat one heroic session a week.' },
          { zh: '写下运动后的心情分数，用于自我说服。', en: 'Record mood after movement — it becomes your own evidence.' }
        ]
      }
    ],
    memory: [
      { zh: '固定起床时间 > 固定入睡时间。', en: 'Fixed wake time beats fixed bedtime.' },
      { zh: '麦克白谋杀了睡眠 / Macbeth does murder sleep.', en: 'Macbeth does murder sleep.' },
      { zh: '3×10 快走。', en: 'Three walks of ten minutes.' }
    ]
  },

  {
    id: 'clinic',
    shelf: 2,
    slot: 3,
    colorName: { zh: '黑', en: 'Black' },
    skin: { cover: '#3b3a4a', spine: '#25242f', edge: '#101018', gold: '#c9b26a', pages: '#efeadd' },
    title: { zh: '名著心理诊所', en: 'The Classics Clinic' },
    subtitle: { zh: '十种文学情感，十种心理学读法', en: 'Ten literary feelings, ten psychological readings' },
    mood: { zh: '综合情感示范', en: 'Mixed feelings, demonstrated' },
    intro: { zh: '第八本深色的书是诊所。教授把名著人物当案例来读：不是为了评判他们，是为了认出自己。', en: 'The eighth dark book is a clinic. The professor reads classic characters as cases — not to judge them but to recognise oneself.' },
    cases: [
      { who: { zh: '林黛玉（《红楼梦》）', en: 'Lin Daiyu (Dream of the Red Chamber)' }, feel: { zh: '高敏感 + 依附焦虑', en: 'High sensitivity + anxious attachment' }, read: { zh: '对暗示极度敏感，需要确定的语言回应。教授说：这类人最需要"可预测"，而不是"更多安慰"。', en: 'Needs stated certainty over hints. What helps is predictability, not extra comfort.' } },
      { who: { zh: '于连（《红与黑》司汤达）', en: 'Julien Sorel (The Red and the Black)' }, feel: { zh: '骄傲 + 阶层羞耻', en: 'Pride + class shame' }, read: { zh: '把自尊建立在"被谁看得起"上，永远在观察别人的眼睛。解法是自设标准。', en: 'Self-worth outsourced to others’ eyes. The fix is self-set criteria.' } },
      { who: { zh: '拉斯柯尔尼科夫（《罪与罚》）', en: 'Raskolnikov (Crime and Punishment)' }, feel: { zh: '理念性自负 + 事后反刍', en: 'Idea-fed pride + after-rumination' }, read: { zh: '用理论压住情感，最后被身体反应推翻。教授说：凡是"我这样想就一定对"的时候，去看睡和吃。', en: 'Theory overriding feeling, undone by the body. When “I must be right”, check sleep and appetite.' } },
      { who: { zh: '圣地亚哥（《老人与海》海明威）', en: 'Santiago (The Old Man and the Sea)' }, feel: { zh: '高自我效能 + 接纳', en: 'High self-efficacy + acceptance' }, read: { zh: '"人可以被毁灭，但不能被打败"——把结果与自我价值分开，是抗挫力（resilience）的教科书。', en: 'Separating outcome from worth is the textbook move of resilience.' } },
      { who: { zh: '堂吉诃德（塞万提斯）', en: 'Don Quixote (Cervantes)' }, feel: { zh: '意义过剩', en: 'Excess of meaning' }, read: { zh: '理想没有对象时会自造风车。教授的读法：保留理想，给理想换一个小而真的对象。', en: 'A purpose with no object invents windmills. Keep the purpose, change the object to something small and real.' } },
      { who: { zh: '包法利夫人', en: 'Madame Bovary' }, feel: { zh: '欲望的想象力', en: 'Desire built from images' }, read: { zh: '消费与浪漫叙事提供的期待，永远高于真实生活能给的。解法是降低期待的来源，而不是加码生活。', en: 'Wishes supplied by stories always outpace life. Lower the source of wishes rather than inflating life.' } },
      { who: { zh: '斯嘉丽（《飘》）', en: 'Scarlett O’Hara (Gone with the Wind)' }, feel: { zh: '高行动力 + 情绪压抑', en: 'High drive + suppressed feeling' }, read: { zh: '"明天再想"是有效也昂贵的策略：拖延了情绪，也拖延了修复。', en: '“Tomorrow” works and costs: it defers feeling and repair together.' } },
      { who: { zh: '冉·阿让（《悲惨世界》）', en: 'Jean Valjean (Les Misérables)' }, feel: { zh: '羞耻转化 / 道德重构', en: 'Shame transformed' }, read: { zh: '被一句话改变后重建身份——羞耻可以转成承诺，前提是有人先把他当作别的样子。', en: 'One sentence rebuilds an identity: shame turns into commitment when someone first sees you otherwise.' } },
      { who: { zh: '哈姆雷特', en: 'Hamlet' }, feel: { zh: '反刍型犹豫', en: 'Ruminative hesitation' }, read: { zh: '想得越久，动得越少。教授说：给思考设时限，让"够好"而非"最全"来决定。', en: 'The longer the thinking, the less the moving. Put a deadline on thought; let good-enough decide.' } },
      { who: { zh: '简·爱', en: 'Jane Eyre' }, feel: { zh: '健康的自我尊重', en: 'Healthy self-respect' }, read: { zh: '"我越是孤单，越要遵守自己的法律"——把原则写在欲望之前，是自尊最省力的写法。', en: 'Writing the principle before the want is the cheapest form of self-respect.' } }
    ],
    methods: [
      {
        name: { zh: ' bibliotherapy 阅读疗法三步', en: 'Bibliotherapy in three steps' },
        source: { zh: '阅读疗法是心理咨询中长期使用的辅助方法，常见于学校心理辅导材料', en: 'A long-standing adjunct in counselling and school support practice' },
        when: { zh: '说不清自己的感受、或觉得只有自己这样', en: 'When you cannot name the feeling, or think you are the only one' },
        steps: [
          { zh: '认同：找出人物身上和你一样的那一下。', en: 'Identification: find the one moment you share with the character.' },
          { zh: '净化：说出这个人物替你做了什么你没做的事。', en: 'Catharsis: say what the character did that you did not.' },
          { zh: '领悟：把结论变成你自己明天可执行的一条。', en: 'Insight: turn it into one action you can take tomorrow.' }
        ]
      }
    ],
    memory: [
      { zh: '阅读疗法三步：认同—净化—领悟。', en: 'Bibliotherapy: identification, catharsis, insight.' },
      { zh: '"人可以被毁灭，但不能被打败。"', en: 'A man can be destroyed but not defeated.' }
    ]
  },

  {
    id: 'learning',
    shelf: 2,
    slot: 4,
    colorName: { zh: '金', en: 'Gold' },
    skin: { cover: '#c8a02f', spine: '#96741d', edge: '#332505', gold: '#fff4bd', pages: '#fdf8e6' },
    title: { zh: '怎么记得住', en: 'How Memory Works' },
    subtitle: { zh: '记忆清单背后的学习科学', en: 'The science behind the memory list' },
    mood: { zh: '学习方法 / 元认知', en: 'Study method / metacognition' },
    intro: { zh: '第九本金色的书讲怎么读前面八本。教授说：重复读三遍，不如自己想起来一次。', en: 'The gold book explains how to read the other eight. Re-reading three times is worth less than recalling once, the professor says.' },
    relief: [
      { zh: '想不起来是正常的，不是失败的证据。', en: 'Failing to recall is normal, not evidence of failure.' },
      { zh: '轻松学会的东西，也最容易在考场消失。', en: 'What feels easy to learn is the first to vanish in the exam room.' }
    ],
    methods: [
      {
        name: { zh: '提取练习（self-testing）', en: 'Retrieval practice (self-testing)' },
        source: { zh: 'Roediger 与 Karpicke 的测试效应研究', en: 'Roediger & Karpicke on the testing effect' },
        when: { zh: '背单词、背理论名字、背句子', en: 'Vocabulary, theory names, quotes' },
        steps: [
          { zh: '读完一段，合上书，在白纸上写出要点。', en: 'After one section, close the book and write the points on blank paper.' },
          { zh: '对照原文只补错的地方，不重读整段。', en: 'Repair only what was wrong; do not re-read the whole section.' }
        ]
      },
      {
        name: { zh: '间隔重复（spaced repetition）', en: 'Spaced repetition' },
        source: { zh: '艾宾浩斯（Hermann Ebbinghaus，1885）遗忘曲线', en: 'Ebbinghaus’s forgetting curve (1885)' },
        when: { zh: '书屋的记忆清单就是这套节奏：1、2、4、7、15、30 天', en: 'The memory list here uses exactly this rhythm: 1, 2, 4, 7, 15, 30 days' },
        steps: [
          { zh: '今天标记"记得"，下次复习会自动推后。', en: 'Tap Kept today; the next review pushes further out.' },
          { zh: '标记"忘了"，间隔退回一级，但当天要再见一次。', en: 'Tap Lost; the interval steps back one level and must be seen again today.' }
        ]
      },
      {
        name: { zh: '交错练习 + 双编码', en: 'Interleaving plus dual coding' },
        source: { zh: '交错练习（Rohrer 等）与双重编码理论（Paivio）', en: 'Interleaving (Rohrer and others) and dual coding (Paivio)' },
        when: { zh: '一种题型连续刷很多、效果开始变平', en: 'When one question type has been drilled too long' },
        steps: [
          { zh: '把不同书目混着出题——每日考试的 10 题就是这样抽的。', en: 'Mix books in one quiz — the daily ten questions are drawn this way.' },
          { zh: '每个概念配一张图或一个表情，回忆时多一条线索。', en: 'Attach an image or emoji to each concept; recall gains a second cue.' }
        ]
      }
    ],
    memory: [
      { zh: '提取得越用力，记得越牢。', en: 'The harder the retrieval, the stronger the trace.' },
      { zh: '间隔：1-2-4-7-15-30 天。', en: 'Intervals: 1-2-4-7-15-30 days.' },
      { zh: '重读感觉良好 ≠ 学会了。', en: 'Re-reading feels good ≠ learned.' }
    ]
  }
];
