// data2.js - ゲーム配信特化型 AI辞書・演出データ
window.AIData2 = {
  // 1. チャットコメント・音声認識に対するキーワード反応パターン
  patternDict: {
    ja: [
      { pattern: "ラーメン|つけ麺|家系", responses: ["ラーメンの話ですか！スープの出汁や麺の固さ、こだわりたくなりますよね。"] },
      { pattern: "カレー|スープカレー", responses: ["カレー！辛さはどれくらいが好きですか？スパイスの香りが欲しくなります。"] },
      { pattern: "寿司|すし|お寿司", responses: ["お寿司いいですね！マグロ、サーモン、えんがわ…好きなネタは何ですか？"] },
      { pattern: "焼肉|カルビ|タン塩", responses: ["焼肉！じゅわっと焼けるお肉と白ご飯の組み合わせは最強です！"] },
      { pattern: "ピザ|宅配ピザ", responses: ["ピザ！チーズたっぷりのピザを食べながらの配信、最高の贅沢ですね！"] },
      { pattern: "パスタ|スパゲッティ", responses: ["パスタですね！トマト系、クリーム系、ペペロンチーノ…どれも捨てがたい！"] },
      { pattern: "ハンバーガー|バーガー", responses: ["ハンバーガー！がっつり一口かぶりつくのが美味しいですよね！"] },
      { pattern: "牛丼|吉野家|すき家|松屋", responses: ["牛丼ですね！安くて早くて美味い、ゲーマーの強い味方です！"] },
      { pattern: "餃子|ギョーザ", responses: ["餃子！パリッとした羽根とジューシーな肉汁、たまらないです！"] },
      { pattern: "マック|マクド|マクドナルド", responses: ["マック！ポテトの匂いってどうしてあんなに誘惑してくるんでしょうね。"] },
      { pattern: "ケンタ|KFC|ケンタッキー", responses: ["ケンタッキー！あのスパイシーなチキンは無性に食べたくなります。"] },
      { pattern: "ガスト|サイゼ|サイゼリヤ", responses: ["ファミリーレストランですね！ミラノ風ドリアやハンバーグ、落ち着きます。"] },
      { pattern: "スタバ|スターバックス", responses: ["スタバの話題ですね！新作フラペチーノや季節限定ドリンク、気になります！"] },
      { pattern: "コンビニ|セブン|ファミマ|ローソン", responses: ["コンビニですね！ついついホットスナックや新商品買っちゃいますよね。"] },
      { pattern: "エナドリ|エナジードリンク", responses: ["エナドリ注入ですか！気合は入りますが、カフェインの取りすぎには注意です！"] },
      { pattern: "モンスター|Monster", responses: ["モンスターエナジー！緑、ピンク、白…どれを愛飲していますか？"] },
      { pattern: "レッドブル|RedBull", responses: ["レッドブル、翼をさずける！ここ一番の集中力アップですね！"] },
      { pattern: "コーヒー|珈琲|カフェオレ", responses: ["ホッと一息コーヒータイムですね。作業やゲームのお供に最高です。"] },
      { pattern: "紅茶|ミルクティー", responses: ["紅茶の香りはリラックスできますね。優雅な気分になれます。"] },
      { pattern: "タピオカ", responses: ["タピオカ！モチモチした食感が癖になりますよね。"] },
      { pattern: "ビール|ハイボール|お酒", responses: ["お酒ですね！ほろ酔いでのゲームやトークも楽しそうです！"] },
      { pattern: "アイス|アイスクリーム", responses: ["アイス！頭をシャキッと冷やしたい時や食後のデザートに最高ですね。"] },
      { pattern: "チョコ|チョコレート", responses: ["チョコレート！甘い糖分補給で脳の疲労を回復させましょう！"] },
      { pattern: "ポテチ|ポテトチップス", responses: ["ポテチ！ゲーム中に手が汚れない箸食いスタイル、おすすめです。"] },
      { pattern: "夜食|夜食テロ", responses: ["この時間の夜食の話はテロですね…！お腹が鳴っちゃいそうです。"] },

      // --------------------------------------------------
      // 4. ガジェット・場所・Webサービス（25選）
      // --------------------------------------------------
      { pattern: "iPhone|Android|スマホ", responses: ["スマホの話題ですね！最新機種のスペックやカメラ機能はすごいです。"] },
      { pattern: "Steam|スチーム", responses: ["Steamですね！セールの時期になると欲しいゲームが増えすぎて困ります！"] },
      { pattern: "Discord|ディスコード|ディスコード", responses: ["Discord！通話しながらの通話プレイやコミュニティ作りに欠かせませんね。"] },
      { pattern: "OBS|配信ソフト", responses: ["OBSの設定ですね！画面構成や音声設定、こだわると深いですよね。"] },
      { pattern: "Switch|ニンテンドースイッチ", responses: ["Switch！手軽に遊べて名作勢揃いの素晴らしいハードです！"] },
      { pattern: "PS5|プレステ5", responses: ["PS5ですね！グラフィックの綺麗さとロードの速さに驚かされます。"] },
      { pattern: "iPad|タブレット", responses: ["iPadやタブレット！お絵描きやコメ欄確認、サブモニターにも使えて便利です。"] },
      { pattern: "ディスプレイ|モニター|144Hz|240Hz", responses: ["高リフレッシュレートのモニターですね！ヌルヌル動くとゲームの勝率も上がります！"] },
      { pattern: "マイク|コンデンサーマイク", responses: ["マイクのこだわり！いい声やクリアな音質を届ける大切な相棒ですね。"] },
      { pattern: "ヘッドセット|イヤホン|ヘッドホン", responses: ["ヘッドセット！敵の足音や微かな環境音を聞き分けるのに必須です。"] },
      { pattern: "グラボ|GPU|RTX", responses: ["グラフィックボード！最新のグラボはゲーム体験を一変させてくれますね。"] },
      { pattern: "ゲーミングPC|PC構築", responses: ["ゲーミングPC！光るケースやパーツ選び、考えている時間だけで楽しいです。"] },
      { pattern: "キーボード|メカニカルキーボード", responses: ["キーボードの打鍵音、心地いいですよね！軸選びにこだわりを感じます。"] },
      { pattern: "Amazon|アマゾン", responses: ["Amazonポチりですか！ポチった商品が届くまでのワクワク感、好きです。"] },
      { pattern: "銭湯|温泉", responses: ["温泉や銭湯！大きな湯船に浸かって日頃の疲れを癒やすの、最高です。"] },
      { pattern: "サウナ|サ活|ととのう", responses: ["サウナで「ととのう」ですね！頭がスッキリしてリフレッシュできます。"] },
      { pattern: "映画館|映画", responses: ["映画館の大画面と大音響で観る作品、没入感が違いますよね！"] },
      { pattern: "水族館", responses: ["水族館！ゆらゆら泳ぐクラゲや魚を見て癒やされたいですね。"] },
      { pattern: "ディズニー|ランド|シー", responses: ["ディズニー！あの夢の世界の空気感とアトラクション、特別感があります。"] },
      { pattern: "USJ|ユニバ", responses: ["ユニバですね！ダイナミックなアトラクションやワールド、全力で楽しめます！"] },
      { pattern: "渋谷|秋葉原|新宿", responses: ["都内の話題ですね！サブカルチャーや最新トレンドの集まる場所です！"] },
      { pattern: "カラオケ", responses: ["カラオケ！思いっきり声を出すとストレス発散になりますよね！"] },
      { pattern: "YouTube|Twitch", responses: ["動画配信プラットフォームですね！いつでも面白いコンテンツに溢れています。"] },
      { pattern: "Twitter|X|SNS", responses: ["SNSの話題ですね！タイムラインでトレンドを追うの、ついやっちゃいます。"] },
      { pattern: "Wi-Fi|回線速度|光回線", responses: ["回線環境はゲーマーにとっての生命線！爆速回線が一番の理想です！"] },

      // --------------------------------------------------
      // 5. 日常・サブカル・季節イベント（20選）
      // --------------------------------------------------
      { pattern: "アニメ|今期アニメ", responses: ["アニメの話ですね！今期の推しアニメや注目の作品は何ですか？"] },
      { pattern: "マンガ|漫画", responses: ["漫画ですね！単行本を一気読みする時のワクワク感、止まりません。"] },
      { pattern: "推し|推し活", responses: ["推しがいる生活、毎日が輝いて素晴らしいですよね！全力で推していきましょう！"] },
      { pattern: "聖地巡礼", responses: ["作品の聖地巡礼！同じ景色を見たときの感動はひとしおです。"] },
      { pattern: "夏祭り|屋台", responses: ["夏祭り！金魚すくいや屋台の焼きそば、風情があって良いですね。"] },
      { pattern: "花火|花火大会", responses: ["花火大会！夜空に広がる大輪の花火、夏の最高の思い出になります。"] },
      { pattern: "ハロウィン|仮装", responses: ["ハロウィン！仮装や限定イベントで街全体が賑やかになりますね。"] },
      { pattern: "クリスマス|イルミネーション", responses: ["クリスマス！街のイルミネーションやケーキ、浮き立つ空気感です。"] },
      { pattern: "初詣|おみくじ", responses: ["初詣でおみくじ引きましたか？今年一年が素晴らしい年になりますように！"] },
      { pattern: "バレンタイン|チョコ", responses: ["バレンタイン！美味しいチョコを自分へのご褒美にするのもアリです！"] },
      { pattern: "GW|ゴールデンウィーク", responses: ["大型連休ゴールデンウィーク！旅行ですか？それとも家でゲーム三昧ですか？"] },
      { pattern: "お盆|夏休み", responses: ["お盆休みや夏休み！のんびり羽を伸ばしてリフレッシュしてくださいね。"] },
      { pattern: "確定申告", responses: ["確定申告…！配信者やクリエイターの前に立ちはだかる最大のボスですね。"] },
      { pattern: "徹夜|オール", responses: ["徹夜ですか…！体調には気をつけて、どこかでしっかり睡眠をとってくださいね！"] },
      { pattern: "休日|休み", responses: ["お休みですね！思う存分自分の好きなことをして過ごしましょう！"] },
      { pattern: "昼寝|二度寝", responses: ["二度寝の幸福感は異常です…！最高の贅沢タイムですね。"] },
      { pattern: "筋トレ|ジム|ワークアウト", responses: ["筋トレ！運動して汗を流すと心も体も健康的になりますね！"] },
      { pattern: "散歩|ウォーキング", responses: ["お散歩ですか！外の空気を吸うと気分転換になって頭がスッキリしますよ。"] },
      { pattern: "買い物|ショッピング", responses: ["ショッピング！欲しいものを探して歩く時間ってすごくワクワクします。"] },
      { pattern: "掃除|模様替え", responses: ["部屋の掃除や模様替え！スッキリした空間になると集中力も増しますね。"] }
    ],
    en: [
      { pattern: "Pizza|Burger|Ramen|Coffee", responses: ["Talking about delicious food or drinks makes me hungry!"] },
      { pattern: "Stream|Gacha|Gamer", responses: ["Gaming and streaming culture is the absolute best!"] }
    ]
  },
  // 2. 定期・アナウンス単発フレーズ（ゲーム配信仕様）
  oncePhrases: {
    ja: [
      "高評価ボタンを押してもらえると、配信のモチベーションが爆上がりします！",
      "みんなの好きなゲームのキャラクターや武器もぜひ教えてね！",
      "チャンネル登録や高評価、いつも本当にありがとう！"
    ],
    en: [
      "Hitting that like button really boosts the stream, thank you!",
      "Let me know your favorite characters or weapons in the chat!",
      "Thank you all so much for subscribing and supporting the stream!"
    ]
  },

  // 3. ループ巡回用フレーズ（ゲーム・雑談まったり用）
  loopPhrases: {
    ja: [
      "今日のプレイング、みんなの調子はどんな感じ？",
      "この場面、みんなならどう立ち回る？",
      "画面から目が離せない、手に汗握る展開だね……！"
    ],
    en: [
      "How are we feeling about today's gameplay so far?",
      "How would you guys handle this tricky situation?",
      "Can't take my eyes off the screen, this is so intense!"
    ]
  },

  // 4. 20秒無言検知時にAIが自動で喋るゲーム実況風独り言
  silencePhrases: {
     ja: [
        // 【1. デスクワーク・作業中】
        "（キーボードを叩きながら）……っと、ここをこう直して、と。意外と時間かかるなぁ",
        "（ペンをくるくる回しながら）うーん、このアイデアはちょっとボツかな。別の切り口で考え直そっと",
        "（資料のページをパラパラとめくりながら）必要なデータ、どこに挟んだっけ……あ、あったあった",
        "（パソコンの画面をじっと見つめながら）よし、このセクションの入力はここまで。順調順調",
        "（マウスをカチカチ動かしながら）レイアウト、もう少し余白があった方が見やすい……かな",
        "（ノートに文字を書き込んで）なるほどね、あとでここ掘り下げて調べておこ",
        "（ため息をつきつつ）あー、肩凝った。ちょっと姿勢正さなきゃ",
        "（スマホの画面をチラッと見て）あ、もうこんな時間。集中するとすぐ忘れちゃうな",

        // 【2. 家事・部屋での動き】
        "（コーヒーをマグカップに注ぎながら）ふぅ、やっぱり一息つかないと頭が回らないや",
        "（洗濯物を畳みながら）今日のうちにこれ片付けちゃえば、週末はゆっくりできるはず",
        "（掃除機のコードを巻き取りながら）よし、部屋の隅っこもきれいになった。スッキリ！",
        "（冷蔵庫を開けて中を覗き込みながら）……うーん、今日の夜ご飯は何にしようかなぁ",
        "（窓の外を眺めながら）あ、いい天気。ちょっと空気の入れ替えでもしようっと",
        "（お腹が鳴って、苦笑いしながら）……おっと、お腹空いた合図が出ちゃったな",
        "（マグカップを洗面台に持って行きつつ）あとでまとめて洗おうと思ってたのに、結局すぐやっちゃう性格だなぁ",

        // 【3. 休憩・リラックスタイム】
        "（大きく伸びをして）ふぁぁ……。椅子に座りっぱなしだったから、体がバキバキだ",
        "（冷めたお茶を飲み干して）あ、もうお冷なくなっちゃった。お代わり入れてこよ",
        "（カレンダーを眺めながら）来週の予定、そろそろちゃんと組んでおかないとやばいかも",
        "（部屋の明かりを少し落として）うん、これくらいの明るさの方が落ち着くんだよね",
        "（お気に入りのクッションを抱え直して）よし、少しだけぼーっとする時間にしよ",
        "（本棚の前で背伸びをしながら）読みかけの本、どこに置いたっけな……あ、ここにあった",
        "（音楽のプレイリストを選びながら）お部屋用のBGM、今日はこれにしよっと。落ち着いたやつがいいな",

        // 【4. 一日の終わり・夜のひとコマ】
        "（パソコンをスリープモードにしながら）今日のノルマはこれくらいで勘弁してあげよ",
        "（机の上のペンや小物を片付けながら）明日やること、付箋に書いて目立つところに貼っとこ",
        "（カーテンをシャッと閉めながら）すっかり暗くなったな。夜風がちょっと心地いいかも",
        "（鏡の前で髪を軽く結び直しながら）さて、お風呂の準備しよっか",
        "（温かいスープを一口飲んで）はぁ……染みる。今日一日よく頑張りました、私",
        "（スマホの画面をスクロールしながら）あ、これ気になってたレシピだ。今度作ってみよ",
        "（部屋の電気を消しながら）お疲れ様、自分。明日もマイペースでいこっと",
        "（ベッドにゴロンと横になりながら）ふかふか……。やっぱり自分の部屋が一番落ち着くや",

        // 【5. 状況確認・作戦】
        "今の状況、攻める？ 守る？ それとも引く？",
        "次のターゲット、誰にする？",
        "今のうちにセーブしとく？ まだ先に進む？",
        "この敵、弱点ってどこだと思う？",
        "次の作戦、誰が囮役を引き受ける？",
        "今のうちに作戦を立て直す時間取る？",
        "次のターン、何する予定？",
        "今のうちにバフや回復をかけ直す？",

        // 【6. 選択・ルート分岐】
        "次の道、右と左どっちの直感が働く？",
        "この選択、慎重に行く？ それともノリと勢いで行く？",
        "次のエリアに行く前に、やり残した探索はない？",
        "この選択、全員一致ですぐ決まりそう？",
        "次のイベント、嫌な予感がしない？",
        "この選択肢、沼る（泥沼化する）予感がする？",

        // 【7. リソース・アイテム管理】
        "手持ちのアイテム、ここで出し惜しみする？ それとも使う？",
        "手に入った新しい装備、誰に持たせる？",
        "手持ちの資金、そろそろ使い切っちゃう？",
        "今一番頼りにしてる回復手段は何？",
        "次の部屋に入る前に、しっかり回復しとく？",

        // 【8. ピンチ・リアクション】
        "今のピンチ、誰のせいにしちゃう？",
        "やばい、これ全滅の危機ある？ それともいける？",
        "そろそろ撤退の二文字が頭をよぎる？",
        "今の攻撃、ギリギリ避けた？ それとも直撃した？",
        "このピンチ、気合いで乗り切れそう？",
        "味方の巻き込みや誤射にヒヤッとした？",
        "今のダメージ、痛かった？ 余裕？",
        "敵の数が多くない？ 気のせい？"
    ],
    en: [
        // Desk work
        "(Typing on the keyboard) ...Alright, let's fix this part here. It's taking more time than I thought.",
        "(Spinning a pen) Hmm, this idea might be a dud. Let's think about it from a different angle.",
        "(Flipping through pages) Where did I put that data... Ah, here it is.",
        "(Staring at the screen) Okay, that's it for this section. Everything is going smoothly.",
        "(Clicking the mouse) The layout might be easier to read with a bit more margin... maybe.",
        "(Writing in a notebook) I see, I should dig deeper into this later.",
        "(Sighing) Ah, my shoulders are stiff. I need to fix my posture.",
        "(Glancing at smartphone) Oh, it's already this late. I lose track of time when I concentrate.",

        // Housework
        "(Pouring coffee) Phew, my brain doesn't work without taking a breather.",
        "(Folding laundry) If I finish this today, I should be able to relax this weekend.",
        "(Winding the vacuum cord) Alright, the corners are clean too. So refreshing!",
        "(Looking inside the fridge) ...Hmm, what should I have for dinner today?",
        "(Looking out the window) Ah, the weather is nice. Let's let some fresh air in.",
        "(Stomach rumbles, smiling wryly) ...Oops, that's my cue that I'm hungry.",
        "(Carrying a mug to the sink) I thought I'd wash it later, but I end up doing it right away.",

        // Break time
        "(Stretching deeply) Yawn... My body is so stiff from sitting in this chair.",
        "(Drinking cold tea) Ah, I'm out of tea. Let me go get a refill.",
        "(Looking at the calendar) I probably need to properly schedule next week soon or I'm in trouble.",
        "(Dimming the lights) Yeah, this level of brightness is much more relaxing.",
        "(Hugging a favorite cushion) Alright, time to just space out for a bit.",
        "(Stretching in front of the bookshelf) Where did I put that book I was reading... Ah, here it is.",
        "(Choosing a playlist) Let's go with this for today's BGM. Something calm would be nice.",

        // End of the day
        "(Putting the PC to sleep) Let's call it a day with this much progress.",
        "(Tidying up the desk) I'll write tomorrow's tasks on a sticky note and put it where I can see it.",
        "(Closing the curtains) It's completely dark now. The night breeze feels kind of nice.",
        "(Tying hair in front of the mirror) Well then, let's get ready for a bath.",
        "(Sipping warm soup) Haa... that hits the spot. I did a great job today.",
        "(Scrolling on smartphone) Oh, this is the recipe I was curious about. I'll try making it sometime.",
        "(Turning off the lights) Good job today, me. Let's take it at my own pace tomorrow too.",
        "(Lying on the bed) So soft... My own room really is the most relaxing place.",

        // Situation Check & Strategy
        "For our current situation, should we attack, defend, or fall back?",
        "Who should we target next?",
        "Should we save our progress now or push ahead?",
        "Where do you think this enemy's weak point is?",
        "Who is going to take on the role of bait for the next plan?",
        "Should we take a moment to regroup and replan?",
        "What's your plan for the next turn?",
        "Should we reapply buffs and heals right now?",

        // Choices & Routes
        "If you trust your gut, left or right for the next path?",
        "Are we playing it safe with this choice, or going with pure momentum?",
        "Is there anything left to explore before moving to the next area?",
        "Is everyone going to agree on this choice right away?",
        "Do you have a bad feeling about the next event?",
        "Do you feel like this choice is going to trap us in a loop?",

        // Resource & Item Management
        "Are you holding onto your items, or should we use them here?",
        "Who should we give this new piece of equipment to?",
        "Are we about to run out of in-game funds soon?",
        "What is your go-to healing method right now?",
        "Should we heal up properly before entering the next room?",

        // Pinches & Reactions
        "Whose fault is this current pinch, if you had to guess?",
        "Is there a real risk of a wipe here, or can we handle it?",
        "Is the word 'retreat' starting to cross your mind yet?",
        "Did you barely dodge that attack, or did you take it full-on?",
        "Can we power through this pinch with pure grit?",
        "Did you get a scare from friendly fire or getting caught in an AoE?",
        "Did that damage hurt, or was it nothing?",
        "Aren't there way too many enemies right now, or is it just me?"
    ]
  }
};
