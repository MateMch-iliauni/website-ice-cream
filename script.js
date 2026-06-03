/* ══════════════════════════════════════════════════════
   ნაყინის კატალოგი — Georgian Ice Cream Catalog
   script.js · All data + rendering + filter logic
   ══════════════════════════════════════════════════════ */

/* ════════════════════════════════
   ① BRAND DATA
   ════════════════════════════════ */
const brands = [
  {
    id: "tolia",
    name: "Tolia",
    image: "logos/logo_ka.png",
    tag: "ართიზანული · პრემიუმ",
    color: "#1A73E8",
    tagClass: "tag-tolia",
    cardClass: "bc-tolia",
    desc: "თბილისური ართიზანული ნაყინი — ბუნებრივი ინგრედიენტები, გამორჩეული გემოები. ბეჭდის ჭიქები, საოჯახო ტომარა და შეიქები.",
  },
  {
    id: "luca",
    name: "Luca Polare",
    image: "logos/luca.png",
    tag: "იტალიური გელატო",
    color: "#0D47A1",
    tagClass: "tag-luca",
    cardClass: "bc-luca",
    desc: "იტალიური სტილის გელატო — კლასიკური რეცეპტები, ახალი ადგილობრივი რძე. თბილისში გახსნილი საკუთარი პარლორებით.",
  },
  {
    id: "pingo",
    name: "Pingo",
    image: "logos/pingo.png",
    tag: "ოჯახური · ხელმისაწვდომი",
    color: "#42A5F5",
    tagClass: "tag-pingo",
    cardClass: "bc-pingo",
    desc: "საქართველოს ყველაზე პოპულარული ნაყინი — ოჯახური ყუთები, ესკიმო, სენდვიჩები. ყველა ასაკისთვის.",
  },
  {
    id: "lider",
    name: "Lider (Leader XXI)",
    image: "logos/lideri.png",
    tag: "ტრადიციული · ხელმისაწვდომი",
    color: "#90CAF9",
    tagClass: "tag-lider",
    cardClass: "bc-lider",
    desc: "ქართული ნაყინის ვეტერანი — 2001 წლიდან. კლასიკური პლომბირი, ვაფლის ჭიქა და საოჯახო ყუთები ხელმისაწვდომ ფასად.",
  },
];
/* ════════════════════════════════
   ② PRODUCT DATA
   Real products from Tolia (Glovo), Luca Polare (Glovo),
   Pingo (pingo.ge), and Lider (known products).
   ════════════════════════════════ */
