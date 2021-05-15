import React from "react";
import StripeCheckout from "react-stripe-checkout";
import CustomButton from "../../components/custom-button/custom-button.component";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IrM6SLG0zGGJtfGucBaMIOsQTr5Qy0W0vn6duxzsY2veO5NnCpRIcivdaQFJpyyvezokicNm6E4bHE20Nb4TzFl00OhEXVVVo";
  const onToken = (token) => {
    console.log(token);
  };

  return (
    <StripeCheckout
      name="Crawn Clothing"
      description="Best online shopping platform"
      billingAddress
      shippingAddress
      amount={priceForStripe}
      token={onToken}
      panelLabel="Pay Now"
      stripeKey={publishableKey}
    >
      <CustomButton>Pay Now</CustomButton>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;
