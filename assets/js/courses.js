/* Asosiy debyutlar bo'yicha qo'llanmalar (o'zbek tilida).
   side: qaysi tomon uchun repertuar ('w' yoki 'b')
   match: ECO nomlarida qidiriladigan kalit so'zlar (pozitsiyani kursga bog'lash uchun) */
window.COURSES = [
  // ======================= 1.e4 e5 =======================
  {
    id: "italian", name: "Italyan partiyasi", en: "Italian Game (Giuoco Piano)", eco: "C50–C54", side: "w", group: "e4e5", level: 1,
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5", match: ["Italian Game"],
    summary: "Eng qadimiy va o'rganish uchun eng qulay debyutlardan biri. Oq tez rivojlanadi, fil c4 dan qora uchun eng zaif nuqta — f7 ga qaraydi. Zamonaviy talqinda (d3 bilan) sekin manyovrlar o'yini.",
    white: ["c3 va d4 bilan katta markaz qurish", "Tez rokirovka va Re1", "Nbd2–f1–g3 manyovri bilan qirol tomonda hujum", "a4 bilan ferz tomonda joy olish (Bb5 imkoniyati)"],
    black: ["d6 / a6 / Ba7 bilan mustahkam tuzilma", "Nf6 bilan e4 ga bosim", "d5 zarbasi — markazni ochishning asosiy g'oyasi", "Ng4 / Qe7 bilan f2 ga qarshi o'yin"],
    mistakes: ["Erta Ng5 (rokirovkasiz) — vaqt yo'qotish", "Qora uchun: Bc5 dan keyin d4 ga e.p. tayyorlanmasdan ...exd4 Bb4+ ni unutish", "b4-b5 dan keyin e5 piyodasi himoyasiz qolishi"],
    lines: [
      { name: "Giuoco Pianissimo (zamonaviy)", moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O O-O Re1 a6 Bb3 Ba7 h3", note: "Sekin pozitsion kurash. Oq Nbd2-f1-g3, qora h6, Re8, Be6." },
      { name: "Klassik markaz (d4)", moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 cxd4 Bb4+ Bd2 Bxd2+ Nbxd2 d5", note: "Qora d5 bilan markazni buzadi — tenglik." },
      { name: "Evans gambiti", moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 exd4 O-O", note: "Piyoda evaziga tez rivojlanish va hujum." }
    ]
  },
  {
    id: "twoknights", name: "Ikki ot himoyasi", en: "Two Knights Defense", eco: "C55–C59", side: "b", group: "e4e5", level: 2,
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6", match: ["Italian Game: Two Knights", "Two Knights"],
    summary: "Qora passiv Bc5 o'rniga darhol e4 ga kontr-hujum qiladi. Oq Ng5 bilan f7 ga hujum qilishi mumkin, lekin qora d5 va Na5 bilan faol o'yin oladi. 'Qovurilgan jigar' hujumini bilish shart!",
    white: ["Ng5 bilan f7 ga bosim", "d3 bilan xotirjam Italyan tuzilmasi", "d4 bilan markazni ochish"],
    black: ["Ng5 ga d5! bilan javob", "exd5 dan keyin Na5! (Nxd5?! emas)", "Piyoda evaziga rivojlanish ustunligi"],
    mistakes: ["4...Nxd5? 5.Nxf7! yoki 5.d4! — qirol markazda qoladi", "Nc3 ga Nxe4! vilka hiylasini bilmaslik", "Traxler (Bc5) ni puxta o'rganmasdan o'ynash"],
    lines: [
      { name: "Asosiy: Na5", moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 Bb5+ c6 dxc6 bxc6 Be2 h6 Nf3 e4 Ne5", note: "Qora piyoda kam, lekin tashabbus va ochiq chiziqlar." },
      { name: "Qovurilgan jigar (Fried Liver)", moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nxd5 Nxf7 Kxf7 Qf3+ Ke6 Nc3", note: "Qora qiroli markazda — oq uchun juda xavfli hujum." },
      { name: "Vilka hiylasi", moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Nxe4 Nxe4 d5", note: "d5 piyodasi fil va otni vilkaga oladi." }
    ]
  },
  {
    id: "ruy", name: "Ispan partiyasi", en: "Ruy Lopez", eco: "C60–C99", side: "w", group: "e4e5", level: 3,
    moves: "e4 e5 Nf3 Nc6 Bb5", match: ["Ruy Lopez"],
    summary: "Grossmeysterlar darajasidagi eng chuqur klassik debyut. Oq e5 ning himoyachisi — c6 otga bosim qiladi va uzoq muddatli strategik ustunlikka intiladi.",
    white: ["c3 + d4 bilan ideal markaz", "Re1, h3, Nbd2–f1–g3 manyovri", "a4 bilan b5 ga bosim", "Qirol tomonda f-chiziq yoki Nf5 hujumi"],
    black: ["a6, Nf6, Be7, b5, d6 — klassik yopiq tizim", "Marshall hujumi (d5!) bilan piyoda qurbonligi", "Berlin endshpili — 'devor'"],
    mistakes: ["Oq uchun: Bxc6 + Nxe5 piyodani yutadi deb o'ylash (Qd4! bor)", "Qora uchun: d4 dan keyin b5 Bb3 Nxd4 Nxd4 exd4 Qxd4?? c5! — 'Nuh kemasi' tuzog'ini bilmaslik", "Erta d4 da e4 ni himoyasiz qoldirish"],
    lines: [
      { name: "Yopiq Ispan", moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3", note: "Chigorin, Breyer, Zaytsev variantlari shu yerdan boshlanadi." },
      { name: "Berlin endshpili", moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Nd6 Bxc6 dxc6 dxe5 Nf5 Qxd8+ Kxd8", note: "Ferzlarsiz o'yin; qora juft filga ega." },
      { name: "Almashinuv varianti", moves: "e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dxc6 O-O f6 d4 exd4 Nxd4", note: "Oq endshpilda sog'lom piyoda ko'pchiligiga intiladi." },
      { name: "Marshall hujumi", moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d5 exd5 Nxd5 Nxe5 Nxe5 Rxe5 c6", note: "Qora piyoda evaziga oq qiroliga kuchli hujum." }
    ]
  },
  {
    id: "scotch", name: "Shotland partiyasi", en: "Scotch Game", eco: "C44–C45", side: "w", group: "e4e5", level: 2,
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4", match: ["Scotch Game", "Scotch Gambit"],
    summary: "Oq markazni darhol ochadi va erkin o'yin oladi. Ispanga qaraganda kamroq nazariya, lekin aniq o'yin talab qiladi.",
    white: ["Ochiq d-chiziq va markazdagi ot", "Nxc6 + e5 bilan joy olish (Mieses)", "Tez Be3, Qd2, O-O-O"],
    black: ["Bc5 yoki Nf6 bilan faol o'yin", "d5 zarbasi bilan tenglashish", "Qf6/Qe7 bilan markaz ustidan bosim"],
    mistakes: ["Qora uchun: Qh4 dan keyin e4 ni olishga shoshilish", "Oq uchun: Nxc6 dan keyin e5 ga ferz bosimini e'tiborsiz qoldirish"],
    lines: [
      { name: "Mieses varianti", moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6 Nxc6 bxc6 e5 Qe7 Qe2 Nd5 c4 Ba6", note: "O'tkir va murakkab." },
      { name: "Klassik (Bc5)", moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Nxc6 Qf6 Qd2 dxc6 Nc3", note: "Ferzlar faol — taktik kurash." }
    ]
  },
  {
    id: "petrov", name: "Rus (Petrov) himoyasi", en: "Petrov's Defense", eco: "C42–C43", side: "b", group: "e4e5", level: 2,
    moves: "e4 e5 Nf3 Nf6", match: ["Petrov's Defense", "Russian Game"],
    summary: "Juda ishonchli simmetrik himoya. Qora e4 ga e5 evaziga hujum qiladi. Asosiy qoida: 3.Nxe5 dan keyin AVVAL d6, KEYIN Nxe4!",
    white: ["d4, Bd3, O-O, c4 bilan markazga bosim", "Nc3 va O-O-O bilan o'tkir o'yin"],
    black: ["d5 bilan markazdagi otni mustahkamlash", "Simmetrik rivojlanish va tez rokirovka", "Almashinuvlar orqali tenglik"],
    mistakes: ["3...Nxe4?? 4.Qe2! — 4...Nf6?? 5.Nc6+ ferz yo'qoladi", "Stafford gambitida 'tuzoq'larga ishonib qolish"],
    lines: [
      { name: "Klassik", moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3 Nc6 O-O Be7 c4 Nb4", note: "Asosiy nazariy liniya." },
      { name: "Nc3 tizimi", moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 Nc3 Nxc3 dxc3 Be7 Be3 O-O Qd2", note: "Qarama-qarshi rokirovkalar." },
      { name: "Stafford gambiti", moves: "e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6 dxc6 d3 Bc5 Be2", note: "Oq uchun to'g'ri himoya: Be2 va O-O." }
    ]
  },
  {
    id: "philidor", name: "Filidor himoyasi", en: "Philidor Defense", eco: "C41", side: "b", group: "e4e5", level: 1,
    moves: "e4 e5 Nf3 d6", match: ["Philidor Defense"],
    summary: "Mustahkam, lekin biroz passiv tizim. Qora e5 ni d6 bilan himoya qiladi. Hanham variantida (Nd7) qora e5 piyodasini markazda saqlaydi.",
    white: ["d4 bilan markaz ustunligi", "Bc4 + Ng5 bilan f7 ga bosim", "Ko'proq joy va erkin rivojlanish"],
    black: ["Nf6, Be7, O-O, Re8 bilan mustahkam tizim", "c6 va b5 bilan ferz tomonda joy", "e5 ni saqlash (Hanham)"],
    mistakes: ["Legal mati: Bg4 Nc3 g6?? Nxe5! Bxd1?? Bxf7+ Ke7 Nd5#", "Erta Bg4 dxe5 dan keyin piyoda yo'qotish"],
    lines: [
      { name: "Almashinuv", moves: "e4 e5 Nf3 d6 d4 exd4 Nxd4 Nf6 Nc3 Be7 Be2 O-O O-O Re8", note: "Mustahkam, kichik fazoviy kamchilik." },
      { name: "Hanham varianti", moves: "e4 e5 Nf3 d6 d4 Nd7 Bc4 c6 O-O Be7", note: "Ng5 hujumiga ehtiyot bo'ling!" }
    ]
  },
  {
    id: "kingsgambit", name: "Qirol gambiti", en: "King's Gambit", eco: "C30–C39", side: "w", group: "e4e5", level: 2,
    moves: "e4 e5 f4", match: ["King's Gambit"],
    summary: "Romantik davrning eng mashhur debyuti. Oq f-piyodani qurbon qilib, markaz va f-chiziqni ochishga intiladi. O'tkir, taktik o'yin.",
    white: ["Nf3, Bc4, O-O bilan f7 ga hujum", "d4 bilan katta markaz", "f-chiziq bo'ylab rok hujumi"],
    black: ["d5! bilan markazni ochish (eng ishonchli)", "g5 bilan qo'shimcha piyodani ushlash", "Bc5 bilan rad etish"],
    mistakes: ["Oq uchun: Nf3 siz qolib Qh4+ ga yo'l qo'yish", "Qora uchun: rivojlanishni e'tiborsiz qoldirib piyodalarga yopishish"],
    lines: [
      { name: "Zamonaviy himoya", moves: "e4 e5 f4 exf4 Nf3 d5 exd5 Nf6 Bc4 Nxd5 O-O Be7", note: "Qora markazni ochadi — muvozanat." },
      { name: "Kizerits gambiti", moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 Nf6 Bc4 d5", note: "O'ta o'tkir." },
      { name: "Falkbeer kontr-gambiti", moves: "e4 e5 f4 d5 exd5 e4 d3 Nf6 dxe4 Nxe4", note: "Qora darhol javob zarbasi beradi." }
    ]
  },
  {
    id: "vienna", name: "Vena partiyasi", en: "Vienna Game", eco: "C25–C29", side: "w", group: "e4e5", level: 2,
    moves: "e4 e5 Nc3", match: ["Vienna Game"],
    summary: "Nc3 bilan e4 ni himoya qilib, keyin f4 (Vena gambiti) yoki Bc4 bilan o'yin. Havaskorlar orasida juda samarali.",
    white: ["f4 bilan f-chiziqni ochish", "Bc4 + Qh5 bilan f7 ga bosim", "g3 + Bg2 bilan pozitsion o'yin"],
    black: ["Nf6 + d5! bilan markazga zarba", "Bc5 bilan simmetrik rivojlanish"],
    mistakes: ["Qora uchun: f4 ga exf4?! dan keyin e5! bilan ot quvilishi", "Bc4 Nxe4 Qh5 dan keyin aniq himoyani bilmaslik"],
    lines: [
      { name: "Vena gambiti", moves: "e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 Nf3 Be7 d4 O-O", note: "Asosiy liniya — teng, ammo faol." },
      { name: "Frankenshteyn-Drakula", moves: "e4 e5 Nc3 Nf6 Bc4 Nxe4 Qh5 Nd6 Bb3 Nc6 Nb5 g6 Qf3 f5 Qd5 Qe7 Nxc7+ Kd8 Nxa8 b6", note: "Eng 'vahshiy' variantlardan biri!" }
    ]
  },
  {
    id: "fourknights", name: "To'rt ot partiyasi", en: "Four Knights Game", eco: "C46–C49", side: "w", group: "e4e5", level: 1,
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6", match: ["Four Knights Game"],
    summary: "Klassik va tushunarli: barcha otlar eng yaxshi kataklariga chiqadi. Yangi boshlovchilar uchun ideal — rivojlanish tamoyillarini o'rgatadi.",
    white: ["Bb5 (Ispan to'rt ot) yoki d4 (Shotland to'rt ot)", "Tez rokirovka va d4"],
    black: ["Nd4! (Rubinshteyn) faol javob", "Simmetriya bilan tenglik"],
    mistakes: ["Simmetriyani juda uzoq davom ettirish — tashabbus oqda", "Bc4 ga Nxe4! hiylasini bilmaslik"],
    lines: [
      { name: "Ispan to'rt ot", moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Ba4 Bc5 Nxe5 O-O", note: "Rubinshteyn varianti." },
      { name: "Shotland to'rt ot", moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Bd3 d5", note: "Ochiq markaz." }
    ]
  },
  {
    id: "stafford", name: "Stafford gambiti", en: "Stafford Gambit", eco: "C42", side: "b", group: "e4e5", level: 1,
    moves: "e4 e5 Nf3 Nf6 Nxe5 Nc6", match: ["Stafford"],
    summary: "Petrov himoyasining tuzoqli 'hiyla' varianti. Blits va havaskorlar o'yinida juda samarali, ammo to'g'ri o'yinda qora piyoda kam qoladi. Oq tomon uchun himoyani bilish muhim!",
    white: ["Nxc6 dxc6 dan keyin d3 + Be2 + O-O (yoki Nc3)", "Bg5?? qilmang — Nxe4! tuzog'i", "e5 dan keyin Ne4 ni e'tiborga oling"],
    black: ["Bc5 + Ng4 / Nxe4 bilan f2 ga hujum", "h5 bilan Bg5 ni taqiqlash", "Tez O-O-O emas — faol figura o'yini"],
    mistakes: ["Oq: 5.d3 Bc5 6.Bg5?? Nxe4! 7.Bxd8 Bxf2+ 8.Ke2 Bg4#", "Qora: tuzoq ishlamasa, piyoda kamligi bilan sabr qilish"],
    lines: [
      { name: "Tuzoq", moves: "e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6 dxc6 d3 Bc5 Bg5 Nxe4 Bxd8 Bxf2+ Ke2 Bg4#", note: "Klassik mat!" },
      { name: "Oq uchun to'g'ri yo'l", moves: "e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6 dxc6 Nc3 Bc5 Be2 h5 d3 Ng4 Bxg4 hxg4 Be3", note: "Oq piyoda ortiqcha, xavfsiz." }
    ]
  },

  // ======================= Sitsiliya =======================
  {
    id: "najdorf", name: "Sitsiliya: Najdorf", en: "Sicilian Najdorf", eco: "B90–B99", side: "b", group: "sicilian", level: 3,
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6", match: ["Sicilian Defense: Najdorf"],
    summary: "Fisher va Kasparovning sevimli quroli. a6 kamtar ko'rinadi, ammo b5 katagini nazorat qilib, e5/e6 va b5 ga moslashuvchanlik beradi. Eng boy nazariyaga ega debyut.",
    white: ["Ingliz hujumi: Be3, f3, Qd2, O-O-O, g4-g5", "Bg5 + f4 bilan o'tkir hujum", "Be2 + O-O klassik tizim"],
    black: ["e5 yoki e6 bilan markaz", "b5–b4 bilan ferz tomonda hujum", "c-chiziq bo'ylab Rc8 va Rxc3 almashinuv qurbonligi", "d5 zarbasi — eng orzu qilingan bo'shatish"],
    mistakes: ["Oq uchun: d5 katagini nazoratsiz qoldirish", "Qora uchun: rivojlanishni kechiktirib qirolni markazda qoldirish", "Zaharlangan piyoda (Qb6xb2) variantini bilmasdan o'ynash"],
    lines: [
      { name: "Ingliz hujumi", moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be3 e5 Nb3 Be6 f3 Be7 Qd2 O-O O-O-O Nbd7 g4 b5", note: "Qarama-qarshi qanotlarda hujum poygasi." },
      { name: "Bg5 (asosiy)", moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bg5 e6 f4 Be7 Qf3 Qc7 O-O-O Nbd7", note: "Klassik o'tkir variant." },
      { name: "Klassik (Be2)", moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be2 e5 Nb3 Be7 O-O O-O Be3 Be6", note: "Pozitsion kurash, d5 katagi uchun." }
    ]
  },
  {
    id: "dragon", name: "Sitsiliya: Dragon", en: "Sicilian Dragon", eco: "B70–B79", side: "b", group: "sicilian", level: 3,
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6", match: ["Sicilian Defense: Dragon", "Sicilian Defense: Accelerated Dragon", "Sicilian Defense: Hyperaccelerated Dragon"],
    summary: "Piyoda tuzilmasi ajdahoga o'xshaydi. g7 dagi fil uzun diagonalni nazorat qiladi. Yugoslav hujumida ikki tomon qirollarga qarshi shiddatli hujum qiladi.",
    white: ["Yugoslav hujumi: Be3, f3, Qd2, O-O-O, Bh6, h4–h5", "g7 filini almashtirish (Bh6)", "h-chiziqni ochish"],
    black: ["c-chiziq bo'ylab hujum (Rc8, Rxc3!)", "Ne5–c4 bilan Be3 ni almashtirish", "b5–b4 piyoda hujumi"],
    mistakes: ["Qora uchun: Bg7 almashgandan keyin qirol himoyasiz qoladi", "Oq uchun: hujumni sekin olib borish — qora tezroq"],
    lines: [
      { name: "Yugoslav hujumi", moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3 O-O Qd2 Nc6 Bc4 Bd7 O-O-O Rc8 Bb3 Ne5", note: "Eng o'tkir nazariy liniya." },
      { name: "Tezlashtirilgan Dragon", moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 c4 Bg7 Be3 Nf6 Nc3 O-O Be2 d6", note: "Maroci tuzilmasi — pozitsion." }
    ]
  },
  {
    id: "sveshnikov", name: "Sitsiliya: Sveshnikov", en: "Sicilian Sveshnikov", eco: "B33", side: "b", group: "sicilian", level: 3,
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5", match: ["Sicilian Defense: Lasker-Pelikan", "Sveshnikov", "Sicilian Defense: Pelikan"],
    summary: "Qora d5 katagini zaiflashtirish evaziga faol figuralar va dinamik o'yin oladi. Karlsen va Kramnik o'ynagan zamonaviy qurol.",
    white: ["d5 katagini nazorat qilish (Nd5, Bxf6)", "a4 bilan b5 piyodasiga bosim", "c3–Nc2–e3 manyovri"],
    black: ["f5 zarbasi — asosiy g'oya", "Juft fil (gxf6 dan keyin)", "Qirol tomonda faol o'yin"],
    mistakes: ["Qora uchun: f5 ni kechiktirish", "Oq uchun: a3 otni o'yinga qaytarmaslik"],
    lines: [
      { name: "Asosiy liniya", moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Ndb5 d6 Bg5 a6 Na3 b5 Bxf6 gxf6 Nd5 f5", note: "Klassik Sveshnikov tuzilmasi." },
      { name: "Nd5 varianti", moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Ndb5 d6 Nd5 Nxd5 exd5 Nb8", note: "Pozitsion o'yin." }
    ]
  },
  {
    id: "alapin", name: "Sitsiliya: Alapin (c3)", en: "Sicilian Alapin", eco: "B22", side: "w", group: "sicilian", level: 1,
    moves: "e4 c5 c3", match: ["Sicilian Defense: Alapin"],
    summary: "Sitsiliyaning ulkan nazariyasidan qochishning eng yaxshi usuli. Oq d4 ni c3 bilan tayyorlab, ideal markazga intiladi.",
    white: ["d4 bilan klassik markaz", "Izolyatsiyalangan d4 piyodasi bilan faol o'yin", "Nf3, Bd3/Bc4, O-O"],
    black: ["d5 yoki Nf6 bilan darhol javob", "d4 ga bosim (Nc6, Qa5/Qd8)", "Izolyatsiyalangan piyodani blokada qilish"],
    mistakes: ["Oq uchun: cxd4 dan keyin markazni himoyasiz qoldirish", "Qora uchun: ferz bilan juda ko'p yurish"],
    lines: [
      { name: "2...Nf6", moves: "e4 c5 c3 Nf6 e5 Nd5 d4 cxd4 Nf3 Nc6 cxd4 d6 Bc4", note: "Asosiy." },
      { name: "2...d5", moves: "e4 c5 c3 d5 exd5 Qxd5 d4 Nf6 Nf3 e6 Be2 Nc6 O-O", note: "Qora ferzi markazda." }
    ]
  },
  {
    id: "smithmorra", name: "Smit-Morra gambiti", en: "Smith-Morra Gambit", eco: "B21", side: "w", group: "sicilian", level: 2,
    moves: "e4 c5 d4 cxd4 c3", match: ["Sicilian Defense: Smith-Morra"],
    summary: "Piyoda evaziga tez rivojlanish, ochiq c- va d-chiziqlar. Havaskorlarga qarshi juda xavfli. Sibir tuzog'iga ehtiyot bo'ling!",
    white: ["Nxc3, Nf3, Bc4, O-O, Qe2, Rd1 — ideal tuzilma", "d6 katagiga bosim (Nb5)", "e5 zarbasi"],
    black: ["Qabul qilib, aniq himoya (Nc6, e6, Qc7, Nf6)", "Yoki rad etish: Nf6 / d3"],
    mistakes: ["Oq uchun: Sibir tuzog'i — h3?? dan keyin Nd4! va Qh2#", "Qora uchun: qirolni markazda qoldirish"],
    lines: [
      { name: "Qabul qilingan", moves: "e4 c5 d4 cxd4 c3 dxc3 Nxc3 Nc6 Nf3 d6 Bc4 e6 O-O Nf6 Qe2 Be7 Rd1", note: "Klassik gambit tuzilmasi." },
      { name: "Sibir varianti", moves: "e4 c5 d4 cxd4 c3 dxc3 Nxc3 Nc6 Nf3 e6 Bc4 Qc7 O-O Nf6 Qe2 Ng4", note: "h3?? xato — Nd4! bilan mat." }
    ]
  },
  {
    id: "sicilianopen", name: "Sitsiliya: Taymanov / Kan", en: "Sicilian Taimanov / Kan", eco: "B40–B49", side: "b", group: "sicilian", level: 2,
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4", match: ["Sicilian Defense: Taimanov", "Sicilian Defense: Kan", "Sicilian Defense: Paulsen", "Sicilian Defense: Four Knights"],
    summary: "Moslashuvchan tizimlar: qora e6 bilan d5 ni nazorat qiladi va figuralarni keyinroq joylashtiradi. Najdorfga qaraganda kamroq nazariya.",
    white: ["Bd3, O-O, c4 (Maroci) bilan joy", "f4–e5 bilan qirol tomonga hujum"],
    black: ["a6, Qc7, Nc6 bilan moslashuvchan tuzilma", "b5–Bb7 bilan e4 ga bosim", "d5 bo'shatish"],
    mistakes: ["Qora uchun: d6 piyodasini zaif qoldirish (Nb5–d6)", "Oq uchun: c4 bilan qora b5 ni to'xtatmaslik"],
    lines: [
      { name: "Taymanov", moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 Qc7 Be3 a6 Qd2 Nf6 O-O-O", note: "Ingliz hujumi uslubida." },
      { name: "Kan", moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Bd3 Nf6 O-O Qc7 Qe2 d6 c4", note: "Maroci bilan pozitsion o'yin." }
    ]
  },
  {
    id: "closedsicilian", name: "Yopiq Sitsiliya / Grand-Pri", en: "Closed Sicilian / Grand Prix", eco: "B23–B26", side: "w", group: "sicilian", level: 1,
    moves: "e4 c5 Nc3", match: ["Sicilian Defense: Closed", "Sicilian Defense: Grand Prix"],
    summary: "Nazariyadan qochib, qirol tomonda hujum qurish. Oq g3/Bg2 (yopiq) yoki f4/Bc4–Bb5 (Grand-Pri) bilan o'ynaydi.",
    white: ["f4–f5 bilan qirol tomonda hujum", "Qe1–h4, Bh6 manyovrlari", "d3 bilan mustahkam markaz"],
    black: ["Ferz tomonda b5–b4 hujumi", "d5 / e5 bilan markazni ochish"],
    mistakes: ["Oq uchun: ferz tomonni himoyasiz qoldirish", "Qora uchun: d5 ni kechiktirish"],
    lines: [
      { name: "Yopiq", moves: "e4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 d6 f4 e6 Nf3 Nge7 O-O O-O", note: "Klassik tuzilma." },
      { name: "Grand-Pri", moves: "e4 c5 Nc3 Nc6 f4 g6 Nf3 Bg7 Bb5 Nd4 O-O", note: "Agressiv tizim." }
    ]
  },

  // ======================= Boshqa 1.e4 javoblari =======================
  {
    id: "french", name: "Fransuz himoyasi", en: "French Defense", eco: "C00–C19", side: "b", group: "e4other", level: 2,
    moves: "e4 e6 d4 d5", match: ["French Defense"],
    summary: "Mustahkam va kurashchan himoya. Qora markazni d5 bilan savol ostiga qo'yadi; ko'pincha yopiq piyoda zanjirlari paydo bo'ladi. Asosiy qoida: zanjirning ASOSIGA zarba bering (c5, f6).",
    white: ["e5 bilan joy olish va qirol tomonda hujum", "f4–f5 piyoda hujumi", "c8 filni passiv qoldirish"],
    black: ["c5 bilan d4 ga zarba", "f6 bilan e5 ga zarba", "Qb6, Nc6, Nge7–f5 bilan d4 ga bosim", "c8 filni b6–Ba6 yoki Bd7–e8–h5 orqali faollashtirish"],
    mistakes: ["Qora uchun: c5 zarbasini unutib passiv qolish", "Oq uchun: d4 ni yetarlicha himoya qilmaslik", "Milner-Barri tuzog'i: Nxd4 Nxd4 Qxd4?? Bb5+"],
    lines: [
      { name: "Oldinga surish", moves: "e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6 a3 c4 Nbd2 Na5", note: "Qora ferz tomonni qulflaydi." },
      { name: "Vinaver", moves: "e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+ bxc3 Ne7 Qg4 O-O Bd3", note: "Eng o'tkir variant." },
      { name: "Klassik Shtaynits", moves: "e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7 f4 c5 Nf3 Nc6 Be3 a6 Qd2 b5", note: "Ikki qanotda o'yin." },
      { name: "Tarrash", moves: "e4 e6 d4 d5 Nd2 c5 exd5 exd5 Ngf3 Nc6 Bb5 Bd6", note: "Izolyatsiyalangan d5 piyoda." }
    ]
  },
  {
    id: "carokann", name: "Karo-Kann himoyasi", en: "Caro-Kann Defense", eco: "B10–B19", side: "b", group: "e4other", level: 1,
    moves: "e4 c6 d4 d5", match: ["Caro-Kann Defense"],
    summary: "Eng mustahkam himoyalardan biri. Fransuzga o'xshash, lekin c8 fil piyoda zanjiridan TASHQARIGA (f5/g4) chiqa oladi. Endshpilda qora tuzilmasi sog'lom.",
    white: ["e5 bilan joy (Oldinga surish)", "h4–h5 bilan Bf5 ni quvish", "Panov hujumi (c4) bilan faol o'yin"],
    black: ["Bf5 ni e6 dan OLDIN chiqarish", "c5 bilan d4 ga zarba", "Mustahkam tuzilma va yaxshi endshpil"],
    mistakes: ["Qora uchun: Nd7 Qe2 Ngf6?? Nd6# — bo'g'ilgan mat!", "e6 ni Bf5 dan oldin o'ynab filni qamab qo'yish", "Oq uchun: h4 dan keyin qirol tomonni zaiflashtirish"],
    lines: [
      { name: "Klassik", moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5 Bh7 Bd3 Bxd3 Qxd3 e6 Bd2 Ngf6 O-O-O Be7", note: "Asosiy nazariy liniya." },
      { name: "Oldinga surish (Short)", moves: "e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2 c5 Be3 Nd7 O-O Ne7", note: "Zamonaviy usul." },
      { name: "Panov-Botvinnik", moves: "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Nf3 Be7 cxd5 Nxd5 Bd3", note: "Izolyatsiyalangan ferz piyodasi." },
      { name: "Almashinuv", moves: "e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6 Bf4 Bg4 Qb3", note: "Ozchilik hujumining teskari varianti." }
    ]
  },
  {
    id: "scandi", name: "Skandinaviya himoyasi", en: "Scandinavian Defense", eco: "B01", side: "b", group: "e4other", level: 1,
    moves: "e4 d5 exd5 Qxd5", match: ["Scandinavian Defense"],
    summary: "Qora darhol e4 ga zarba beradi. Oddiy va o'rganish oson: aniq tuzilma (c6, Bf5, e6, Nf6) bilan Karo-Kannga o'xshash pozitsiyalar.",
    white: ["Nc3 bilan tempni yutish", "d4, Nf3, Bc4/Bd2 bilan tez rivojlanish", "d5 katagida ot va Bd2 bilan ferzga bosim"],
    black: ["Qa5/Qd6 bilan ferzni xavfsiz joylash", "c6, Bf5/Bg4, e6, Nbd7 tuzilmasi", "O-O-O bilan ham o'ynash mumkin"],
    mistakes: ["Ferz bilan ortiqcha yurish", "Qa5 da Bd2 + Nd5 tahdidini unutish", "Bf5 ni e6 dan oldin chiqarmaslik"],
    lines: [
      { name: "Qa5 asosiy", moves: "e4 d5 exd5 Qxd5 Nc3 Qa5 d4 Nf6 Nf3 c6 Bc4 Bf5 Bd2 e6", note: "Klassik tuzilma." },
      { name: "Qd6 zamonaviy", moves: "e4 d5 exd5 Qxd5 Nc3 Qd6 d4 Nf6 Nf3 a6 Be2 Bf5", note: "Ferz d6 da xavfsizroq." },
      { name: "Zamonaviy Nf6", moves: "e4 d5 exd5 Nf6 d4 Nxd5 Nf3 g6 Be2 Bg7 O-O O-O", note: "Piyodani ot bilan olish." }
    ]
  },
  {
    id: "pirc", name: "Pirts / Zamonaviy himoya", en: "Pirc / Modern Defense", eco: "B06–B09", side: "b", group: "e4other", level: 2,
    moves: "e4 d6 d4 Nf6 Nc3 g6", match: ["Pirc Defense", "Modern Defense"],
    summary: "Gipermodern yondashuv: qora oqqa katta markazni beradi, keyin uni Bg7, c5 yoki e5 bilan buzishga harakat qiladi.",
    white: ["Avstriya hujumi: f4, Nf3, e5", "150-hujum: Be3, Qd2, Bh6, h4", "Katta markaz va joy"],
    black: ["e5 yoki c5 bilan markazga zarba", "Bg7 bilan uzun diagonal", "b5 bilan ferz tomonda o'yin"],
    mistakes: ["Juda passiv o'ynab markazni butunlay berish", "Avstriya hujumida e5 zarbasiga tayyor bo'lmaslik"],
    lines: [
      { name: "Klassik", moves: "e4 d6 d4 Nf6 Nc3 g6 Nf3 Bg7 Be2 O-O O-O c6 a4", note: "Xotirjam tizim." },
      { name: "Avstriya hujumi", moves: "e4 d6 d4 Nf6 Nc3 g6 f4 Bg7 Nf3 O-O Bd3 Na6 O-O c5 d5", note: "Eng xavfli." }
    ]
  },
  {
    id: "alekhine", name: "Alyoxin himoyasi", en: "Alekhine's Defense", eco: "B02–B05", side: "b", group: "e4other", level: 2,
    moves: "e4 Nf6 e5 Nd5 d4 d6", match: ["Alekhine Defense"],
    summary: "Provokatsion himoya: qora otni quvdiradi va oqni piyodalarni oldinga surishga undaydi, keyin bu 'ortiqcha kengaygan' markazga hujum qiladi.",
    white: ["Zamonaviy variant: Nf3, Be2, O-O — xotirjam ustunlik", "To'rt piyoda hujumi: c4, d4, e5, f4 — juda katta markaz"],
    black: ["d6 bilan e5 ga zarba", "Bg4 bilan Nf3 ni almashtirish", "Markaz piyodalarini nishon qilish"],
    mistakes: ["Qora uchun: ot quvilganda vaqt yo'qotish", "Oq uchun: markazni o'ta kengaytirib zaif qoldirish"],
    lines: [
      { name: "Zamonaviy", moves: "e4 Nf6 e5 Nd5 d4 d6 Nf3 Bg4 Be2 e6 O-O Be7 c4 Nb6", note: "Asosiy." },
      { name: "To'rt piyoda", moves: "e4 Nf6 e5 Nd5 d4 d6 c4 Nb6 f4 dxe5 fxe5 Nc6 Be3 Bf5 Nc3 e6", note: "O'tkir." }
    ]
  },

  // ======================= 1.d4 d5 =======================
  {
    id: "qgd", name: "Rad etilgan ferz gambiti", en: "Queen's Gambit Declined", eco: "D30–D69", side: "b", group: "d4d5", level: 2,
    moves: "d4 d5 c4 e6", match: ["Queen's Gambit Declined"],
    summary: "Asrlar davomida chempionlar ishonch bilan o'ynaydigan klassik himoya. Qora markazni d5 da ushlaydi. Asosiy muammo — c8 fil: uni b6–Bb7 yoki ...dxc4 va e5/c5 bilan ochish kerak.",
    white: ["Bg5 bilan f6 otni bog'lash", "Ozchilik hujumi (b4–b5) almashinuv variantida", "e4 markaziy zarba"],
    black: ["Be7, O-O, h6, Ne4 (Lasker) — almashinuvlar bilan yengillashish", "b6–Bb7 (Tartakover)", "c5 yoki e5 bilan bo'shatish"],
    mistakes: ["Qora uchun: c8 filni passiv qoldirish", "Oq uchun: Nbd7 bilan Fil tuzog'iga tushish: Nxd5?? Nxd5! Bxd8 Bb4+"],
    lines: [
      { name: "Ortodoks / Tartakover", moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 h6 Bh4 b6 cxd5 Nxd5 Bxe7 Qxe7 Nxd5 exd5", note: "Mustahkam asosiy liniya." },
      { name: "Lasker himoyasi", moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 h6 Bh4 Ne4 Bxe7 Qxe7 cxd5 Nxc3 bxc3 exd5", note: "Almashinuvlar orqali tenglik." },
      { name: "Almashinuv (Karlsbad)", moves: "d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 c6 e3 Be7 Bd3 O-O Qc2 Nbd7 Nf3 Re8 O-O", note: "Ozchilik hujumi: Rab1, b4–b5." }
    ]
  },
  {
    id: "slav", name: "Slav himoyasi", en: "Slav Defense", eco: "D10–D19", side: "b", group: "d4d5", level: 2,
    moves: "d4 d5 c4 c6", match: ["Slav Defense", "Semi-Slav"],
    summary: "d5 ni c6 bilan himoya qilib, c8 filni yopmaydi. Juda mustahkam va moslashuvchan. Yarim-Slav (e6 bilan) esa o'tkir variantlarga boy.",
    white: ["a4 bilan b5 ni oldini olish va c4 piyodasini qaytarish", "e4 bilan katta markaz", "Ne5 va f3 bilan e4 ni tayyorlash"],
    black: ["dxc4 dan keyin Bf5 bilan faol fil", "e6, Bb4, O-O bilan mustahkamlik", "c5 yoki e5 bo'shatishi"],
    mistakes: ["Qora uchun: dxc4 dan keyin b5 bilan piyodani ushlashga urinish (a4!)", "Oq uchun: c4 piyodani qaytarishni kechiktirish"],
    lines: [
      { name: "Asosiy Slav", moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5 e3 e6 Bxc4 Bb4 O-O O-O Qe2", note: "Klassik." },
      { name: "Meran (Yarim-Slav)", moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 e6 e3 Nbd7 Bd3 dxc4 Bxc4 b5 Bd3 Bb7", note: "Dinamik o'yin." },
      { name: "Almashinuv", moves: "d4 d5 c4 c6 cxd5 cxd5 Nc3 Nf6 Bf4 Nc6 e3 Bf5", note: "Simmetrik, xotirjam." }
    ]
  },
  {
    id: "qga", name: "Qabul qilingan ferz gambiti", en: "Queen's Gambit Accepted", eco: "D20–D29", side: "b", group: "d4d5", level: 2,
    moves: "d4 d5 c4 dxc4", match: ["Queen's Gambit Accepted"],
    summary: "Qora piyodani vaqtincha olib, c5 bilan markazga zarba berishga tayyorlanadi. Piyodani ushlashga urinmang — maqsad erkin rivojlanish.",
    white: ["e4 bilan katta markaz", "Bxc4, O-O, Qe2 — izolyatsiyalangan piyoda bilan faol o'yin", "d5 zarbasi"],
    black: ["c5 bilan d4 ga zarba", "a6 va b5 bilan ferz tomonda joy", "Izolyatsiyalangan d4 ni blokada qilish"],
    mistakes: ["Qora uchun: b5 bilan piyodani ushlash — a4! c6 axb5 cxb5 Qf3 rok yutiladi", "Oq uchun: e3 dan keyin Bxc4 ni kechiktirish"],
    lines: [
      { name: "Klassik", moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5 O-O a6 dxc5 Qxd1 Rxd1 Bxc5", note: "Ferzlarsiz teng o'yin." },
      { name: "Markaziy (e4)", moves: "d4 d5 c4 dxc4 e4 e5 Nf3 exd4 Bxc4 Nc6 O-O Be6", note: "O'tkir." }
    ]
  },
  {
    id: "london", name: "London tizimi", en: "London System", eco: "D02 / A46", side: "w", group: "d4d5", level: 1,
    moves: "d4 d5 Bf4", match: ["London System", "Queen's Pawn Game: London System", "Indian Defense: London System"],
    summary: "Havaskorlar orasida eng ommabop tizim: qora nima qilsa ham deyarli bir xil tuzilma — d4, Bf4, e3, Nf3, c3, Bd3, Nbd2. Kam nazariya, mustahkam o'yin.",
    white: ["Piramida: d4–e3–c3 va Bf4", "Ne5 + f4 bilan qirol tomonda hujum", "Bd3 va Qc2 bilan h7 ga bosim"],
    black: ["c5 + Qb6 bilan b2 ga bosim", "Bd6 bilan Bf4 ni almashtirish", "Faol c5 va Nc6 bilan markazga zarba"],
    mistakes: ["Oq uchun: Qb6 dan keyin b2 ni unutish (Qb3 yoki Qc1)", "Bf4 ni almashtirishga yo'l qo'yib, qora qoralar kataklarini olishi", "Nb5 hujumiga e'tiborsizlik (c5 dan keyin)"],
    lines: [
      { name: "Asosiy", moves: "d4 d5 Bf4 Nf6 e3 e6 Nf3 c5 c3 Nc6 Nbd2 Bd6 Bg3 O-O Bd3", note: "Klassik London tuzilmasi." },
      { name: "Qb6 qarshi", moves: "d4 d5 Bf4 c5 e3 Nc6 c3 Qb6 Qb3 c4 Qc2 Bf5 Qc1", note: "b2 ni himoya qilish." },
      { name: "Nf6 qarshi (Hind)", moves: "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 O-O Be2 d6 h3", note: "Qirol-hind tuzilmasiga qarshi." }
    ]
  },
  {
    id: "albin", name: "Albin kontr-gambiti", en: "Albin Countergambit", eco: "D08–D09", side: "b", group: "d4d5", level: 2,
    moves: "d4 d5 c4 e5", match: ["Queen's Gambit Declined: Albin Countergambit"],
    summary: "Qora piyoda qurbon qilib, d4 dagi 'tikan' piyodasi bilan oqni siqib qo'yadi. Mashhur Lasker tuzog'i bilan!",
    white: ["Nf3, g3, Bg2, Nbd2 — piyodani qaytarishga yo'l qo'ymaslik", "e5 piyodani ushlash"],
    black: ["Nc6, Be6/Bg4, Qd7, O-O-O — tez hujum", "d4 piyodasi oq rivojlanishiga to'sqinlik"],
    mistakes: ["Oq uchun: e3?? Bb4+ Bd2 dxe3 Bxb4?? exf2+ Ke2 fxg1=N+!"],
    lines: [
      { name: "Asosiy", moves: "d4 d5 c4 e5 dxe5 d4 Nf3 Nc6 g3 Be6 Nbd2 Qd7 Bg2 O-O-O O-O", note: "Qarama-qarshi rokirovkalar." },
      { name: "Lasker tuzog'i", moves: "d4 d5 c4 e5 dxe5 d4 e3 Bb4+ Bd2 dxe3 Bxb4 exf2+ Ke2 fxg1=N+", note: "Piyoda otga aylanadi!" }
    ]
  },

  // ======================= Hind himoyalari =======================
  {
    id: "nimzo", name: "Nimso-hind himoyasi", en: "Nimzo-Indian Defense", eco: "E20–E59", side: "b", group: "indian", level: 3,
    moves: "d4 Nf6 c4 e6 Nc3 Bb4", match: ["Nimzo-Indian Defense"],
    summary: "Eng hurmatli himoyalardan biri. Qora c3 otni bog'lab e4 ni nazorat qiladi va ko'pincha juft filni dublangan c-piyodalar evaziga beradi.",
    white: ["Qc2 / a3 bilan juft filni saqlash", "e4 bilan markazni egallash", "Dublangan piyodalar bilan katta markaz (Semish)"],
    black: ["Bxc3 bilan oq piyoda tuzilmasini buzish", "b6–Bb7 yoki Ba6 bilan c4 ga bosim", "c5 + d5 bilan markazga zarba", "e4 katagini nazorat (Ne4)"],
    mistakes: ["Qora uchun: Bxc3 ni sababsiz qilish", "Oq uchun: c4 dublangan piyodani himoyasiz qoldirish"],
    lines: [
      { name: "Klassik (Qc2)", moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 O-O a3 Bxc3+ Qxc3 b6 Bg5 Bb7 f3 h6 Bh4 d5", note: "Asosiy zamonaviy liniya." },
      { name: "Rubinshteyn (e3)", moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Bd3 d5 Nf3 c5 O-O Nc6 a3 Bxc3 bxc3 dxc4 Bxc4", note: "Klassik tuzilma." }
    ]
  },
  {
    id: "kid", name: "Qirol-hind himoyasi", en: "King's Indian Defense", eco: "E60–E99", side: "b", group: "indian", level: 3,
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6", match: ["King's Indian Defense", "King's Indian Attack"],
    summary: "Fisher va Kasparovning sevimli quroli. Qora oqqa katta markazni beradi, keyin e5 bilan zarba berib, qirol tomonda shiddatli piyoda hujumi (f5–f4–g5–g4) qiladi.",
    white: ["c5 bilan ferz tomonda hujum (Mar del Plata)", "Markaz va joy ustunligi", "Semish (f3) bilan qirol tomonni mustahkamlash"],
    black: ["e5 bilan markazga zarba", "Ne8/Nd7, f5, f4, g5, g4 — qirol tomonda hujum", "Bg7 ni uzun diagonalda saqlash"],
    mistakes: ["Qora uchun: f5 ni kechiktirish", "Oq uchun: qirol tomonni himoyasiz qoldirib faqat ferz tomonda o'ynash"],
    lines: [
      { name: "Klassik Mar del Plata", moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Ne1 Nd7 Be3 f5 f3 f4 Bf2 g5", note: "Ikki qanotda hujum poygasi." },
      { name: "Semish", moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 d5 Nh5 Qd2 Qh4+ g3 Nxg3", note: "O'tkir." },
      { name: "Fianketto", moves: "d4 Nf6 c4 g6 Nf3 Bg7 g3 O-O Bg2 d6 O-O Nc6 Nc3 a6", note: "Pozitsion." }
    ]
  },
  {
    id: "grunfeld", name: "Grunfeld himoyasi", en: "Grünfeld Defense", eco: "D70–D99", side: "b", group: "indian", level: 3,
    moves: "d4 Nf6 c4 g6 Nc3 d5", match: ["Grünfeld Defense", "Gruenfeld"],
    summary: "Dinamik gipermodern himoya: qora oqqa katta markaz (c3–d4–e4) qurishga ruxsat beradi, keyin uni Bg7, c5 va Nc6 bilan buzadi.",
    white: ["Katta markaz: c3, d4, e4", "d5 bilan oldinga surish", "Be3, Qd2, Rc1 bilan markazni ushlash"],
    black: ["c5 + Nc6 + Bg7 bilan d4 ga bosim", "Qa5 va Bg4 bilan bosim", "Ferz tomonda piyoda ko'pchiligi"],
    mistakes: ["Qora uchun: d4 ga bosimni kechiktirish", "Oq uchun: d4 piyodani yetarli himoya qilmaslik"],
    lines: [
      { name: "Almashinuv", moves: "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3 Bg7 Nf3 c5 Rb1 O-O Be2 cxd4 cxd4 Qa5+", note: "Zamonaviy asosiy liniya." },
      { name: "Russkiy tizimi", moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qb3 dxc4 Qxc4 O-O e4 Bg4", note: "Ferz bilan markazni qo'llab-quvvatlash." }
    ]
  },
  {
    id: "qid", name: "Ferz-hind / Bogo-hind", en: "Queen's Indian / Bogo-Indian", eco: "E11–E19", side: "b", group: "indian", level: 2,
    moves: "d4 Nf6 c4 e6 Nf3 b6", match: ["Queen's Indian Defense", "Bogo-Indian Defense"],
    summary: "Nimso-hindga o'xshash g'oyalar, lekin oq Nc3 o'rniga Nf3 o'ynasa. Qora e4 katagini fil b7 bilan nazorat qiladi.",
    white: ["g3 + Bg2 bilan uzun diagonal kurashi", "Nc3 + e4 bilan markaz", "a3 (Petrosyan) bilan Bb4 ni taqiqlash"],
    black: ["Bb7 / Ba6 bilan e4 va c4 ga bosim", "Ne4 bilan markazni egallash", "c5 yoki d5 bilan bo'shatish"],
    mistakes: ["Qora uchun: e4 katagini oqqa berish", "Oq uchun: c4 piyodani Ba6 dan himoyasiz qoldirish"],
    lines: [
      { name: "Fianketto", moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Ba6 b3 Bb4+ Bd2 Be7 Bg2 c6 Bc3 d5", note: "Zamonaviy asosiy." },
      { name: "Bogo-hind", moves: "d4 Nf6 c4 e6 Nf3 Bb4+ Bd2 Qe7 g3 Nc6 Bg2 Bxd2+ Nbxd2 d6", note: "Mustahkam alternativa." }
    ]
  },
  {
    id: "catalan", name: "Katalon", en: "Catalan Opening", eco: "E01–E09", side: "w", group: "indian", level: 3,
    moves: "d4 Nf6 c4 e6 g3 d5 Bg2", match: ["Catalan Opening"],
    summary: "Ferz gambiti va Reti g'oyalarining aralashmasi. Fil g2 uzun diagonal bo'ylab b7 va qora ferz tomoniga bosim qiladi. Elita darajasida juda mashhur.",
    white: ["g2 fil bilan uzun diagonalda bosim", "Qc2/Qa4 bilan c4 piyodani qaytarish", "Ferz tomonda uzoq muddatli ustunlik"],
    black: ["dxc4 va b5 bilan piyodani ushlash (Ochiq)", "Be7, O-O, c6 bilan mustahkam (Yopiq)", "c5 bo'shatishi"],
    mistakes: ["Qora uchun: c8 filni rivojlantirmaslik", "Oq uchun: piyodani qaytarishga shoshilib rivojlanishni unutish"],
    lines: [
      { name: "Ochiq Katalon", moves: "d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3 Be7 O-O O-O Qc2 a6 Qxc4 b5 Qc2 Bb7", note: "Asosiy liniya." },
      { name: "Yopiq Katalon", moves: "d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O O-O c6 Qc2 Nbd7 Nbd2 b6", note: "Pozitsion." }
    ]
  },
  {
    id: "benoni", name: "Benoni / Benko", en: "Benoni / Benko Gambit", eco: "A56–A79", side: "b", group: "indian", level: 3,
    moves: "d4 Nf6 c4 c5 d5", match: ["Benoni Defense", "Benko Gambit", "Modern Benoni"],
    summary: "Assimetrik va kurashchan. Zamonaviy Benonida qora ferz tomonda piyoda ko'pchiligi bilan, Benko gambitida esa piyoda evaziga ochiq a/b chiziqlar bilan o'ynaydi.",
    white: ["e4–e5 markaziy zarba", "f4 bilan joy olish", "Ferz tomonni blokada qilish (a4)"],
    black: ["Benoni: Bg7, a6, b5 bilan ferz tomonda o'yin", "Benko: a6, Bxa6, Rb8/Qa5 bilan bosim", "e5 katagidagi ot"],
    mistakes: ["Qora uchun (Benoni): e5 zarbasiga yo'l qo'yish", "Oq uchun (Benko): piyodani ushlab qolib ferz tomonda zaiflik"],
    lines: [
      { name: "Zamonaviy Benoni", moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 e4 g6 Nf3 Bg7 Be2 O-O O-O Re8", note: "Klassik." },
      { name: "Benko gambiti", moves: "d4 Nf6 c4 c5 d5 b5 cxb5 a6 bxa6 Bxa6 Nc3 d6 e4 Bxf1 Kxf1 g6", note: "Uzoq muddatli kompensatsiya." }
    ]
  },
  {
    id: "budapest", name: "Budapesht gambiti", en: "Budapest Gambit", eco: "A51–A52", side: "b", group: "indian", level: 1,
    moves: "d4 Nf6 c4 e5", match: ["Budapest Defense", "Budapest Gambit"],
    summary: "Kamdan-kam uchraydigan, ammo xavfli gambit. Qora e5 piyodani qaytarib olishga va tez rivojlanishga intiladi. Mashhur Nd3# tuzog'i bor!",
    white: ["e5 piyodani Bf4 + Nf3 bilan himoya", "Qd5 / Qd4 bilan markaz", "Material ustunlikni saqlash"],
    black: ["Ng4 + Nc6 + Bb4+ bilan piyodani qaytarish", "Qe7 bilan e5 ga bosim", "Rh6! rok lifti"],
    mistakes: ["Oq uchun: a3 Ngxe5 axb4?? Nd3# — mat!"],
    lines: [
      { name: "Asosiy", moves: "d4 Nf6 c4 e5 dxe5 Ng4 Bf4 Nc6 Nf3 Bb4+ Nbd2 Qe7 e3 Ngxe5 Nxe5 Nxe5 Be2", note: "Material tenglashadi." },
      { name: "Tuzoq", moves: "d4 Nf6 c4 e5 dxe5 Ng4 Bf4 Nc6 Nf3 Bb4+ Nbd2 Qe7 a3 Ngxe5 axb4 Nd3#", note: "Mat!" }
    ]
  },
  {
    id: "dutch", name: "Gollandiya himoyasi", en: "Dutch Defense", eco: "A80–A99", side: "b", group: "indian", level: 2,
    moves: "d4 f5", match: ["Dutch Defense"],
    summary: "Qora f5 bilan e4 ni nazorat qiladi va qirol tomonda hujumga tayyorlanadi. Leningrad (g6) va Mustahkam devor (d5, e6) tizimlari.",
    white: ["g3 + Bg2 bilan uzun diagonal", "e4 zarbasi bilan markazni ochish", "Staunton gambiti (e4!?)"],
    black: ["Leningrad: Nf6, g6, Bg7, O-O, d6, e5", "Devor: e6, d5, c6, Bd6 — mustahkam", "Qe8–h5 bilan qirol tomonda hujum"],
    mistakes: ["Qirol tomondagi zaifliklar (e8–h5 diagonal)", "Oq uchun: e4 zarbasini kechiktirish"],
    lines: [
      { name: "Leningrad", moves: "d4 f5 g3 Nf6 Bg2 g6 Nf3 Bg7 O-O O-O c4 d6 Nc3 Qe8 d5 a5", note: "Dinamik." },
      { name: "Mustahkam devor", moves: "d4 f5 c4 Nf6 g3 e6 Bg2 d5 Nf3 c6 O-O Bd6", note: "Pozitsion." }
    ]
  },
  {
    id: "englund", name: "Englund gambiti", en: "Englund Gambit", eco: "A40", side: "b", group: "indian", level: 1,
    moves: "d4 e5 dxe5 Nc6 Nf3 Qe7", match: ["Englund Gambit"],
    summary: "Shubhali, ammo tuzoqqa boy gambit. Asosiy hiyla: Bf4?? Qb4+! Bd2 Qxb2 Bc3? Bb4! va Qc1#. Oq tomon uchun to'g'ri himoyani bilish muhim.",
    white: ["Qd5 yoki Nc3 bilan e5 ni himoya", "Bf4 dan keyin Qb4+ ga Nc3/Qd2 bilan javob"],
    black: ["Qe7 + Nxe5 bilan piyodani qaytarish", "b2 ga ferz hujumi"],
    mistakes: ["Oq: Bd2 Qxb2 Bc3?? Bb4! — mat"],
    lines: [
      { name: "Tuzoq", moves: "d4 e5 dxe5 Nc6 Nf3 Qe7 Bf4 Qb4+ Bd2 Qxb2 Bc3 Bb4 Qd2 Bxc3 Qxc3 Qc1#", note: "Klassik mat." },
      { name: "Oq uchun to'g'ri", moves: "d4 e5 dxe5 Nc6 Nf3 Qe7 Qd5 f6 exf6 Nxf6 Qb5", note: "Oq piyoda ortiqcha." }
    ]
  },
  {
    id: "trompowsky", name: "Trompovskiy hujumi", en: "Trompowsky Attack", eco: "A45", side: "w", group: "indian", level: 2,
    moves: "d4 Nf6 Bg5", match: ["Trompowsky Attack"],
    summary: "Hind himoyalari nazariyasidan qochish uchun. Oq darhol f6 otga savol beradi — qora juft fil yoki piyoda tuzilmasi o'rtasida tanlaydi.",
    white: ["Bxf6 bilan qora piyodalarini dublash", "e3, c3, Bd3 — London uslubida", "f3 bilan Ne4 ni quvish"],
    black: ["Ne4 bilan filni quvish", "c5 + Qb6 bilan b2 ga bosim", "e6 + h6 bilan juft fil"],
    mistakes: ["Oq uchun: Qb6 dan keyin b2 ni unutish"],
    lines: [
      { name: "2...Ne4", moves: "d4 Nf6 Bg5 Ne4 Bf4 c5 f3 Qa5+ c3 Nf6 d5", note: "Asosiy." },
      { name: "2...e6", moves: "d4 Nf6 Bg5 e6 e4 h6 Bxf6 Qxf6 Nc3 d6", note: "Qora juft fil." }
    ]
  },

  // ======================= Qanot debyutlari =======================
  {
    id: "english", name: "Ingliz partiyasi", en: "English Opening", eco: "A10–A39", side: "w", group: "flank", level: 2,
    moves: "c4", match: ["English Opening"],
    summary: "Moslashuvchan qanot debyuti. Oq d5 katagini nazorat qiladi va ko'pincha g3/Bg2 bilan 'teskari Sitsiliya' yoki simmetrik tuzilmalar paydo bo'ladi.",
    white: ["g3 + Bg2 bilan uzun diagonal", "Nc3, e3/e4, Nge2 tizimlari", "b4 bilan ferz tomonda hujum (a3, Rb1)"],
    black: ["e5 bilan teskari Sitsiliya", "Simmetrik c5", "d5 bilan markaz"],
    mistakes: ["Qora uchun: d5 katagini oqqa berish", "Oq uchun: markazni butunlay qoraga qoldirish"],
    lines: [
      { name: "Teskari Sitsiliya", moves: "c4 e5 Nc3 Nf6 g3 d5 cxd5 Nxd5 Bg2 Nb6 Nf3 Nc6 O-O Be7", note: "Teskari Dragon." },
      { name: "Simmetrik", moves: "c4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 Nf3 e6 O-O Nge7 d3 O-O", note: "Pozitsion manyovrlar." },
      { name: "To'rt ot Inglizi", moves: "c4 e5 Nc3 Nf6 Nf3 Nc6 g3 d5 cxd5 Nxd5 Bg2 Nb6 O-O Be7", note: "Klassik." }
    ]
  },
  {
    id: "reti", name: "Reti / Qirol-hind hujumi", en: "Réti / King's Indian Attack", eco: "A04–A09", side: "w", group: "flank", level: 2,
    moves: "Nf3 d5 g3", match: ["Zukertort Opening", "Réti Opening", "King's Indian Attack"],
    summary: "Gipermodern tizim: Nf3, g3, Bg2, O-O, d3, Nbd2, e4. Deyarli har qanday qora tuzilmaga qarshi o'ynash mumkin. Fisher ham KIA ni sevgan.",
    white: ["e4 + e5 bilan qirol tomonda joy", "Nbd2, Re1, e4, e5, Nf1–h2–g4 manyovrlari", "h4–h5 bilan hujum"],
    black: ["c5, Nc6, e6, Bd6 — ferz tomonda hujum (b5–b4)", "d5 markazini saqlash"],
    mistakes: ["Oq uchun: e5 dan keyin d4 katagini unutish"],
    lines: [
      { name: "Qirol-hind hujumi", moves: "Nf3 d5 g3 Nf6 Bg2 c5 O-O Nc6 d3 e6 Nbd2 Be7 e4 O-O Re1", note: "Klassik KIA." },
      { name: "Reti gambiti", moves: "Nf3 d5 c4 d4 e3 Nc6 exd4 Nxd4 Nxd4 Qxd4 Nc3", note: "Markazga bosim." }
    ]
  },
  {
    id: "bird", name: "Berd debyuti / From gambiti", en: "Bird's Opening / From's Gambit", eco: "A02–A03", side: "w", group: "flank", level: 1,
    moves: "f4", match: ["Bird Opening"],
    summary: "Oq f4 bilan e5 katagini nazorat qiladi — teskari Gollandiya. Ehtiyot bo'ling: From gambitida (1...e5) qora juda o'tkir hujum qiladi!",
    white: ["Nf3, e3, b3, Bb2 — e5 nazorati", "Ne5 bilan markazda ot", "Qe1–h4 qirol tomonda hujum"],
    black: ["From gambiti: e5! exd6 Bxd6 — Qh4+ va g5 tahdidi", "d5, Nf6, g6 bilan mustahkam"],
    mistakes: ["Oq uchun: From gambitida Nc3?? Qh4+ g3 Qxg3+ hxg3 Bxg3#"],
    lines: [
      { name: "Klassik Berd", moves: "f4 d5 Nf3 Nf6 e3 g6 b3 Bg7 Bb2 O-O Be2 c5 O-O Nc6", note: "Teskari Leningrad." },
      { name: "From gambiti", moves: "f4 e5 fxe5 d6 exd6 Bxd6 Nf3 g5 d4 g4 Ne5", note: "O'tkir." }
    ]
  },
  {
    id: "larsen", name: "Larsen debyuti", en: "Nimzo-Larsen Attack", eco: "A01", side: "w", group: "flank", level: 1,
    moves: "b3", match: ["Nimzo-Larsen Attack"],
    summary: "Fil b2 dan uzun diagonalni nazorat qiladi. Kamdan-kam uchraydi — raqibni nazariyadan chiqarish uchun foydali.",
    white: ["Bb2 bilan e5 ga bosim", "e3, Nf3, c4 — moslashuvchan tuzilma"],
    black: ["e5 + Nc6 + d5 bilan katta markaz", "Bd6 bilan e5 ni himoya"],
    mistakes: ["Oq uchun: markazni butunlay qoraga berish"],
    lines: [{ name: "Asosiy", moves: "b3 e5 Bb2 Nc6 e3 d5 Bb5 Bd6 f4", note: "Klassik." }]
  },
  {
    id: "wayward", name: "Ferz erta chiqishi (Qh5)", en: "Wayward Queen Attack", eco: "C20", side: "b", group: "e4e5", level: 1,
    moves: "e4 e5 Qh5", match: ["Wayward Queen", "King's Pawn Game: Wayward Queen"],
    summary: "Boshlang'ichlar tez-tez o'ynaydi: Qh5 + Bc4 bilan Qxf7# ('Maktab mati') tahdidi. Qora to'g'ri himoya bilan tempni yutib, rivojlanishda oldinga chiqadi.",
    white: ["Qxf7# tahdidi", "Bc4 + Qf3 bilan f7 ga takroriy bosim"],
    black: ["Nc6 (e5 himoyasi)", "g6 (ferzni quvish), keyin Nf6", "Bg7, O-O, Nd4 bilan tez rivojlanish"],
    mistakes: ["Nf6?? Qxf7# — mat", "g6 ni Nc6 dan oldin — Qxe5+ vilka"],
    lines: [
      { name: "To'g'ri himoya", moves: "e4 e5 Qh5 Nc6 Bc4 g6 Qf3 Nf6 Ne2 Bg7 Nbc3 d6 d3 Bg4 Qg3 Nd4", note: "Qora rivojlanishda katta ustun." }
    ]
  }
];

window.COURSE_GROUPS = [
  { id: "e4e5", name: "1.e4 e5 — Ochiq o'yinlar" },
  { id: "sicilian", name: "Sitsiliya himoyasi" },
  { id: "e4other", name: "1.e4 ga boshqa javoblar" },
  { id: "d4d5", name: "1.d4 d5 — Yopiq o'yinlar" },
  { id: "indian", name: "Hind himoyalari va 1.d4 boshqalar" },
  { id: "flank", name: "Qanot debyutlari" }
];
