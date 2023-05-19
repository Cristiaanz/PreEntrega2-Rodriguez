import { useEffect, useState } from "react";
import Products from "../Products/Products";
import ItemList from "../ItemList/ItemList";
import NavBar from "../NavBar/NavBar";
import { useParams } from "react-router-dom";

function ItemListContainer({ categoryId, isCategoryRoute }) {
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    const productsPromise = new Promise((resolve, reject) =>
      setTimeout(() => resolve(Products), 100)
    );

    productsPromise
      .then((response) => {
        if (response.length) {
          const productsFiltered = response.filter(
            (product) => product.category === params.id
          );

          setProducts(productsFiltered);
        } else {
          setProducts(response);
        }
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <div>
      <NavBar />
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
