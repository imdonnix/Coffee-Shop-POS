import React from "react";
import styled from "styled-components";

interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  background-color: #f4f4f4;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const AddToCartButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const ProductList: React.FC<{
  products: Product[];
  addToCart: (product: Product) => void;
}> = ({ products, addToCart }) => (
  <div className="product-class">
    <ProductContainer>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <h3>{product.name}</h3>
          <p>₱{product.price.toFixed(2)}</p>
          <AddToCartButton onClick={() => addToCart(product)}>
            Add to Cart
          </AddToCartButton>
        </ProductCard>
      ))}
    </ProductContainer>
  </div>
);

export default ProductList;
