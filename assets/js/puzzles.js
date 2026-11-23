/* Masalalar. start: boshlang'ich pozitsiyadan yurishlar YOKI fen.
   sol: yechim yurishlari (foydalanuvchi, raqib, foydalanuvchi, ...).
   Oxirgi yurish mat bo'lsa — istalgan mat beruvchi yurish qabul qilinadi. */
window.PUZZLE_CATS = [
  { id: "trap", name: "Debyut tuzoqlari", icon: "trap" },
  { id: "mate", name: "Mat motivlari", icon: "crown" },
  { id: "tactic", name: "Taktik usullar", icon: "bolt" }
];

window.PUZZLES = [
  // ---------------- Debyut tuzoqlari ----------------
  { id: "scholar", cat: "trap", level: 1, title: "Maktab mati", motif: "f7 zaif nuqtasi",
    start: "e4 e5 Bc4 Nc6 Qh5 Nf6", sol: ["Qxf7#"],
    hint: "Ferz va fil bitta zaif nuqtaga qaragan. Qaysi nuqtani faqat qirol himoya qilyapti?",
    explain: "f7 katagini faqat qora qirol himoya qiladi. Fil c4 ferzni qo'llab-quvvatlaydi, shuning uchun Qxf7# — mat. Qora 3...g6 yoki 3...Qe7 bilan himoyalanishi kerak edi." },
  { id: "fool", cat: "trap", level: 1, title: "Ahmoq mati", motif: "Qirol diagonali ochiq",
    start: "f3 e5 g4", sol: ["Qh4#"],
    hint: "Oq f va g piyodalarini surib, e1–h4 diagonalini ochib qo'ydi.",
    explain: "Shaxmatdagi eng tez mat — atigi 2 yurishda. f2 va g2 piyodalarini erta surish qirolni ochib qo'yadi." },
  { id: "legal", cat: "trap", level: 2, title: "Legal mati", motif: "Bog'lanish yolg'on",
    start: "e4 e5 Nf3 d6 Bc4 Bg4 Nc3 g6", sol: ["Nxe5", "Bxd1", "Bxf7+", "Ke7", "Nd5#"],
    hint: "f3 dagi ot bog'langan ko'rinadi... lekin haqiqatan ham shundaymi? Ferzni qurbon qiling!",
    explain: "Ot 'bog'langan' bo'lsa ham, Nxe5! ferzni qurbon qiladi. Qora ferzni olsa — Bxf7+ Ke7 Nd5# mat. Bu nisbiy bog'lanish: ferz qirol emas, uni qurbon qilish mumkin." },
  { id: "blackburne", cat: "trap", level: 2, title: "Blekbern-Shilling tuzog'i", motif: "Ikki tomonlama hujum",
    start: "e4 e5 Nf3 Nc6 Bc4 Nd4 Nxe5", sol: ["Qg5", "Nxf7", "Qxg2", "Rf1", "Qxe4+", "Be2", "Nf3#"],
    hint: "Ferz bilan e5 ot va g2 piyodaga bir vaqtda hujum qiling.",
    explain: "Qg5! ham otga, ham g2 ga hujum. Oq ochko'zlik qilib Nxf7 qilsa, Qxg2 Rf1 Qxe4+ Be2 Nf3# — bo'g'ilgan mat (e2 fil bog'langan)." },
  { id: "elephant", cat: "trap", level: 2, title: "Fil tuzog'i (QGD)", motif: "Shax bilan tempni yutish",
    start: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 cxd5 exd5 Nxd5", sol: ["Nxd5", "Bxd8", "Bb4+", "Qd2", "Bxd2+", "Kxd2", "Kxd8"],
    hint: "Ferzingizni berishdan qo'rqmang — keyin shax bilan uni qaytarib olasiz.",
    explain: "Oq d5 ot 'bog'langan' deb o'yladi. Nxd5! Bxd8 Bb4+! — shax, oq ferzni qaytaradi, qora esa bir ot ortiqcha qoladi." },
  { id: "lasker", cat: "trap", level: 3, title: "Lasker tuzog'i (Albin)", motif: "Piyoda kichik figuraga aylanishi",
    start: "d4 d5 c4 e5 dxe5 d4 e3 Bb4+ Bd2 dxe3 Bxb4", sol: ["exf2+", "Ke2", "fxg1=N+"],
    hint: "Piyoda shax bilan oldinga — va oxirgi qatorga yetganda... otga aylantiring!",
    explain: "exf2+ Ke2 fxg1=N+! — piyoda OTGA aylanadi va shax beradi. Ferzga aylantirilsa Qd1 ni ushlab qolish imkoni bo'lmasdi. Endi Bg4+ bilan oq ferzi yutiladi." },
  { id: "englund", cat: "trap", level: 2, title: "Englund gambiti tuzog'i", motif: "Oxirgi qator mati",
    start: "d4 e5 dxe5 Nc6 Nf3 Qe7 Bf4 Qb4+ Bd2 Qxb2 Bc3", sol: ["Bb4", "Qd2", "Bxc3", "Qxc3", "Qc1#"],
    hint: "c3 dagi filni bog'lang. Oq ferzi uni himoya qilishga majbur...",
    explain: "Bb4! c3 filni bog'laydi. Qd2 Bxc3 Qxc3 Qc1# — ferz oxirgi qatorda mat beradi, chunki Nb1 va Ra1 c1 ni himoya qila olmaydi." },
  { id: "carokann", cat: "trap", level: 1, title: "Karo-Kann: bo'g'ilgan mat", motif: "Bog'langan piyoda",
    start: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nd7 Qe2 Ngf6", sol: ["Nd6#"],
    hint: "e7 piyoda ferz e2 tomonidan bog'langan. Ot uchun qaysi katak?",
    explain: "Nd6# — e7 piyoda Qe2 bilan bog'langan, shuning uchun otni ola olmaydi. Qirolning qochadigan joyi yo'q — o'z figuralari bilan o'ralgan." },
  { id: "petrov", cat: "trap", level: 1, title: "Petrov tuzog'i", motif: "Ochiq shax",
    start: "e4 e5 Nf3 Nf6 Nxe5 Nxe4 Qe2 Nf6", sol: ["Nc6+", "Be7", "Nxd8"],
    hint: "Ochiq e-chiziq bo'ylab ferzingiz qora qirolga qaragan. Otni harakatlantiring!",
    explain: "Nc6+ — ochiq shax (ferz e2 dan e8 ga). Ot bir vaqtda d8 dagi ferzga hujum qiladi. Qora shaxdan himoyalanadi, oq ferzni oladi." },
  { id: "noah", cat: "trap", level: 2, title: "Nuh kemasi tuzog'i", motif: "Filni qamash",
    start: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 d4 b5 Bb3 Nxd4 Nxd4 exd4 Qxd4", sol: ["c5", "Qd5", "Be6", "Qc6+", "Bd7", "Qd5", "c4"],
    hint: "Ferzni haydang va b3 dagi filning chiqish yo'llarini yoping.",
    explain: "c5! ferzni quvadi; Be6 va Bd7 bilan ferzni qaytarishga majburlab, c4! bilan b3 filni piyodalar 'kemasi'ga qamaydi." },
  { id: "budapest", cat: "trap", level: 1, title: "Budapesht: Nd3#", motif: "Bog'langan piyoda",
    start: "d4 Nf6 c4 e5 dxe5 Ng4 Bf4 Nc6 Nf3 Bb4+ Nbd2 Qe7 a3 Ngxe5 axb4", sol: ["Nd3#"],
    hint: "e2 piyoda e-chiziqdagi ferz tufayli bog'langan.",
    explain: "Nd3# — e2 piyoda Qe7 tomonidan bog'langan, d2 ot va boshqa figuralar d3 ni olaolmaydi. Qirol o'z figuralari bilan o'ralgan." },
  { id: "siberian", cat: "trap", level: 2, title: "Sibir tuzog'i", motif: "Himoyachini chalg'itish",
    start: "e4 c5 d4 cxd4 c3 dxc3 Nxc3 Nc6 Nf3 e6 Bc4 Qc7 O-O Nf6 Qe2 Ng4 h3", sol: ["Nd4", "Nxd4", "Qh2#"],
    hint: "h2 katagini faqat f3 ot himoya qilyapti. Uni chalg'iting!",
    explain: "Nd4! ferzga hujum qiladi. Nxd4 bo'lsa — f3 ot h2 himoyasini tashlab ketdi va Qh2# mat (Ng4 qo'llab-quvvatlaydi)." },
  { id: "mortimer", cat: "trap", level: 2, title: "Mortimer tuzog'i", motif: "Vilka (shax + figura)",
    start: "e4 e5 Nf3 Nc6 Bb5 Nf6 d3 Ne7 Nxe5", sol: ["c6", "Bc4", "Qa5+", "c3", "Qxe5"],
    hint: "Avval filni quving, keyin ferz bilan shax va otga bir vaqtda hujum.",
    explain: "c6! filni haydaydi, keyin Qa5+ — qirolga shax va e5 otga hujum. Oq shaxdan himoyalanadi, qora otni oladi." },
  { id: "damiano", cat: "trap", level: 1, title: "Damiano himoyasini jazolash", motif: "Ferz vilkasi",
    start: "e4 e5 Nf3 f6 Nxe5 fxe5", sol: ["Qh5+", "g6", "Qxe5+", "Qe7", "Qxh8"],
    hint: "Qirol diagonali ochiq. Shax bilan boshlang va keyin vilka qiling.",
    explain: "Qh5+! g6 Qxe5+ — qirolga shax va h8 rokka vilka. Qora himoyalangach, Qxh8 — rok yutildi." },
  { id: "stafford", cat: "trap", level: 2, title: "Stafford gambiti mati", motif: "Ferz qurbonligi",
    start: "e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6 dxc6 d3 Bc5 Bg5", sol: ["Nxe4", "Bxd8", "Bxf2+", "Ke2", "Bg4#"],
    hint: "Ferzingizni qurbon qiling — f2 va qirol atrofidagi kataklarga qarang.",
    explain: "Nxe4! — ferz qurbonligi. Bxd8 Bxf2+ Ke2 Bg4# — fillar va ot qirolning barcha kataklarini nazorat qiladi." },
  { id: "kieninger", cat: "trap", level: 2, title: "Nd2–e3: ot zarbasi", motif: "Ochilgan diagonal",
    start: "d4 Nf6 Nd2 e5 dxe5 Ng4 h3", sol: ["Ne3", "fxe3", "Qh4+", "g3", "Qxg3#"],
    hint: "Otni qurbon qilib f-piyodani chalg'iting, keyin e1–h4 diagonal ochiladi.",
    explain: "Ne3! — ferzga hujum. fxe3 bo'lsa Qh4+ g3 Qxg3# — f2 piyoda yo'q, qirol himoyasiz." },
  { id: "from", cat: "trap", level: 2, title: "From gambiti mati", motif: "Ochiq diagonal",
    start: "f4 e5 fxe5 d6 exd6 Bxd6 Nc3", sol: ["Qh4+", "g3", "Qxg3+", "hxg3", "Bxg3#"],
    hint: "f-piyoda yo'q — e1–h4 diagonal ochiq. Ferzni ham qurbon qilishdan qo'rqmang!",
    explain: "Qh4+ g3 Qxg3+! hxg3 Bxg3# — fil e1 dagi qirolga mat beradi. Oq Nf3 bilan h4 ni nazorat qilishi kerak edi." },
  { id: "owen", cat: "trap", level: 3, title: "Ouen himoyasi tuzog'i", motif: "Ochiq shax + mat",
    start: "e4 b6 d4 Bb7 Bd3 f5 exf5 Bxg2 Qh5+ g6 fxg6 Nf6", sol: ["gxh7+", "Nxh5", "Bg6#"],
    hint: "Ferzingiz hujum ostida — lekin ochiq shax bilan javob bering!",
    explain: "gxh7+ — ochiq shax (Qh5 dan e8 ga). Nxh5 bo'lsa Bg6# — f7 katagi ochiq, qirol qocha olmaydi." },
  { id: "qga", cat: "trap", level: 1, title: "QGA: rokni yutish", motif: "Uzun diagonal",
    start: "d4 d5 c4 dxc4 e3 b5", sol: ["a4", "c6", "axb5", "cxb5", "Qf3"],
    hint: "Qora piyodani ushlashga urindi. Piyoda zanjirini buzing va a8 diagonalini oching.",
    explain: "a4! c6 axb5 cxb5 Qf3! — ferz bir vaqtda a8 rok va boshqa nuqtalarga hujum qiladi; a8 rok himoyasiz." },
  { id: "milner", cat: "trap", level: 2, title: "Fransuz: Bb5+ zarbasi", motif: "Ochiq hujum",
    start: "e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6 Bd3 cxd4 cxd4 Nxd4 Nxd4 Qxd4", sol: ["Bb5+", "Bd7", "Qxd4"],
    hint: "d-chiziqda sizning ferzingiz va qora ferzi orasida faqat fil turibdi.",
    explain: "Bb5+! — shax va ochiq hujum: d1 ferz endi d4 dagi qora ferzni ko'radi. Qora shaxdan himoyalanadi, oq ferzni oladi." },
  { id: "forktrick", cat: "trap", level: 1, title: "Vilka hiylasi", motif: "Piyoda vilkasi",
    start: "e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3", sol: ["Nxe4", "Nxe4", "d5"],
    hint: "Otni vaqtincha qurbon qiling, keyin piyoda bilan ikki figuraga hujum qiling.",
    explain: "Nxe4! Nxe4 d5! — piyoda c4 fil va e4 otga hujum qiladi. Qora materialni qaytaradi va yaxshi markazga ega bo'ladi." },
  { id: "friedliver", cat: "trap", level: 1, title: "Ot vilkasi f7 da", motif: "Ot vilkasi",
    start: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 h6", sol: ["Nxf7"],
    hint: "f7 ni oling — ot ikki og'ir figuraga hujum qiladi.",
    explain: "Nxf7! — ot d8 ferz va h8 rokka vilka qiladi. Qora 4...d5! o'ynashi kerak edi." },
  { id: "opera", cat: "trap", level: 3, title: "Morfi: Opera partiyasi", motif: "Qurbonlik + oxirgi qator",
    start: "e4 e5 Nf3 d6 d4 Bg4 dxe5 Bxf3 Qxf3 dxe5 Bc4 Nf6 Qb3 Qe7 Nc3 c6 Bg5 b5 Nxb5 cxb5 Bxb5+ Nbd7 O-O-O Rd8",
    sol: ["Rxd7", "Rxd7", "Rd1", "Qe6", "Bxd7+", "Nxd7", "Qb8+", "Nxb8", "Rd8#"],
    hint: "d7 dagi bog'langan otga hujum qiling — rokni ham qurbon qiling!",
    explain: "1858-yil, Parij operasi. Morfi: Rxd7! Rxd7 Rd1 Qe6 Bxd7+ Nxd7 Qb8+!! Nxb8 Rd8# — barcha figuralar faol, ferz qurbonligi bilan yakun." },

  // ---------------- Mat motivlari ----------------
  { id: "backrank", cat: "mate", level: 1, title: "Oxirgi qator mati", motif: "Back rank",
    fen: "6k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1", sol: ["Rd8#"],
    hint: "Qora qirol o'z piyodalari bilan qamalgan.",
    explain: "Qirolning qochish joyi yo'q (f7, g7, h7 piyodalar). Rd8# — oxirgi qator mati. Doimo 'luft' (h6/g6) qoldiring!" },
  { id: "smothered1", cat: "mate", level: 1, title: "Bo'g'ilgan mat", motif: "Smothered mate",
    fen: "6rk/6pp/8/6N1/8/8/6PP/6K1 w - - 0 1", sol: ["Nf7#"],
    hint: "Qirol o'z figuralari bilan o'ralgan — faqat ot shax bera oladi.",
    explain: "Nf7# — qirolning barcha qo'shni kataklari o'z figuralari bilan band." },
  { id: "philidorlegacy", cat: "mate", level: 2, title: "Filidor merosi", motif: "Ferz qurbonligi + bo'g'ilgan mat",
    fen: "5r1k/6pp/7N/3Q4/8/8/6PP/6K1 w - - 0 1", sol: ["Qg8+", "Rxg8", "Nf7#"],
    hint: "Ferzni g8 ga qurbon qiling — rok uni olishga majbur.",
    explain: "Qg8+! Rxg8 (qirol ola olmaydi — h6 ot himoya qiladi) Nf7# — klassik bo'g'ilgan mat." },
  { id: "anastasia", cat: "mate", level: 2, title: "Anastasiya mati", motif: "Ot + rok",
    fen: "5r2/4Nppk/8/8/8/4R3/8/6K1 w - - 0 1", sol: ["Rh3#"],
    hint: "e7 dagi ot g6 va g8 ni nazorat qiladi. h-chiziq ochiq.",
    explain: "Rh3# — ot g8 va g6 ni yopadi, g7 piyoda qirolning yo'lini to'sadi, rok h-chiziqda mat beradi." },
  { id: "arabian", cat: "mate", level: 1, title: "Arab mati", motif: "Ot + rok burchakda",
    fen: "7k/1R6/5N2/8/8/8/8/6K1 w - - 0 1", sol: ["Rh7#"],
    hint: "Ot rokni himoya qiladi va g8 ni nazorat qiladi.",
    explain: "Rh7# — f6 ot h7 rokni himoya qiladi va g8 ni nazorat qiladi; burchakdagi qirol qocha olmaydi." },
  { id: "boden", cat: "mate", level: 2, title: "Boden mati", motif: "Ikki fil kesishmasi",
    fen: "2kr4/p2n4/8/8/5B2/8/4B3/6K1 w - - 0 1", sol: ["Ba6#"],
    hint: "Ikki fil kesishgan diagonallarda ishlaydi. b7 katagi bo'sh.",
    explain: "Ba6# — f4 fil b8 va c7 ni, a6 fil b7 va c8 ni nazorat qiladi. d7 va d8 o'z figuralari bilan band." },
  { id: "damianomate", cat: "mate", level: 1, title: "Damiano mati", motif: "Ferz + piyoda",
    fen: "6k1/5p1p/5PpQ/8/8/8/8/6K1 w - - 0 1", sol: ["Qg7#"],
    hint: "f6 piyoda g7 katagini himoya qiladi.",
    explain: "Qg7# — ferz f6 piyoda tomonidan himoyalangan, qirol f8 va h8 ga ham qocha olmaydi." },
  { id: "epaulette", cat: "mate", level: 1, title: "Epolet mati", motif: "O'z roklari to'sqin",
    fen: "3rkr2/8/8/8/8/1Q6/8/6K1 w - - 0 1", sol: ["Qe6#"],
    hint: "Qirolning yonidagi roklar uning 'epoletlari' — u yon tomonga qocha olmaydi.",
    explain: "Qe6# — d8 va f8 dagi o'z roklari qirolni to'sib qo'ygan; d7, e7, f7 ferz nazoratida." },

  // ---------------- Taktik usullar ----------------
  { id: "knightfork", cat: "tactic", level: 1, title: "Qirollik vilkasi", motif: "Ot vilkasi",
    fen: "q3k3/8/8/1N6/8/8/8/4K3 w - - 0 1", sol: ["Nc7+", "Kd7", "Nxa8"],
    hint: "Ot bir vaqtda qirol va ferzga hujum qila oladigan katakni toping.",
    explain: "Nc7+ — shax va a8 ferzga hujum (vilka). Qirol qochadi, Nxa8." },
  { id: "skewer", cat: "tactic", level: 1, title: "Sanchish (skewer)", motif: "Rok sanchishi",
    fen: "8/8/8/1k5q/1P6/8/R7/6K1 w - - 0 1", sol: ["Ra5+", "Kb6", "Rxh5"],
    hint: "Qirol va ferz bir qatorda. Qirolga shax bering — u ketgach, ortidagi ferz ochiladi.",
    explain: "Ra5+ (b4 piyoda rokni himoya qiladi) — qirol 5-qatorni tark etishi shart, keyin Rxh5. Bu 'sanchish': qimmatroq figura oldinda, arzonrog'i ortda." }
];

