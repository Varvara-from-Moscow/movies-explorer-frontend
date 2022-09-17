import React from 'react'
import Promo from './Promo/Promo'
import AboutProject from './AboutProject/AboutProject'
import Techs from './Techs/Techs'
import AboutMe from './AboutMe/AboutMe'
import Portfolio from './Portfolio/Portfolio'
import './Main.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Main({loggedIn, isBurgerMenuCliked}) {
  return (
    <>
     <Header loggedIn={loggedIn} isBurgerMenuCliked={isBurgerMenuCliked}></Header>
      <main className='main'>
        <Promo/>
        <AboutProject/>
        <Techs></Techs>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
      </main>
    <Footer/>
    </>
  )
}

export default Main;
