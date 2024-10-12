import React from 'react'

const Footer = () => {
  const date = new Date();
  return (
    <footer>
        Copyright &copy; {date.getFullYear()}
    </footer>
  )
}

export default Footer