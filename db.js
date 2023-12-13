const myList = [
  {
    id: 1,
    materialname: "明治牛奶-1000ml",
    type: "奶類製品",
    totalprice: 27,
    totalweight: 1000,
    image: 'assets/奶製品類/明治牛奶-1000ml.jpeg',
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 2,
    materialname: "美素佳兒金裝-3",
    type: "奶類製品",
    totalprice: 15,
    totalweight: 3,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 3,
    materialname: "Anchor-Wipping Cream-1000ml",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 4,
    materialname: "Anchor安佳黃油-227g",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 6,
    materialname: "日本海藻糖-150g",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 5,
    materialname: "丘比沙律醬香甜口味-300g",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 7,
    materialname: "丘比沙律醬蛋黃口味-300g",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 8,
    materialname: "特幼糖霜-454g",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 9,
    materialname: "Myers's rum-60ml",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 10,
    materialname: "獅球嘜粟米油-900ml",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 11,
    materialname: "天然草莓粉-50g",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 12,
    materialname: "天然藍莓粉-50g",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 13,
    materialname: "日本凱薩琳（流淚）高筋麵粉-1KG",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 14,
    materialname: "日清山茶高筋粉-1KG",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 15,
    materialname: "伯爵茶粉-20g",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 16,
    materialname: "杏仁粉-500g",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 17,
    materialname: "泡打粉-30g",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 18,
    materialname: "金像牌-頂級麵包粉-1KG",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 19,
    materialname: "昭和製粉-先鋒特高筋-1KG",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 20,
    materialname: "烘焙用奶粉-500g",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 21,
    materialname: "特級山茶花高筋麵粉-1KG",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 22,
    materialname: "粟粉-420g",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 23,
    materialname: "黑芝麻粉-250g",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 24,
    materialname: "蜜臘-20g",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 25,
    materialname: "酵母粉-125g",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 26,
    materialname: "覆盆子粉-30g",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 27,
    materialname: "士多啤梨醬",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 28,
    materialname: "開心果脆脆醬-250g",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 29,
    materialname: "藍莓",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
  {
    id: 30,
    materialname: "藍莓醬-284g",
    type: "奶類製品",
    totalprice: 20,
    totalweight: 8,
    image: `assets/${this.materialname}.jpeg`,
    getPricePerWeight: function () {
      return this.totalprice / this.totalweight;
    },
  },
];
