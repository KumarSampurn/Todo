import React from 'react'

function Footer() {
 let footerstyle={
    width: '100%',
    position: "fixed",
    bottom :"0",
 }
  return (
    <footer className='bg-dark text-light py-4  ' style={footerstyle}>
      <p className='text-center'> Copyright &copy; MyTodolist.com</p>
    </footer>
  )
}

export default Footer;