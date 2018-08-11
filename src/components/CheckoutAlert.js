import {Alert} from "react-native";

export const CheckoutAlert = (totalPrice, onOkayPressed) => Alert.alert(
  'Ready to checkout?',
  `The total price is ${totalPrice}`,
  [{
    text: 'Cancel',
    style: 'cancel'
  }, {
    text: 'OK',
    onPress: () => onOkayPressed()
  }]
);