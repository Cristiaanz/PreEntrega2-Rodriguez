import Item from "../Item/Item";

function ItemList({ products }) {
  return (
    <div className="products-container">
      <ul className="products-list">
        {products.map((product) => (
          <li key={product.id}>
            <Item product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
