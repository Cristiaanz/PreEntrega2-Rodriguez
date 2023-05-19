import Products from "../Products/Products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const params = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(Products.filter((product) => product.id === Number(params.id)));
  }, []);

  return (
    <div>
      <h1>Detalle del producto</h1>
      <p>Nombre: {product[0]?.nombre}</p>
      <p>Descripcion: {product[0]?.descripcion}</p>
      <p>Precio: {product[0]?.precio}</p>
    </div>
  );
}

export default ItemDetailContainer;
