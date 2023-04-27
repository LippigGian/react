import { ItemListContainer } from "./components/ItemsListContainer/ItemsListContainer";
import {NavBar} from "./components/NavBar/NavBar"
function App() {
  return (
    <>


<NavBar></NavBar>
<ItemListContainer greeting={'¡Hola! Bienvenido a la tienda.'}></ItemListContainer>
</>
  );
}


export default App;
