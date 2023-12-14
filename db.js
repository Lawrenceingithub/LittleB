const myList = [
  {
    id: 1,
    materialname: "明治牛奶-1000ml",
    type: "奶製品類",
    totalprice: 27,
    totalweight: 1000,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 2,
    materialname: "美素佳兒金裝-3",
    type: "奶製品類",
    totalprice: 230,
    totalweight: 900,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 3,
    materialname: "Anchor-Whipping Cream-1000ml",
    type: "奶製品類",
    totalprice: 67.9,
    totalweight: 1000,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 4,
    materialname: "Anchor安佳黃油-227g",
    type: "奶製品類",
    totalprice: 28.5,
    totalweight: 227,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 6,
    materialname: "日本海藻糖-150g",
    type: "其他",
    totalprice: 18,
    totalweight: 150,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 5,
    materialname: "丘比沙律醬香甜口味-300g",
    type: "其他",
    totalprice: 19.9,
    totalweight: 300,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 7,
    materialname: "丘比沙律醬蛋黃口味-300g",
    type: "其他",
    totalprice: 19.9,
    totalweight: 300,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 8,
    materialname: "特幼糖霜-454g",
    type: "其他",
    totalprice: 15.9,
    totalweight: 454,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 9,
    materialname: "Myers's rum-60ml",
    type: "其他",
    totalprice: 19,
    totalweight: 60,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 10,
    materialname: "獅球嘜粟米油-900ml",
    type: "油類",
    totalprice: 107,
    totalweight: 900,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 11,
    materialname: "天然草莓粉-50g",
    type: "烘焙粉",
    totalprice: 30,
    totalweight: 50,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 12,
    materialname: "天然藍莓粉-50g",
    type: "烘焙粉",
    totalprice: 34,
    totalweight: 50,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 13,
    materialname: "日本凱薩琳（流淚）高筋麵粉-1KG",
    type: "烘焙粉",
    totalprice: 38,
    totalweight: 1000,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 14,
    materialname: "日清山茶高筋粉-1KG",
    type: "烘焙粉",
    totalprice: 30,
    totalweight: 1000,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 15,
    materialname: "伯爵茶粉-20g",
    type: "烘焙粉",
    totalprice: 18,
    totalweight: 20,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 16,
    materialname: "杏仁粉-500g",
    type: "烘焙粉",
    totalprice: 146,
    totalweight: 500,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 17,
    materialname: "泡打粉-30g",
    type: "烘焙粉",
    totalprice: 8,
    totalweight: 30,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 18,
    materialname: "金像牌-頂級麵包粉-1KG",
    type: "烘焙粉",
    totalprice: 18,
    totalweight: 1000,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 19,
    materialname: "昭和製粉-先鋒特高筋-1KG",
    type: "烘焙粉",
    totalprice: 32,
    totalweight: 1000,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 20,
    materialname: "烘焙用奶粉-500g",
    type: "烘焙粉",
    totalprice: 48,
    totalweight: 500,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 21,
    materialname: "特級山茶花高筋麵粉-1KG",
    type: "烘焙粉",
    totalprice: 40,
    totalweight: 1000,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 22,
    materialname: "粟粉-420g",
    type: "烘焙粉",
    totalprice: 24.8,
    totalweight: 420,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 23,
    materialname: "黑芝麻粉-250g",
    type: "烘焙粉",
    totalprice: 0,
    totalweight: 250,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 24,
    materialname: "蜜臘-20g",
    type: "烘焙粉",
    totalprice: 22,
    totalweight: 20,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 25,
    materialname: "酵母粉-125g",
    type: "烘焙粉",
    totalprice: 26.8,
    totalweight: 125,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 26,
    materialname: "覆盆子粉-30g",
    type: "烘焙粉",
    totalprice: 26,
    totalweight: 30,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 27,
    materialname: "士多啤梨醬",
    type: "蔬果類",
    totalprice: 0,
    totalweight: 100,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 28,
    materialname: "開心果脆脆醬-250g",
    type: "蔬果類",
    totalprice: 60,
    totalweight: 250,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 29,
    materialname: "藍莓-1盒",
    type: "蔬果類",
    totalprice: 48,
    totalweight: 1,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 30,
    materialname: "藍莓醬-284g",
    type: "蔬果類",
    totalprice: 35.5,
    totalweight: 284,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 31,
    materialname: "十字牌百香果酸奶-90g",
    type: "奶製品類",
    totalprice: 9.5,
    totalweight: 90,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 32,
    materialname: "雀巢牌藍莓酸奶-90g",
    type: "奶製品類",
    totalprice: 9.5,
    totalweight: 140,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 33,
    materialname: "檸檬-1個",
    type: "蔬果類",
    totalprice: 2.5,
    totalweight: 1,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 34,
    materialname: "百福豆腐-250g",
    type: "蔬果類",
    totalprice: 13.5,
    totalweight: 250,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 35,
    materialname: "香蕉-5條",
    type: "蔬果類",
    totalprice: 20.8,
    totalweight: 5,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 36,
    materialname: "風行老酸奶-3個(180克/個)",
    type: "奶製品類",
    totalprice: 28.8,
    totalweight: 3,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 37,
    materialname: "太古砂糖-800g",
    type: "其他",
    totalprice: 12.5,
    totalweight: 800,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 38,
    materialname: "伊美瑞士乳酪-100g",
    type: "奶製品類",
    totalprice: 10,
    totalweight: 100,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 39,
    materialname: "鑽石牌低筋面粉-908g",
    type: "烘焙粉",
    totalprice: 20.5,
    totalweight: 908,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 40,
    materialname: "理想牌泡打粉-56g",
    type: "烘焙粉",
    totalprice: 9.5,
    totalweight: 56,
    image: '',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
];

myList.forEach(item => {
  item.image = `assets/${item.type}/${item.materialname}.jpeg`;
});