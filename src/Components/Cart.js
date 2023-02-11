import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import paypal from 'paypal-checkout';

const Cart = ({ cartItems, removeFromCart }) => {
  const [total, setTotal] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += item.price;
    });
    setTotal(totalPrice);
  }, [cartItems]);

  const handlePayment = () => {
    try {
      const client = paypal.generateClient({
        clientId: 'AW2LOwyADCvK3vbuXw4qGiSemgESfobSLh3C89U0b2KyKXPQSSzhPmsxQngZhcbD1F8B9EYTQd60DO7s',
        secret: 'EHC1svI9Yw_5ue6OR5HRpaLnc6lXer1um63hWawjMkREeYVXtbE-pTkzTkIwdbVwIis-5JLJGSQz9bxo'
      
      });
  
      client.checkout.setup('container-element-id', {
        environment: 'sandbox', // or 'production'
        payment: () => {
          return client.request({
            method: 'post',
            url: '/checkout/api/paypal/payment/create/',
            data: {
              amount: total
            }
          });
        },
        onAuthorize: (data, actions) => {
          return actions.payment.execute().then(function(paymentData) {
            // You can access the payment details here
            console.log(paymentData);
            alert(`Payment of $${total} was successful!`);
          });
        }
      });

      client.checkout.initXO();
    } catch (error) {
      setError("Your payment was unsuccessful!!!")
    }
  };

  

  return (
    <div className="container-fluid">
      <div className='cart-container'>
        <div className="grid">
          {
            cartItems.map((food) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src={food.imageUrl} />
                  <Card.Body>
                    <Card.Title>{food.item_name}</Card.Title>
                    <Card.Text>Price: {food.price}</Card.Text>
                    <Button variant='danger' onClick={() => removeFromCart(food)}>Remove from Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </div>
      </div>
      <div className='payment-container'>
        <p>Total: ${total}</p>
        {error && <p>{error}</p>}
        <Button variant='primary' onClick={handlePayment}>Pay</Button>
      </div>
    </div>
  )
}

export default Cart;
