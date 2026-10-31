/* 信件（学习流程）与教授回信库 */

window.LETTERS = [
  {
    title: { zh: '第一封：书屋的规矩', en: 'Letter 1 · The rules of the house' },
    body: {
      zh: '学习流程从这里开始：书架三层，各五本，一共十五本。第一层放情绪，第二层放方法与名著，第三层放融合中西文化的著作。学生每天只做三件事：读一本书的一节、复习清单、考十题。其余都是加分项。\n\n——教授的口袋',
      en: 'The flow starts here: three shelves, five books each, fifteen in all. Shelf one holds feelings, shelf two methods and the classics, shelf three stories where East meets West. Each day the student does three things only — one section of one book, one review of the list, ten questions. Everything else is bonus.\n\n— from the professor’s pocket'
    }
  },
  {
    title: { zh: '第二封：先给心情命名', en: 'Letter 2 · Name the mood first' },
    body: {
      zh: '翻开绿色那本。今天的心情先归类：紧张、抑郁、愤怒、活力、疲劳、困惑，六选一。名字有了，方法才有对象。学生若说不上来，就拖两个滑块：舒服吗？有劲吗？\n\n——教授',
      en: 'Open the green book. Today’s mood gets a category first: tension, depression, anger, vigor, fatigue, confusion — pick one. Once named, a method has something to attach to. If the student cannot say, drag the two sliders: pleasant? energised?\n\n— the professor'
    }
  },
  {
    title: { zh: '第三封：一本书只读一节', en: 'Letter 3 · One section, not one book' },
    body: {
      zh: '不要一天读完一本书。今天是"缓解句子"，明天是"方法与场景"，后天做"名著示范"。读完后把那一句加进记忆清单。读完一整本再点"标记读完"，书角会出现像素对勾。\n\n——教授',
      en: 'Do not finish a book in one day. Today the sentences, tomorrow the methods and their scenes, the day after the classics. Then add one line to the memory list. Mark the book read only when it is truly finished — a pixel tick appears on its corner.\n\n— the professor'
    }
  },
  {
    title: { zh: '第四封：记忆清单怎么用', en: 'Letter 4 · Using the memory list' },
    body: {
      zh: '清单没有访问次数限制，随时可看。节奏是 1、2、4、7、15、30 天：今天记得，明天再见一次；答不出就退回一级，但当天必须再见一次。复习时先合上屏幕，再默写。\n\n——教授',
      en: 'The list has no visit limit; open it whenever. The ladder is 1, 2, 4, 7, 15, 30 days: kept today, seen again tomorrow; lost, and it steps back one level but must be seen again the same day. When reviewing, close the screen first, then write from memory.\n\n— the professor'
    }
  },
  {
    title: { zh: '第五封：十题是学习的一部分', en: 'Letter 5 · The ten questions are study, not test' },
    body: {
      zh: '每日十题从全部书目里混着抽——这叫交错练习。错的题比对的题更有价值，交卷后一定要看完解释，并把错题那一句加进清单。分数只和自己昨天的记录比。\n\n——教授',
      en: 'The daily ten are mixed across every book — that is interleaving. Wrong ones teach more than right ones: after submitting, read every explanation and put that sentence into the list. Compare the score only with yesterday’s.\n\n— the professor'
    }
  },
  {
    title: { zh: '第六封：提问的十次怎么用', en: 'Letter 6 · Spending the ten questions' },
    body: {
      zh: '教授每天回答十次，明天重置。好的提问有三样：发生了什么、我身体和心里的反应、我试过什么。学生只写"我很烦"，教授就要替她猜；写上三样，回信会准得多。\n\n——教授',
      en: 'The professor answers ten a day and resets at midnight. A good question carries three things: what happened, what the body and mind did, what has already been tried. Write only “I feel awful” and she must guess; write all three and the reply lands far better.\n\n— the professor'
    }
  },
  {
    title: { zh: '第七封：暴怒时的三分钟', en: 'Letter 7 · Three minutes in a rage' },
    body: {
      zh: '红书的流程：1) 两次短吸一次长呼，三次；2) 冷水或冰块三十秒；3) 把要说的话写在不寄出的纸上，最后一行只写要求。做完再决定要不要开口。学生不必为愤怒道歉，只需要为动作负责。\n\n——教授',
      en: 'The red book’s order: 1) two short inhales, one long exhale, three times; 2) cold water or ice for thirty seconds; 3) write the unsent note, and in its last line state only the request. Then decide whether to speak. The student need not apologise for the anger, only take responsibility for the act.\n\n— the professor'
    }
  },
  {
    title: { zh: '第八封：读名著的姿势', en: 'Letter 8 · How to read the classics here' },
    body: { zh: '第三步叫"领悟"：合上书，问自己——这个人物的做法如果是我，我会付什么代价、省什么力气？把答案写成一行动作，例如"今晚十点前把手机放到门外"。名著在这里不是装饰，是案例库。\n\n——教授', en: 'The third step is insight: close the book and ask — if this were me, what would that choice cost me and save me? Turn it into one line of action, e.g. “phone outside the door before 10 p.m.” The classics here are not decoration; they are case files.\n\n— the professor' },
  },
  {
    title: { zh: '第九封：状态差的日子', en: 'Letter 9 · The bad-state day' },
    body: {
      zh: '允许低配日：只做一个 2 分钟单元、只复习清单里三条、十题改成做五题。低配日仍然算数，因为节奏没有断。断掉的往往不是成绩，而是"我还能回来"的信心。\n\n——教授',
      en: 'Permit a low-settings day: one two-minute unit, three review lines, five questions instead of ten. It still counts, because the rhythm is unbroken. What usually breaks is not the score but the belief that one can come back.\n\n— the professor'
    }
  },
  {
    title: { zh: '第十封：身体先于道理', en: 'Letter 10 · The body before the argument' },
    body: {
      zh: '固定起床时间，醒后十分钟见自然光，每天三次十分钟快走，睡前一小时换成纸质书。学生以为这是老话，教授说这是给情绪装底盘；底盘稳了，前面九封才都兑现。\n\n——教授',
      en: 'Fixed wake time, ten minutes of daylight within half an hour of rising, three ten-minute walks daily, a paper book in the last hour. The student thinks this is cliché; the professor calls it the chassis of mood — only when it is steady do the other nine letters pay out.\n\n— the professor'
    }
  },
  {
    title: { zh: '第十一封：双语怎么用', en: 'Letter 11 · Using the two languages' },
    body: {
      zh: '点帽子换语言。建议中文读道理，英文背句子：那些名著原文本来就是英文或需要英文表达，双语切换本身就是提取练习。切换后已经记录的心情、清单、成绩都还在，只是换了文字。\n\n——教授',
      en: 'Tap the hat to switch. Read the reasoning in Chinese, memorise the lines in English — the classics were written in English or need English to be said, so the switch itself is retrieval practice. Moods, list and scores survive the change; only the words swap.\n\n— the professor'
    }
  },
  {
    title: { zh: '第十二封：什么时候要求助', en: 'Letter 12 · When to ask for real help' },
    body: {
      zh: '这个书屋是学习空间，不是治疗。若低落持续两周以上、影响吃饭睡觉上学，或出现伤害自己的念头，请立刻告诉可信的大人，并联系专业资源（中国大陆全国统一心理援助热线 12356，24 小时；其他地区使用本地急救或 WHO 列出的服务）。教授会一直在这里，但她不能替代真正的帮助。\n\n——教授',
      en: 'This is a study space, not therapy. If low mood lasts beyond two weeks, if eating, sleeping or school start to suffer, or if thoughts of self-harm appear, tell a trusted adult immediately and contact professional resources (in mainland China the national psychological aid hotline 12356, 24 hours; elsewhere use local emergency services or those listed by the WHO). The professor stays here, but she cannot replace real help.\n\n— the professor'
    }
  },
  {
    title: { zh: '第十三封：第三层的读法', en: 'Letter 13 · How to read the third shelf' },
    body: {
      zh: '第三层是融合中西文化的五本：《雾里青花泥》《活着》《许三观卖血记》《第七天》《莫泊桑小说集》。教授说读法只有一条：每本先找出"中式的那一步"和"西式的那一步"，再看它们是不是在处理同一个难题。归属、哀伤、尊严、死亡、比较——五道题，两种文化各答了一半。\n\n——教授',
      en: 'The third shelf holds five books where cultures meet: Clay in the Mist, To Live, Chronicle of a Blood Seller, The Seventh Day, and Maupassant’s stories. One rule for reading, the professor says: in each, find the Chinese move and the Western move, then ask whether they are solving the same problem. Belonging, grief, dignity, death, comparison — five questions, each half-answered by one culture.\n\n— the professor'
    }
  },
  {
    title: { zh: '第十四封：引文与大意', en: 'Letter 14 · Quotation and paraphrase' },
    body: {
      zh: '书页上的句子分两种：能逐字确认的，写明出处；不能确认的，前面标"情节大意"或"中译大意"。教授说，做学问的第一步不是背得多，是知道哪一句可以自己负责。学生要引用时，请回到原著核对，并把版本和译者一起记下。\n\n——教授',
      en: 'The lines on these pages come in two kinds: verifiable ones carry their source; the rest are marked “plot paraphrased” or “paraphrased from a translation”. The first scholarly habit, the professor says, is not memorising more but knowing which sentence you can vouch for. When you quote, go back to the original and note its edition and translator.\n\n— the professor'
    }
  }
];

/* 教授回信库：按关键词匹配，第三人称叙述 */
window.PROFESSOR = [
  {
    tags: ['怒', '气死', 'furious', 'anger', 'angry', 'rage', '吼', '想骂'],
    ref: 'anger',
    a: {
      zh: '教授把红书推过去，先不谈那件事。她对学生说，愤怒的强度在 9 分以上时，大脑负责语言的部分已经下线，这时候讲道理是给身体布置它做不到的作业。于是她只给了三步：两次短吸一次长呼做三组；冷水或冰块三十秒；把要说的话写在纸上，最后一行只写"我要的是……"。做完这三步，学生自己发现，最想说的其实不是那句狠话，而是"我希望这次听我的"。',
      en: 'The professor slides the red book over and does not touch the incident yet. Above 9/10, she tells the student, the language systems are already offline, so reasoning is homework the body cannot do. She gives three steps only: two short inhales with one long exhale, three rounds; cold water or ice for thirty seconds; write the sentence on paper and let its last line read “what I need is …”. When the steps are done, the student notices the line she most wanted to say was not the cruel one but “this time, hear me.”'
    }
  },
  {
    tags: ['被冤枉', '误解', '不公平', 'unfair', 'misunderstood', '冤枉', '偏心'],
    ref: 'anger',
    a: {
      zh: '教授说，被冤枉时的怒是"事实被篡改"的怒，它最需要的是纠正，不是安慰。她建议学生把三样东西分写在三行：他们说了什么、实际发生了什么、我希望被怎样改正。第三行是唯一需要被对方读到的。学生问，如果对方不听？教授说，那就找一个会听完的人，先把第三行说给他听——义愤最怕的是没有听众。',
      en: 'A wrong’s fury, the professor says, is fury at facts being rewritten; what it needs is correction, not comfort. She suggests three lines: what they said, what actually happened, what correction I want. Only the third line needs to reach the other person. And if they will not listen? Then say the third line to someone who will — righteous anger fears an audience of none.'
    }
  },
  {
    tags: ['慌', '焦虑', '紧张', '害怕', '担心', '考前', 'anxious', 'anxiety', 'nervous', 'panic', 'worried', 'scared'],
    ref: 'anxiety',
    a: {
      zh: '教授先让学生说出此刻身体里最响的一个部位，然后是第二个。她说，焦虑永远住在未来，而感官只能住在现在，这是接地技术唯一的原理。接着她把"我担心考不好"拆成两栏：能做的、不能做的。不能做的全部划掉；能做的只剩下一条——今天做五道题。学生问，心跳还是很快。教授说，那是能量，不是判决书。',
      en: 'The professor first asks the student to name the loudest place in the body, then the second. Anxiety lives in the future while the senses can only live in the present — that, she says, is the whole principle of grounding. Then “I’m afraid of failing” is split into two columns: actionable, not actionable. The second is crossed out; the first leaves one line: five questions today. My heart is still fast, the student says. That is energy, the professor answers, not a verdict.'
    }
  },
  {
    tags: ['睡不着', '失眠', '凌晨醒', 'insomnia', 'sleep', 'can’t sleep', 'cant sleep'],
    ref: 'body',
    a: {
      zh: '教授没有问她想什么，先问了三个时间：几点起床、几点见光、几点放下手机。她解释，固定起床时间比固定入睡时间更能锚住生物钟；醒后十分钟的自然光，是当天夜里最好的安眠药。至于床，她说只有一个用途：睡觉。躺二十分钟没睡着就起来，去读纸质书，有睡意再回床。学生最后才问到思绪，教授说，思绪交给担忧时间，睡前只记一行，不展开。',
      en: 'The professor asks not what she is thinking but three times: wake, daylight, phone-down. A fixed wake time anchors the clock better than a fixed bedtime, and ten minutes of morning light is the night’s best sedative. The bed has one purpose: sleep. Awake twenty minutes means up and out with a paper book, back only when drowsy. Only at the end does the student raise the thoughts — those go to the worry window, one line before bed, never unfolded.'
    }
  },
  {
    tags: ['没意思', '没意义', '迷茫', '不知道为什么', 'meaningless', 'pointless', 'lost', 'purpose'],
    ref: 'meaning',
    a: {
      zh: '教授翻开紫书，说意义不是想出来的，是被具体的事勾出来的。她给了弗兰克尔式的三个问题：今天有什么因为我的参与变好了一点；我今天回应了谁的什么需要；我把哪一分钟当成我自己的来用了。学生答第二条：同学问我笔记，我讲了十分钟。教授说，这就够了，明天再找一个。',
      en: 'The professor opens the purple book and says meaning is not thought up but hooked out of you by something concrete. Three questions, in Frankl’s spirit: what went slightly better because I took part; whose need did I answer; which minute did I spend as mine. The student finds the second: a classmate asked about my notes and I explained for ten minutes. Enough, says the professor. Tomorrow, one more.'
    }
  },
  {
    tags: ['累', '倦怠', '没劲', '提不起', 'burnout', 'tired', 'exhausted', 'drained', 'no energy'],
    ref: 'burnout',
    a: {
      zh: '教授问的第一句是：你难受吗？学生点头。教授说，懒的人不难受，难受的人不是懒。她让学生打开恢复账户，两栏：今天消耗了什么，补回了什么。学生发现连续四天只有消耗。教授便不许她加学习时间，只要求在第五天写下一个补回项——一个人、一次运动、或一件无用的爱好。她提醒，休息是任务，不是奖励。',
      en: 'Her first question: does it hurt? The student nods. The lazy do not ache, the professor says, and those who ache are not lazy. She opens the recovery diary in two columns — spent, refunded — and four spend-only days appear. So no extra study hours are allowed; on the fifth day the student must write one refund: a person, a movement, a useless hobby. Rest is a task, she reminds, not a reward.'
    }
  },
  {
    tags: ['拖', '拖延', '不想开始', 'procrastinate', 'procrastination', 'can’t start', 'cant start', 'avoid'],
    ref: 'procrastination',
    a: {
      zh: '教授说，推迟的不是任务，是"我可能做不好"的感觉。她让学生把任务降到一个不可能失败的动作：打开笔记本，写一题的题目和第一行。然后写 if–then：如果我坐到书桌前，那么我先做那道题；如果我想拿手机，那么我先把它翻过去放地上。学生问，这就够了吗？教授说，动机跟在开始后面，不跟在决心后面。',
      en: 'What gets postponed, the professor says, is not the task but the feeling of possibly failing. She reduces it to one act that cannot fail: open the notebook, write the question and its first line. Then the if–then: if I sit at the desk, then I do that question; if I reach for the phone, then I turn it face-down on the floor. Is that all? Motivation follows the start, she says, not the resolution.' }
  },
  {
    tags: ['考砸', '没考好', '分数', '失败', 'failed', 'bad grade', 'failed exam', 'mistake'],
    ref: 'shame',
    a: {
      zh: '教授先分辨了两句话："我这个人不行"是羞耻，"这次没做好"是愧疚。学生说的是前者。教授让她把句子重写一遍再读，然后把错题按三类归置：知识没到、审题没到、时间没到——每一类各写一条下周可做的动作。最后她说，分数是信息，不是身份。',
      en: 'The professor first separates two sentences: “I am no good” is shame, “this attempt fell short” is guilt. The student had said the first. She rewrites the sentence and reads it aloud, then sorts every wrong answer into three piles: content, reading the question, time — and writes one action for next week in each. A grade is information, she says, not identity.'
    }
  },
  {
    tags: ['比较', '不如别人', '别人都', '嫉妒', 'compare', 'jealous', 'envy', 'inferior'],
    ref: 'shame',
    a: {
      zh: '教授说，比较把标准租给别人，所以永远收不到房租。她建议两件小事：把"她都会了"改成"我这周要会的三条"；找一个起点和自己接近的人，只抄她的路径，不看她的结果。学生沉默很久，说其实我怕被看见努力了还不行。教授点头，说这句才是今天的核心。',
      en: 'Comparison rents out one’s standards, the professor says, and the rent never comes back. Two small moves: change “she already knows it all” into “the three things I will own this week”; find someone who started near you and copy the route, not the result. After a long silence the student says: what I fear is being seen trying and still failing. The professor nods — that, she says, is today’s real sentence.'
    }
  },
  {
    tags: ['朋友', '同学', '关系', '被孤立', '吵架', 'friend', 'friendship', 'quarrel', 'left out', 'lonely', '孤独'],
    ref: 'shame',
    a: {
      zh: '教授问了一个边界句式：事实、感受、要求。学生写："这周有两次考试（事实），我怕自己撑不住（感受），所以这次不能去，下次提前叫我（要求）。"教授强调，第三行要具体到时间或动作，否则会被听成生气。她还补了一句：拒绝一个邀请不损害一个好关系；损害关系的是长期不说是。',
      en: 'The professor offers the boundary form: fact, feeling, request. The student writes: two exams this week (fact); I’m afraid I can’t cope (feeling); so I can’t come, ask me earlier next time (request). The third line must name a time or an act, or it is heard as resentment. Declining one invitation does not damage a good relationship, she adds; what damages it is a long series of unspoken yeses.'
    }
  },
  {
    tags: ['背不住', '记不住', '忘了', '单词', 'memory', 'forget', 'memorize', 'memorise', 'vocab'],
    ref: 'learning',
    a: {
      zh: '教授把金书立在桌上，说：重读是熟悉感的骗局，回忆才是记忆的施工。她给了三步——读完一段，合上屏幕，在白纸上写出要点；只对错的，不重读；按 1-2-4-7-15-30 天的节奏再见下一次。学生担心写不出来很难看。教授说，想不起来是正常的，不是失败的证据；每一次费力提取都在加固路线。',
      en: 'The gold book stands on the desk. Re-reading, the professor says, is the fraud of familiarity; retrieval is the construction. Three steps: after a section close the screen and write the points on paper; repair only what is wrong, do not re-read; meet it again on the 1-2-4-7-15-30 ladder. What if I write nonsense? Failing to recall is normal, not evidence — every effortful retrieval paves the route.'
    }
  },
  {
    tags: ['注意力', '走神', '分心', '专注', 'focus', 'distracted', 'attention', 'concentrate'],
    ref: 'moodmap',
    a: {
      zh: '教授先查的是走神属于哪一类：若是困惑（不知道先做哪个），解法是外部化和决策降级；若是疲劳（读两行就飘），解法是把高认知任务挪到早晨；若是焦虑（脑子在想后果），先做接地再开工。她说，注意力不是一个开关，而是三张不同的处方，很多学生一直在用错的那张。',
      en: 'The professor first asks which kind of drift this is. Confusion (no idea where to start) is treated by externalising and downgrading the decision; fatigue (two lines and it floats away) by moving hard work to the morning; anxiety (the mind is on consequences) by grounding before starting. Attention, she says, is not one switch but three different prescriptions, and most students keep using the wrong one.'
    }
  },
  {
    tags: ['父母', '家', '被骂', '管太多', 'parents', 'family', 'mother', 'father'],
    ref: 'shame',
    a: {
      zh: '教授说，家里的怒常常最烫，因为它发生在没有观众的地方，也没有后果可以协商。她建议两件事：把要求写成一句能被读到的话（不是感受的长段落）；给谈话选时间和地点——疲惫时和走廊上都谈不成。学生问如果对方不接受。教授说，那也不是失败；边界是宣告，不是谈判结果。',
      en: 'Anger at home burns hottest, the professor says, because it happens where there is no audience and no negotiable consequences. Two suggestions: write the request as one readable sentence, not a long confession of feeling; and choose the hour and the room — nothing gets said when both are tired, or in a corridor. And if they refuse? That is not failure either. A boundary is a declaration, not a verdict.'
    }
  },
  {
    tags: ['哭', '想哭', '难过', '低落', 'sad', 'cry', 'depressed', 'down', 'empty'],
    ref: 'moodmap',
    a: {
      zh: '教授没有立刻递纸，先问了两件最低功率的事：今天喝过水吗，昨天几点睡的。然后她说，低落处在环状地图的"不愉快 × 低唤醒"象限，这个象限的药不是想开点，而是行为激活——一件五分钟、能完成、能被看见的事。学生照做了，说只做了把杯子拿去厨房。教授说，这一条要记进清单，因为它是证据。最后她补上那句老话：如果这样的日子连续两周以上，就要去找真正的人帮忙，书屋不做治疗。',
      en: 'The professor does not hand over a tissue first; she asks the two lowest-power questions: have you drunk water today, and what time did you sleep. Low mood, she says, sits in the unpleasant × low-arousal quadrant, and this quadrant’s medicine is not perspective but activation — one five-minute, completable, visible act. The student reports carrying the cup to the kitchen. Write that in the list, says the professor; it is evidence. Then the old line: if such days run past two weeks, go to a real person. This house does not do therapy.'
    }
  },
  {
    tags: ['心情', '归类', '分类', 'mood', 'classify', 'how do i feel', 'how do I feel'],
    ref: 'moodmap',
    a: {
      zh: '教授把绿书翻到地图那一页，说归类只需要三步：第一，选一个 POMS 维度的词（紧张、抑郁、愤怒、活力、疲劳、困惑）；第二，看唤醒度是高还是低；第三，按高唤醒先降温、低唤醒先行动来决定做什么。她说，"我心情不好"这句话不能指导任何动作，而"我现在愤怒，且很高唤醒"已经自带了三步流程。',
      en: 'The green book opens at the map. Three steps, the professor says: choose one POMS word — tension, depression, anger, vigor, fatigue, confusion; then read the arousal, high or low; then act by the rule — high arousal cools down, low arousal moves first. “I feel bad” directs no action; “I am angry and highly aroused” already contains the whole procedure.'
    }
  },
  {
    tags: ['今天', '流程', '怎么开始', 'routine', 'start', 'plan', 'what should i do'],
    ref: 'learning',
    a: {
      zh: '教授给了当天的四步：一、在绿书签到心情；二、读一本的一节，加一条进记忆清单；三、做完十题并读完解释；四、若有问题，用提问额度问一句带三样信息的问话。她说，整个流程不超过四十分钟，剩下的时间属于生活。',
      en: 'Four steps for the day, the professor says: log the mood in the green book; read one section of one book and add one line to the list; finish the ten questions and read every explanation; if there is a question, spend one of the ten on a sentence that carries three things — what happened, what the body did, what was tried. The whole flow takes under forty minutes, she says. The rest belongs to life.'
    }
  },
  {
    tags: ['安全', '自伤', '不想活', 'hurt myself', 'self-harm', 'suicide', 'die'],
    ref: null,
    a: {
      zh: '教授停下来，把书合上。她说，这句话在这里最重要：如果出现伤害自己的念头，或低落已经持续两周以上、开始影响吃饭睡觉上学，这就不是学习问题了，需要马上找一个真实的人——可信的家人、老师、校医，或专业热线（中国大陆 12356，24 小时；紧急情况下先联系本地急救）。她说她会继续在这里读书，但她不能替代那一通电话；学生现在要做的，是把这段话给一个大人看。',
      en: 'The professor stops and closes the book. This, she says, is the most important sentence here: if thoughts of harming yourself appear, or low mood has run past two weeks and begun to affect eating, sleeping or school, this is no longer a study question. Reach a real person now — a trusted family member, teacher, school counsellor, or a professional line (in mainland China 12356, 24 hours; in an emergency, local emergency services first). She will keep reading here, she says, but she cannot replace that phone call. What the student does now is show these words to an adult.'
    }
  },
  {
    tags: ['名著', '书', '例子', '哪一本', 'novel', 'book about', 'classic'],
    ref: 'clinic',
    a: {
      zh: '教授把黑书称作诊所。她说，读人物的顺序是三步：先认同——认出他身上和你相同的那一下；再净化——说出他替你做了什么你敢不敢做的；最后领悟——把它变成明天一条可执行的动作。她提醒，名著在这里不是装饰也不是标准答案，而是一个人的情感被写下来以后，可供别人借用一次。',
      en: 'The professor calls the black book a clinic. Read a character in three steps, she says: identification — find the moment you share; catharsis — say what he did that you dared not; insight — convert it into one action for tomorrow. The classics here are neither decoration nor answer key, she reminds us; they are one person’s feelings written down so that another may borrow them once.'
    }
  },
  {
    tags: ['英语', '英文', '句子', 'english', 'sentence', 'expression'],
    ref: 'learning',
    a: {
      zh: '教授建议中文读道理、英文背句子。她指出，红书里那句 Jane Eyre 的话本来就是英文，用它做提取练习比背单词表省力；切换语言的方式是点她的帽子。她还要求每个英文句子后面加一句"我什么时候会用到它"，否则句子只是收藏。',
      en: 'Read the reasoning in Chinese, memorise the lines in English, the professor advises. The Jane Eyre sentence in the red book was English to begin with, so retrieving it costs less than drilling a word list — and the way to switch languages is to tap her hat. She also requires one clause after every English line: when will I use it. Otherwise the sentence is only collection.'
    }
  },
  {
    tags: ['帽子', '信', '掉', 'hat', 'letter', 'envelope'],
    ref: null,
    a: {
      zh: '教授说帽子是双语开关，口袋是信源。每点一次帽子，语言翻转一次，同时掉出一封写着学习流程的信；十四封收齐后，会随机重放。她强调，掉信不是为了惊喜，是为了让学生在最不知道该做什么的一天里，随便抽一封都能读到"下一步"。',
      en: 'The hat is the language switch and the pocket is the source, the professor says. Each tap flips the tongue and drops one letter of the study flow; after all fourteen, they replay at random. The letters are not surprises, she says — they exist so that on the day you do not know what to do, any one of them still tells you the next step.'
    }
  },
  {
    tags: ['考试', '十题', 'quiz', 'exam', 'test', 'score'],
    ref: 'learning',
    a: {
      zh: '教授解释十题的设计：跨全部书目随机抽取，所以它同时是提取练习和交错练习；交卷后逐题给解释，错题那一句应当立刻加进记忆清单。她说，今日成绩只与昨日比较，不与任何人比较；而"再练一次"那一份不计入记录，因为它已经没有提取的难度了。',
      en: 'The ten questions, the professor explains, are drawn across every book, so one quiz is both retrieval and interleaving; after submitting, each answer carries its explanation, and the wrong line should go straight into the memory list. Today’s score compares with yesterday’s only, never with anyone else. The “practice again” copy is ungraded — it has lost the difficulty that makes retrieval work.'
    }
  },
  {
    tags: ['问', '提问', '次数', 'quota', 'ask'],
    ref: null,
    a: {
      zh: '教授说每天十次，午夜重置，次数不是限制而是提醒：十次里若有一半只是把当天的事说出来，学习效果已经够了。她建议把最难的两次留给"我说不清这是哪种心情"，其余留给方法与句子。',
      en: 'Ten a day, reset at midnight, the professor says. The limit is a prompt rather than a restriction: if half of them simply put the day into words, the learning is already happening. Save the hardest two for “I cannot say which mood this is”, and spend the rest on methods and sentences.'
    }
  },
  {
    tags: ['想家', '归属', '不属于', '融入', '转学', '异地', '没有根', 'homesick', 'belong', 'fit in', 'transfer school', 'rootless'],
    ref: 'wuli',
    a: {
      zh: '教授翻开青色那本。她说，想家不是矫情，是归属需要在报警——它和饿、和疼一样是原始信号，压不掉，只能回答。她给学生三样证据的作业：一个认得你的人、一处走得进去的地方、一种吃得出的味道，并要求在二十四小时内对其中一样做一件五分钟的实事。她还提醒，判断一处处境健不健康，看的不是能不能离开，而是将来回去是不是自己选的。',
      en: 'The professor opens the teal book. Homesickness is not fussiness, she says; it is the need to belong sounding an alarm, primitive as hunger, unpressable, answerable only. She sets the homework of three pieces of evidence — one person who knows you, one place you can walk into, one taste you can name — and asks for one five-minute real action on one of them within twenty-four hours. Whether a situation is healthy, she adds, is judged not by whether you can leave but by whether returning would be your own choice.'
    }
  },
  {
    tags: ['失去', '去世', '走了', '过世', '爷爷', '奶奶', '外公', '外婆', '哀伤', 'grief', 'died', 'passed away', 'loss'],
    ref: 'living',
    a: {
      zh: '教授没有说"节哀"。她先承认这件事真的发生了，再问学生：你想他的时候，一般是几点、在哪里。她解释，哀伤不是一条走完的路，是一圈一圈回来的浪，所以要给思念安排一个固定的位置——每周十分钟，只讲细节，不讲"如果当初"。最后是一句要紧的话：被留下来的人不是做错事的人；若两周吃不下、睡不着、上不了学，就不再是学习问题，请立刻告诉大人并寻求专业帮助（中国大陆可拨 12356）。',
      en: 'The professor does not say “be brave”. She first admits the fact happened, then asks: when you miss them, what hour, what place. Grief, she explains, is not a road walked to its end but a wave returning in circles, so the missing needs a fixed slot — ten minutes a week, details only, never the “if only”. Then the line that matters: the one left behind did nothing wrong. And if for two weeks there is no appetite, no sleep, no school, this is no longer a study matter — tell an adult and seek professional help at once (in mainland China, 12356).'
    }
  },
  {
    tags: ['吃苦', '熬', '撑不住', '活着为了什么', '这么累为什么', 'endure', 'why go on', 'so tired', 'hard life'],
    ref: 'living',
    a: {
      zh: '教授先说清一件事：苦难本身不值得感谢，值得认领的是苦难之后仍然留下的东西。她把赭色那本翻开，指着"为活着本身而活着"这一句，告诉学生这不是叫人躺平，是把"我配不配活"这个问题从每天的作业里删掉。然后她安排一个极小的动作：写下今天三件"活着的事"——喝过水、回过消息、把书包背上楼——并说，能列出这三样的人，已经在回答那个很大的问题。',
      en: 'The professor states one thing first: pain deserves no gratitude; what can be claimed is what remains after it. She opens the ochre book to the line about living for the sake of living itself and says it is no invitation to lie down — it deletes the question “do I deserve to live” from the daily homework. Then a very small act: write today’s three instances of being alive — drank water, replied to a message, carried the bag upstairs. Anyone who can list those, she says, has already answered the large question.'
    }
  },
  {
    tags: ['丢脸', '丢人', '羞辱', '侮辱', '看不起', '嘲笑', '被笑话', '尊严', 'humiliate', 'ashamed', 'shame', 'mocked', 'looked down'],
    ref: 'xusanguan',
    a: {
      zh: '教授把靛色那本推过去，分得很清：疼可以忍，羞辱不必接受——前者是身体的账，后者是别人替你写下的人格判决。她让学生写两栏，左栏"这次发生了什么行为"，右栏"我这个人是什么"，并规定右栏不许由别人填。最后她说，最难堪的那件事，讲到第三遍时音量就会变小；不是它变了，是你能拿着它了。',
      en: 'The professor slides the indigo book over and draws the line clearly: pain may be borne, humiliation need not be accepted — the first is a bill of the body, the second a verdict on your person written by someone else. Two columns, she asks: the behaviour that occurred, and what I am; and the second column is not for anyone else to fill. The most humiliating thing, she finishes, grows quieter by the third telling. Not because it changed — because you can hold it now.'
    }
  },
  {
    tags: ['死亡', '死后', '怕死', '葬礼', '墓地', '害怕死', 'death', 'dying', 'afraid of death', 'funeral'],
    ref: 'seventh',
    a: {
      zh: '教授把灰色那本放在桌上，没有翻开。她说，想到死，多数时候不是病，是心里在问"那我到底想怎样活"；这本书里的人连墓地都没有，却还在互相找、互相等，所以真正护住人的是"有人一起扛"。她先要学生做一件具体的事：写一张低心情保护单——三件让自己稳一点的小事、一个可以说一句话的人、最下面抄 12356 和两周规则。她说，若这些念头变成"我要不要伤害自己"，那就不是提问时间了，请立刻找大人。',
      en: 'The professor sets the grey book on the table without opening it. Thinking of death, she says, is usually not illness but the heart asking how, then, do I want to live. The people in this novel have no graves and still keep searching for and waiting for each other; what shields a person is carrying it with someone. First, one concrete task: a low-mood safety card — three steadying small things, one person to whom you would say a line, and at the bottom, 12356 plus the two-week rule. If the thought turns into “should I hurt myself”, she says, this is no longer question time; find an adult immediately.'
    }
  },
  {
    tags: ['攀比', '虚荣', '名牌', '别人的生活', '朋友圈', '羡慕', '比不过', 'brand', 'show off', 'envy feed', 'keep up'],
    ref: 'maupassant',
    a: {
      zh: '教授翻开绛色那本，第一条就追问：你在和谁的哪一面比——他的成品，还是他的日常？玛蒂尔德只看见了舞会，没看见后来十年的账本。她让学生把"我也应该有"改写成"我要哪一样，折成多少钱或多少小时"，选一样写一个本周二十分钟的版本，另一样亲手划掉。最后她说，喜欢好东西不丢人，用十年换一条假项链才需要重新算。',
      en: 'The professor opens the crimson book and asks at once: whose which are you comparing with — their finished product, or their ordinary day? Mathilde saw only the ball, never the ten-year ledger afterwards. Rewrite “I should have that too” as “which one do I want, priced in money or hours”, plan a twenty-minute version of one this week, and cross the other off by hand. Liking nice things is not shameful, she says; trading a decade for a paste necklace is what needs reckoning.'
    }
  },
  {
    tags: ['被利用', '道德绑架', '不好意思拒绝', '帮我一下', 'say no', 'take advantage', 'used', 'peer pressure'],
    ref: 'maupassant',
    a: {
      zh: '教授讲的是羊脂球那节车厢：同车的人先劝她让步，事后各自吃开干粮，没有人看她一眼。她说，群体借用你的善良之后往往还要鄙视你，所以让步之前只问一句——"这个代价你们谁承担？"，然后把答案记住。练拒绝时只用一句短句，例如"这次不行"，不带抱歉、不给理由；对方再劝，就把同一句话原样重复。事后不必道歉，那是第二次让步。',
      en: 'The professor points to the coach in Boule de Suif: her fellow travellers first urge her to yield, then eat their own provisions and none looks at her. A group will borrow your kindness and then despise you for it, she says, so before yielding ask one question — “who among you carries the cost?” — and remember the answer. Practise refusal as one short line, “not this time”, without apology or reason; if pressed, repeat the identical sentence. Do not apologise afterwards; that would be the second concession.'
    }
  }
];

