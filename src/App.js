import { ItemListContainer } from "./components/ItemsListContainer/ItemsListContainer";
import {Footer, Checkout, ItemDetailContainer, NavBar} from "./components"
import "./style.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShoppingCartProvider } from "./components/shoppingCartContext/ShoppingCartContext";
import { ItemListCategoriesContainer } from "./components/ItemListCategoriesContainer";
import { Cart, ContactUs } from "./pages";


function App() {
  return (
  
<ShoppingCartProvider> 
<BrowserRouter>
<NavBar/>

<Routes>
    <Route path="/" element={<ItemListContainer ></ItemListContainer>}></Route>
    <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
    <Route path="/cart" element={ <Cart></Cart>}></Route>
    <Route path="/categorias/:categoria" element={<ItemListCategoriesContainer></ItemListCategoriesContainer>}></Route>
    <Route path="/itemdetail/:id" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
    <Route path="/form" element={<Checkout></Checkout>}></Route>

</Routes>
<Footer></Footer>
</BrowserRouter>
</ShoppingCartProvider>
  );
}


export default App;
