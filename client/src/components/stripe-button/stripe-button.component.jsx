import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_yQ7c5ra5QYC2qpqKhJtBAfN5";

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      }
    }).then(response => {
      alert('Payment successful')
    }).catch(error => {
      console.log('Payment error')
    })
  };

  return (
    <StripeCheckout
      label={"Pay now"}
      name={"CRWN Clothing Ltd."}
      billingAddress
      shippingAddress
      image={"https://svgshare.com/i/CUz.svg"}
      description={`Your total is ${price}`}
      amount={priceForStripe}
      token={onToken}
      panelLabel={"Pay Now"}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
