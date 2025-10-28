import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Footer from './components/Footer'
import NavMenu from './components/NavMenu'
import { Route, Routes } from 'react-router-dom'
import Category from './page/Category'
import Home from './page/Home'
import AboutUs from './page/AboutUs'
import Register from './page/Register'
import Checkout from './page/Checkout'
import CategoryTest from './page/Category_Test'
import HomeTeam from './page/HomeTeam'
import DetailTeam from './page/DetailTeam'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavMenu />
      <main>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/category' Component={Category} />
          <Route path='/aboutus' Component={AboutUs} />
          <Route path='/register' Component={Register} />
          <Route path='/checkout' Component={Checkout} />
          <Route path='/category_test' Component={CategoryTest} />
          <Route path='/home_team' Component={HomeTeam} />
          <Route path='/detail_team' Component={DetailTeam} />
        </Routes>
      </main>
    </>
  )
}

export default App;