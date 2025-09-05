import React from 'react'
import {Link,NavLink} from 'react-router-dom'




function Header() {
  return (
    <header>
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white p-4 justify-between text-center h-15 flex ">
            <Link to='/'>

            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/software-logo%2C-icon-design-template-6d5cab862f674466f5fc7d96f50b4328_screen.jpg?ts=1680655703"
            className='h-8 w-8'
            />

            </Link>
            <NavLink to='/'  >
            Home


            </NavLink>
            <NavLink to='/About'>
                About
                

            </NavLink>
            <NavLink to='/project'>
            projects


            </NavLink>
            <NavLink to='contact' >
                contact

            </NavLink>
            
            

            



        </div>
    </header>
    
  )
}

export default Header