/* ----- Qo'llanmalar ----- */
window.GUIDES = [
  {
    id: "principles", title: "Debyutning 10 oltin qoidasi", icon: "book",
    body: `
<p>Debyutni yod olishdan oldin uning <b>tamoyillarini</b> tushunish muhim. Ko'pchilik o'yinlar debyutdagi oddiy xatolar tufayli yutqaziladi.</p>
<ol>
<li><b>Markazni egallang.</b> e4, d4, e5, d5 kataklari eng muhim. Piyoda yoki figuralar bilan ularni nazorat qiling.</li>
<li><b>Figuralarni tez rivojlantiring.</b> Avval otlar, keyin fillar. Har bir yurish yangi figurani o'yinga olib kirsin.</li>
<li><b>Bir figurani ikki marta yurmang</b> (zarurat bo'lmasa). Har bir temp qimmat.</li>
<li><b>Ferzni erta chiqarmang.</b> U raqib figuralari tomonidan quvilib, vaqt yo'qotasiz.</li>
<li><b>Tez rokirovka qiling.</b> Odatda birinchi 10 yurish ichida. Qirol markazda xavfda.</li>
<li><b>Roklarni bog'lang.</b> Ferz rivojlangach, roklar ochiq chiziqlarga chiqsin.</li>
<li><b>Ko'p piyoda yurmang.</b> Ayniqsa qirol oldidagi f, g, h piyodalarini.</li>
<li><b>f7 / f2 ga e'tibor bering.</b> Bu katakni boshida faqat qirol himoya qiladi.</li>
<li><b>Material uchun rivojlanishni qurbon qilmang.</b> 'Zaharlangan piyoda'lar ko'p.</li>
<li><b>Har bir raqib yurishidan keyin so'rang:</b> "U nimaga tahdid qilyapti?"</li>
</ol>
<div class="tip">💡 Statistika paneliga qarang: ko'p o'ynaladigan yurishlar odatda shu tamoyillarga mos keladi.</div>`
  },
  {
    id: "howtostudy", title: "Debyutni qanday o'rganish kerak", icon: "map",
    body: `
<p>Yurishlarni yodlash emas, <b>g'oyalarni tushunish</b> muhim. Quyidagi tartibda o'rganing:</p>
<ol>
<li><b>Repertuar tanlang:</b> Oq uchun bitta tizim (masalan, Italyan yoki London), qora uchun 1.e4 ga va 1.d4 ga bittadan javob.</li>
<li><b>Qo'llanmani o'qing:</b> "Debyutlar" bo'limida har bir debyutning g'oyalari, rejalari va tipik xatolari bor.</li>
<li><b>Kashfiyot rejimida o'ynang:</b> har bir pozitsiyada eng ko'p o'ynaladigan yurishlarni va ularning natijalarini ko'ring. Kamdan-kam yurishlarga ham qarang — raqiblar ularni o'ynaydi!</li>
<li><b>Mashq rejimida takrorlang:</b> kompyuter raqib statistikaga ko'ra yuradi, siz to'g'ri javobni topasiz.</li>
<li><b>Tuzoqlarni o'rganing:</b> "Masalalar" bo'limida debyut tuzoqlari — ham o'zingiz tushmaslik, ham raqibni jazolash uchun.</li>
<li><b>O'ynagan o'yinlaringizni tahlil qiling:</b> debyut qayerda tugadi? Siz qaysi yurishni bilmagansiz?</li>
</ol>
<h4>Daraja bo'yicha tavsiyalar</h4>
<table class="gtable">
<tr><th>Daraja</th><th>Oq</th><th>Qora vs 1.e4</th><th>Qora vs 1.d4</th></tr>
<tr><td>Boshlang'ich</td><td>Italyan, London</td><td>1...e5 (Ikki ot)</td><td>QGD, London-qarshi</td></tr>
<tr><td>O'rta</td><td>Ispan, Shotland</td><td>Karo-Kann, Fransuz</td><td>Slav, Nimso-hind</td></tr>
<tr><td>Kuchli</td><td>Ochiq Sitsiliya, Katalon</td><td>Najdorf, Sveshnikov</td><td>Qirol-hind, Grunfeld</td></tr>
</table>`
  },
  {
    id: "solving", title: "Masala yechish usuli", icon: "target",
    body: `
<p>Har bir masalada (va har bir o'yinda!) quyidagi <b>tizimli yondashuv</b>dan foydalaning:</p>
<h4>1. Shaxlar, olishlar, tahdidlar (SOT)</h4>
<p>Avval <b>barcha shaxlarni</b> ko'rib chiqing — hatto 'ahmoqona' ko'ringanlarini ham. Keyin <b>barcha olishlarni</b>. Keyin <b>tahdidlarni</b> (figuraga hujum, mat tahdidi). Kuchli yurishlar ko'pincha shular orasida.</p>
<h4>2. Zaifliklarni toping</h4>
<ul>
<li>Himoyasiz figuralar (ular vilka va ikki tomonlama hujum nishoni)</li>
<li>Qirol atrofidagi zaif kataklar (f7, h7, oxirgi qator)</li>
<li>Bog'langan figuralar</li>
<li>Ortiqcha yuklangan himoyachilar (bitta figura ikki vazifani bajaryapti)</li>
</ul>
<h4>3. Raqibning eng yaxshi javobini hisoblang</h4>
<p>"Agar men buni qilsam, u nima qiladi?" — eng kuchli javobni hisoblang, eng qulayini emas.</p>
<h4>4. Majburiy yurishlardan boshlang</h4>
<p>Shax → raqibning tanlovi cheklangan → hisoblash oson. Shuning uchun kombinatsiyalar ko'pincha shax bilan boshlanadi.</p>
<h4>5. Tekshiring</h4>
<p>Yurishdan oldin: "Bu yurish biror narsani himoyasiz qoldiradimi?" (Blunder-check).</p>
<div class="tip">💡 Masalalarda 'Maslahat' tugmasini faqat 1–2 daqiqa o'ylagandan keyin bosing. Mustaqil hisoblash — eng muhim mashq.</div>`
  },
  {
    id: "motifs", title: "Taktik motivlar lug'ati", icon: "bolt",
    body: `
<div class="motif"><b>Vilka (fork)</b> — bitta figura ikki yoki undan ko'p figuraga bir vaqtda hujum qiladi. Ayniqsa ot vilkalari xavfli. <a data-puzzle="knightfork">Masala →</a> <a data-puzzle="friedliver">Masala →</a></div>
<div class="motif"><b>Bog'lash (pin)</b> — figura joyidan qo'zg'ala olmaydi, chunki ortida qimmatroq figura (yoki qirol) bor. Mutlaq bog'lanish (qirol ortda) va nisbiy bog'lanish (ferz ortda). <a data-puzzle="carokann">Masala →</a> <a data-puzzle="englund">Masala →</a></div>
<div class="motif"><b>Nisbiy bog'lanishni buzish</b> — 'bog'langan' figura baribir yurishi mumkin, agar natijasi yaxshi bo'lsa. <a data-puzzle="legal">Masala →</a> <a data-puzzle="elephant">Masala →</a></div>
<div class="motif"><b>Sanchish (skewer)</b> — bog'lashning teskarisi: qimmatroq figura oldinda, u qochgach ortidagi figura olinadi. <a data-puzzle="skewer">Masala →</a></div>
<div class="motif"><b>Ochiq hujum / ochiq shax</b> — bir figura yurganda ortidagi figuraning chizig'i ochiladi. Ikki tahdid bir vaqtda! <a data-puzzle="petrov">Masala →</a> <a data-puzzle="milner">Masala →</a> <a data-puzzle="owen">Masala →</a></div>
<div class="motif"><b>Chalg'itish (deflection)</b> — muhim himoyachini o'z vazifasidan chalg'itish. <a data-puzzle="siberian">Masala →</a></div>
<div class="motif"><b>Oxirgi qator mati</b> — qirol o'z piyodalari ortida qamalgan. <a data-puzzle="backrank">Masala →</a> <a data-puzzle="englund">Masala →</a></div>
<div class="motif"><b>Bo'g'ilgan mat</b> — qirol o'z figuralari bilan o'ralgan, ot mat beradi. <a data-puzzle="smothered1">Masala →</a> <a data-puzzle="philidorlegacy">Masala →</a> <a data-puzzle="blackburne">Masala →</a></div>
<div class="motif"><b>f7/f2 zaif nuqtasi</b> — debyutda faqat qirol himoya qiladigan katak. <a data-puzzle="scholar">Masala →</a> <a data-puzzle="friedliver">Masala →</a></div>
<div class="motif"><b>Figurani qamash</b> — figuraning chiqish yo'llarini yopib, uni yutish. <a data-puzzle="noah">Masala →</a></div>
<div class="motif"><b>Kichik figuraga aylantirish</b> — ba'zan ferz emas, ot kerak! <a data-puzzle="lasker">Masala →</a></div>`
  },
  {
    id: "structures", title: "Piyoda tuzilmalari va rejalar", icon: "layers",
    body: `
<p>Debyut tugagach, <b>piyoda tuzilmasi</b> rejani belgilaydi. Asosiy qoida: <b>piyoda zanjiriga uning asosidan zarba bering</b> va figuralarni tuzilmaga mos joylashtiring.</p>
<h4>Izolyatsiyalangan ferz piyodasi (IQP)</h4>
<p>QGA, Panov, Tarrash, Alapindan chiqadi. <b>Egasi:</b> faol figuralar, e5/c5 da ot, qirol tomonga hujum, d4–d5 zarbasi. <b>Raqib:</b> d5 katagini blokada qiling (ot eng yaxshi blokadachi), figuralarni almashtiring — endshpilda piyoda zaif.</p>
<h4>Karlsbad (QGD almashinuv)</h4>
<p>Oq: <b>ozchilik hujumi</b> — b4–b5 bilan c6 da zaiflik yaratish. Qora: qirol tomonda figura hujumi, Ne4 / f5.</p>
<h4>Fransuz zanjiri (e5–d4 vs e6–d5)</h4>
<p>Qora: c5 va f6 bilan zanjir asosiga zarba. Oq: f4–f5 bilan qirol tomonda hujum, d4 ni mustahkam ushlash.</p>
<h4>Qirol-hind zanjiri (d5–e4 vs d6–e5)</h4>
<p>Oq ferz tomonda (c5), qora qirol tomonda (f5–f4–g5) hujum qiladi. Kim tezroq — o'sha yutadi.</p>
<h4>Maroci bog'i (c4 + e4 vs Sitsiliya)</h4>
<p>Oq d5 ni nazorat qiladi va qora b5/d5 bo'shatishlarini to'xtatadi. Qora sabr bilan a6, b5 yoki f5 ni tayyorlaydi.</p>
<h4>Sitsiliya (ochiq)</h4>
<p>Qora: c-chiziq, ferz tomondagi piyoda ko'pchiligi, d5 zarbasi. Oq: tez rivojlanish, qirol tomonda hujum (f4, g4, f5).</p>`
  },
  {
    id: "stats", title: "Statistikani qanday o'qish kerak", icon: "chart",
    body: `
<p>Kashfiyot rejimida har bir yurish uchun quyidagilar ko'rsatiladi:</p>
<ul>
<li><b>%</b> — shu pozitsiyada o'yinchilarning necha foizi bu yurishni tanlaydi.</li>
<li><b>Natija chizig'i</b> — <span class="sw w"></span> oq yutishi, <span class="sw d"></span> durang, <span class="sw b"></span> qora yutishi.</li>
<li><b>Izoh</b> — yurishning g'oyasi va keyin nima qilish kerakligi.</li>
</ul>
<h4>Muhim eslatmalar</h4>
<ul>
<li>Mashhur yurish har doim eng kuchli emas. Masalan, havaskorlar 2.Qh5 ni ko'p o'ynaydi, lekin to'g'ri himoyada u yomon.</li>
<li>Yutish foizi juda yuqori bo'lgan kamyob yurishlar ko'pincha <b>tuzoq</b>larga ishora qiladi — izohni o'qing!</li>
<li>O'rnatilgan statistika taxminiy (Lichess 1600–2200 va usta o'yinlari asosida yaxlitlangan). Sozlamalarda Lichess tokenini kiritsangiz, <b>jonli</b> statistika yuklanadi.</li>
<li>Kitobdan tashqari pozitsiyalarda ham 3800+ nomlangan debyut bazasidan davomlar ko'rsatiladi.</li>
</ul>`
  }
];
