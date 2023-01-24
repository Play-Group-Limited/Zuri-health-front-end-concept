import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'


const Layout = ({children}) => {
  return (
    
    <div className="w-full">
        <Navbar />
            {children}
        <Footer />
    </div>
  )
}

export default Layout