const products = [

  /* ────────── TOLIA ────────── */
  {
    id:"x2", brandId:"tolia",
    name:"3 ნაყინის ბურთი ჭიქაში",
    category:"ნაყინის ბურთები",
    desc:"სამი ბურთი თქვენი არჩეული გემოსა — მიირთვით ჩვენს კაფეში ან სახლში.",
    price:"₾7.60", priceNum:7.60,
    image:"https://glovo.dhmedia.io/image/menus-glovo/products/f6c7ee530a07aa28a414f01fb93eb321c9a4cd2c2ad943dc7ce6d62a53ee7bf9?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍨",
  },
  {
    id:"x3", brandId:"tolia",
    name:"2 ნაყინის ბურთი ჭიქაში",
    category:"ნაყინის ბურთები",
    desc:"ორი ბურთი ახალი ნაყინი ვაფლის ჭიქაში — სწრაფი და გემრიელი.",
    price:"₾5.90", priceNum:5.90,
    image:"https://glovo.dhmedia.io/image/menus-glovo/products/956bdea9fa9b17993a1435de4a1c36c40bb76328c836d063eea608eb21358b10?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍨",
  },
  {
    id:"x4", brandId:"tolia",
    name:"1 ნაყინის ბურთი ჭიქაში",
    category:"ნაყინის ბურთები",
    desc:"ერთი ბურთი — ვანილი, შოკოლადი, ჟოლო, ფისტა, კარამელი და სხვა.",
    price:"₾3.40", priceNum:3.40,
    image:"https://glovo.dhmedia.io/image/menus-glovo/products/3734fdcae09560050339cab7fe178cb1c793c05b529165bbc72e8a3f0fb4ed57?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍨",
  },
  {
    id:"t1", brandId:"tolia",
    name:"ნაყინი სენდვიჩი ვანილისა და შოკოლადის არომატით",
    category:"სენდვიჩი",
    glovoCategory:"სენდვიჩი",
    desc:"",
    price:"₾2.20", priceNum:2.20,
    image:"tolia_assets/images/ნაყინი_სენდვიჩი_ვანილისა_და_შოკოლადის_არომატით.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/f46f8024e6d694178e1e0336161d161d2dd6a94751dc2e754ec838342b7dc0eb?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍦",
  },
  {
    id:"t2", brandId:"tolia",
    name:"ნაყინი სენდვიჩი ვანილის არომატით",
    category:"სენდვიჩი",
    glovoCategory:"სენდვიჩი",
    desc:"",
    price:"₾2.20", priceNum:2.20,
    image:"tolia_assets/images/ნაყინი_სენდვიჩი_ვანილის_არომატით.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/b875635df0fb45446eba78dfbdbeb9eec94fe7dab5d6da01ac5840855e5d6622?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍦",
  },
  {
    id:"t3", brandId:"tolia",
    name:"ნაყინი სენდვიჩი კემ ბრიულე",
    category:"სენდვიჩი",
    glovoCategory:"სენდვიჩი",
    desc:"",
    price:"₾2.20", priceNum:2.20,
    image:"tolia_assets/images/ნაყინი_სენდვიჩი_კემ_ბრიულე.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/9f635cad770e2eb7522ca8b492a9f82300a2582604c7356d12aa3864fec9e80e?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍮",
  },
  {
    id:"t4", brandId:"tolia",
    name:"ნაყინი საოჯახო 1 კგ ვანილისა და შოკოლადის არომატით",
    category:"საოჯახო",
    glovoCategory:"საოჯახო 1კგ",
    desc:"",
    price:"₾15.00", priceNum:15.00,
    image:"tolia_assets/images/ნაყინი_საოჯახო_1_კგ_ვანილისა_და_შოკოლადის_არომატით.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/781f315a91ed920f53c7e34db7bf32b5d5e016baa02cf6580f8769367563b1d9?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍦",
  },
  {
    id:"t5", brandId:"tolia",
    name:"ნაყინი საოჯახო 1 კგ ვანილის არომატი",
    category:"საოჯახო",
    glovoCategory:"საოჯახო 1კგ",
    desc:"",
    price:"₾15.00", priceNum:15.00,
    image:"tolia_assets/images/ნაყინი_საოჯახო_1_კგ_ვანილის_არომატი.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/22818fc45d4dcec718a29cb74a80d816b6d8583ad6eea9be67e136588f24b1d3?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍦",
  },
  {
    id:"t6", brandId:"tolia",
    name:"ნაყინი საოჯახო 1 კგ შოკოლადის",
    category:"საოჯახო",
    glovoCategory:"საოჯახო 1კგ",
    desc:"",
    price:"₾15.00", priceNum:15.00,
    image:"tolia_assets/images/ნაყინი_საოჯახო_1_კგ_შოკოლადის.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/0997fc97a0194e03be342097231c261805deac7aabada4ee1f2f7b0a7021d764?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍫",
  },
  {
    id:"t7", brandId:"tolia",
    name:"ნაყინი საოჯახო 1 კგ ვანილის მარწყვის და შოკოლადის არომატით",
    category:"საოჯახო",
    glovoCategory:"საოჯახო 1კგ",
    desc:"",
    price:"₾15.00", priceNum:15.00,
    image:"tolia_assets/images/ნაყინი_საოჯახო_1_კგ_ვანილის_მარწყვის_და_შოკოლადის_არომატით.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/4ab80f282686aa55f54a84be288dec19c3b9a44bbe5d193cf6f6410a450a4cf7?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍓",
  },
  {
    id:"t8", brandId:"tolia",
    name:"ნაყინი საოჯახო 2.5 კგ ვანილის არომატი",
    category:"საოჯახო",
    glovoCategory:"საოჯახო 2,5",
    desc:"",
    price:"₾35.00", priceNum:35.00,
    image:"tolia_assets/images/ნაყინი_საოჯახო_2.5_კგ_ვანილის_არომატი.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/0e89b12684a244551451c899dac65b63af970c864e1fc45de5917aca7ae50568?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍦",
  },
  {
    id:"t9", brandId:"tolia",
    name:"ნაყინი საოჯახო 2.5 კგ ვანილისა და შოკოლადის არომატით",
    category:"საოჯახო",
    glovoCategory:"საოჯახო 2,5",
    desc:"",
    price:"₾35.00", priceNum:35.00,
    image:"tolia_assets/images/ნაყინი_საოჯახო_2.5_კგ_ვანილისა_და_შოკოლადის_არომატით.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/9ed3bc63203a363e05ff085463333a926a5b67353c84cb6a2fe9bfb6891ce922?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍫",
  },
  {
    id:"t10", brandId:"tolia",
    name:"ნაყინი საოჯახო 2.5 კგ კივის ბანანის და მაწყვის არომატით",
    category:"საოჯახო",
    glovoCategory:"საოჯახო 2,5",
    desc:"",
    price:"₾35.00", priceNum:35.00,
    image:"tolia_assets/images/ნაყინი_საოჯახო_2.5_კგ_კივის_ბანანის_და_მაწყვის_არომატით.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/b2852cc9c74feac36c0d73ab1ee36638aeb73268128d4b61a2a3f6ae3fcc7657?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🥝",
  },
  {
    id:"t11", brandId:"tolia",
    name:"ნაყინი თოლია კრემ ბრიულე",
    category:"პორციული",
    glovoCategory:"თოლია",
    desc:"",
    price:"₾1.20", priceNum:1.20,
    image:"tolia_assets/images/ნაყინი_თოლია_კრემ_ბრიულე.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/5c133f2f3119b71943ca1d7613fd5cf24cdaef192af536994908a1f918923ed0?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍮",
  },
  {
    id:"t12", brandId:"tolia",
    name:"ნაყინი თოლია ვანილის არომატით",
    category:"პორციული",
    glovoCategory:"თოლია",
    desc:"",
    price:"₾1.20", priceNum:1.20,
    image:"tolia_assets/images/ნაყინი_თოლია_ვანილის_არომატით.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/5eece04fb7c7782d962f5e2034da3b6cb7e2f24e832fc545e3faceabaeb4d887?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍦",
  },
  {
    id:"t13", brandId:"tolia",
    name:"ნაყინი თოლია შოკოლადის",
    category:"პორციული",
    glovoCategory:"თოლია",
    desc:"",
    price:"₾1.20", priceNum:1.20,
    image:"tolia_assets/images/ნაყინი_თოლია_შოკოლადის.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/78d56b6f474bdda900c90876eef7b9d5b4fe7fdac8afce8dae90b94a37d21829?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍫",
  },
  {
    id:"t14", brandId:"tolia",
    name:"ნაყინი საოჯახო 0.5 კგ ვანილის არომატით",
    category:"საოჯახო",
    glovoCategory:"საოჯახო",
    desc:"",
    price:"₾8.50", priceNum:8.50,
    image:"tolia_assets/images/ნაყინი_საოჯახო_0.5_კგ_ვანილის_არომატით.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/c42b52346b8669852691d0c2c145cb8da6568215eb3bc06ad243e7230e4fa7f6?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍦",
  },
  {
    id:"t15", brandId:"tolia",
    name:"ნაყინის საოჯახო 0.5 კგ ვანილისა და შოკოლადის არომატით",
    category:"საოჯახო",
    glovoCategory:"საოჯახო",
    desc:"",
    price:"₾8.50", priceNum:8.50,
    image:"tolia_assets/images/ნაყინის_საოჯახო_0.5_კგ_ვანილისა_და_შოკოლადის_არომატით.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/4f2eac694f0d1e60850ec620b1bb33203f61ab162f75c2740f8c122bfffe0db1?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍫",
  },
  {
    id:"t16", brandId:"tolia",
    name:"ნაყინი საოჯახო 0.5 კგ შოკოლადი",
    category:"საოჯახო",
    glovoCategory:"საოჯახო",
    desc:"შოკოლადის კრემოვანი ნაყინი 500 გრ ყუთში — ოჯახური სიამოვნება.",
    price:"₾8.50", priceNum:8.50,
    image:"tolia_assets/images/ნაყინი_საოჯახო_0.5_კგ_შოკოლადი.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/bf9673ff615738968392b63113e04528a66792a8576da7223031b1e3a206654a?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍫",
  },
  {
    id:"t17", brandId:"tolia",
    name:"ნაყინი საოჯახო 0.5 კგ მარწყვის არომატით",
    category:"საოჯახო",
    glovoCategory:"საოჯახო",
    desc:"",
    price:"₾8.50", priceNum:8.50,
    image:"tolia_assets/images/ნაყინი_საოჯახო_0.5_კგ_მარწყვის_არომატით.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/861cab2764069804f0adc35761856b03caa960e7e47cb7bad2d995f64468f7dd?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍓",
  },
  {
    id:"t18", brandId:"tolia",
    name:"ნაყინი საოჯახო 0.5 კგ კრემ ბრიულე",
    category:"საოჯახო",
    glovoCategory:"საოჯახო",
    desc:"",
    price:"₾8.50", priceNum:8.50,
    image:"tolia_assets/images/ნაყინი_საოჯახო_0.5_კგ_კრემ_ბრიულე.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/74ace5f72139acdbbed0a82837a97573803f8522f378a56013657ea67d023519?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍮",
  },
  {
    id:"t19", brandId:"tolia",
    name:"ნაყინი სკუპი ბიჭი",
    category:"ნაყინის ბურთები",
    glovoCategory:"სკუპი(დიდი)",
    desc:"",
    price:"₾4.90", priceNum:4.90,
    image:"tolia_assets/images/ნაყინი_სკუპი_ბიჭი.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/9dbedf6220a4dda68ece0b1cf907913a652b98ac34fe76695f714c70519db30c?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍨",
  },
  {
    id:"t20", brandId:"tolia",
    name:"ნაყინი თოლია ესკიმო ვანილის არომატით",
    category:"ესკიმო",
    glovoCategory:"თოლია ესკიმო",
    desc:"",
    price:"₾1.50", priceNum:1.50,
    image:"tolia_assets/images/ნაყინი_თოლია_ესკიმო_ვანილის_არომატით.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/ae60e621365eab9b6b9229faa5b1e31ae58ab56f0f68b8b31d20e275b2689c91?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍦",
  },
  {
    id:"t21", brandId:"tolia",
    name:"ნაყინი ესკიმა ვანილის არომატით",
    category:"ესკიმო",
    glovoCategory:"ესკიმა",
    desc:"",
    price:"₾1.80", priceNum:1.80,
    image:"tolia_assets/images/ნაყინი_ესკიმა_ვანილის_არომატით.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/4f660fb8392dbdf492c986c8433e23041938007c3e5026b150cc748c947cde5c?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍦",
  },
  {
    id:"t22", brandId:"tolia",
    name:"ნაყინი ლოლო ვანილის არომატით",
    category:"ლოლო",
    glovoCategory:"ლოლო",
    desc:"",
    price:"₾2.20", priceNum:2.20,
    image:"tolia_assets/images/ნაყინი_ლოლო_ვანილის_არომატით.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/009eaab4d12b7272c1f1fb8d4644b36f576ac42c012a04b1a53ba8fc7fa49c11?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍦",
  },
  {
    id:"t23", brandId:"tolia",
    name:"ნაყინი ლოლო მარწყვის არომატით",
    category:"ლოლო",
    glovoCategory:"ლოლო",
    desc:"",
    price:"₾2.20", priceNum:2.20,
    image:"tolia_assets/images/ნაყინი_ლოლო_მარწყვის_არომატით.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/bee7103c11b3538274ce01c562cb04c4a9b6af9ced5d4e47851f4330957739f1?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍓",
  },
  {
    id:"t24", brandId:"tolia",
    name:"ნაყინი ლოლო შოკოლადის",
    category:"ლოლო",
    glovoCategory:"ლოლო",
    desc:"",
    price:"₾2.20", priceNum:2.20,
    image:"tolia_assets/images/ნაყინი_ლოლო_შოკოლადის.jpg",
    imageRemote:"https://glovo.dhmedia.io/image/menus-glovo/products/34e9f043686d222cea05ba8a2f7cfbd76e93639a3655ebddc8e8412d86e290a1?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍫",
  },

  /* ────────── LUCA POLARE ────────── */
  {
    id:"l1", brandId:"luca",
    name:"ნაყინი 1 ბურთულით",
    category:"გელატო",
    desc:"90 გ-იანი ერთი ბურთი ნამდვილი იტალიური გელატო — ნებისმიერი სეზონური გემო.",
    price:"₾6.71", priceNum:6.71,
    image:"https://glovo.dhmedia.io/image/menus-glovo/products/05c9ea03fb9a1742d1250c7805c3bb382746944bc9915eb892794dac67b4f69a?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍧",
  },
  {
    id:"l2", brandId:"luca",
    name:"ნაყინი 2 ბურთულით",
    category:"გელატო",
    desc:"ორი ბურთი (90 გ × 2) — ორი სხვადასხვა გემო ერთ ჭიქაში.",
    price:"₾12.71", priceNum:12.71,
    image:"https://glovo.dhmedia.io/image/menus-glovo/products/05c9ea03fb9a1742d1250c7805c3bb382746944bc9915eb892794dac67b4f69a?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍧",
  },
  {
    id:"l3", brandId:"luca",
    name:"ნაყინი 3 ბურთულით",
    category:"გელატო",
    desc:"სამი ბურთი იტალიური გელატო — საუკეთესო გემო სამეულად.",
    price:"₾18.71", priceNum:18.71,
    image:"https://glovo.dhmedia.io/image/menus-glovo/products/05c9ea03fb9a1742d1250c7805c3bb382746944bc9915eb892794dac67b4f69a?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍧",
  },
  {
    id:"l4", brandId:"luca",
    name:"სტრაჩიატელა",
    category:"გელატო",
    desc:"კლასიკური იტალიური გელატო — კრემოვანი ვანილი წვრილი შოკოლადის ლენტებით.",
    price:"₾6.71", priceNum:6.71,
    image:"https://glovo.dhmedia.io/image/menus-glovo/products/05c9ea03fb9a1742d1250c7805c3bb382746944bc9915eb892794dac67b4f69a?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🤍",
  },
  {
    id:"l5", brandId:"luca",
    name:"ფისტა (პისტაჩიო)",
    category:"გელატო",
    desc:"სიცილიური ფისტის გელატო — მდიდარი, კაკლოვანი, ნამდვილი იტალიური სტილი.",
    price:"₾6.71", priceNum:6.71,
    image:"https://glovo.dhmedia.io/image/menus-glovo/products/05c9ea03fb9a1742d1250c7805c3bb382746944bc9915eb892794dac67b4f69a?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🟢",
  },
  {
    id:"l6", brandId:"luca",
    name:"ლიმონის სორბე",
    category:"სორბე",
    desc:"სხარტი ლიმონის სორბე — უცხიმო, გამაგრილებელი, სრულად ბუნებრივი.",
    price:"₾6.71", priceNum:6.71,
    image:"https://glovo.dhmedia.io/image/menus-glovo/products/05c9ea03fb9a1742d1250c7805c3bb382746944bc9915eb892794dac67b4f69a?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🍋",
  },
  {
    id:"l7", brandId:"luca",
    name:"ტირამისუ გელატო",
    category:"გელატო",
    desc:"ყავა + მასკარპონე + კაკაო — ყინულოვანი ტირამისუ, სავსე ესპრესოს გემოთი.",
    price:"₾7.50", priceNum:7.50,
    image:"https://glovo.dhmedia.io/image/menus-glovo/products/05c9ea03fb9a1742d1250c7805c3bb382746944bc9915eb892794dac67b4f69a?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"☕",
  },
  {
    id:"l8", brandId:"luca",
    name:"ბურბონ ვანილია",
    category:"გელატო",
    desc:"ბურბონის ვანილიანი გელატო — ნამდვილი ვანილის ხის მარცვლები, ნაღების სიმდიდრე.",
    price:"₾6.71", priceNum:6.71,
    image:"https://glovo.dhmedia.io/image/menus-glovo/products/05c9ea03fb9a1742d1250c7805c3bb382746944bc9915eb892794dac67b4f69a?t=W3sicmVzaXplIjp7Im1vZGUiOiJmaXQiLCJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19XQ==",
    emoji:"🤍",
  },

  /* ────────── PINGO ────────── */
  {
    id:"p1", brandId:"pingo",
    name:"ვანილის გემო",
    category:"ესკიმო",
    desc:"",
    price:"₾1.20", priceNum:1.20,
    image:"pingo_data/images/ვანილის_გემო.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c779f0776ac6.jpg",
    productLink:"https://pingo.ge/ka/product/vanilis-gemo/100/",
    emoji:"🍦",
  },
  {
    id:"p2", brandId:"pingo",
    name:"შოკოლადის ჭიქა",
    category:"ვაფლის ჭიქა",
    desc:"ტრადიციული შოკოლადის ნაყინი ხრაშუნა ვაფლის ჭიქაში.",
    price:"₾1.50", priceNum:1.50,
    image:"pingo_data/images/შოკოლადის_ჭიქა.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c779ec44fe0e.jpg",
    productLink:"https://pingo.ge/ka/product/shokoladis-chiqa/99/",
    emoji:"🍫",
  },
  {
    id:"p3", brandId:"pingo",
    name:"კრემბრულე",
    category:"პლომბირი",
    desc:"კრემბრულეს ნაყინი ვაფლის ჭიქაში — კარამელის ხრაშუნა ქერქით.",
    price:"₾2.50", priceNum:2.50,
    image:"pingo_data/images/კრემბრულე.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c779e822e7bc.jpg",
    productLink:"https://pingo.ge/ka/product/krembrule/98/",
    emoji:"🍮",
  },
  {
    id:"p4", brandId:"pingo",
    name:"ვანილის ნაყინი მარწყვის ჯემით",
    category:"პლომბირი",
    desc:"კლასიკური ვანილის პლომბირი მოტკბო-მომჟავო მარწყვის ჯემით.",
    price:"₾1.50", priceNum:1.50,
    image:"pingo_data/images/ვანილის_ნაყინი_მარწყვის_ჯემით.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c779e3e14465.jpg",
    productLink:"https://pingo.ge/ka/product/vanilis-nayini-marwyvis-jemit/97/",
    emoji:"🍓",
  },
  {
    id:"p5", brandId:"pingo",
    name:"შოკოლადის და ვანილის გემო",
    category:"პლომბირი",
    desc:"ორი კლასიკური გემოს იდეალური შერწყმა ერთ ვაფლის ჭიქაში.",
    price:"₾1.50", priceNum:1.50,
    image:"pingo_data/images/შოკოლადის_და_ვანილის_გემო.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c779daf9b5f2.jpg",
    productLink:"https://pingo.ge/ka/product/shokoladis-da-vanilis-gemo/96/",
    emoji:"🍫",
  },
  {
    id:"p6", brandId:"pingo",
    name:"ესკიმო ტრადიციული რძიანი შოკოლადით",
    category:"ესკიმო",
    desc:"ვანილის ნაყინი ნამდვილი რძიანი შოკოლადის თხელი და ხრაშუნა საფარველით.",
    price:"₾2.50", priceNum:2.50,
    image:"pingo_data/images/ესკიმო_ტრადიციული_რძიანი_შოკოლადით.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c779d345a635.jpg",
    productLink:"https://pingo.ge/ka/product/eskimo-tradiciuli-rdziani-shokoladit/95/",
    emoji:"🍫",
  },
  {
    id:"p7", brandId:"pingo",
    name:"ესკიმო ტრადიციული თხილით",
    category:"ესკიმო",
    desc:"შოკოლადი + თხილი — კრუნჩოვანი, ნამდვილი სიამოვნება.",
    price:"₾2.50", priceNum:2.50,
    image:"pingo_data/images/ესკიმო_ტრადიციული_თხილით.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c779cf2e5d06.jpg",
    productLink:"https://pingo.ge/ka/product/eskimo-tradiciuli-txilit/94/",
    emoji:"🌰",
  },
  {
    id:"p8", brandId:"pingo",
    name:"ესკიმო ტრადიციული შოკოლადით",
    category:"ესკიმო",
    desc:"ვანილი + მბრყოლი შოკოლადის საფარი — გამოუცვლელი კლასიკა.",
    price:"₾2.50", priceNum:2.50,
    image:"pingo_data/images/ესკიმო_ტრადიციული_შოკოლადით.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c779c6d36bab.jpg",
    productLink:"https://pingo.ge/ka/product/eskimo-tradiciuli-shokoladit/93/",
    emoji:"🍫",
  },
  {
    id:"p9", brandId:"pingo",
    name:"სენატორი ვანილით",
    category:"სენდვიჩი",
    desc:"ვანილის ნაყინი ორ ვაფელს შორის — სწრაფი, გემრიელი, იაფი.",
    price:"₾2.00", priceNum:2.00,
    image:"pingo_data/images/სენატორი_ვანილით.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c779bb34af93.jpg",
    productLink:"https://pingo.ge/ka/product/senatori-vanilit/92/",
    emoji:"🍪",
  },
  {
    id:"p10", brandId:"pingo",
    name:"სენატორი კრემბრულე",
    category:"სენდვიჩი",
    desc:"კრემბრულეს ნაყინი ვაფელ სენდვიჩში — დახვეწილი გემო ხელმისაწვდომ ფასად.",
    price:"₾2.00", priceNum:2.00,
    image:"pingo_data/images/სენატორი_კრემბრულე.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c779b688a92e.jpg",
    productLink:"https://pingo.ge/ka/product/senatori-krembrule/91/",
    emoji:"🍪",
  },
  {
    id:"p11", brandId:"pingo",
    name:"პინგოს ბრიკეტი",
    category:"ბრიკეტი",
    desc:"ოქტაგონური ბრიკეტი — ვანილი/შოკოლადი, ეკო-ყუთში. კლასიკური პინგო.",
    price:"₾3.50", priceNum:3.50,
    image:"pingo_data/images/პინგოს_ბრიკეტი.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c779b1a9d70d.jpg",
    productLink:"https://pingo.ge/ka/product/pingos-briketi/90/",
    emoji:"🟦",
  },
  {
    id:"p12", brandId:"pingo",
    name:"საოჯახო, ვანილი გემო",
    category:"საოჯახო",
    desc:"",
    price:"₾12.90", priceNum:12.90,
    image:"pingo_data/images/საოჯახო,_ვანილი_გემო.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c779821ea746.jpg",
    productLink:"https://pingo.ge/ka/product/saojaxo-vanili-gemo/85/",
    emoji:"🍦",
  },
  {
    id:"p13", brandId:"pingo",
    name:"საოჯახო, შოკოლადით",
    category:"საოჯახო",
    desc:"შოკოლადის ნაყინი ოჯახური ყუთში — ყველა შოკოლადის მოყვარულისთვის.",
    price:"₾4.50", priceNum:4.50,
    image:"pingo_data/images/საოჯახო,_შოკოლადით.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c7797e212265.jpg",
    productLink:"https://pingo.ge/ka/product/saojaxo-shokoladit/84/",
    emoji:"🍫",
  },
  {
    id:"p14", brandId:"pingo",
    name:"საოჯახო, მარწყვის ჯემით",
    category:"საოჯახო",
    desc:"",
    price:"₾7.80", priceNum:7.80,
    image:"pingo_data/images/საოჯახო,_მარწყვის_ჯემით.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c7797acd6db6.jpg",
    productLink:"https://pingo.ge/ka/product/saojaxo-marwyvis-jemit/83/",
    emoji:"🍓",
  },
  {
    id:"p15", brandId:"pingo",
    name:"საოჯახო, ვანილის და შოკოლადის გემო",
    category:"საოჯახო",
    desc:"ოჯახური ფორმატი მათთვის, ვისაც ერთდროულად ვანილიც და შოკოლადიც უყვარს.",
    price:"₾12.90", priceNum:12.90,
    image:"pingo_data/images/საოჯახო,_ვანილის_და_შოკოლადის_გემო.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c779772eb90f.jpg",
    productLink:"https://pingo.ge/ka/product/saojaxo-vanilis-da-shokoladis-gemo/82/",
    emoji:"🍦",
  },
  {
    id:"p16", brandId:"pingo",
    name:"საოჯახო, 0% შაქარი ვანილის გემო",
    category:"საოჯახო",
    desc:"შაქრის გარეშე ვანილის ნაყინი — ჯანსაღი ალტერნატივა, სრული გემო.",
    price:"₾5.00", priceNum:5.00,
    image:"pingo_data/images/საოჯახო,_0%_შაქარი_ვანილის_გემო.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c7796e5824d9.jpg",
    productLink:"https://pingo.ge/ka/product/saojaxo-0-shaqari-vanilis-gemo/81/",
    emoji:"💙",
  },
  {
    id:"p17", brandId:"pingo",
    name:"საოჯახო, ვანილის გემო 500 მლ",
    category:"საოჯახო",
    desc:"ნაზი ვანილის ნაყინი 500 მლ — ოჯახური ულუფა ყველა ოჯახისთვის.",
    price:"₾4.50", priceNum:4.50,
    image:"pingo_data/images/საოჯახო,_ვანილის_გემო_500_მლ.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c7795e869de2.jpg",
    productLink:"https://pingo.ge/ka/product/saojaxo-vanilis-gemo-500-ml/80/",
    emoji:"🍦",
  },
  {
    id:"p18", brandId:"pingo",
    name:"საოჯახო, კაკაოს ნაყინი 500 მლ",
    category:"საოჯახო",
    desc:"",
    price:"₾7.80", priceNum:7.80,
    image:"pingo_data/images/საოჯახო,_კაკაოს_ნაყინი_500_მლ.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c77958975ae7.jpg",
    productLink:"https://pingo.ge/ka/product/saojaxo-kakaos-nayini-500-ml/79/",
    emoji:"🍫",
  },
  {
    id:"p19", brandId:"pingo",
    name:"საოჯახო, ვანილის გემო 5000 მლ",
    category:"საოჯახო",
    desc:"გიგანტური 5 ლიტრიანი მოცულობა — იდეალურია წვეულებებისა და დიდი ოჯახებისთვის.",
    price:"₾45.00", priceNum:45.00,
    image:"pingo_data/images/საოჯახო,_ვანილის_გემო_5000_მლ.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c77952cde4e3.jpg",
    productLink:"https://pingo.ge/ka/product/saojaxo-vanilis-gemo-5000-ml/78/",
    emoji:"🍦",
  },
  {
    id:"p20", brandId:"pingo",
    name:"ბეგი ვანილი გემო",
    category:"საოჯახო",
    desc:"ბეგის ხაზის საოჯახო ვანილის ნაყინი — ბიუჯეტური და გემრიელი.",
    price:"₾6.50", priceNum:6.50,
    image:"pingo_data/images/ბეგი_ვანილი_გემო.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c77949d72d92.jpg",
    productLink:"https://pingo.ge/ka/product/begi-vanili-gemo/77/",
    emoji:"🍦",
  },
  {
    id:"p21", brandId:"pingo",
    name:"ბეგი კაკაოს ნაყინი",
    category:"საოჯახო",
    desc:"ბეგის ხაზის საოჯახო კაკაოს ნაყინი შოკოლადის მოყვარულთათვის.",
    price:"₾6.50", priceNum:6.50,
    image:"pingo_data/images/ბეგი_კაკაოს_ნაყინი.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c77944cca1be.jpg",
    productLink:"https://pingo.ge/ka/product/begi-kakaos-nayini/76/",
    emoji:"🍫",
  },
  {
    id:"p22", brandId:"pingo",
    name:"ბეგი ვანილის და შოკოლადის გემო",
    category:"საოჯახო",
    desc:"ვანილისა და შოკოლადის მიქსი ბეგის საოჯახო ყუთში.",
    price:"₾6.50", priceNum:6.50,
    image:"pingo_data/images/ბეგი_ვანილის_და_შოკოლადის_გემო.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c7793f4e780a.jpg",
    productLink:"https://pingo.ge/ka/product/begi-vanilis-da-shokoladis-gemo/75/",
    emoji:"🍫",
  },
  {
    id:"p23", brandId:"pingo",
    name:"ბეგი ჭიქაში, მარწყვის ჯემით",
    category:"ვაფლის ჭიქა",
    desc:"ბეგის ბიუჯეტური ვაფლის ჭიქა მარწყვის ტკბილი ჯემით.",
    price:"₾1.00", priceNum:1.00,
    image:"pingo_data/images/ბეგი_ჭიქაში,_მარწყვის_ჯემით.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c7790a259da6.jpg",
    productLink:"https://pingo.ge/ka/product/begi-chiqashi-marwyvis-jemit/74/",
    emoji:"🍓",
  },
  {
    id:"p24", brandId:"pingo",
    name:"ბეგი, ესკიმო ვანილის გემოთი",
    category:"ესკიმო",
    desc:"ბეგის კლასიკური ვანილის ესკიმო ხელმისაწვდომ ფასად.",
    price:"₾1.20", priceNum:1.20,
    image:"pingo_data/images/ბეგი,_ესკიმო_ვანილის_გემოთი.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c778f259ac47.jpg",
    productLink:"https://pingo.ge/ka/product/begi-eskimo-vanilis-gemoti/72/",
    emoji:"🍦",
  },
  {
    id:"p25", brandId:"pingo",
    name:"ბეგი ესკიმო შოკოლადით",
    category:"ესკიმო",
    desc:"ბეგის შოკოლადის ესკიმო მდიდარი კაკაოს გემოთი.",
    price:"₾1.20", priceNum:1.20,
    image:"pingo_data/images/ბეგი_ესკიმო_შოკოლადით.jpg",
    imageRemote:"https://pingo.ge/uploads/products/5c778e954e8f9.jpg",
    productLink:"https://pingo.ge/ka/product/begi-eskimo-shokoladit/71/",
    emoji:"🍫",
  },
  /* ────────── LIDER ────────── */
  {
    id:"d1", brandId:"lider",
    name:"პლომბირი კლასიკური",
    category:"პლომბირი",
    desc:"ქართული ნოსტალგიის გემო — სქელი, კრემოვანი, ბუნებრივი. 100 მლ.",
    price:"₾2.00", priceNum:2.00,
    image:"",
    emoji:"🍦",
  },
  {
    id:"d2", brandId:"lider",
    name:"ესკიმო შოკოლადით",
    category:"ესკიმო",
    desc:"ვანილის ნაყინი შოკოლადის საფარველით — ორიგინალური ქართული ესკიმო.",
    price:"₾2.50", priceNum:2.50,
    image:"",
    emoji:"🍫",
  },
  {
    id:"d3", brandId:"lider",
    name:"ვაფლის ჭიქა მარწყვით",
    category:"ვაფლის ჭიქა",
    desc:"მარწყვის ნაყინი ხრაშუნა ვაფელში — მარტივი, ნაცნობი, ნამდვილი.",
    price:"₾2.20", priceNum:2.20,
    image:"",
    emoji:"🍓",
  },
  {
    id:"d4", brandId:"lider",
    name:"ვანილის ტომარა 0.5ლ",
    category:"საოჯახო",
    desc:"კლასიკური ვანილის ნაყინი 500 მლ — ყველაზე ხელმისაწვდომი ოჯახური ყუთი.",
    price:"₾3.50", priceNum:3.50,
    image:"",
    emoji:"🍦",
  },
  {
    id:"d5", brandId:"lider",
    name:"ყავის ნაყინი",
    category:"პლომბირი",
    desc:"ყავის კრემი ნაყინის სახით — გამაგრილებელი საუზმის ალტერნატივა.",
    price:"₾2.50", priceNum:2.50,
    image:"",
    emoji:"☕",
  },
  {
    id:"d6", brandId:"lider",
    name:"ნაყინი კაკლით",
    category:"ესკიმო",
    desc:"ვანილი + კაკლის ნაჭრებიანი შოკოლადის საფარი — მაძღარი გემო.",
    price:"₾3.00", priceNum:3.00,
    image:"",
    emoji:"🌰",
  },
  {
    id:"d7", brandId:"lider",
    name:"ხილის სორბე",
    category:"სორბე",
    desc:"შერეული ხილის სორბე — მსუბუქი, უცხიმო, ივერიული ხილის გემო.",
    price:"₾2.00", priceNum:2.00,
    image:"",
    emoji:"🍑",
  },
  {
    id:"d8", brandId:"lider",
    name:"კარამელის ტომარა 1ლ",
    category:"საოჯახო",
    desc:"კარამელის ნაყინი 1 ლიტრიანი ყუთში — ყველაზე იაფი დიდი ფორმატი.",
    price:"₾4.00", priceNum:4.00,
    image:"",
    emoji:"🍮",
  }
];

