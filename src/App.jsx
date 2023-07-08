import React from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavBar from './components/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartContextProvider from './context/CartContext'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

const App = () => {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos a mi tienda online"/>}></Route>
        <Route path='/categoryId/:categoryId'element={<ItemListContainer/>}></Route>
        <Route path='/itemdetail/:id'element={<ItemDetailContainer/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkout' element={<Checkout onsend={Checkout}/>}></Route>
      </Routes>
    </CartContextProvider>
    </BrowserRouter>
  )
}
export default App