window.PROFESSOR_DEFAULT = [
  {
    a: {
      zh: '教授听完，没有立刻给答案。她先把学生的话分成三栏：事实、感受、要求——因为愤怒和慌张时常挤在一句里，分开之后才看得见真正要处理的那一件。然后她翻开绿书，问了一个问题：这一件事带来的状态，是更紧绷还是更没力气？学生答后，方法就自己出现了：紧绷要先降温，没力气要先动一个五分钟的小东西。最后她说，把今天这一句写进记忆清单，明天再回来看它是否还成立。',
      en: 'The professor listens and gives no answer at once. She sorts the student’s sentence into three columns — fact, feeling, request — because fury and panic crowd into one line, and only separated do they show which one needs handling. Then the green book opens with a single question: does this leave you more tense, or more drained? Once answered, the method arrives on its own: tension is cooled, drain is moved, in a five-minute something. Finally she says, put today’s sentence into the memory list and check tomorrow whether it still holds.'
    }
  },
  {
    a: {
      zh: '教授说，这个问题她需要先把它变成一个可以观察的问题：明天同一时间，你怎么知道情况好了一点？学生想了想，说至少我能把那道题做完。教授便把范围收到这里——一条可观察的动作、一个可完成的时间、一个可记录的结果。她还提醒，把句子写进清单时要用英文原文，因为双语切换本身就是一次提取。',
      en: 'This question, the professor says, first needs to become one that can be observed: tomorrow at the same hour, how would you know it went slightly better? The student thinks, then says — at least I would have finished that one question. So the scope shrinks to that: one observable act, one completable time, one recordable result. And when writing it into the list, she adds, use the English line — the switch of languages is itself a retrieval.'
    }
  },
  {
    a: {
      zh: '教授把十本书依次点过去，最后停在某一册上，说：你今天的问题在这里有对应的句子，但句子要读过才算数。她给学生的不是结论，而是三个动作——读那一节、加一条进清单、今天十题里若抽到它就把解释读完。她说，书屋的工作方式是让回答慢一点，但留下来的多一点。',
      en: 'The professor taps along the ten books and stops on one: your question has a sentence waiting in there, but a sentence must be read to count. What she gives is not a conclusion but three moves — read that section, add one line to the list, and if the daily ten draws it, finish the explanation. That is how this house works, she says: the answer arrives slower and stays longer.'
    }
  }
];
