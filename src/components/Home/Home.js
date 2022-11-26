import React from 'react'
import './home.css'
import Navbar from './Navbar'
import Card from './Card'
const Home = () => {
  return (
    <>
    <Navbar/>
    <Card  img1={"wordle-img2.png"} img2={"wordle-img1.png"} jump={"/wordle"}/>
    <Card  img1={"tictac-img2.png"} img2={"tictac-img1.png"} jump={"/tictac"}/>
    </>
  )
}

export default Home
 


