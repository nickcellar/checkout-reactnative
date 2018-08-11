import {products} from "./products";

export const rules = [{
  key: 1,
  customerKey: 'unilever',
  message: "Gets a for 3 for 2 deal on Classic Ads",
  criteria: (productKeys) => {
    return productKeys.filter(key => key === "classic").length >= 2
  },
  discount: null,
  freeItem: {
    type: 'product',
    key: 'classic',
    message: 'Free classic ad',
    quantity: 1
  }
}, {
  key: 2,
  customerKey: 'apple',
  message: "Gets a discount on Standout Ads where the price drops to $299.99 per ad",
  criteria: (productKeys) => {
    return true
  },
  discount: (productKeys) => {
    return productKeys.filter(key => key === "standout").length * (products.find(product => product.key === "standout").price - 299.99)
  },
  freeItem: null
}, {
  key: 3,
  customerKey: 'nike',
  message: "Gets a discount on Premium Ads where 4 or more are purchased. The price drops to $379.99 per ad",
  criteria: (productKeys) => {
    return productKeys.filter(key => key === "premium").length >= 4
  },
  discount: (productKeys) => {
    return productKeys.filter(key => key === "premium").length * (products.find(product => product.key === "premium").price - 379.99)
  },
  freeItem: null
}, {
  key: 4,
  customerKey: 'ford',
  message: "Gets a 5 for 4 deal on Classic Ads",
  criteria: (productKeys) => {
    return productKeys.filter(key => key === "classic").length >= 4
  },
  discount: null,
  freeItem: {
    type: 'product',
    key: 'classic',
    message: 'Free classic ad',
    quantity: 1
  }
}, {
  key: 5,
  customerKey: 'ford',
  message: "Gets a discount on Standout Ads where the price drops to $309.99 per ad",
  criteria: (productKeys) => {
    return true
  },
  discount: (productKeys) => {
    return productKeys.filter(key => key === "standout").length * (products.find(product => product.key === "premium").price - 309.99)
  },
  freeItem: null
}, {
  message: "Gets a discount on Premium Ads when 3 or more are purchased. The price drops to $389.99 per ad",
  criteria: (productKeys) => {
    return productKeys.filter(key => key === "premium").length >= 3
  },
  discount: (productKeys) => {
    return productKeys.filter(key => key === "premium").length * (products.find(product => product.key === "premium").price - 389.99)
  },
  freeItem: null
}];