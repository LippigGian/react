import {collection, addDoc, getFirestore } from "firebase/firestore"

const ventasData=async(venta)=>{
    const db= getFirestore();
    const ventaCollection=collection (db,'venta');
    const {id}=await addDoc(ventaCollection,venta)
    
    console.log(id)

    return id;
    
    
}
const writeToFirestore = async (order) => {
  const db = getFirestore();
  const collectionRef = collection(db, "buyers");
  try {
    //destructuro el id y ya lo guardo directamente
    const { id } = await addDoc(collectionRef, order);
    console.log("Documento agregado correctamente");
    return { success: true, id };
  } catch (error) {
    console.error("Error al agregar el documento:", error);
    return { success: false, error: error };
  }
};
export {ventasData, writeToFirestore};


//Gian
// import { collection, addDoc, getFirestore } from "firebase/firestore";

// const writeToFirestore = async (order) => {
//   const db = getFirestore();
//   const collectionRef = collection(db, "buyers");
//   try {
//     //destructuro el id y ya lo guardo directamente
//     const { id } = await addDoc(collectionRef, order);
//     console.log("Documento agregado correctamente");
//     return { success: true, id };
//   } catch (error) {
//     console.error("Error al agregar el documento:", error);
//     return { success: false, error: error };
//   }
// };

// export { writeToFirestore };

