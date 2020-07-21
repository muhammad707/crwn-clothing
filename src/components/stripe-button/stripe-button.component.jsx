import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_yQ7c5ra5QYC2qpqKhJtBAfN5";

  const onToken = (token) => {
    console.log(token);
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
