/* Debyut daraxti: har bir pozitsiyada eng ko'p o'ynaladigan yurishlar.
   Format: [yurish, o'ynalish %, oq yutgan %, durang %, izoh]
   Statistika taxminiy: Lichess (1600–2200 reyting, blits/rapid) va ustalar bazasi
   asosida yaxlitlangan. Qora yutug'i = 100 - oq - durang. */
(function () {
  const B = {};
  const N = (path, moves) => { B[path] = moves; };

  // ===================== BOSHLANG'ICH POZITSIYA =====================
  N("", [
    ["e4", 54, 50, 5, "Eng mashhur birinchi yurish. Markazni egallaydi, ferz va oq rangli filga yo'l ochadi. Ochiq, taktik o'yinga olib keladi."],
    ["d4", 29, 51, 6, "Ferz tomondagi piyoda bilan markaz. Pozitsion, strategik o'yin. d4 piyodasi ferz tomonidan himoyalangan."],
    ["Nf3", 6, 50, 7, "Moslashuvchan yurish: e5 ga yo'l qo'ymaydi va keyin d4, c4 yoki g3 tanlash imkonini saqlaydi."],
    ["c4", 4, 51, 6, "Ingliz partiyasi. d5 katagini nazorat qiladi, ko'pincha teskari Sitsiliya tuzilmasi chiqadi."],
    ["e3", 2, 47, 5, "Kamtar yurish, ko'pincha d4 va Bd3 bilan davom etadi."],
    ["f4", 1.5, 46, 4, "Berd debyuti. e5 katagini nazorat qiladi, lekin qirol tomonni bir oz zaiflashtiradi."],
    ["g3", 1.5, 50, 6, "Fianketto: fil g2 ga chiqib uzun diagonalni nazorat qiladi."],
    ["b3", 1, 49, 5, "Larsen debyuti: fil b2 dan e5 va markazni nazorat qiladi."]
  ]);

  // ===================== 1.e4 =====================
  N("e4", [
    ["e5", 36, 50, 5, "Simmetrik javob — markazda teng ulush. Klassik va eng ishonchli javoblardan biri."],
    ["c5", 20, 49, 5, "Sitsiliya himoyasi — eng kuchli va eng murakkab javob. Qora assimetriya bilan g'alaba uchun o'ynaydi."],
    ["e6", 9, 50, 5, "Fransuz himoyasi: keyin d5 bilan markazga zarba. Mustahkam, ammo c8 fil passiv bo'lishi mumkin."],
    ["c6", 8, 49, 6, "Karo-Kann: d5 ni tayyorlaydi. Juda mustahkam, c8 fil tashqariga chiqa oladi."],
    ["d5", 8, 52, 5, "Skandinaviya himoyasi: markazni darhol savol ostiga qo'yadi."],
    ["g6", 4, 52, 5, "Zamonaviy himoya: oq markazni egallashiga ruxsat berib, keyin unga hujum qilish."],
    ["d6", 4, 52, 5, "Pirts himoyasi: Nf6, g6, Bg7 bilan gipermodern tuzilma."],
    ["Nc6", 3, 52, 5, "Nimtsovich himoyasi — kamdan-kam o'ynaladigan, ammo o'yinga yaroqli."],
    ["Nf6", 3, 51, 5, "Alyoxin himoyasi: oqni piyodalarni oldinga surishga undaydi."],
    ["b6", 1, 53, 4, "Ouen himoyasi. Fil b7 dan e4 ga bosim. Ehtiyot bo'ling: tuzoqlar bor!"]
  ]);

  // ---------- 1.e4 e5 ----------
  N("e4 e5", [
    ["Nf3", 75, 50, 5, "Eng kuchli: e5 piyodasiga hujum qiladi va otni rivojlantiradi."],
    ["Bc4", 7, 51, 5, "Filning debyuti: f7 nuqtasiga qaratilgan."],
    ["Nc3", 6, 50, 5, "Vena partiyasi: f4 bilan hujumga tayyorgarlik."],
    ["Qh5", 4, 50, 4, "Boshlang'ichlar ko'p o'ynaydi (Qxf7# tahdidi). To'g'ri himoya bilan ferz vaqt yo'qotadi."],
    ["f4", 3, 49, 4, "Qirol gambiti — romantik, o'tkir hujum debyuti."],
    ["d4", 3, 49, 5, "Markaziy o'yin: markazni darhol ochadi."]
  ]);
  N("e4 e5 Qh5", [
    ["Nc6", 70, 46, 5, "To'g'ri! e5 ni himoya qiladi va rivojlanadi. Keyin g6 yoki Qe7 bilan f7 ni himoyalang."],
    ["g6", 10, 48, 4, "Ehtiyot bo'ling: Qxe5+ shax bilan h8 rokka vilka!"],
    ["Qe7", 8, 47, 5, "e5 va f7 ni himoya qiladi, lekin f8 filni to'sadi."],
    ["Nf6", 6, 60, 3, "Xato: Qxe5+ piyodani yutadi."]
  ]);
  N("e4 e5 Qh5 Nc6", [["Bc4", 85, 48, 5, "Qxf7# tahdidi! Qora f7 ni himoya qilishi shart."]]);
  N("e4 e5 Qh5 Nc6 Bc4", [
    ["g6", 60, 43, 5, "Eng yaxshi: ferzni haydaydi. Keyin Nf6 bilan rivojlanish va tempni yutish."],
    ["Qe7", 25, 47, 5, "f7 ni himoya qiladi. Keyin Nf6 bilan ferzni quvish."],
    ["Qf6", 8, 48, 5, "Ishlaydi, lekin ferz Nf6 katagini egallaydi."],
    ["Nf6", 5, 95, 0, "QO'POL XATO: Qxf7# — 'Maktab mati'!"]
  ]);
  N("e4 e5 Qh5 Nc6 Bc4 g6", [["Qf3", 80, 47, 5, "Yana f7 ga tahdid. Nf6 bilan to'sib qo'ying."]]);
  N("e4 e5 Qh5 Nc6 Bc4 g6 Qf3", [["Nf6", 90, 44, 5, "f7 himoyalandi, ot rivojlandi. Qora rivojlanishda oldinda va ferzni yana quvish mumkin (Nd4!)."]]);

  N("e4 e5 Nf3", [
    ["Nc6", 70, 50, 5, "Eng tabiiy: e5 ni himoya qiladi va rivojlanadi."],
    ["d6", 12, 54, 5, "Filidor himoyasi: mustahkam, lekin biroz passiv."],
    ["Nf6", 10, 50, 6, "Rus (Petrov) himoyasi: simmetrik kontr-hujum, juda ishonchli."],
    ["Qf6", 2, 56, 4, "Kam uchraydi; ferz erta chiqadi."],
    ["f6", 2, 62, 3, "Damiano himoyasi — XATO! Nxe5! bilan oq kuchli hujumga ega."],
    ["d5", 2, 56, 4, "Elefant gambiti — shubhali."]
  ]);
  N("e4 e5 Nf3 f6", [["Nxe5", 55, 62, 3, "Qurbonlik! fxe5 bo'lsa Qh5+ bilan hujum."], ["Bc4", 30, 58, 4, "Oddiy rivojlanish ham yaxshi."]]);
  N("e4 e5 Nf3 f6 Nxe5", [
    ["fxe5", 45, 75, 2, "Xato: Qh5+ va hujum."],
    ["Qe7", 35, 52, 4, "To'g'ri: ot qaytgach Qxe4+ bilan piyodani qaytaradi."]
  ]);

  N("e4 e5 Nf3 Nc6", [
    ["Bc4", 48, 50, 5, "Italyan partiyasi: fil f7 ga qaraydi, tez rokirovka."],
    ["Bb5", 17, 51, 6, "Ispan partiyasi (Ruy Lopez): e5 himoyachisiga bosim. Eng chuqur klassik debyut."],
    ["d4", 12, 51, 5, "Shotland partiyasi: markazni darhol ochish."],
    ["Nc3", 10, 50, 5, "To'rt ot partiyasi (Nf6 dan keyin)."],
    ["c3", 2, 50, 5, "Ponziani debyuti."],
    ["Be2", 2, 48, 6, "Passiv, lekin xavfsiz."]
  ]);

  // ---------- Italyan ----------
  N("e4 e5 Nf3 Nc6 Bc4", [
    ["Bc5", 45, 50, 5, "Giuoco Piano: fil ham f2 ga qaraydi. Klassik simmetriya."],
    ["Nf6", 38, 50, 5, "Ikki ot himoyasi: e4 ga kontr-hujum. Ng5 ga ruxsat beradi!"],
    ["Be7", 6, 53, 5, "Venger himoyasi: mustahkam, ammo passiv."],
    ["d6", 6, 54, 5, "Passiv; c8 fil ochiladi, lekin rivojlanish sekin."],
    ["Nd4", 3, 52, 3, "Blekbern-Shilling tuzog'i! Nxe5?? Qg5! bilan qora yutadi. To'g'ri javob: Nxd4 yoki c3/O-O."],
    ["h6", 2, 56, 4, "Vaqt yo'qotish."]
  ]);
  N("e4 e5 Nf3 Nc6 Bc4 Nd4", [
    ["Nxe5", 40, 45, 2, "TUZOQ! Qg5! — keyin Nxf7?? Qxg2 va mat yaqin."],
    ["Nxd4", 30, 56, 5, "Eng yaxshi: exd4, keyin c3 yoki O-O — oq yaxshiroq."],
    ["O-O", 15, 55, 5, "Oddiy va kuchli."],
    ["c3", 10, 55, 5, "Otni haydaydi."]
  ]);
  N("e4 e5 Nf3 Nc6 Bc4 Nd4 Nxe5", [["Qg5", 70, 40, 2, "Ikki tomonlama hujum: e5 ot va g2 piyoda."]]);
  N("e4 e5 Nf3 Nc6 Bc4 Nd4 Nxe5 Qg5", [
    ["Nxf7", 45, 20, 1, "Halokat: Qxg2 Rf1 Qxe4+ Be2 Nf3#."],
    ["Bxf7+", 30, 55, 4, "Eng yaxshi javob — qirolni chiqaradi."],
    ["Ng4", 15, 52, 4, "Otni qutqaradi."]
  ]);
  N("e4 e5 Nf3 Nc6 Bc4 Bc5", [
    ["c3", 35, 51, 5, "Klassik reja: d4 bilan katta markaz qurish."],
    ["d3", 22, 50, 6, "Giuoco Pianissimo: sekin, pozitsion manyovrlar."],
    ["O-O", 20, 50, 5, "Rokirovka, keyin c3 va d4."],
    ["Nc3", 10, 50, 5, "To'rt ot tizimiga o'tish."],
    ["b4", 8, 52, 4, "Evans gambiti: piyoda evaziga tez rivojlanish va markaz."]
  ]);
  N("e4 e5 Nf3 Nc6 Bc4 Bc5 c3", [
    ["Nf6", 60, 50, 5, "e4 ga kontr-hujum — d4 ni tayyorlagan oqni tezlashishga majbur qiladi."],
    ["d6", 20, 52, 6, "e5 ni mustahkamlaydi."],
    ["Qe7", 8, 51, 6, "Eski variant, e5 ni ushlab turadi."]
  ]);
  N("e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6", [
    ["d3", 50, 50, 6, "Zamonaviy usul: sekin o'yin, a4, h3, Re1, Nbd2-f1-g3 manyovri."],
    ["d4", 45, 51, 5, "Keskin: exd4 cxd4 Bb4+ — markaz uchun o'tkir kurash."]
  ]);
  N("e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4", [["exd4", 85, 51, 5, "Markazni ochadi."]]);
  N("e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4", [["cxd4", 70, 51, 5, "Katta markaz."], ["e5", 25, 50, 5, "Otni haydaydi: d5! bilan javob bering."]]);
  N("e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 cxd4", [["Bb4+", 90, 50, 5, "Majburiy: fil shax bilan chetga chiqadi."]]);
  N("e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 cxd4 Bb4+", [["Bd2", 55, 49, 6, "Xavfsiz."], ["Nc3", 35, 51, 4, "Meller hujumi — piyoda qurbonligi, o'tkir."], ["Kf1", 5, 50, 4, "Kam uchraydi."]]);
  N("e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3", [
    ["d6", 45, 50, 6, "Mustahkam: a6, Ba7, O-O bilan davom eting."],
    ["O-O", 25, 50, 6, "Rokirovka."],
    ["a6", 15, 50, 6, "Fil uchun a7 katagini tayyorlaydi (b4-b5 dan qochish)."]
  ]);
  N("e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6", [["O-O", 50, 50, 6, "Rokirovka, keyin Re1, Nbd2, Bb3."], ["Bb3", 25, 50, 6, "Filni oldindan xavfsiz joyga."], ["b4", 15, 50, 6, "Ferz tomonda joy olish."]]);
  N("e4 e5 Nf3 Nc6 Bc4 Bc5 b4", [["Bxb4", 70, 52, 4, "Gambitni qabul qilish."], ["Bb6", 25, 52, 5, "Rad etish."]]);
  N("e4 e5 Nf3 Nc6 Bc4 Bc5 O-O", [["Nf6", 65, 50, 5, "Rivojlanish."], ["d6", 25, 50, 6, "Mustahkam."]]);
  N("e4 e5 Nf3 Nc6 Bc4 Bc5 d3", [["Nf6", 60, 50, 6, "Tabiiy."], ["d6", 30, 50, 6, "Mustahkam."]]);

  // ---------- Ikki ot ----------
  N("e4 e5 Nf3 Nc6 Bc4 Nf6", [
    ["Ng5", 40, 51, 4, "f7 ga hujum! Qora d5 bilan javob beradi."],
    ["d3", 30, 50, 6, "Xotirjam yo'l: Italyanga o'xshash pozitsion o'yin."],
    ["Nc3", 12, 50, 5, "Nxe4! 'vilka hiylasi' bilan qora tenglashadi."],
    ["d4", 10, 50, 5, "Maks Lange / Skotch gambitiga o'xshash."],
    ["O-O", 8, 49, 5, "Nxe4 ga ruxsat beradi."]
  ]);
  N("e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5", [
    ["d5", 80, 50, 4, "Eng to'g'ri: markazni ochib, chiziqni to'sadi."],
    ["Bc5", 12, 48, 3, "Traksler kontr-gambiti: Nxf7 ga Bxf2+! bilan o'ta keskin."],
    ["Nxe4", 3, 65, 2, "Xato: Nxe4 dan keyin oq ustun."]
  ]);
  N("e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5", [["exd5", 98, 50, 4, "Majburiy deyarli."]]);
  N("e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5", [
    ["Na5", 55, 48, 4, "ENG YAXSHI: filga hujum. Qora piyoda evaziga rivojlanish va tashabbus oladi."],
    ["Nxd5", 35, 60, 3, "Xavfli! Nxf7 (Qovurilgan jigar) yoki d4! bilan oq kuchli hujum qiladi."],
    ["b5", 5, 50, 4, "Ulvestad varianti."],
    ["Nd4", 5, 50, 4, "Fritts varianti."]
  ]);
  N("e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nxd5", [
    ["d4", 40, 60, 4, "Lolli hujumi — Nxf7 dan ham kuchliroq hisoblanadi."],
    ["Nxf7", 45, 60, 2, "Qovurilgan jigar (Fried Liver): Kxf7 Qf3+ Ke6 Nc3 — qirol markazda!"],
    ["O-O", 10, 52, 4, "Sekin."]
  ]);
  N("e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nxd5 Nxf7", [["Kxf7", 95, 60, 2, "Majburiy (aks holda ferz va rok yo'qoladi)."]]);
  N("e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nxd5 Nxf7 Kxf7", [["Qf3+", 98, 60, 2, "d5 otni bog'laydi va qirolni quvadi."]]);
  N("e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nxd5 Nxf7 Kxf7 Qf3+", [["Ke6", 85, 60, 2, "d5 otni himoya qilish uchun yagona yo'l."], ["Kg8", 10, 70, 1, "Bxd5+ bilan fil yutiladi."]]);
  N("e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nxd5 Nxf7 Kxf7 Qf3+ Ke6", [["Nc3", 80, 62, 2, "d5 ga uchinchi bosim. Qora qiyin ahvolda."]]);
  N("e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5", [["Bb5+", 90, 49, 4, "Asosiy liniya."], ["d3", 8, 48, 4, "Eski usul."]]);
  N("e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 Bb5+", [["c6", 95, 49, 4, "Shaxni to'sib, filga hujum."]]);
  N("e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 Bb5+ c6", [["dxc6", 95, 49, 4, "Asosiy."]]);
  N("e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 Bb5+ c6 dxc6", [["bxc6", 95, 49, 4, "Qora piyoda kam, lekin rivojlanishda oldinda."]]);
  N("e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 Bb5+ c6 dxc6 bxc6", [["Be2", 65, 49, 4, "Klassik chekinish."], ["Qf3", 25, 50, 4, "Bogoljubov varianti."], ["Bd3", 8, 49, 4, ""]]);
  N("e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 Bb5+ c6 dxc6 bxc6 Be2", [["h6", 90, 49, 4, "Otni haydaydi, keyin e4 bilan joy."]]);
  N("e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3", [["Nxe4", 50, 47, 5, "Vilka hiylasi: Nxe4 d5! bilan qaytarib oladi."], ["Bc5", 25, 50, 5, ""], ["Be7", 10, 50, 6, ""]]);
  N("e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Nxe4", [["Nxe4", 55, 47, 5, "Endi d5! — vilka."], ["Bxf7+", 25, 48, 5, "Kxf7 Nxe4 d5 — qora juftlik filga ega."], ["O-O", 15, 48, 5, ""]]);
  N("e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Nxe4 Nxe4", [["d5", 95, 45, 5, "Piyoda fil va otni vilkaga oladi — qora materialni qaytaradi."]]);
  N("e4 e5 Nf3 Nc6 Bc4 Nf6 d3", [["Bc5", 50, 50, 6, "Giuoco Pianissimo."], ["Be7", 30, 50, 6, "Mustahkam."], ["h6", 10, 50, 6, "Ng5 ni oldini olish."]]);

  // ---------- Ispan ----------
  N("e4 e5 Nf3 Nc6 Bb5", [
    ["a6", 55, 51, 6, "Morfi himoyasi: filga darhol savol beradi."],
    ["Nf6", 25, 50, 7, "Berlin himoyasi — juda mustahkam ('Berlin devori')."],
    ["Bc5", 6, 52, 5, "Klassik (Kordel) himoyasi."],
    ["d6", 5, 53, 5, "Steynits himoyasi — passiv."],
    ["Nd4", 3, 53, 5, "Berd himoyasi."],
    ["Nge7", 3, 52, 5, "Kozio himoyasi."]
  ]);
  N("e4 e5 Nf3 Nc6 Bb5 a6", [["Ba4", 70, 51, 6, "Bog'lanishni saqlaydi."], ["Bxc6", 28, 50, 6, "Almashinuv varianti: qora juft fil, oq yaxshiroq piyoda tuzilmasi."]]);
  N("e4 e5 Nf3 Nc6 Bb5 a6 Bxc6", [["dxc6", 85, 50, 6, "Markazga tomon olish — fillar ochiladi."], ["bxc6", 15, 52, 5, ""]]);
  N("e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dxc6", [["O-O", 55, 50, 6, "Fisher varianti: d4 bilan endshpil ustunligiga intilish."], ["Nc3", 15, 50, 6, ""], ["d4", 12, 50, 6, ""], ["Nxe5", 10, 47, 5, "Qd4! bilan qora piyodani qaytaradi."]]);
  N("e4 e5 Nf3 Nc6 Bb5 a6 Ba4", [["Nf6", 75, 51, 6, "Asosiy."], ["d6", 10, 52, 6, "Kechiktirilgan Steynits."], ["b5", 8, 51, 5, "Darhol filni haydash."]]);
  N("e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6", [["c3", 35, 51, 6, ""], ["O-O", 30, 51, 6, ""], ["d4", 15, 51, 6, "Ehtiyot: b5 Bb3 Nxd4 Nxd4 exd4 Qxd4?? c5! — 'Nuh kemasi' tuzog'i."]]);
  N("e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6", [["O-O", 80, 51, 7, "Asosiy liniya. e4 qurbonlikda emas: Nxe4 ga Re1/d4 bilan javob."], ["d3", 10, 51, 6, ""], ["Nc3", 5, 50, 6, ""], ["Qe2", 4, 51, 6, "Vorm varianti."]]);
  N("e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O", [["Be7", 60, 51, 7, "Yopiq Ispan — eng chuqur nazariya."], ["Nxe4", 25, 51, 6, "Ochiq Ispan."], ["b5", 10, 51, 6, "Arxangelsk/Moller tizimlari."], ["Bc5", 5, 51, 6, ""]]);
  N("e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7", [["Re1", 80, 51, 7, "e4 ni himoya qiladi, Bxc6 va Nxe5 tahdidi."], ["d3", 8, 50, 7, ""], ["Bxc6", 8, 50, 7, "Kechiktirilgan almashinuv."]]);
  N("e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1", [["b5", 85, 51, 7, "Bxc6 va Nxe5 tahdidini bartaraf etadi."], ["d6", 10, 51, 7, ""]]);
  N("e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5", [["Bb3", 97, 51, 7, "Fil eng yaxshi diagonalda — f7 ga qaraydi."]]);
  N("e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3", [["d6", 55, 51, 8, "Yopiq tizim."], ["O-O", 40, 51, 8, "Marshall hujumini taklif qiladi (c3 d5!)."]]);
  N("e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O", [["c3", 55, 51, 8, "d5!? — Marshall gambiti mumkin."], ["h3", 20, 51, 8, "Anti-Marshall."], ["a4", 20, 51, 8, "Anti-Marshall."]]);
  N("e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3", [["d5", 40, 49, 9, "Marshall hujumi: piyoda evaziga qirolga kuchli hujum."], ["d6", 55, 51, 8, "Xotirjam yopiq tizim."]]);
  N("e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6", [["c3", 85, 51, 8, "d4 ni tayyorlash va fil uchun c2 katagi."]]);
  N("e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3", [["O-O", 90, 51, 8, "Rokirovka."]]);
  N("e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O", [["h3", 75, 51, 9, "Bg4 ni oldini olib, d4 ga tayyorlanadi."], ["d4", 15, 51, 8, ""], ["d3", 10, 51, 9, ""]]);
  N("e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3", [["Na5", 35, 51, 9, "Chigorin varianti."], ["Bb7", 30, 51, 9, "Zaytsev varianti."], ["Nb8", 20, 51, 9, "Breyer varianti — otni d7 ga qayta joylashtirish."]]);
  N("e4 e5 Nf3 Nc6 Bb5 Nf6", [["O-O", 65, 50, 8, "Asosiy: Nxe4 ga d4/Re1."], ["d3", 25, 50, 7, "Anti-Berlin: sekin o'yin."], ["Nc3", 5, 49, 7, ""]]);
  N("e4 e5 Nf3 Nc6 Bb5 Nf6 O-O", [["Nxe4", 65, 49, 9, "Berlin: piyodani olish."], ["Bc5", 20, 50, 7, ""], ["Be7", 10, 51, 7, ""]]);
  N("e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4", [["Re1", 50, 49, 8, "Ot chekinadi, oq piyodani qaytaradi."], ["d4", 45, 49, 10, "Berlin endshpiliga olib boradi."]]);
  N("e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4", [["Nd6", 85, 49, 10, ""]]);
  N("e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Nd6", [["Bxc6", 90, 49, 10, ""]]);
  N("e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Nd6 Bxc6", [["dxc6", 95, 49, 10, ""]]);
  N("e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Nd6 Bxc6 dxc6", [["dxe5", 95, 49, 10, ""]]);
  N("e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Nd6 Bxc6 dxc6 dxe5", [["Nf5", 95, 49, 11, ""]]);
  N("e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Nd6 Bxc6 dxc6 dxe5 Nf5", [["Qxd8+", 95, 48, 12, "Berlin endshpili: qora rokirovka huquqini yo'qotdi, lekin juft fil va mustahkam pozitsiya."]]);
  N("e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Nd6 Bxc6 dxc6 dxe5 Nf5 Qxd8+", [["Kxd8", 100, 48, 12, "Berlin devori. Qora: Ke8, h6, Be6/Bd7 bilan mustahkamlanadi. Oq: Nc3, h3, Rd1, Ng5 bilan e5 da bosim."]]);

  // ---------- Shotland ----------
  N("e4 e5 Nf3 Nc6 d4", [["exd4", 93, 51, 5, "Majburiy deyarli."]]);
  N("e4 e5 Nf3 Nc6 d4 exd4", [["Nxd4", 75, 51, 5, "Shotland partiyasi."], ["Bc4", 12, 50, 5, "Shotland gambiti."], ["c3", 10, 50, 5, "Gyoring gambiti."]]);
  N("e4 e5 Nf3 Nc6 d4 exd4 Nxd4", [
    ["Bc5", 40, 50, 5, "Otga bosim, Qf6 bilan."],
    ["Nf6", 35, 51, 5, "e4 ga hujum (Shmidt varianti)."],
    ["Nxd4", 10, 52, 5, "Qxd4 — oq ferz markazda kuchli."],
    ["Qh4", 5, 52, 4, "Shtaynits varianti — o'tkir."]
  ]);
  N("e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5", [["Be3", 45, 51, 5, ""], ["Nxc6", 35, 51, 5, "Qf6 Qf3 bxc6 — keskin."], ["Nb3", 20, 51, 5, ""]]);
  N("e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6", [["Nxc6", 60, 51, 5, "Mieses varianti: bxc6 e5 Qe7 Qe2 Nd5 c4."], ["Nc3", 35, 51, 5, "Shotland to'rt ot."]]);
  N("e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6 Nxc6", [["bxc6", 95, 51, 5, ""]]);
  N("e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6 Nxc6 bxc6", [["e5", 85, 51, 5, ""], ["Bd3", 12, 51, 5, ""]]);
  N("e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6 Nxc6 bxc6 e5", [["Qe7", 85, 51, 5, "Bog'lash orqali e5 ga bosim."], ["Nd5", 10, 52, 5, ""]]);

  // ---------- To'rt ot ----------
  N("e4 e5 Nf3 Nc6 Nc3", [["Nf6", 75, 50, 7, "To'rt ot partiyasi."], ["Bc5", 10, 50, 5, ""], ["g6", 5, 51, 6, ""], ["Bb4", 5, 51, 6, ""]]);
  N("e4 e5 Nf3 Nc6 Nc3 Nf6", [["Bb5", 40, 50, 8, "Ispan to'rt ot."], ["d4", 30, 50, 7, "Shotland to'rt ot."], ["Bc4", 20, 50, 6, "Italyan to'rt ot — Nxe4! hiylasi."], ["a3", 5, 50, 7, ""]]);
  N("e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5", [["Bb4", 35, 50, 9, "Simmetrik."], ["Nd4", 35, 49, 8, "Rubinshteyn varianti."], ["Bd6", 10, 51, 7, ""]]);

  // ---------- Petrov ----------
  N("e4 e5 Nf3 Nf6", [
    ["Nxe5", 55, 51, 6, "Asosiy: piyodani oladi. Qora d6! bilan avval otni haydashi kerak."],
    ["Nc3", 20, 50, 7, "To'rt otga o'tish."],
    ["d4", 12, 50, 7, "Steynits hujumi."],
    ["Bc4", 8, 50, 5, "Ikki otga o'xshash."]
  ]);
  N("e4 e5 Nf3 Nf6 Nxe5", [
    ["d6", 75, 51, 7, "TO'G'RI: avval otni haydash, keyin e4 ni olish."],
    ["Nc6", 12, 55, 3, "Stafford gambiti — tuzoqli, lekin to'g'ri o'yinda shubhali."],
    ["Nxe4", 10, 60, 4, "Xato! Qe2 dan keyin qora qiynaladi (Nf6?? Nc6+!)."]
  ]);
  N("e4 e5 Nf3 Nf6 Nxe5 Nxe4", [["Qe2", 75, 62, 4, "Ochiq chiziq bo'ylab bosim!"]]);
  N("e4 e5 Nf3 Nf6 Nxe5 Nxe4 Qe2", [["Qe7", 60, 55, 5, "Yagona yaxshi yurish."], ["Nf6", 25, 90, 1, "QO'POL XATO: Nc6+! ochiq shax — ferz yo'qoladi."], ["d5", 10, 70, 2, ""]]);
  N("e4 e5 Nf3 Nf6 Nxe5 d6", [["Nf3", 85, 51, 7, "Klassik."], ["Nxf7", 8, 50, 4, "Koxreyn gambiti."], ["Nc4", 5, 51, 6, ""]]);
  N("e4 e5 Nf3 Nf6 Nxe5 d6 Nf3", [["Nxe4", 95, 51, 7, "Material tenglashdi."]]);
  N("e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4", [["d4", 55, 51, 8, "Klassik asosiy liniya."], ["Nc3", 25, 51, 7, "Nxc3 dxc3 — tez uzun rokirovka."], ["Qe2", 10, 50, 9, "Durangli ferz almashinuvi."], ["d3", 5, 50, 7, ""]]);
  N("e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4", [["d5", 85, 51, 8, ""]]);
  N("e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5", [["Bd3", 90, 51, 8, ""]]);
  N("e4 e5 Nf3 Nf6 Nxe5 Nc6", [["Nxc6", 90, 55, 3, "Oddiy: otni almashish."]]);
  N("e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6", [["dxc6", 95, 55, 3, "Qora ochiq chiziqlar uchun piyoda berdi."]]);
  N("e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6 dxc6", [["d3", 40, 55, 3, "Mustahkam — lekin Bc5 dan keyin Bg5?? xato (Nxe4!)."], ["Nc3", 30, 57, 3, "Eng xavfsiz."], ["e5", 20, 54, 3, "Ne4 bilan qora faol."]]);
  N("e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6 dxc6 d3", [["Bc5", 85, 53, 3, "f2 ga bosim. Oq Be2! bilan himoyalanishi kerak."]]);
  N("e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6 dxc6 d3 Bc5", [["Be2", 45, 58, 3, "To'g'ri."], ["Bg5", 25, 25, 2, "TUZOQ: Nxe4! Bxd8 Bxf2+ Ke2 Bg4#."], ["Nc3", 15, 53, 3, ""]]);

  // ---------- Filidor ----------
  N("e4 e5 Nf3 d6", [["d4", 65, 54, 5, "Markazga zarba — eng kuchli."], ["Bc4", 25, 54, 4, "f7 ga qarash. Ehtiyot: Legal tuzog'i!"], ["Nc3", 7, 53, 5, ""]]);
  N("e4 e5 Nf3 d6 d4", [["exd4", 45, 54, 5, "Markazni beradi, lekin chiziqlar ochiladi."], ["Nd7", 25, 54, 6, "Hanham varianti — e5 ni ushlash."], ["Nf6", 15, 54, 5, "Nimtsovich varianti."], ["Bg4", 10, 58, 4, "Ehtiyot: dxe5 bilan oq ustun."]]);
  N("e4 e5 Nf3 d6 d4 exd4", [["Nxd4", 85, 54, 5, "Markazdagi ot."], ["Qxd4", 12, 54, 5, ""]]);
  N("e4 e5 Nf3 d6 d4 exd4 Nxd4", [["Nf6", 65, 54, 5, "Rivojlanish."], ["g6", 15, 54, 5, ""], ["Be7", 10, 54, 5, ""]]);
  N("e4 e5 Nf3 d6 d4 exd4 Nxd4 Nf6", [["Nc3", 90, 54, 5, ""]]);
  N("e4 e5 Nf3 d6 d4 exd4 Nxd4 Nf6 Nc3", [["Be7", 75, 54, 5, "Mustahkam: O-O, Re8, Bf8."], ["g6", 20, 54, 5, ""]]);
  N("e4 e5 Nf3 d6 Bc4", [["Be7", 35, 53, 5, "Xavfsiz."], ["Nf6", 25, 55, 4, ""], ["Bg4", 20, 58, 3, "Legal tuzog'iga ehtiyot bo'ling!"], ["h6", 10, 56, 4, ""]]);
  N("e4 e5 Nf3 d6 Bc4 Bg4", [["Nc3", 45, 58, 3, "Tuzoq tayyor."], ["h3", 30, 57, 4, "Filga savol."], ["O-O", 15, 56, 4, ""]]);
  N("e4 e5 Nf3 d6 Bc4 Bg4 Nc3", [["Nc6", 35, 56, 4, ""], ["g6", 20, 75, 2, "Xato: Nxe5! Bxd1?? Bxf7+ Ke7 Nd5# (Legal mati)."], ["Nf6", 20, 56, 4, ""], ["c6", 15, 55, 4, ""]]);

  // ---------- Qirol gambiti ----------
  N("e4 e5 f4", [["exf4", 60, 49, 4, "Gambitni qabul qilish."], ["d5", 15, 47, 4, "Falkbeer kontr-gambiti."], ["Bc5", 15, 50, 4, "Klassik rad etish: g1-qirol diagonali bog'langan."], ["d6", 5, 50, 4, ""]]);
  N("e4 e5 f4 exf4", [["Nf3", 70, 49, 4, "Qirol otining gambiti: Qh4+ ni oldini oladi."], ["Bc4", 20, 49, 4, "Filning gambiti."], ["Nc3", 5, 48, 4, ""]]);
  N("e4 e5 f4 exf4 Nf3", [["g5", 40, 48, 4, "Piyodani ushlab qolish (Kizerits, Muzio)."], ["d5", 25, 48, 5, "Zamonaviy himoya — markazni ochadi."], ["Nf6", 15, 49, 5, "Shallop himoyasi."], ["d6", 10, 49, 4, "Fisher himoyasi."]]);
  N("e4 e5 f4 exf4 Nf3 g5", [["h4", 50, 48, 4, "Kizerits gambiti: g4 Ne5."], ["Bc4", 35, 49, 4, "Muzio/Salvio — o'ta o'tkir."]]);

  // ---------- Vena ----------
  N("e4 e5 Nc3", [["Nf6", 60, 50, 5, "Asosiy."], ["Nc6", 30, 51, 5, ""], ["Bc5", 8, 51, 5, ""]]);
  N("e4 e5 Nc3 Nf6", [["Bc4", 45, 50, 5, ""], ["f4", 30, 50, 5, "Vena gambiti: d5! bilan javob."], ["g3", 10, 50, 6, ""]]);
  N("e4 e5 Nc3 Nf6 Bc4", [["Nxe4", 40, 52, 4, "Qh5 bilan o'tkir o'yin."], ["Nc6", 30, 50, 5, ""], ["Bc5", 25, 50, 5, ""]]);
  N("e4 e5 Nc3 Nf6 f4", [["d5", 60, 50, 5, "Eng yaxshi: markazni ochadi."], ["exf4", 25, 52, 4, "e5! bilan otni quvish."]]);
  N("e4 e5 Nc3 Nc6", [["Bc4", 35, 51, 5, ""], ["f4", 25, 51, 5, ""], ["Nf3", 25, 50, 6, "To'rt otga o'tish."], ["g3", 10, 51, 5, ""]]);

  N("e4 e5 Bc4", [["Nf6", 60, 50, 5, "Eng yaxshi: e4 ga kontr-hujum."], ["Nc6", 20, 51, 5, ""], ["Bc5", 15, 51, 5, ""]]);
  N("e4 e5 Bc4 Nf6", [["d3", 50, 50, 6, ""], ["Nf3", 25, 50, 5, "Ikki otga o'tish."], ["Nc3", 15, 50, 5, ""], ["d4", 8, 50, 5, ""]]);
  N("e4 e5 d4", [["exd4", 90, 49, 5, ""]]);
  N("e4 e5 d4 exd4", [["Qxd4", 45, 49, 5, "Markaziy o'yin: Nc6 bilan tempni yutib qora rivojlanadi."], ["c3", 35, 49, 4, "Daniya gambiti — ikki piyoda qurbonlik!"], ["Nf3", 15, 50, 5, ""]]);
  N("e4 e5 d4 exd4 Qxd4", [["Nc6", 90, 48, 5, "Ferzni quvish — tempni yutish."]]);
  N("e4 e5 d4 exd4 Qxd4 Nc6", [["Qe3", 80, 48, 5, ""], ["Qa4", 10, 48, 5, ""]]);
  N("e4 e5 d4 exd4 c3", [["dxc3", 45, 51, 4, "Qabul qilish: Bc4 cxb2 Bxb2 — oq juda faol."], ["d5", 40, 47, 5, "Eng ishonchli rad etish."], ["Nf6", 10, 49, 5, ""]]);

  // ---------- Sitsiliya ----------
  N("e4 c5", [
    ["Nf3", 65, 50, 5, "Ochiq Sitsiliya: d4 bilan markazni ochishga tayyorgarlik."],
    ["Nc3", 12, 50, 5, "Yopiq Sitsiliya / Grand-Pri hujumi."],
    ["c3", 7, 50, 6, "Alapin: d4 ni piyoda bilan qo'llab-quvvatlash."],
    ["d4", 5, 51, 4, "Smit-Morra gambiti (c3 bilan)."],
    ["Bc4", 3, 49, 5, "Bowdler hujumi — zaif."],
    ["f4", 3, 49, 5, "Grand-Pri hujumi."],
    ["b4", 1, 48, 4, "Qanot gambiti."]
  ]);
  N("e4 c5 Nf3", [
    ["d6", 35, 50, 5, "Najdorf, Dragon, Klassik variantlarga yo'l."],
    ["Nc6", 30, 50, 5, "Sveshnikov, Klassik, Tezlashtirilgan Dragon."],
    ["e6", 25, 50, 5, "Taymanov, Kan, Pauelsen."],
    ["g6", 4, 51, 5, "Giper-tezlashtirilgan Dragon."],
    ["a6", 2, 52, 5, "O'Kelly varianti."]
  ]);
  N("e4 c5 Nf3 d6", [["d4", 70, 50, 5, "Ochiq Sitsiliya."], ["Bb5+", 15, 51, 6, "Rossolimo/Moskva varianti — nazariyadan qochish."], ["c3", 5, 51, 6, ""], ["Bc4", 5, 49, 5, ""]]);
  N("e4 c5 Nf3 d6 Bb5+", [["Bd7", 55, 51, 7, "Fillar almashinadi."], ["Nd7", 30, 51, 6, ""], ["Nc6", 15, 51, 6, ""]]);
  N("e4 c5 Nf3 d6 d4", [["cxd4", 97, 50, 5, "Qora markaziy piyoda evaziga qanot piyodasini beradi — klassik Sitsiliya almashinuvi."]]);
  N("e4 c5 Nf3 d6 d4 cxd4", [["Nxd4", 90, 50, 5, ""], ["Qxd4", 8, 50, 5, "Nc6 bilan tempni yutish."]]);
  N("e4 c5 Nf3 d6 d4 cxd4 Nxd4", [["Nf6", 90, 50, 5, "e4 ga hujum — Nc3 ni majburlaydi (c4 Maroci tuzilmasini oldini oladi)."], ["g6", 5, 51, 5, ""], ["e5", 3, 52, 4, ""]]);
  N("e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6", [["Nc3", 90, 50, 5, "e4 ni himoya qiladi."], ["f3", 5, 51, 5, "Prins varianti."], ["Bb5+", 3, 50, 5, ""]]);
  N("e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3", [
    ["a6", 45, 50, 5, "NAJDORF: b5 katagini nazorat, e5 yoki e6 ga moslashuvchanlik. Eng mashhur!"],
    ["g6", 20, 51, 4, "DRAGON: fil g7 da — uzun diagonalda kuchli."],
    ["Nc6", 20, 50, 5, "Klassik Sitsiliya."],
    ["e6", 12, 50, 5, "Shevening tuzilmasi."],
    ["e5", 3, 52, 4, "Boleslavskiy-ga o'xshash."]
  ]);
  N("e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6", [
    ["Be3", 30, 51, 5, "Ingliz hujumi (f3, Qd2, O-O-O, g4)."],
    ["Bg5", 20, 50, 5, "Eng keskin: e6 f4 — 'Zaharlangan piyoda'."],
    ["Be2", 20, 50, 6, "Klassik pozitsion."],
    ["Bc4", 8, 50, 5, "Fisher-Sozin hujumi."],
    ["f3", 7, 51, 5, ""],
    ["h3", 5, 51, 5, "Adams hujumi."],
    ["f4", 5, 50, 5, ""]
  ]);
  N("e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be3", [["e5", 55, 51, 5, "d5 katagini zaiflashtiradi, ammo markazda joy."], ["e6", 25, 51, 5, "Shevening tuzilmasi."], ["Ng4", 15, 50, 5, "Fil juftligi uchun."]]);
  N("e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be3 e5", [["Nb3", 70, 51, 5, ""], ["Nf3", 25, 50, 5, ""], ["Nde2", 5, 51, 5, ""]]);
  N("e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be3 e5 Nb3", [["Be6", 80, 51, 5, "d5 katagini nazorat qiladi."], ["Be7", 15, 51, 5, ""]]);
  N("e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be3 e5 Nb3 Be6", [["f3", 55, 51, 5, "Ingliz hujumi: Qd2, O-O-O, g4-g5."], ["Qd2", 20, 51, 5, ""], ["Be2", 20, 50, 6, ""]]);
  N("e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bg5", [["e6", 85, 50, 5, ""], ["Nbd7", 10, 50, 5, ""]]);
  N("e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bg5 e6", [["f4", 85, 50, 5, "Asosiy: e5 tahdidi."]]);
  N("e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bg5 e6 f4", [["Be7", 35, 50, 6, ""], ["Qb6", 25, 49, 6, "Zaharlangan piyoda: Qd2 Qxb2."], ["h6", 20, 50, 5, ""], ["Nbd7", 15, 50, 5, ""]]);
  N("e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be2", [["e5", 70, 49, 6, "Klassik Najdorf javobi."], ["e6", 25, 50, 6, ""]]);
  N("e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6", [["Be3", 60, 52, 4, "Yugoslav hujumi uchun."], ["Be2", 20, 50, 5, "Klassik Dragon."], ["f3", 10, 52, 4, ""], ["Bc4", 5, 52, 4, ""]]);
  N("e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3", [["Bg7", 95, 52, 4, ""]]);
  N("e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7", [["f3", 70, 52, 4, "Yugoslav hujumi: Ng4 ni oldini oladi, g4 ni tayyorlaydi."], ["Be2", 20, 50, 5, ""], ["Qd2", 8, 52, 4, "Ng4! bilan javob."]]);
  N("e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3", [["O-O", 55, 52, 4, "Rokirovka — ammo qora qirolga hujum keladi!"], ["Nc6", 40, 52, 4, ""]]);
  N("e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3 O-O", [["Qd2", 95, 52, 4, "Bh6 va h4-h5 hujumi."]]);
  N("e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3 O-O Qd2", [["Nc6", 95, 52, 4, ""]]);
  N("e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3 O-O Qd2 Nc6", [["O-O-O", 50, 53, 4, "Qarama-qarshi rokirovkalar: kim tezroq hujum qilsa — o'sha yutadi!"], ["Bc4", 45, 52, 4, "Klassik Yugoslav: Bd7, Rc8, Ne5 bilan qora."]]);
  N("e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6", [["Bg5", 40, 50, 5, "Rixter-Rauzer hujumi."], ["Be2", 25, 50, 6, ""], ["Bc4", 20, 50, 5, "Sozin hujumi."], ["Be3", 10, 51, 5, ""]]);
  N("e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6", [["Be2", 35, 50, 6, ""], ["g4", 25, 52, 5, "Keres hujumi — o'ta agressiv."], ["Be3", 25, 51, 5, ""]]);

  N("e4 c5 Nf3 Nc6", [["d4", 65, 50, 5, "Ochiq Sitsiliya."], ["Bb5", 25, 51, 6, "Rossolimo — juda mashhur."], ["Nc3", 5, 50, 5, ""], ["c3", 3, 51, 6, ""]]);
  N("e4 c5 Nf3 Nc6 Bb5", [["g6", 40, 51, 6, ""], ["e6", 35, 51, 6, ""], ["d6", 15, 51, 6, ""], ["Nf6", 8, 51, 6, ""]]);
  N("e4 c5 Nf3 Nc6 d4", [["cxd4", 97, 50, 5, ""]]);
  N("e4 c5 Nf3 Nc6 d4 cxd4", [["Nxd4", 95, 50, 5, ""]]);
  N("e4 c5 Nf3 Nc6 d4 cxd4 Nxd4", [["Nf6", 55, 50, 5, ""], ["g6", 15, 51, 5, "Tezlashtirilgan Dragon: c4! bilan Maroci tuzilmasi."], ["e6", 15, 50, 5, "Taymanov."], ["e5", 5, 54, 4, "Nb5! bilan d6 zaif."], ["Qb6", 5, 51, 5, ""]]);
  N("e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6", [["Nc3", 90, 50, 5, ""], ["Nxc6", 7, 49, 5, ""]]);
  N("e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3", [["e5", 45, 50, 5, "SVESHNIKOV: markazda joy, d5 zaif lekin qora juda faol."], ["d6", 35, 50, 5, "Klassik."], ["e6", 12, 50, 5, "To'rt ot Sitsiliya."], ["g6", 5, 51, 5, ""]]);
  N("e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5", [["Ndb5", 85, 50, 5, "d6 ga tahdid (Nd6+)."], ["Nf3", 8, 49, 5, ""], ["Nxc6", 5, 49, 5, ""]]);
  N("e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Ndb5", [["d6", 90, 50, 5, "Nd6+ ni oldini oladi."]]);
  N("e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Ndb5 d6", [["Bg5", 70, 50, 5, "f6 otni almashtirib d5 ni nazorat qilish."], ["Nd5", 25, 50, 5, ""]]);
  N("e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Ndb5 d6 Bg5", [["a6", 95, 50, 5, ""]]);
  N("e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Ndb5 d6 Bg5 a6", [["Na3", 98, 50, 5, ""]]);
  N("e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Ndb5 d6 Bg5 a6 Na3", [["b5", 90, 50, 5, "a3 otni o'yindan chetlashtiradi."], ["Be6", 8, 51, 5, ""]]);
  N("e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Ndb5 d6 Bg5 a6 Na3 b5", [["Bxf6", 55, 50, 6, "gxf6 — qora juft fil va f5 zarbasi."], ["Nd5", 40, 50, 5, ""]]);

  N("e4 c5 Nf3 e6", [["d4", 75, 50, 5, ""], ["Nc3", 15, 50, 5, ""], ["c3", 5, 51, 6, ""], ["d3", 3, 50, 5, ""]]);
  N("e4 c5 Nf3 e6 d4", [["cxd4", 97, 50, 5, ""]]);
  N("e4 c5 Nf3 e6 d4 cxd4", [["Nxd4", 95, 50, 5, ""]]);
  N("e4 c5 Nf3 e6 d4 cxd4 Nxd4", [["Nc6", 40, 50, 5, "Taymanov."], ["a6", 40, 50, 5, "Kan / Paulsen."], ["Nf6", 15, 50, 5, ""], ["Bc5", 3, 51, 5, ""]]);
  N("e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6", [["Bd3", 35, 50, 5, ""], ["Nc3", 35, 50, 5, ""], ["c4", 15, 51, 5, "Maroci tuzilmasi."]]);
  N("e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6", [["Nc3", 60, 50, 5, ""], ["Nb5", 20, 50, 5, ""], ["Nxc6", 10, 49, 5, ""]]);

  N("e4 c5 Nc3", [["Nc6", 60, 50, 5, ""], ["d6", 15, 50, 5, ""], ["e6", 15, 50, 5, ""], ["a6", 5, 50, 5, ""]]);
  N("e4 c5 Nc3 Nc6", [["Nf3", 35, 50, 5, ""], ["g3", 30, 50, 6, "Yopiq Sitsiliya: Bg2, d3, f4."], ["f4", 25, 50, 5, "Grand-Pri hujumi."], ["Bb5", 8, 50, 5, ""]]);
  N("e4 c5 Nc3 Nc6 g3", [["g6", 75, 50, 6, "Simmetrik fianketto."], ["e6", 15, 50, 6, ""]]);
  N("e4 c5 Nc3 Nc6 f4", [["g6", 40, 50, 5, ""], ["e6", 30, 50, 5, ""], ["d6", 15, 50, 5, ""]]);
  N("e4 c5 c3", [["d5", 40, 50, 6, "exd5 Qxd5 d4 — ferz markazda."], ["Nf6", 40, 50, 6, "e5 Nd5 — Alyoxin uslubida."], ["e6", 8, 50, 6, ""], ["d6", 5, 51, 6, ""], ["Nc6", 5, 51, 6, ""]]);
  N("e4 c5 c3 d5", [["exd5", 95, 50, 6, ""]]);
  N("e4 c5 c3 d5 exd5", [["Qxd5", 95, 50, 6, ""]]);
  N("e4 c5 c3 d5 exd5 Qxd5", [["d4", 90, 50, 6, ""]]);
  N("e4 c5 c3 d5 exd5 Qxd5 d4", [["Nf6", 50, 50, 6, ""], ["Nc6", 30, 50, 6, ""], ["e6", 12, 50, 6, ""]]);
  N("e4 c5 c3 Nf6", [["e5", 95, 50, 6, ""]]);
  N("e4 c5 c3 Nf6 e5", [["Nd5", 98, 50, 6, ""]]);
  N("e4 c5 c3 Nf6 e5 Nd5", [["d4", 60, 50, 6, ""], ["Nf3", 30, 50, 6, ""]]);
  N("e4 c5 c3 Nf6 e5 Nd5 d4", [["cxd4", 90, 50, 6, ""]]);
  N("e4 c5 c3 Nf6 e5 Nd5 d4 cxd4", [["Nf3", 55, 50, 6, ""], ["cxd4", 40, 50, 6, ""]]);
  N("e4 c5 d4", [["cxd4", 92, 50, 5, ""]]);
  N("e4 c5 d4 cxd4", [["c3", 70, 51, 4, "Smit-Morra gambiti."], ["Nf3", 20, 50, 5, ""], ["Qxd4", 8, 50, 5, ""]]);
  N("e4 c5 d4 cxd4 c3", [["dxc3", 55, 51, 4, "Qabul — Nxc3 dan keyin oq rivojlanishda katta ustun."], ["Nf6", 20, 50, 5, "Alapinga o'tish (e5 Nd5)."], ["d3", 12, 49, 5, ""], ["d5", 10, 50, 5, ""]]);
  N("e4 c5 d4 cxd4 c3 dxc3", [["Nxc3", 90, 51, 4, ""]]);
  N("e4 c5 d4 cxd4 c3 dxc3 Nxc3", [["Nc6", 60, 51, 4, ""], ["d6", 20, 51, 4, ""], ["e6", 15, 51, 4, ""]]);
  N("e4 c5 d4 cxd4 c3 dxc3 Nxc3 Nc6", [["Nf3", 95, 51, 4, ""]]);
  N("e4 c5 d4 cxd4 c3 dxc3 Nxc3 Nc6 Nf3", [["d6", 45, 51, 4, ""], ["e6", 45, 51, 4, ""]]);
  N("e4 c5 d4 cxd4 c3 dxc3 Nxc3 Nc6 Nf3 e6", [["Bc4", 85, 51, 4, ""]]);
  N("e4 c5 d4 cxd4 c3 dxc3 Nxc3 Nc6 Nf3 e6 Bc4", [["Qc7", 35, 52, 4, "Sibir varianti."], ["a6", 30, 51, 4, ""], ["Nf6", 25, 52, 4, ""]]);

  // ---------- Fransuz ----------
  N("e4 e6", [["d4", 85, 50, 5, "Klassik markaz."], ["Nf3", 5, 50, 5, ""], ["d3", 5, 50, 5, "Qirol-hind hujumi."], ["Qe2", 2, 50, 5, "Chigorin."]]);
  N("e4 e6 d4", [["d5", 95, 50, 5, "Fransuz himoyasining asosi."]]);
  N("e4 e6 d4 d5", [
    ["Nc3", 35, 50, 6, "Asosiy: e4 ni himoya qiladi."],
    ["e5", 30, 51, 5, "Oldinga surish varianti: qora c5 bilan zanjirga zarba beradi."],
    ["exd5", 20, 48, 7, "Almashinuv varianti — tinch, simmetrik."],
    ["Nd2", 12, 50, 6, "Tarrash varianti: Bb4 bog'lashidan qochish."]
  ]);
  N("e4 e6 d4 d5 e5", [["c5", 95, 51, 5, "Zanjir asosiga (d4) zarba — Fransuzning asosiy g'oyasi!"]]);
  N("e4 e6 d4 d5 e5 c5", [["c3", 85, 51, 5, "d4 ni mustahkamlaydi."], ["Nf3", 10, 51, 5, ""]]);
  N("e4 e6 d4 d5 e5 c5 c3", [["Nc6", 60, 51, 5, "d4 ga bosim."], ["Qb6", 30, 51, 5, "d4 va b2 ga bosim."]]);
  N("e4 e6 d4 d5 e5 c5 c3 Nc6", [["Nf3", 95, 51, 5, ""]]);
  N("e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3", [["Qb6", 70, 51, 5, "d4 ga uchinchi bosim."], ["Bd7", 25, 51, 5, ""]]);
  N("e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6", [["a3", 35, 51, 5, "b4 bilan joy."], ["Bd3", 35, 51, 5, "Milner-Barri gambiti mumkin."], ["Be2", 25, 51, 5, ""]]);
  N("e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6 Bd3", [["cxd4", 60, 51, 5, ""], ["Bd7", 35, 51, 5, ""]]);
  N("e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6 Bd3 cxd4", [["cxd4", 95, 51, 5, ""]]);
  N("e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6 Bd3 cxd4 cxd4", [["Bd7", 60, 51, 5, "To'g'ri."], ["Nxd4", 25, 70, 2, "Xavfli: Nxd4 Qxd4?? Bb5+ — ferz yo'qoladi!"]]);
  N("e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6 Bd3 cxd4 cxd4 Nxd4", [["Nxd4", 90, 70, 2, ""]]);
  N("e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6 Bd3 cxd4 cxd4 Nxd4 Nxd4", [["Qxd4", 85, 80, 1, "XATO: Bb5+! ochiq hujum."]]);
  N("e4 e6 d4 d5 Nc3", [["Bb4", 45, 50, 5, "Vinaver varianti — o'tkir."], ["Nf6", 40, 50, 6, "Klassik."], ["dxe4", 15, 50, 6, "Rubinshteyn — mustahkam."]]);
  N("e4 e6 d4 d5 Nc3 Bb4", [["e5", 85, 50, 5, "Asosiy."], ["exd5", 8, 49, 6, ""], ["a3", 5, 50, 5, ""]]);
  N("e4 e6 d4 d5 Nc3 Bb4 e5", [["c5", 85, 50, 5, ""], ["Ne7", 8, 50, 5, ""]]);
  N("e4 e6 d4 d5 Nc3 Bb4 e5 c5", [["a3", 85, 50, 5, "Filga savol."]]);
  N("e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3", [["Bxc3+", 85, 50, 5, "Qora 'yomon' filini almashtiradi; oq juft filga ega, lekin dublangan piyodalar."], ["Ba5", 12, 51, 5, ""]]);
  N("e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+", [["bxc3", 100, 50, 5, ""]]);
  N("e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+ bxc3", [["Ne7", 75, 50, 5, "Asosiy: Qg4 ga tayyor bo'ling."], ["Qc7", 15, 50, 5, ""], ["Qa5", 8, 50, 5, ""]]);
  N("e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+ bxc3 Ne7", [["Qg4", 55, 50, 5, "g7 ga hujum — eng o'tkir."], ["Nf3", 35, 50, 5, "Pozitsion."], ["h4", 8, 50, 5, ""]]);
  N("e4 e6 d4 d5 Nc3 Nf6", [["e5", 45, 50, 6, "Shtaynits varianti."], ["Bg5", 45, 50, 6, "Klassik: Be7, Bb4 (MakKatchen) yoki dxe4 (Burn)."], ["exd5", 5, 49, 7, ""]]);
  N("e4 e6 d4 d5 Nc3 Nf6 e5", [["Nfd7", 99, 50, 6, ""]]);
  N("e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7", [["f4", 75, 50, 6, "Zanjirni mustahkamlash."], ["Nce2", 12, 50, 6, ""], ["Qg4", 8, 50, 6, ""]]);
  N("e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7 f4", [["c5", 95, 50, 6, ""]]);
  N("e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7 f4 c5", [["Nf3", 95, 50, 6, ""]]);
  N("e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7 f4 c5 Nf3", [["Nc6", 95, 50, 6, ""]]);
  N("e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7 f4 c5 Nf3 Nc6", [["Be3", 95, 50, 6, "d4 ni himoya qiladi; qora Qb6, a6, cxd4, Bc5 bilan javob."]]);
  N("e4 e6 d4 d5 Nc3 Nf6 Bg5", [["Be7", 50, 50, 6, ""], ["dxe4", 25, 51, 6, ""], ["Bb4", 20, 50, 6, "MakKatchen varianti."]]);
  N("e4 e6 d4 d5 exd5", [["exd5", 98, 48, 7, ""]]);
  N("e4 e6 d4 d5 exd5 exd5", [["Nf3", 40, 48, 7, ""], ["Bd3", 40, 48, 7, ""], ["c4", 15, 48, 6, "Izolyatsiyalangan piyoda uchun."]]);
  N("e4 e6 d4 d5 Nd2", [["Nf6", 35, 50, 6, ""], ["c5", 35, 50, 6, "Ochiq Tarrash: izolyatsiyalangan piyoda."], ["Be7", 12, 50, 6, ""], ["Nc6", 10, 50, 6, ""]]);

  // ---------- Karo-Kann ----------
  N("e4 c6", [["d4", 80, 49, 6, ""], ["Nc3", 10, 49, 6, ""], ["c4", 4, 50, 6, ""], ["d3", 3, 49, 6, ""]]);
  N("e4 c6 d4", [["d5", 95, 49, 6, ""]]);
  N("e4 c6 d4 d5", [
    ["e5", 40, 50, 5, "Oldinga surish varianti."],
    ["Nc3", 30, 49, 6, "Klassik."],
    ["exd5", 20, 48, 7, "Almashinuv (yoki c4 bilan Panov)."],
    ["Nd2", 8, 49, 6, ""],
    ["f3", 2, 50, 5, "Fantaziya varianti."]
  ]);
  N("e4 c6 d4 d5 e5", [["Bf5", 85, 50, 5, "Fil piyoda zanjiridan tashqariga chiqadi — Karo-Kannning asosiy ustunligi."], ["c5", 12, 50, 5, ""]]);
  N("e4 c6 d4 d5 e5 Bf5", [["Nf3", 40, 50, 5, "Qisqa surish (Short)."], ["Nc3", 15, 50, 5, ""], ["h4", 12, 51, 5, "Filni quvish."], ["Be2", 12, 50, 5, ""], ["Nd2", 8, 50, 5, ""], ["c4", 5, 50, 5, ""]]);
  N("e4 c6 d4 d5 e5 Bf5 Nf3", [["e6", 95, 50, 5, ""]]);
  N("e4 c6 d4 d5 e5 Bf5 Nf3 e6", [["Be2", 80, 50, 5, ""], ["Bd3", 10, 50, 5, ""]]);
  N("e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2", [["c5", 40, 50, 5, "Fransuz uslubida d4 ga zarba."], ["Nd7", 30, 50, 5, ""], ["Ne7", 25, 50, 5, ""]]);
  N("e4 c6 d4 d5 Nc3", [["dxe4", 95, 49, 6, ""]]);
  N("e4 c6 d4 d5 Nc3 dxe4", [["Nxe4", 100, 49, 6, ""]]);
  N("e4 c6 d4 d5 Nc3 dxe4 Nxe4", [["Bf5", 60, 49, 6, "Klassik."], ["Nd7", 25, 49, 6, "Karpov / Smislov varianti."], ["Nf6", 15, 49, 6, ""]]);
  N("e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5", [["Ng3", 95, 49, 6, "Filni quvish."]]);
  N("e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3", [["Bg6", 100, 49, 6, ""]]);
  N("e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6", [["h4", 50, 49, 7, "Ferz tomonda joy olish."], ["Nf3", 35, 49, 6, ""], ["Bc4", 8, 49, 6, ""]]);
  N("e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4", [["h6", 100, 49, 7, ""]]);
  N("e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6", [["Nf3", 95, 49, 7, ""]]);
  N("e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3", [["Nd7", 95, 49, 7, "Ne5 ni nazorat qiladi."]]);
  N("e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7", [["h5", 95, 49, 7, ""]]);
  N("e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5", [["Bh7", 100, 49, 7, ""]]);
  N("e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5 Bh7", [["Bd3", 95, 49, 7, "Fillarni almashtirish."]]);
  N("e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5 Bh7 Bd3", [["Bxd3", 100, 49, 7, ""]]);
  N("e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5 Bh7 Bd3 Bxd3", [["Qxd3", 100, 49, 7, "Oq: Bd2/Bf4, O-O-O. Qora: e6, Ngf6, Be7/Qc7, O-O-O."]]);
  N("e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nd7", [["Nf3", 40, 49, 6, ""], ["Bc4", 25, 49, 6, ""], ["Ng5", 20, 50, 6, "Ngf6 Bd3 e6 N1f3 — o'tkir."], ["Qe2", 8, 52, 5, "TUZOQ: Ngf6?? Nd6#!"]]);
  N("e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nd7 Qe2", [["Ngf6", 40, 90, 1, "XATO: Nd6# — bo'g'ilgan mat!"], ["Ndf6", 45, 50, 6, "To'g'ri."], ["e6", 10, 50, 6, ""]]);
  N("e4 c6 d4 d5 exd5", [["cxd5", 98, 48, 7, ""]]);
  N("e4 c6 d4 d5 exd5 cxd5", [["Bd3", 40, 48, 7, "Almashinuv varianti."], ["c4", 35, 49, 6, "Panov-Botvinnik hujumi: izolyatsiyalangan piyoda."], ["Nf3", 12, 48, 7, ""], ["Bf4", 10, 48, 7, ""]]);
  N("e4 c6 d4 d5 exd5 cxd5 c4", [["Nf6", 90, 49, 6, ""]]);
  N("e4 c6 d4 d5 exd5 cxd5 c4 Nf6", [["Nc3", 95, 49, 6, ""]]);
  N("e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3", [["e6", 45, 49, 6, ""], ["Nc6", 35, 49, 6, ""], ["g6", 15, 49, 6, ""]]);
  N("e4 c6 Nc3", [["d5", 85, 49, 6, ""]]);
  N("e4 c6 Nc3 d5", [["Nf3", 70, 49, 6, "Ikki ot varianti."], ["d4", 25, 49, 6, ""]]);

  // ---------- Skandinaviya ----------
  N("e4 d5", [["exd5", 90, 52, 5, ""], ["e5", 6, 51, 5, ""], ["Nc3", 3, 51, 5, ""]]);
  N("e4 d5 exd5", [["Qxd5", 75, 52, 5, "Klassik: ferz bilan olish."], ["Nf6", 25, 51, 5, "Zamonaviy: piyodani keyin olish."]]);
  N("e4 d5 exd5 Qxd5", [["Nc3", 85, 52, 5, "Ferzga hujum — tempni yutish."], ["Nf3", 8, 52, 5, ""], ["d4", 5, 52, 5, ""]]);
  N("e4 d5 exd5 Qxd5 Nc3", [["Qa5", 55, 52, 5, "Eng mashhur: a5 dan bog'lash va e1 ga bosim."], ["Qd6", 25, 52, 5, "Zamonaviy (Gubinskiy-Melts)."], ["Qd8", 12, 54, 5, "Eng xavfsiz, ammo passiv."], ["Qe5+", 5, 56, 4, "Kam uchraydi."]]);
  N("e4 d5 exd5 Qxd5 Nc3 Qa5", [["d4", 60, 52, 5, ""], ["Nf3", 25, 52, 5, ""], ["Bc4", 10, 52, 5, ""]]);
  N("e4 d5 exd5 Qxd5 Nc3 Qa5 d4", [["Nf6", 70, 52, 5, ""], ["c6", 25, 52, 5, ""]]);
  N("e4 d5 exd5 Qxd5 Nc3 Qa5 d4 Nf6", [["Nf3", 80, 52, 5, ""], ["Bd2", 8, 52, 5, ""], ["Bc4", 8, 52, 5, ""]]);
  N("e4 d5 exd5 Qxd5 Nc3 Qa5 d4 Nf6 Nf3", [["c6", 40, 52, 5, "Xavfsiz kataklar."], ["Bf5", 30, 52, 5, ""], ["Bg4", 20, 52, 5, ""]]);
  N("e4 d5 exd5 Qxd5 Nc3 Qd6", [["d4", 65, 52, 5, ""], ["Nf3", 25, 52, 5, ""]]);
  N("e4 d5 exd5 Qxd5 Nc3 Qd6 d4", [["Nf6", 60, 52, 5, ""], ["a6", 20, 52, 5, ""], ["c6", 15, 52, 5, ""]]);
  N("e4 d5 exd5 Nf6", [["d4", 45, 51, 5, ""], ["Nf3", 25, 51, 5, ""], ["c4", 15, 52, 5, "Piyodani ushlash — e6!? Iskandinav gambiti."], ["Bb5+", 12, 51, 5, ""]]);
  N("e4 d5 exd5 Nf6 d4", [["Nxd5", 70, 51, 5, ""], ["Bg4", 20, 51, 5, "Portugal gambiti."]]);

  // ---------- Pirts / Zamonaviy / Alyoxin / boshqalar ----------
  N("e4 d6", [["d4", 85, 52, 5, ""], ["Nf3", 5, 51, 5, ""], ["Nc3", 5, 51, 5, ""]]);
  N("e4 d6 d4", [["Nf6", 70, 52, 5, "Pirts."], ["g6", 20, 52, 5, "Zamonaviy."], ["e5", 5, 53, 5, ""]]);
  N("e4 d6 d4 Nf6", [["Nc3", 85, 52, 5, ""], ["Bd3", 5, 52, 5, ""], ["f3", 5, 52, 5, ""]]);
  N("e4 d6 d4 Nf6 Nc3", [["g6", 75, 52, 5, "Pirts himoyasi."], ["e5", 15, 52, 5, "Filidorga o'tish."], ["c6", 8, 52, 5, "Chex Pirts."]]);
  N("e4 d6 d4 Nf6 Nc3 g6", [["Nf3", 35, 52, 5, "Klassik."], ["Be3", 30, 53, 5, "150-hujum: Qd2, Bh6, h4."], ["f4", 15, 53, 4, "Avstriya hujumi — eng xavfli."], ["Be2", 10, 52, 5, ""]]);
  N("e4 d6 d4 Nf6 Nc3 g6 f4", [["Bg7", 95, 53, 4, ""]]);
  N("e4 d6 d4 Nf6 Nc3 g6 f4 Bg7", [["Nf3", 95, 53, 4, ""]]);
  N("e4 d6 d4 Nf6 Nc3 g6 f4 Bg7 Nf3", [["O-O", 65, 53, 4, ""], ["c5", 30, 52, 4, ""]]);
  N("e4 g6", [["d4", 80, 52, 5, ""], ["Nf3", 8, 51, 5, ""], ["Nc3", 5, 51, 5, ""]]);
  N("e4 g6 d4", [["Bg7", 90, 52, 5, ""]]);
  N("e4 g6 d4 Bg7", [["Nc3", 55, 52, 5, ""], ["Nf3", 25, 52, 5, ""], ["c4", 8, 52, 5, ""]]);
  N("e4 g6 d4 Bg7 Nc3", [["d6", 60, 52, 5, ""], ["c6", 20, 52, 5, ""], ["c5", 10, 52, 5, ""]]);
  N("e4 Nf6", [["e5", 75, 51, 5, "Otni haydash — asosiy."], ["Nc3", 20, 51, 5, ""]]);
  N("e4 Nf6 e5", [["Nd5", 95, 51, 5, ""]]);
  N("e4 Nf6 e5 Nd5", [["d4", 85, 51, 5, ""], ["c4", 8, 51, 5, ""]]);
  N("e4 Nf6 e5 Nd5 d4", [["d6", 95, 51, 5, "Markazga zarba."]]);
  N("e4 Nf6 e5 Nd5 d4 d6", [["Nf3", 55, 51, 5, "Zamonaviy variant."], ["c4", 35, 51, 5, "To'rt piyoda hujumi (f4 bilan) yoki almashinuv."], ["exd6", 5, 50, 5, ""]]);
  N("e4 Nf6 e5 Nd5 d4 d6 Nf3", [["Bg4", 45, 51, 5, ""], ["dxe5", 30, 51, 5, ""], ["g6", 20, 52, 5, ""]]);
  N("e4 Nc6", [["Nf3", 55, 52, 5, ""], ["d4", 40, 52, 5, ""]]);
  N("e4 Nc6 Nf3", [["e5", 35, 50, 5, "Oddiy e5 ga o'tish."], ["d6", 35, 52, 5, ""], ["Nf6", 15, 52, 5, ""], ["d5", 10, 52, 5, ""]]);
  N("e4 Nc6 d4", [["d5", 50, 52, 5, ""], ["e5", 40, 52, 5, ""]]);
  N("e4 b6", [["d4", 85, 53, 4, ""]]);
  N("e4 b6 d4", [["Bb7", 95, 53, 4, ""]]);
  N("e4 b6 d4 Bb7", [["Bd3", 60, 54, 4, "e4 ni himoya qiladi."], ["Nc3", 30, 53, 4, ""]]);
  N("e4 b6 d4 Bb7 Bd3", [["e6", 55, 53, 4, ""], ["f5", 15, 60, 2, "Xavfli: exf5 Bxg2?? Qh5+ g6 fxg6 Nf6?? gxh7+ Nxh5 Bg6#."], ["Nf6", 20, 54, 4, ""]]);

  // ===================== 1.d4 =====================
  N("d4", [
    ["d5", 40, 51, 6, "Klassik javob: markazni simmetrik egallash."],
    ["Nf6", 40, 51, 6, "Hind himoyalari: Nimso, Qirol-hind, Grunfeld va boshqalar."],
    ["e6", 5, 51, 6, "Moslashuvchan: Fransuzga yoki Nimsoga o'tish."],
    ["f5", 3, 52, 5, "Gollandiya himoyasi."],
    ["d6", 3, 52, 5, ""],
    ["g6", 3, 52, 5, ""],
    ["c5", 2, 51, 5, "Benoni uslubi."],
    ["e5", 2, 56, 4, "Englund gambiti — shubhali, ammo tuzoqli."]
  ]);
  N("d4 e5", [["dxe5", 95, 56, 4, ""]]);
  N("d4 e5 dxe5", [["Nc6", 85, 56, 4, ""], ["d6", 10, 57, 4, ""]]);
  N("d4 e5 dxe5 Nc6", [["Nf3", 85, 56, 4, ""]]);
  N("d4 e5 dxe5 Nc6 Nf3", [["Qe7", 80, 56, 4, "e5 ga bosim — tuzoq tayyor."]]);
  N("d4 e5 dxe5 Nc6 Nf3 Qe7", [["Bf4", 40, 50, 3, "TUZOQ: Qb4+! Bd2 Qxb2 Bc3?? Bb4! va Qc1#."], ["Qd5", 20, 58, 4, "e5 ni himoya qiladi."], ["Nc3", 20, 57, 4, ""], ["Bg5", 15, 58, 4, ""]]);
  N("d4 e5 dxe5 Nc6 Nf3 Qe7 Bf4", [["Qb4+", 75, 50, 3, ""]]);
  N("d4 e5 dxe5 Nc6 Nf3 Qe7 Bf4 Qb4+", [["Bd2", 60, 45, 3, ""], ["Nbd2", 15, 55, 4, ""], ["Qd2", 15, 55, 4, "To'g'ri: ferzlar almashinadi."], ["c3", 8, 55, 4, ""]]);
  N("d4 e5 dxe5 Nc6 Nf3 Qe7 Bf4 Qb4+ Bd2", [["Qxb2", 90, 45, 3, ""]]);
  N("d4 e5 dxe5 Nc6 Nf3 Qe7 Bf4 Qb4+ Bd2 Qxb2", [["Bc3", 50, 30, 2, "XATO: Bb4! Qd2 Bxc3 Qxc3 Qc1#."], ["Nc3", 35, 55, 4, "To'g'ri: rok uchun Nd5 tahdidi."]]);

  // ---------- d4 d5 ----------
  N("d4 d5", [
    ["c4", 45, 51, 6, "Ferz gambiti — eng klassik."],
    ["Nf3", 20, 51, 6, ""],
    ["Bf4", 20, 52, 5, "London tizimi — oddiy va mustahkam."],
    ["e3", 8, 51, 6, "Kolle tizimi."],
    ["Nc3", 4, 51, 5, "Veresov / Jobava London."],
    ["Bg5", 3, 51, 5, ""]
  ]);
  N("d4 d5 c4", [
    ["e6", 40, 51, 7, "Ferz gambitini rad etish (QGD) — mustahkam."],
    ["c6", 35, 51, 7, "Slav himoyasi — c8 fil ochiq qoladi."],
    ["dxc4", 18, 51, 6, "Qabul qilingan ferz gambiti."],
    ["e5", 3, 53, 5, "Albin kontr-gambiti."],
    ["Nc6", 3, 53, 5, "Chigorin himoyasi."],
    ["Bf5", 1, 54, 5, "Boltiq himoyasi."]
  ]);
  N("d4 d5 c4 e6", [["Nc3", 65, 51, 7, ""], ["Nf3", 30, 51, 7, ""], ["g3", 4, 51, 7, "Katalon."]]);
  N("d4 d5 c4 e6 Nc3", [["Nf6", 75, 51, 7, ""], ["Be7", 12, 51, 7, "Alatortsev."], ["c6", 10, 51, 7, "Yarim-Slav yo'li."], ["c5", 3, 51, 6, "Tarrash himoyasi."]]);
  N("d4 d5 c4 e6 Nc3 Nf6", [["Bg5", 40, 51, 7, "Klassik QGD — f6 otni bog'lash."], ["cxd5", 30, 51, 7, "Almashinuv varianti: ozchilik hujumi."], ["Nf3", 30, 51, 7, ""]]);
  N("d4 d5 c4 e6 Nc3 Nf6 Bg5", [["Be7", 65, 51, 7, "Bog'lanishni bartaraf etadi."], ["Nbd7", 25, 51, 7, "Fil tuzog'i (Elephant) imkoniyati!"], ["c6", 5, 51, 7, ""], ["Bb4", 5, 51, 7, "Ragozin."]]);
  N("d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7", [["e3", 75, 51, 7, ""], ["Nf3", 25, 51, 7, ""]]);
  N("d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3", [["O-O", 90, 51, 7, ""]]);
  N("d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O", [["Nf3", 80, 51, 7, ""], ["Rc1", 12, 51, 7, ""]]);
  N("d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3", [["h6", 55, 51, 8, "Lasker / Tartakover uchun."], ["Nbd7", 40, 51, 7, "Ortodoks himoya."]]);
  N("d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 h6", [["Bh4", 80, 51, 8, ""], ["Bxf6", 15, 51, 8, ""]]);
  N("d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 h6 Bh4", [["b6", 50, 51, 8, "Tartakover: fil b7 ga."], ["Ne4", 40, 51, 9, "Lasker: almashinuvlar bilan yengillashtirish."]]);
  N("d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7", [["e3", 40, 51, 7, ""], ["cxd5", 30, 51, 7, ""], ["Nf3", 30, 51, 7, ""]]);
  N("d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 cxd5", [["exd5", 90, 51, 7, ""]]);
  N("d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 cxd5 exd5", [["Nxd5", 15, 20, 2, "XATO (Fil tuzog'i): Nxd5! Bxd8 Bb4+ Qd2 Bxd2+ Kxd2 Kxd8."], ["e3", 45, 51, 7, ""], ["Nf3", 35, 51, 7, ""]]);
  N("d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 cxd5 exd5 Nxd5", [["Nxd5", 90, 20, 2, "Qora otni oladi — ferz uchun!"]]);
  N("d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 cxd5 exd5 Nxd5 Nxd5", [["Bxd8", 90, 20, 2, ""]]);
  N("d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 cxd5 exd5 Nxd5 Nxd5 Bxd8", [["Bb4+", 95, 20, 2, "Shax — oq ferzni qaytarishi kerak."]]);
  N("d4 d5 c4 e6 Nc3 Nf6 cxd5", [["exd5", 100, 51, 7, ""]]);
  N("d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5", [["Bg5", 65, 51, 7, "Karlsbad tuzilmasi: oq ozchilik hujumi (b4-b5)."], ["Nf3", 20, 51, 7, ""], ["Bf4", 12, 51, 7, ""]]);
  N("d4 d5 c4 e6 Nf3", [["Nf6", 85, 51, 7, ""], ["c6", 8, 51, 7, ""]]);
  N("d4 d5 c4 e6 Nf3 Nf6", [["Nc3", 65, 51, 7, ""], ["g3", 25, 51, 7, "Katalon."], ["Bg5", 5, 51, 7, ""]]);
  N("d4 d5 c4 c6", [["Nf3", 55, 51, 7, ""], ["Nc3", 30, 51, 7, ""], ["cxd5", 12, 50, 8, "Almashinuv Slav."]]);
  N("d4 d5 c4 c6 Nf3", [["Nf6", 90, 51, 7, ""]]);
  N("d4 d5 c4 c6 Nf3 Nf6", [["Nc3", 60, 51, 7, ""], ["e3", 25, 51, 7, ""], ["cxd5", 10, 50, 8, ""], ["Qc2", 5, 51, 7, ""]]);
  N("d4 d5 c4 c6 Nf3 Nf6 Nc3", [["dxc4", 45, 51, 7, "Asosiy Slav."], ["e6", 35, 51, 7, "Yarim-Slav."], ["a6", 15, 51, 7, "Chebanenko."]]);
  N("d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4", [["a4", 85, 51, 7, "b5 ni oldini oladi."], ["e3", 8, 50, 6, ""], ["e4", 5, 51, 6, ""]]);
  N("d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4", [["Bf5", 85, 51, 7, "Fil tashqarida — Slavning ma'nosi."], ["Bg4", 10, 51, 7, ""]]);
  N("d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5", [["e3", 55, 51, 7, "e6 Bxc4 Bb4 O-O — asosiy."], ["Ne5", 40, 51, 7, ""]]);
  N("d4 d5 c4 c6 Nf3 Nf6 Nc3 e6", [["e3", 55, 51, 7, "Meran."], ["Bg5", 35, 51, 6, "Botvinnik / Moskva."]]);
  N("d4 d5 c4 c6 Nc3", [["Nf6", 60, 51, 7, ""], ["e6", 25, 51, 7, ""], ["dxc4", 10, 51, 6, ""]]);
  N("d4 d5 c4 c6 cxd5", [["cxd5", 98, 50, 8, ""]]);
  N("d4 d5 c4 dxc4", [["e4", 35, 52, 5, "Markazni egallash."], ["Nf3", 35, 51, 6, ""], ["e3", 25, 52, 5, ""]]);
  N("d4 d5 c4 dxc4 e3", [["e5", 30, 51, 5, ""], ["Nf6", 30, 52, 5, ""], ["b5", 10, 65, 3, "XATO: a4! c6 axb5 cxb5 Qf3 — rok yutiladi."], ["e6", 20, 52, 5, ""]]);
  N("d4 d5 c4 dxc4 Nf3", [["Nf6", 85, 51, 6, ""], ["a6", 10, 51, 6, ""]]);
  N("d4 d5 c4 dxc4 Nf3 Nf6", [["e3", 85, 51, 6, ""], ["Nc3", 10, 51, 6, ""]]);
  N("d4 d5 c4 dxc4 Nf3 Nf6 e3", [["e6", 85, 51, 6, ""], ["Bg4", 10, 51, 6, ""]]);
  N("d4 d5 c4 dxc4 Nf3 Nf6 e3 e6", [["Bxc4", 100, 51, 6, "Material tenglashdi."]]);
  N("d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4", [["c5", 90, 51, 6, "Markazga zarba — QGA ning asosiy g'oyasi."]]);
  N("d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5", [["O-O", 90, 51, 6, "Izolyatsiyalangan d4 piyoda pozitsiyalari ko'p chiqadi."]]);
  N("d4 d5 c4 dxc4 e4", [["e5", 40, 51, 5, ""], ["Nf6", 25, 52, 5, ""], ["c5", 20, 52, 5, ""], ["Nc6", 10, 52, 5, ""]]);
  N("d4 d5 c4 e5", [["dxe5", 95, 53, 5, ""]]);
  N("d4 d5 c4 e5 dxe5", [["d4", 100, 53, 5, "Albin: piyoda d4 oq lagerida 'tikan'."]]);
  N("d4 d5 c4 e5 dxe5 d4", [["Nf3", 75, 53, 5, "Eng yaxshi."], ["e3", 10, 40, 3, "XATO: Bb4+ Bd2 dxe3! Bxb4?? exf2+ Ke2 fxg1=N+! (Lasker tuzog'i)."], ["a3", 10, 53, 5, ""], ["e4", 5, 52, 5, ""]]);
  N("d4 d5 c4 e5 dxe5 d4 e3", [["Bb4+", 90, 40, 3, ""]]);
  N("d4 d5 c4 e5 dxe5 d4 e3 Bb4+", [["Bd2", 80, 40, 3, ""]]);
  N("d4 d5 c4 e5 dxe5 d4 e3 Bb4+ Bd2", [["dxe3", 95, 40, 3, ""]]);
  N("d4 d5 c4 e5 dxe5 d4 e3 Bb4+ Bd2 dxe3", [["Bxb4", 50, 25, 2, "XATO: exf2+! Ke2 fxg1=N+!"], ["fxe3", 45, 48, 4, "To'g'ri."]]);
  N("d4 d5 c4 e5 dxe5 d4 Nf3", [["Nc6", 90, 53, 5, ""]]);
  N("d4 d5 c4 e5 dxe5 d4 Nf3 Nc6", [["g3", 60, 53, 5, ""], ["a3", 20, 53, 5, ""], ["Nbd2", 15, 53, 5, ""]]);
  N("d4 d5 Bf4", [["Nf6", 40, 52, 5, ""], ["c5", 30, 52, 5, "Eng faol javob."], ["Bf5", 12, 52, 6, ""], ["e6", 10, 52, 5, ""]]);
  N("d4 d5 Bf4 Nf6", [["e3", 85, 52, 5, ""], ["Nf3", 10, 52, 5, ""]]);
  N("d4 d5 Bf4 Nf6 e3", [["e6", 35, 52, 5, ""], ["c5", 35, 52, 5, ""], ["Bf5", 15, 52, 5, ""], ["g6", 10, 52, 5, ""]]);
  N("d4 d5 Bf4 Nf6 e3 e6", [["Nf3", 70, 52, 5, ""], ["Nd2", 20, 52, 5, ""]]);
  N("d4 d5 Bf4 Nf6 e3 e6 Nf3", [["c5", 50, 52, 5, ""], ["Bd6", 30, 52, 5, "Filni almashtirish."], ["Be7", 15, 52, 5, ""]]);
  N("d4 d5 Bf4 c5", [["e3", 60, 52, 5, ""], ["c3", 15, 52, 5, ""], ["Nc3", 15, 52, 5, ""], ["dxc5", 8, 51, 5, ""]]);
  N("d4 d5 Bf4 c5 e3", [["Nc6", 60, 52, 5, ""], ["Qb6", 20, 51, 5, "b2 ga bosim."], ["cxd4", 10, 52, 5, ""]]);
  N("d4 d5 Bf4 c5 e3 Nc6", [["c3", 50, 52, 5, ""], ["Nf3", 25, 52, 5, ""], ["Nd2", 15, 52, 5, ""]]);
  N("d4 d5 Bf4 c5 e3 Nc6 c3", [["Qb6", 50, 51, 5, "b2 ga bosim: Qb3 bilan javob."], ["Nf6", 40, 52, 5, ""]]);
  N("d4 d5 Nf3", [["Nf6", 65, 51, 6, ""], ["c5", 10, 51, 6, ""], ["Bf5", 10, 51, 6, ""], ["e6", 8, 51, 6, ""], ["c6", 5, 51, 6, ""]]);
  N("d4 d5 Nf3 Nf6", [["c4", 35, 51, 7, ""], ["Bf4", 30, 52, 5, ""], ["e3", 15, 51, 6, ""], ["g3", 8, 51, 6, ""], ["Bg5", 5, 51, 6, ""]]);
  N("d4 d5 e3", [["Nf6", 60, 51, 6, ""], ["e6", 15, 51, 6, ""], ["c5", 15, 51, 6, ""]]);

  // ---------- d4 Nf6 ----------
  N("d4 Nf6", [["c4", 60, 51, 6, "Asosiy: markazni kengaytirish."], ["Nf3", 25, 51, 6, ""], ["Bf4", 10, 52, 5, "London."], ["Bg5", 3, 51, 5, "Trompovskiy hujumi."], ["Nc3", 2, 51, 5, ""]]);
  N("d4 Nf6 c4", [
    ["e6", 40, 51, 7, "Nimso / Ferz-hind / Katalon yoki QGD."],
    ["g6", 38, 51, 5, "Qirol-hind yoki Grunfeld."],
    ["c5", 8, 52, 5, "Benoni / Benko."],
    ["e5", 5, 53, 4, "Budapesht gambiti."],
    ["d6", 4, 52, 5, "Eski hind."],
    ["c6", 3, 51, 6, ""]
  ]);
  N("d4 Nf6 c4 e6", [["Nc3", 45, 51, 7, "Nimso-hindga ruxsat beradi."], ["Nf3", 40, 51, 7, "Nimsodan qochish."], ["g3", 15, 51, 7, "Katalon."]]);
  N("d4 Nf6 c4 e6 Nc3", [["Bb4", 85, 50, 7, "NIMSO-HIND: c3 otni bog'lab e4 ni nazorat qilish."], ["d5", 12, 51, 7, "QGD ga o'tish."]]);
  N("d4 Nf6 c4 e6 Nc3 Bb4", [["e3", 40, 50, 7, "Rubinshteyn varianti."], ["Qc2", 35, 50, 7, "Klassik (Kapablanka): dublangan piyodadan qochish."], ["Nf3", 10, 50, 7, ""], ["f3", 5, 51, 6, ""], ["a3", 5, 50, 6, "Semish."], ["Bg5", 5, 50, 6, "Leningrad."]]);
  N("d4 Nf6 c4 e6 Nc3 Bb4 e3", [["O-O", 45, 50, 7, ""], ["c5", 25, 50, 7, ""], ["b6", 20, 50, 7, ""], ["d5", 10, 50, 7, ""]]);
  N("d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O", [["Bd3", 50, 50, 7, ""], ["Ne2", 25, 50, 7, ""], ["Nf3", 20, 50, 7, ""]]);
  N("d4 Nf6 c4 e6 Nc3 Bb4 Qc2", [["O-O", 60, 50, 7, ""], ["d5", 20, 50, 7, ""], ["c5", 15, 50, 7, ""]]);
  N("d4 Nf6 c4 e6 Nc3 Bb4 Qc2 O-O", [["a3", 70, 50, 7, "Juft fil uchun."], ["e4", 15, 51, 6, ""]]);
  N("d4 Nf6 c4 e6 Nc3 Bb4 Qc2 O-O a3", [["Bxc3+", 95, 50, 7, ""]]);
  N("d4 Nf6 c4 e6 Nc3 Bb4 Qc2 O-O a3 Bxc3+", [["Qxc3", 100, 50, 7, ""]]);
  N("d4 Nf6 c4 e6 Nc3 Bb4 Qc2 O-O a3 Bxc3+ Qxc3", [["b6", 40, 50, 7, ""], ["d5", 30, 50, 7, ""], ["b5", 15, 50, 7, ""]]);
  N("d4 Nf6 c4 e6 Nf3", [["d5", 40, 51, 7, ""], ["b6", 35, 51, 7, "Ferz-hind himoyasi."], ["Bb4+", 20, 50, 7, "Bogo-hind."], ["c5", 5, 51, 6, ""]]);
  N("d4 Nf6 c4 e6 Nf3 b6", [["g3", 50, 51, 7, ""], ["a3", 20, 51, 7, "Petrosyan."], ["Nc3", 20, 51, 7, ""], ["e3", 8, 51, 7, ""]]);
  N("d4 Nf6 c4 e6 Nf3 b6 g3", [["Ba6", 55, 51, 7, "c4 ga bosim."], ["Bb7", 40, 51, 7, ""]]);
  N("d4 Nf6 c4 e6 Nf3 Bb4+", [["Bd2", 60, 51, 7, ""], ["Nbd2", 35, 51, 7, ""]]);
  N("d4 Nf6 c4 e6 g3", [["d5", 60, 51, 7, "Katalon."], ["Bb4+", 20, 51, 7, ""], ["c5", 10, 51, 6, ""]]);
  N("d4 Nf6 c4 e6 g3 d5", [["Bg2", 80, 51, 7, ""], ["Nf3", 20, 51, 7, ""]]);
  N("d4 Nf6 c4 e6 g3 d5 Bg2", [["dxc4", 40, 51, 7, "Ochiq Katalon."], ["Be7", 40, 51, 8, "Yopiq Katalon."], ["Bb4+", 15, 51, 7, ""]]);
  N("d4 Nf6 c4 g6", [["Nc3", 75, 51, 5, ""], ["Nf3", 12, 51, 6, ""], ["g3", 12, 51, 6, ""]]);
  N("d4 Nf6 c4 g6 Nc3", [["Bg7", 60, 52, 5, "Qirol-hind."], ["d5", 40, 51, 6, "Grunfeld."]]);
  N("d4 Nf6 c4 g6 Nc3 Bg7", [["e4", 85, 52, 5, "Katta markaz."], ["Nf3", 10, 51, 6, ""], ["g3", 5, 51, 6, ""]]);
  N("d4 Nf6 c4 g6 Nc3 Bg7 e4", [["d6", 98, 52, 5, ""]]);
  N("d4 Nf6 c4 g6 Nc3 Bg7 e4 d6", [["Nf3", 50, 52, 5, "Klassik."], ["f3", 20, 53, 5, "Semish."], ["Be2", 15, 52, 5, ""], ["h3", 5, 52, 5, "Makogonov."], ["f4", 5, 52, 4, "To'rt piyoda hujumi."]]);
  N("d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3", [["O-O", 98, 52, 5, ""]]);
  N("d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O", [["Be2", 95, 52, 5, ""]]);
  N("d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2", [["e5", 85, 52, 5, "Markazga zarba."], ["c5", 8, 52, 5, ""], ["Na6", 5, 52, 5, ""]]);
  N("d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5", [["O-O", 80, 52, 5, ""], ["d5", 12, 52, 5, "Petrosyan."], ["dxe5", 8, 50, 7, "Almashinuv — durangga yaqin."]]);
  N("d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O", [["Nc6", 85, 52, 5, "Klassik Mar del Plata."], ["Na6", 10, 52, 5, ""]]);
  N("d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6", [["d5", 95, 52, 5, ""]]);
  N("d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5", [["Ne7", 98, 52, 5, "Mar del Plata: qora f5 bilan qirol tomonda, oq c5 bilan ferz tomonda hujum qiladi."]]);
  N("d4 Nf6 c4 g6 Nc3 d5", [["cxd5", 65, 51, 6, "Almashinuv varianti."], ["Nf3", 20, 51, 6, ""], ["Bf4", 10, 51, 6, ""]]);
  N("d4 Nf6 c4 g6 Nc3 d5 cxd5", [["Nxd5", 99, 51, 6, ""]]);
  N("d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5", [["e4", 95, 51, 6, ""]]);
  N("d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4", [["Nxc3", 98, 51, 6, ""]]);
  N("d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3", [["bxc3", 100, 51, 6, ""]]);
  N("d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3", [["Bg7", 99, 51, 6, "d4 ga bosim: c5, Nc6, Qa5 bilan."]]);
  N("d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3 Bg7", [["Nf3", 40, 51, 6, ""], ["Bc4", 25, 51, 6, ""], ["Be3", 25, 51, 6, ""]]);
  N("d4 Nf6 c4 e5", [["dxe5", 95, 53, 4, ""]]);
  N("d4 Nf6 c4 e5 dxe5", [["Ng4", 85, 53, 4, "Piyodani qaytarishga harakat."], ["Ne4", 15, 55, 4, "Fajarovich."]]);
  N("d4 Nf6 c4 e5 dxe5 Ng4", [["Bf4", 40, 53, 4, ""], ["Nf3", 35, 53, 4, ""], ["e4", 15, 52, 4, ""], ["e3", 8, 53, 4, ""]]);
  N("d4 Nf6 c4 e5 dxe5 Ng4 Bf4", [["Nc6", 90, 53, 4, ""]]);
  N("d4 Nf6 c4 e5 dxe5 Ng4 Bf4 Nc6", [["Nf3", 90, 53, 4, ""]]);
  N("d4 Nf6 c4 e5 dxe5 Ng4 Bf4 Nc6 Nf3", [["Bb4+", 90, 53, 4, ""]]);
  N("d4 Nf6 c4 e5 dxe5 Ng4 Bf4 Nc6 Nf3 Bb4+", [["Nbd2", 55, 52, 4, ""], ["Nc3", 40, 53, 4, ""]]);
  N("d4 Nf6 c4 e5 dxe5 Ng4 Bf4 Nc6 Nf3 Bb4+ Nbd2", [["Qe7", 90, 52, 4, ""]]);
  N("d4 Nf6 c4 e5 dxe5 Ng4 Bf4 Nc6 Nf3 Bb4+ Nbd2 Qe7", [["a3", 80, 52, 4, ""], ["e3", 15, 53, 4, ""]]);
  N("d4 Nf6 c4 e5 dxe5 Ng4 Bf4 Nc6 Nf3 Bb4+ Nbd2 Qe7 a3", [["Ngxe5", 90, 52, 4, ""]]);
  N("d4 Nf6 c4 e5 dxe5 Ng4 Bf4 Nc6 Nf3 Bb4+ Nbd2 Qe7 a3 Ngxe5", [["axb4", 30, 15, 1, "XATO: Nd3# — mat!"], ["Nxe5", 65, 53, 4, "To'g'ri."]]);
  N("d4 Nf6 c4 c5", [["d5", 90, 52, 5, ""]]);
  N("d4 Nf6 c4 c5 d5", [["e6", 45, 52, 5, "Zamonaviy Benoni."], ["b5", 30, 51, 5, "Benko gambiti."], ["e5", 10, 52, 5, "Chex Benoni."], ["d6", 10, 52, 5, ""]]);
  N("d4 Nf6 c4 c5 d5 b5", [["cxb5", 75, 51, 5, ""], ["Nf3", 15, 51, 5, ""]]);
  N("d4 Nf6 c4 c5 d5 b5 cxb5", [["a6", 90, 51, 5, "Qora piyoda evaziga ochiq a/b chiziqlar."]]);
  N("d4 Nf6 c4 c5 d5 e6", [["Nc3", 85, 52, 5, ""]]);
  N("d4 Nf6 c4 c5 d5 e6 Nc3", [["exd5", 95, 52, 5, ""]]);
  N("d4 Nf6 c4 c5 d5 e6 Nc3 exd5", [["cxd5", 98, 52, 5, ""]]);
  N("d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5", [["d6", 95, 52, 5, "Benoni tuzilmasi: qora ferz tomonda ko'pchilik, oq markazda."]]);
  N("d4 Nf6 Nf3", [["g6", 35, 51, 6, ""], ["e6", 30, 51, 6, ""], ["d5", 30, 51, 6, ""], ["c5", 5, 51, 5, ""]]);
  N("d4 Nf6 Nf3 g6", [["c4", 45, 51, 6, ""], ["g3", 20, 51, 6, ""], ["Bf4", 15, 52, 5, ""], ["Bg5", 10, 51, 6, ""]]);
  N("d4 Nf6 Nf3 e6", [["c4", 55, 51, 7, ""], ["Bg5", 15, 51, 6, "Torre hujumi."], ["e3", 15, 51, 6, ""], ["Bf4", 12, 52, 5, ""]]);
  N("d4 Nf6 Bf4", [["d5", 40, 52, 5, ""], ["g6", 25, 52, 5, ""], ["c5", 20, 52, 5, ""], ["e6", 12, 52, 5, ""]]);
  N("d4 Nf6 Bf4 d5", [["e3", 85, 52, 5, ""], ["Nf3", 12, 52, 5, ""]]);
  N("d4 Nf6 Bg5", [["Ne4", 40, 50, 5, ""], ["e6", 25, 51, 5, ""], ["d5", 20, 51, 5, ""], ["c5", 10, 51, 5, ""]]);

  // ---------- Gollandiya ----------
  N("d4 f5", [["g3", 35, 52, 5, ""], ["c4", 30, 52, 5, ""], ["Nf3", 15, 52, 5, ""], ["Bg5", 8, 52, 5, ""], ["e4", 5, 52, 4, "Staunton gambiti."], ["Nc3", 5, 52, 5, ""]]);
  N("d4 f5 g3", [["Nf6", 80, 52, 5, ""], ["g6", 10, 52, 5, ""]]);
  N("d4 f5 g3 Nf6", [["Bg2", 90, 52, 5, ""]]);
  N("d4 f5 g3 Nf6 Bg2", [["g6", 45, 52, 5, "Leningrad tizimi."], ["e6", 45, 52, 5, "Mustahkam devor / klassik."]]);
  N("d4 f5 c4", [["Nf6", 85, 52, 5, ""]]);
  N("d4 f5 c4 Nf6", [["g3", 45, 52, 5, ""], ["Nc3", 35, 52, 5, ""], ["Nf3", 15, 52, 5, ""]]);
  N("d4 e6", [["c4", 45, 51, 6, ""], ["e4", 25, 50, 5, "Fransuzga o'tish."], ["Nf3", 25, 51, 6, ""]]);
  N("d4 d6", [["e4", 50, 52, 5, ""], ["Nf3", 25, 52, 5, ""], ["c4", 20, 52, 5, ""]]);
  N("d4 g6", [["e4", 45, 52, 5, ""], ["c4", 30, 52, 5, ""], ["Nf3", 20, 52, 5, ""]]);
  N("d4 c5", [["d5", 80, 52, 5, ""], ["dxc5", 8, 52, 4, ""], ["c3", 8, 51, 5, ""]]);

  // ===================== 1.Nf3 =====================
  N("Nf3", [["d5", 40, 50, 7, ""], ["Nf6", 40, 50, 7, ""], ["c5", 10, 50, 6, ""], ["g6", 5, 50, 6, ""]]);
  N("Nf3 d5", [["d4", 40, 51, 6, ""], ["g3", 35, 50, 7, "Qirol-hind hujumi yoki Reti."], ["c4", 20, 50, 7, "Reti gambiti."], ["e3", 3, 50, 6, ""]]);
  N("Nf3 d5 c4", [["e6", 30, 50, 7, ""], ["d4", 25, 50, 6, ""], ["c6", 25, 50, 7, ""], ["dxc4", 15, 51, 6, ""]]);
  N("Nf3 d5 g3", [["Nf6", 45, 50, 7, ""], ["c5", 20, 50, 7, ""], ["g6", 15, 50, 7, ""], ["Bg4", 12, 50, 6, ""]]);
  N("Nf3 Nf6", [["c4", 35, 50, 7, ""], ["g3", 35, 50, 7, ""], ["d4", 30, 51, 6, ""]]);

  // ===================== 1.c4 =====================
  N("c4", [["e5", 30, 51, 6, "Teskari Sitsiliya."], ["Nf6", 30, 51, 6, ""], ["c5", 15, 50, 7, "Simmetrik variant."], ["e6", 10, 51, 6, ""], ["c6", 8, 51, 6, ""], ["g6", 5, 51, 6, ""]]);
  N("c4 e5", [["Nc3", 65, 51, 6, ""], ["g3", 25, 51, 6, ""], ["Nf3", 5, 51, 6, ""]]);
  N("c4 e5 Nc3", [["Nf6", 60, 51, 6, ""], ["Nc6", 35, 51, 6, ""]]);
  N("c4 e5 Nc3 Nf6", [["g3", 50, 51, 6, ""], ["Nf3", 40, 51, 6, "To'rt ot Inglizi."], ["e4", 5, 51, 5, ""]]);
  N("c4 e5 Nc3 Nf6 g3", [["d5", 40, 51, 6, "Teskari Dragon."], ["Bb4", 30, 51, 6, ""], ["c6", 15, 51, 6, ""]]);
  N("c4 e5 Nc3 Nc6", [["g3", 70, 51, 6, ""], ["Nf3", 25, 51, 6, ""]]);
  N("c4 e5 Nc3 Nc6 g3", [["g6", 55, 51, 6, "Yopiq tizim."], ["Nf6", 30, 51, 6, ""]]);
  N("c4 Nf6", [["Nc3", 50, 51, 6, ""], ["Nf3", 35, 51, 6, ""], ["g3", 15, 51, 6, ""]]);
  N("c4 Nf6 Nc3", [["e5", 35, 51, 6, ""], ["e6", 25, 51, 6, ""], ["g6", 25, 51, 6, ""], ["c5", 12, 51, 6, ""]]);
  N("c4 c5", [["Nc3", 60, 50, 7, ""], ["Nf3", 35, 50, 7, ""]]);
  N("c4 c5 Nc3", [["Nc6", 70, 50, 7, ""], ["Nf6", 25, 50, 7, ""]]);
  N("c4 c5 Nc3 Nc6", [["g3", 90, 50, 7, ""]]);
  N("c4 c5 Nc3 Nc6 g3", [["g6", 90, 50, 7, ""]]);
  N("c4 c5 Nc3 Nc6 g3 g6", [["Bg2", 100, 50, 7, ""]]);
  N("c4 c5 Nc3 Nc6 g3 g6 Bg2", [["Bg7", 100, 50, 7, "To'liq simmetriya: a3, Rb1, b4 (oq) va e6/e5, Nge7 (qora)."]]);

  // ===================== 1.f4 / boshqalar =====================
  N("f4", [["d5", 45, 47, 5, ""], ["Nf6", 20, 47, 5, ""], ["e5", 15, 45, 4, "From gambiti — o'tkir!"], ["c5", 8, 47, 5, ""], ["g6", 7, 47, 5, ""]]);
  N("f4 e5", [["fxe5", 80, 45, 4, ""], ["e4", 18, 49, 4, "Qirol gambitiga o'tish."]]);
  N("f4 e5 fxe5", [["d6", 90, 45, 4, ""]]);
  N("f4 e5 fxe5 d6", [["exd6", 90, 45, 4, ""], ["Nf3", 10, 48, 4, ""]]);
  N("f4 e5 fxe5 d6 exd6", [["Bxd6", 100, 45, 4, "Qh4+ va g5 tahdidi."]]);
  N("f4 e5 fxe5 d6 exd6 Bxd6", [["Nf3", 85, 47, 4, "Yagona to'g'ri yurish (h4 ni nazorat)."], ["Nc3", 10, 10, 1, "XATO: Qh4+ g3 Qxg3+ hxg3 Bxg3#."]]);
  N("f4 e5 fxe5 d6 exd6 Bxd6 Nf3", [["g5", 55, 47, 4, "g4 bilan otni haydash."], ["Nf6", 40, 47, 4, ""]]);
  N("f4 d5", [["Nf3", 75, 47, 5, ""], ["e3", 10, 47, 5, ""], ["b3", 8, 47, 5, ""]]);
  N("g3", [["d5", 40, 50, 6, ""], ["e5", 25, 50, 6, ""], ["Nf6", 20, 50, 6, ""], ["g6", 10, 50, 6, ""]]);
  N("b3", [["e5", 50, 48, 5, ""], ["d5", 25, 49, 5, ""], ["Nf6", 15, 49, 5, ""]]);
  N("b3 e5", [["Bb2", 95, 48, 5, ""]]);
  N("b3 e5 Bb2", [["Nc6", 75, 48, 5, ""], ["d6", 15, 49, 5, ""]]);
  N("e3", [["e5", 40, 47, 5, ""], ["d5", 30, 48, 5, ""], ["Nf6", 15, 48, 5, ""]]);

  window.BOOK = B;
})();
