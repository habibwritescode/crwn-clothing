import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HQJxUHvo9nRbsnAVx3OEpKQeu95qG0yWsasewznm9M1DRUEI77by3R1xN9LjjLoAmW65q8pty14w0BxmUxB0f8300AEYTeRk1';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
            .then(response => {
                alert('Payment successful');
            })
            .catch(error => {
                console.log('Payment error: ', JSON.parse(error));
                alert('There was an issue with your payment. Please make sure you are using the provided credit card.');
            });
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='MUMU Boutique'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton