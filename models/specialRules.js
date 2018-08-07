import {products} from "./products";

export const specialRules = {
  'unilever': [{
    message: "Gets a for 3 for 2 deal on Classic Ads",
    criteria: (items) => {
      return items.filter(item => item.key === "classic").length >= 2
    },
    discount: () => {
      return null
    },
    freeItems: [{
      type: 'product',
      key: 'classic',
      quantity: 1
    }]
  }],
  'apple': [{
    message: "Gets a discount on Standout Ads where the price drops to $299.99 per ad",
    criteria: (items) => {
      return true
    },
    discount: (items) => {
      return items.filter(item => item.key === "standout").length
    },
    freeItems: null
  }],
  'nike': [{
    message: "Gets a discount on Premium Ads where 4 or more are purchased. The price drops to $379.99 per ad",
    criteria: (items) => {
      return items.filter(item => item.key === "premium").length >= 4
    },
    discount: (items) => {
      return items.filter(item => item.key === "premium").length * (products.find(product => product.key === "premium").price - 379.99)
    },
    freeItems: null
  }],
  'ford': [{
    message: "Gets a 5 for 4 deal on Classic Ads",
    criteria: (items) => {
      return items.filter(item => item.key === "classic").length >= 4
    },
    discount: (items) => {
      return null
    },
    freeItems: [{
      type: 'product',
      key: 'classic',
      quantity: 1
    }]
  }, {
    message: "Gets a discount on Standout Ads where the price drops to $309.99 per ad",
    criteria: (items) => {
      return true
    },
    discount: (items) => {
      return items.filter(item => item.key === "standout").length * (products.find(product => product.key === "premium").price - 309.99)
    },
    freeItems: null
  }, {
    message: "Gets a discount on Premium Ads when 3 or more are purchased. The price drops to $389.99 per ad",
    criteria: (items) => {
      return items.filter(item => item.key === "premium").length >= 3
    },
    discount: (items) => {
      return items.filter(item => item.key === "premium").length * (products.find(product => product.key === "premium").price - 389.99)
    },
    freeItems: null
  }]
};