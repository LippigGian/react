import { ItemListContainer } from "./components/ItemsListContainer/ItemsListContainer";
import {FirebaseCollecion, FirebaseDocument, Footer, ItemCount, ItemDetailContainer, NavBar, ShoppingCart} from "./components"
import "./style.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContactUs } from "./pages/contactUs/ContactUs";
import { ShoppingCartProvider } from "./components/shoppingCartContext/ShoppingCartContext";


function App() {
  return (
  
<ShoppingCartProvider>
<BrowserRouter>
<NavBar/>

<Routes>
    <Route path="/" element={<ItemListContainer greeting={'¡Hola! Bienvenido a la tienda.'}></ItemListContainer>}></Route>
    <Route path="/productos" element={<ItemListContainer greeting={'¡Hola! Bienvenido a la tienda.'}></ItemListContainer>}></Route>
    <Route path="/productos/:category" element={<ItemListContainer greeting={'¡Hola! Bienvenido a la tienda.'}></ItemListContainer>}></Route>
    <Route path="/count" element={ <ItemCount></ItemCount>}></Route>
    <Route path="/item/:id"  element={<ItemDetailContainer></ItemDetailContainer>}></Route>
    <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
    <Route path="/cart" element={ <ShoppingCart></ShoppingCart>}></Route>
    <Route path="/fbdocument" element={<FirebaseDocument></FirebaseDocument>}></Route>
    <Route path="/fbcollection" element={<FirebaseCollecion></FirebaseCollecion>}></Route>
    <Route path="/fbdocument/:id" element={<FirebaseDocument></FirebaseDocument>}></Route>

 {/* <ItemList></ItemList>  */}


</Routes>
<Footer></Footer>
</BrowserRouter>
</ShoppingCartProvider>
  );
}


export default App;
