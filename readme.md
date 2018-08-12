# Checkout (React Native)

## Feature and demo videos

### A checkout system

This project is to demo how to use react native to create a checkout system. This
system allows users to pick any available products and checkout in the end.

Since there is no requirements on the application flow, I assumed that user is an
admin that can use any customers in the system. User will have to first pick a 
customer and then get into the cart page, this allows the system to pick the rules
that can apply to the customer to generate discounts and free items.

### Videos from Android and iOS

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/Bka-78pe2cE/0.jpg)](https://www.youtube.com/watch?v=Bka-78pe2cE)
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/whVzfG0HHog/0.jpg)](https://www.youtube.com/watch?v=whVzfG0HHog)

## How to use project

### Install NodeJs, checkout and run project

Make sure you have installed [NodeJs](https://nodejs.org), and then run:

```sh
git clone git@github.com:nickwph/checkout-reactnative.git
cd checkout-reactnative
npm install
npm start
```
## Architecture

### Pages

- `Purchase history`: this page shows the records of the previous checkouts. Time and the customer 
account used will be shown
- `Customer selection`: currently 4 customers can be chosen from - Unilever, Apple, Nike and Ford. Choosing
any of them will produce different discounts and free items.
- `Cart`: this is the cart that contains the products that you picked
- `Product selection`: the pge that we can select products and put into cart

### Local data

Since there is no requirements on making backends, a set of local data is put into 
`/models` directory. 

- `customers`: data of all customers with keys
- `products`: data of all products that we can put into the cart
- `rules`: data of the special rules that customers can get for discounts and free items

### Build with React Native

This project is generated using the react native app tool 
[create-react-native-app](https://github.com/react-community/create-react-native-app).

### Use of redux

Reducers: act as the calculation models for different data and stored in `/reducers/`

- `cartReducer`: model to calculate cart changes, discounts and free items
- `customerReducer`: model to provide customer data
- `productReducer`: model to provide product data
- `recrodReducer`: model to store previous completed checkout
- `ruleReducer`: model to provide rule data
- `sessionReducer`: model to store the data of the current session, e.g. selected customer key

Actions: allow different components to send commands to reducers and stored in `/actions`

- `cartActions`: allow user to add product to cart, or clear cart
- `recordActions`: allow user to add a completed cart to records
- `sessionActions`: allow user to set the current selected customer

### Logic to calculate cart changes and achieve discounts and free items

All logic to calculate discount and free items can be ground in `/models/rules`. Whenever
that there are item changes in the cart, product keys will be sent to the reducer 
`/reducers/ruleReducer` and trigger to recalculate the price, discount and free items.

The reducer will first filter rules that applies to the selected customer, and then 
find out which rules have their requirements met. Discounts and free items will be 
set to the reducer state after that.
