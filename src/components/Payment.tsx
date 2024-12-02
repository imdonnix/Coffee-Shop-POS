import React from "react";
import styled from "styled-components";
import { BluetoothPrinter } from "./BluetoothPrinter";

const PaymentContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const PaymentButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Payment: React.FC<{ totalAmount: number }> = ({ totalAmount }) => {
  const handlePayment = () => {
    // Implement payment logic, e.g., API call
    BluetoothPrinter.printReceipt(`Total: ₱${totalAmount}`);
  };

  return (
    <div className="paymentcontainer-class">
      <PaymentContainer>
        <h2>Complete Payment</h2>
        <p>Total Amount: ₱{totalAmount.toFixed(2)}</p>
        <PaymentButton onClick={handlePayment}>
          Pay and Print Receipt
        </PaymentButton>
      </PaymentContainer>
    </div>
  );
};

export default Payment;
