import React from 'react'

const Home = () => {
  return (
          <div className='row'>
            <div className='hero-container'>
              <div className='hero-content'>
                <h5 className='content mb-3'>
                  Fastest Food Delivery
                </h5>
                <h1 className='mb-4 hero_title'>
                  <span>Hungry? </span>
                  Just order
                  <br/>
                  food will be at <span>your doorstep</span>
                </h1>
                <div className='hero_btns'>
                  <button type ='button' className='order-btn'>
                    <a href='/menu' rel='noreferrer noopener nofollow' style={{"textDecoration":"none", "color":"white"}}>Order Now</a></button>
                </div>  
              </div>
              <div className='hero-img'>
                <img src='https://img.freepik.com/premium-vector/delivery-man-with-face-mask-delivering-order-motorcycle_154993-160.jpg?w=996' alt='img' className='w-100'></img>
              </div>
            </div>
          </div>
  )
}

export default Home
