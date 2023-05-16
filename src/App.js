import { ItemListContainer } from "./components/ItemsListContainer/ItemsListContainer";
import {Footer, Header, ItemCount, ItemDetailContainer, NavBar} from "./components"
import "./style.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
  

<BrowserRouter>
<NavBar/>
<Header/>

<Routes>
    <Route path="/" element={<ItemListContainer greeting={'¡Hola! Bienvenido a la tienda.'}></ItemListContainer>}></Route>
    <Route path="/productos" element={<ItemListContainer greeting={'¡Hola! Bienvenido a la tienda.'}></ItemListContainer>}></Route>
    <Route path="/productos/:category" element={<ItemListContainer greeting={'¡Hola! Bienvenido a la tienda.'}></ItemListContainer>}></Route>
    <Route path="/count" element={ <ItemCount></ItemCount>}></Route>
    <Route path="/item/:id"  element={<ItemDetailContainer></ItemDetailContainer>}></Route>
 {/* <ItemList></ItemList>  */}


</Routes>
<Footer></Footer>
</BrowserRouter>

  );
}


export default App;
