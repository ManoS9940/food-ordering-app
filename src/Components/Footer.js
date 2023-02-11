import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className='container'>
            <div className="row">
                <div className='footer-content'>
                    <div className='footer-title'>
                        <img src='https://img.freepik.com/premium-vector/yum-text-with-emoticon_110464-498.jpg?w=100' className='logo'alt='footer-icon'/>
                        <h5 className='title'>FoodieEats</h5>
                    </div>
                    <div className='footer-title'>
                        <h5 className='title'>
                            Delivery Time
                        </h5>
                        <ul>
                            <li className='deliver-timing'>
                                <span>Sunday - Thursday</span>
                                <p>10:00am - 11:00pm</p>
                            </li>
                            <li className='deliver-timing'>
                                <span>Friday - Saturday</span>
                                <p>Half day</p>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-title'>
                        <h5 className='title'>
                           Contact
                        </h5>
                        <ul>
                            <li className='deliver-timing'>
                                <p>Location: T-Nagar, Chennai-600017</p>
                            </li>
                            <li className='deliver-timing'>
                                <span>Phone: 9940116905</span>
                            </li><br/>
                            <li className='deliver-timing'>
                                <span>Email: manokcg@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-title'>
                        <h5 className='title'>Newsletter</h5>
                        <p>Subscribe our newsletter</p>
                        <div className='email'>
                            <input type='email' placeholder='Enter your email Id'/>
                            <button type='submit' className='btn btn-danger'>
                                Send
                            </button>
                        </div>
                    </div>
                </div>  
            </div>
      </div>
    </footer>
  )
}

export default Footer
