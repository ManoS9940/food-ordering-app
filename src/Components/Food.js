import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

const Food = ({ addToCart }) => {

  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    const getFood = async () => {
      var res = await axios.get('https://food-app-api-6ykw.onrender.com/api/auth/getFoods');
      console.log(res)
      setFoodList(res.data.getfood)
    }
    getFood();
  }, [])

  return (
    <div className="container-fluid">
      <div className='food-container'>
        <div className="grid">
          {
            foodList.map((food) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src={food.imageUrl} />
                  <Card.Body>
                    <Card.Title>{food.item_name}</Card.Title>
                    <Card.Text>Price: {food.price}</Card.Text>
                    <Button variant='danger' onClick={() => addToCart(food)}>Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Food;
