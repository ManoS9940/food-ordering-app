import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className='nav'>
        <div className='navbar-brand'>
            <img src='https://img.freepik.com/premium-vector/yum-text-with-emoticon_110464-498.jpg?w=150' alt='logo'/>
            <a href='/' rel='noreferrer noopener nofollow'><span className='brand'>Foodie</span><span className='brand-title'>Eats</span></a>
        </div>
        <div className='navbar-elements'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/menu'>Foods</Link>
                </li>
                <li>
                    <Link to='/cart'>Cart</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/register'>Sign Up</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
