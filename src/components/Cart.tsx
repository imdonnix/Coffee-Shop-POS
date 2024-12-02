import React from "react";
import styled from "styled-components";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CartContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CartItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

const CartTotal = styled.h3`
  text-align: right;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin: 0 5px;
`;

const RemoveButton = styled(Button)`
  background-color: #f44336;
`;

const EditButton = styled(Button)`
  background-color: #2196f3;
`;

const Cart: React.FC<{
  items: CartItem[];
  removeFromCart: (id: number) => void;
  updateCartItem: (id: number, newQuantity: number) => void;
  clearCart: () => void;
}> = ({ items, removeFromCart, updateCartItem, clearCart }) => {
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cartcontainer-class">
      <CartContainer>
        {items.map((item) => (
          <CartItemStyled key={item.id}>
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>₱{(item.price * item.quantity).toFixed(2)}</span>
            <div>
              <EditButton
                onClick={() => updateCartItem(item.id, item.quantity + 1)}
              >
                +
              </EditButton>
              <EditButton
                onClick={() => updateCartItem(item.id, item.quantity - 1)}
              >
                -
              </EditButton>
              <RemoveButton onClick={() => removeFromCart(item.id)}>
                Remove
              </RemoveButton>
            </div>
          </CartItemStyled>
        ))}
        <CartTotal>Total: ₱{total.toFixed(2)}</CartTotal>
        {items.length > 0 && <Button onClick={clearCart}>Clear Cart</Button>}
      </CartContainer>
    </div>
  );
};

export default Cart;
