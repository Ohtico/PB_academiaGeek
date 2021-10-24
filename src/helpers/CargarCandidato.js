import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/FirebaseConfig";

export const CargarCandidato = async (gmail) => {
  const data = await getDocs(collection(db, `${gmail}/candidatos/data`));
  const ListCandidato = [];
  data.forEach((cargador) => {
    ListCandidato.push({
      id: cargador.id,
      ...cargador.data(),
    });
  });
  return ListCandidato;
};

export const loadProduct = async (coleciones) => {
  const data = await getDocs(collection(db, coleciones));
  const ProductoList = [];

  data.forEach((hijo) => {
    ProductoList.push({
      id: hijo.id,
      ...hijo.data(),
    });
  });
  return ProductoList;
};
