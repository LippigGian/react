import { ItemListContainer } from "./components/ItemsListContainer/ItemsListContainer";
import {FirebaseCollecion, ItemListCategories, Footer, Checkout, ItemCount, ItemDetailContainer, NavBar, ShoppingCart, ModalExample} from "./components"
import "./style.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContactUs } from "./pages/contactUs/ContactUs";
import { ShoppingCartProvider } from "./components/shoppingCartContext/ShoppingCartContext";
import { ItemListCategoriesContainer } from "./components/ItemListCategoriesContainer";


function App() {
  return (
  
<ShoppingCartProvider> 
<BrowserRouter>
<NavBar/>

<Routes>
    <Route path="/" element={<ItemListContainer ></ItemListContainer>}></Route>
    <Route path="/productos" element={<ItemListContainer greeting={'¡Hola! Bienvenido a la tienda.'}></ItemListContainer>}></Route>
    <Route path="/productos/:categoria" element={<ItemListContainer greeting={'¡Hola! Bienvenido a la tienda.'}></ItemListContainer>}></Route>
    <Route path="/item/:id"  element={<ItemDetailContainer></ItemDetailContainer>}></Route>
    <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
    <Route path="/cart" element={ <ShoppingCart></ShoppingCart>}></Route>
    <Route path="/fbdocument" element={<ItemListCategoriesContainer></ItemListCategoriesContainer>}></Route>
    <Route path="/fbcollection" element={<FirebaseCollecion></FirebaseCollecion>}></Route>
    <Route path="/categorias/:categoria" element={<ItemListCategoriesContainer></ItemListCategoriesContainer>}></Route>
    <Route path="/itemdetail/:id" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
    <Route path="/form" element={<Checkout></Checkout>}></Route>

 {/* <ItemList></ItemList>  */}


</Routes>
<Footer></Footer>
</BrowserRouter>
</ShoppingCartProvider>
  );
}


export default App;
