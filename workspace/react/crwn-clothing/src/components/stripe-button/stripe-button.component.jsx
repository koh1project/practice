import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    // eslint-disable-next-line max-len
    'pk_test_51I3Ch4FXjg2QA0jad8SxJv6vuCnZAcr2SAyiucHFTDwqX8V0QzEKAS8lxecEHrJJk5N3f6n1PHKSctSHi6UsTdki00aQUJKIgs';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Application Name"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`You total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
