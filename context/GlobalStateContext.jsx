// src/context/GlobalStateContext.js
import React, { createContext, useState, useContext } from 'react';

const GlobalStateContext = createContext();

const initialProducts = [
  { id: 1, name: 'Aspirin', description: 'Pain reliever', category: 'Medicine', price: 4.99, quantity: 50 },
  { id: 2, name: 'Cough Syrup', description: 'Cough suppressant', category: 'Medicine', price: 8.99, quantity: 30 },
];

const initialSales = [
  {
    id: 1,
    date: '2024-05-20',
    customerName: 'John Doe',
    items: [
      { id: 1, productName: 'Aspirin', quantity: 2, price: 9.98 },
      { id: 2, productName: 'Cough Syrup', quantity: 1, price: 8.99 },
    ],
    total: 18.97,
  },
];

const initialCustomers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', address: '456 Elm St' },
];

export const GlobalStateProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);
  const [sales, setSales] = useState(initialSales);
  const [customers, setCustomers] = useState(initialCustomers);

  return (
    <GlobalStateContext.Provider value={{ products, setProducts, sales, setSales, customers, setCustomers }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);