/* ════════════════════════════════
   ③ FILTER STATE
   ════════════════════════════════ */
const state = { brand:"all", category:"all", price:"all", search:"" };

/* ════════════════════════════════
   ④ RENDER BRAND CARDS
   ════════════════════════════════ */
function renderBrands() {
  const row = document.getElementById("brandsRow");
  brands.forEach((b, i) => {
    const card = document.createElement("div");
    card.className = `brand-card ${b.cardClass}`;
    card.style.animationDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="brand-emoji">${b.emoji}</div>
      <div class="brand-card-name">${b.name}</div>
      <span class="brand-card-tag ${b.tagClass}">${b.tag}</span>
      <p class="brand-card-desc">${b.desc}</p>
    `;
    row.appendChild(card);
  });
}

/* ════════════════════════════════
   ⑤ BUILD FILTER PILLS
   ════════════════════════════════ */
function buildPills() {
  const brandPills = document.getElementById("pillsBrand");
  brands.forEach(b => {
    const btn = document.createElement("button");
    btn.className = "pill"; btn.dataset.key = "brand"; btn.dataset.val = b.id;
    btn.textContent = b.name;
    brandPills.appendChild(btn);
  });

  const catPills = document.getElementById("pillsCat");
  const cats = [...new Set(products.map(p => p.category))].sort();
  cats.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "pill"; btn.dataset.key = "category"; btn.dataset.val = cat;
    btn.textContent = cat;
    catPills.appendChild(btn);
  });

  // Attach listeners to all pill groups
  document.querySelectorAll(".pill").forEach(btn => {
    btn.addEventListener("click", handlePill);
  });
}

function handlePill(e) {
  const btn = e.currentTarget;
  const key = btn.dataset.key;
  const val = btn.dataset.val;
  const group = btn.closest(".pills");
  group.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
  btn.classList.add("active");
  state[key] = val;
  renderProducts();
}

/* ════════════════════════════════
   ⑥ SEARCH
   ════════════════════════════════ */
function setupSearch() {
  const input = document.getElementById("searchInput");
  const clear = document.getElementById("clearBtn");
  input.addEventListener("input", () => {
    state.search = input.value.trim().toLowerCase();
    clear.style.display = state.search ? "block" : "none";
    renderProducts();
  });
  clear.addEventListener("click", () => {
    input.value = ""; state.search = "";
    clear.style.display = "none";
    renderProducts();
  });
}

/* ════════════════════════════════
   ⑦ FILTER PRODUCTS
   ════════════════════════════════ */
function filterProducts() {
  return products.filter(p => {
    if (state.brand !== "all" && p.brandId !== state.brand) return false;
    if (state.category !== "all" && p.category !== state.category) return false;
    if (state.price !== "all") {
      if (typeof p.priceNum !== "number") return false;
      if (state.price === "low"  && p.priceNum >= 5)  return false;
      if (state.price === "mid"  && (p.priceNum < 5 || p.priceNum >= 10)) return false;
      if (state.price === "high" && p.priceNum < 10)  return false;
    }
    if (state.search) {
      const hay = (p.name + " " + p.desc + " " + p.brandId + " " + p.category + " " + (p.glovoCategory || "")).toLowerCase();
      if (!hay.includes(state.search)) return false;
    }
    return true;
  });
}

/* ════════════════════════════════
   ⑧ RENDER PRODUCT GRID
   ════════════════════════════════ */
function renderProducts() {
  const filtered = filterProducts();
  const grid = document.getElementById("productGrid");
  const noRes = document.getElementById("noResults");
  const count = document.getElementById("resultsCount");

  grid.innerHTML = "";

  count.textContent = filtered.length === products.length
    ? `სულ ${products.length} პროდუქტი`
    : `ნაჩვენებია ${filtered.length} / ${products.length} პროდუქტი`;

  if (filtered.length === 0) { noRes.style.display = "block"; return; }
  noRes.style.display = "none";

  filtered.forEach((p, idx) => {
    const brand = brands.find(b => b.id === p.brandId);
    const card = document.createElement("div");
    card.className = "product-card";
    card.style.animationDelay = `${(idx % 8) * 0.05}s`;

    const hasImage = p.image && p.image.length > 0;

    card.innerHTML = `
      <div class="pc-img-wrap">
        ${hasImage
          ? `<img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'"/>`
          : ""}
        <div class="pc-placeholder">${p.emoji}</div>
      </div>
      <div class="pc-stripe" style="background:${brand.color}"></div>
      <div class="pc-body">
        <span class="pc-brand-tag ${brand.tagClass}">${brand.name}</span>
        <h3 class="pc-name">${p.name}</h3>
        <p class="pc-desc">${p.desc}</p>
        <div class="pc-footer">
          <span class="pc-price">${p.price}</span>
          <span class="pc-cat">${p.category}</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ════════════════════════════════
   ⑨ RESET ALL
   ════════════════════════════════ */
function resetAll() {
  state.brand = "all"; state.category = "all"; state.price = "all"; state.search = "";
  document.getElementById("searchInput").value = "";
  document.getElementById("clearBtn").style.display = "none";
  document.querySelectorAll(".pill").forEach(p => {
    p.classList.toggle("active", p.dataset.val === "all");
  });
  renderProducts();
}

/* ════════════════════════════════
   ⑩ NAVBAR scroll effect
   ════════════════════════════════ */
function setupNavbar() {
  const navbar = document.getElementById("navbar");
  const hbg = document.getElementById("hamburger");
  const links = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive:true });

  hbg.addEventListener("click", () => {
    hbg.classList.toggle("open"); links.classList.toggle("open");
    document.body.style.overflow = links.classList.contains("open") ? "hidden" : "";
  });
  links.querySelectorAll(".nav-link").forEach(l => l.addEventListener("click", () => {
    hbg.classList.remove("open"); links.classList.remove("open");
    document.body.style.overflow = "";
  }));
}

/* ════════════════════════════════
   ⑪ ACTIVE NAV LINK
   ════════════════════════════════ */
function setupActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 200) current = s.id; });
    navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${current}`));
  }, { passive:true });
}
const container = document.getElementById("brandsRow");

function renderBrands() {
  container.innerHTML = "";

  brands.forEach((brand) => {
    container.innerHTML += `
      <div class="brand-card ${brand.cardClass}">
        <img src="${brand.image}" alt="${brand.name}" style="width:80px; margin-bottom:10px;" />
        <h3>${brand.name}</h3>
        <p>${brand.tag}</p>
      </div>
    `;
  });
}

renderBrands();
/* ════════════════════════════════
   ⑫ INIT
   ════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  setupNavbar();
  setupActiveNav();
  renderBrands();
  buildPills();
  setupSearch();
  renderProducts();
});
