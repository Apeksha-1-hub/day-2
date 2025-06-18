import React from 'react'

const Navbar = () => {
  return (
    <div className="flex p-4 justify-between items-center">
      <div>Logo</div>
      <ul className="flex gap-5 items-center">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default Navbar
