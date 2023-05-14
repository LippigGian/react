import { ItemListContainer } from "./components/ItemsListContainer/ItemsListContainer";
import {Footer, Header, ItemCount, ItemDetailContainer, NavBar} from "./components"
import "./style.css"
// import { ItemList } from "./components/itemList/ItemList";
function App() {
  return (
    <>


<NavBar></NavBar>
<Header></Header>
{/* <ItemListContainer greeting={'¡Hola! Bienvenido a la tienda.'}></ItemListContainer>
{/* <ItemList></ItemList> }
  <ItemCount></ItemCount>*/}
 <ItemDetailContainer></ItemDetailContainer>
<Footer></Footer>
</>
  );
}


export default App;
