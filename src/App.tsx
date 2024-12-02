import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import styled from "styled-components";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const App: React.FC = () => {
  // State to manage cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // List of products available for purchase
  const [products] = useState<Product[]>([
    { id: 1, name: "Espresso", price: 100 },
    { id: 2, name: "Cappuccino", price: 120 },
    { id: 3, name: "Latte", price: 120 },
  ]);

  // Add product to the cart
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Remove product from the cart
  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Update the quantity of a product in the cart
  const updateCartItem = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id); // Remove the item if the quantity is 0 or less
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Clear all items from the cart
  const clearCart = () => {
    setCartItems([]); // Clear all items from the cart
  };

  // Calculate the total amount of the cart
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="appcontainer-class">
      <AppContainer>
        <Header />
        <ProductList products={products} addToCart={addToCart} />
        <Cart
          items={cartItems}
          removeFromCart={removeFromCart}
          updateCartItem={updateCartItem} // Pass the updateCartItem function
          clearCart={clearCart}
        />
        {cartItems.length > 0 && <Payment totalAmount={totalAmount} />}
      </AppContainer>
    </div>
  );
};

export default App;
