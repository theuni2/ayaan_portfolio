import React from 'react'
import Nav from '../component/nav'
import Footer from '../component/footer'
import Hero from './hero'
import Gallery from './gallery'

export default function Page() {
  return (
    <div>
        <Nav/>
<Hero/>
<Gallery/>
        <Footer/>
    </div>
  )
}
