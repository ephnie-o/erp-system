'use client';

import React, { useState } from 'react';
import { initialCustomers } from '../customers/page';
import { initialProducts } from '../inventory/page';

const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  month = month < 10 ? '0' + month : month;
  let day = today.getDate();
  day = day < 10 ? '0' + day : day;
  return `${year}-${month}-${day}`;
};

export const initialSales = [
  {
    id: 1,
    date: getCurrentDate(),
    customerName: initialCustomers[0].name,
    items: [
      { id: 1, productName: initialProducts[0].name, quantity: 2, price: initialProducts[0].price },
      { id: 2, productName: initialProducts[1].name, quantity: 1, price: initialProducts[1].price },
    ],
  },
  {
    id: 2,
    date: getCurrentDate(),
    customerName: initialCustomers[1].name,
    items: [
      { id: 1, productName: initialProducts[1].name, quantity: 2, price: initialProducts[1].price },
      { id: 2, productName: initialProducts[2].name, quantity: 1, price: initialProducts[2].price },
    ],
  },
];

const Sales = () => {
  const [sales, setSales] = useState(initialSales);
  const [formState, setFormState] = useState({
    date: getCurrentDate(),
    customerName: '',
    items: [{ id: 0, productName: '', quantity: Number, price: Number }],
  });
  const [message, setMessage] = useState('');

  const calculateTotal = (items) => {
    return items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const items = [...formState.items];
    if (name === 'productName') {
      const product = initialProducts.find(product => product.name === value);
      items[index] = { ...items[index], [name]: value, price: product ? product.price : 0 };
    } else {
      items[index] = { ...items[index], [name]: parseFloat(value) };
    }
    setFormState({ ...formState, items });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleAddItem = () => {
    setFormState({
      ...formState,
      items: [...formState.items, { id: formState.items.length, productName: '', quantity: Number, price: Number }],
    });
  };

  const handleDelete = (id) => {
    setSales(sales.filter(sale => sale.id !== id));
  };

  const handleDeleteItem = (index) => {
    const items = [...formState.items];
    items.splice(index, 1);
    setFormState({ ...formState, items });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSale = {
      id: sales.length + 1,
      date: getCurrentDate(),
      customerName: formState.customerName || 'Customer',
      items: formState.items,
      total: calculateTotal(formState.items),
    };
    setSales([...sales, newSale]);
    setFormState({
      date: getCurrentDate(),
      customerName: '',
      items: [{ id: 0, productName: '', quantity: Number, price: Number }],
    });
    setMessage('Sale added successfully');
    setTimeout(() => setMessage(''), 3000);
  };


  return (
    <main className='pt-20 pb-5'>
      <div className='px-4 sm:px-6 lg:px-8 lg:ml-72'>
        <h1 className="text-2xl font-bold mb-4">Sales Management</h1>
        {message && <div className="mb-4 p-2 bg-green-200 text-green-800 rounded">{message}</div>}

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              name="date"
              value={formState.date}
              onChange={handleFormChange}
              placeholder="Date"
              className="p-2 border rounded dark:text-gray-700"
              required
              aria-label="Sale Date"
            />
            <select
              name="customerName"
              onChange={handleFormChange}
              value={formState.customerName}
              className="p-2 border rounded dark:text-gray-700"
              aria-label="Customer Name"
            >
              <option value="">Select Customer</option>
              {initialCustomers.map((customer, index) =>(
                <option key={index} value={customer.name}>{customer.name}</option>
              ))}
            </select>
          </div>
          <h3 className="text-xl font-bold mt-4">Items</h3>
          {formState.items.map((item, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 my-2">
              <select
                name="productName"
                onChange={(e) => handleItemChange(index, e)}
                value={item.productName}
                className="p-1 border rounded dark:text-gray-700"
                required
                aria-label={`Product Name ${index + 1}`}
              >
                <option value="">Select Product</option>
                {initialProducts.map((product, index) =>(
                  <option key={index} value={product.name}>{product.name}</option>
                ))}
              </select>
              <input
                type="number"
                name="quantity"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, e)}
                placeholder="Quantity"
                className="p-2 border rounded dark:text-gray-700"
                required
                aria-label={`Quantity ${index + 1}`}
              />
              <input
                type="number"
                name="price"
                value={item.price}
                onChange={(e) => handleItemChange(index, e)}
                placeholder="Price"
                className="p-2 border rounded dark:text-gray-700"
                required
                aria-label={`Price ${index + 1}`}
                disabled
              />
              <button
                type="button"
                onClick={() => handleDeleteItem(index)}
                className="mt-2 mr-4 px-4 py-2 bg-red-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete Item
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddItem}
            className="mt-2 mr-4 px-4 py-2 bg-gradient-to-r from-green-800 to-green-950 text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-700 shadow-lg dark:shadow-gray-700"
          >
            Add Item
          </button>
          <button type="submit" className="mt-4 px-4 py-2 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-700 shadow-lg dark:shadow-gray-700">
            Add Sale
          </button>
        </form>

        <table className="min-w-full bg-gray-100 dark:bg-gray-800">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Customer</th>
              <th className="py-2 px-4 border">Total</th>
              <th className="py-2 px-4 border">Details</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id}>
                <td className="py-2 px-4 border">{sale.date}</td>
                <td className="py-2 px-4 border">{sale.customerName}</td>
                <td className="py-2 px-4 border">${calculateTotal(sale.items).toFixed(2)}</td>
                <td className="py-2 px-4 border">
                  <details>
                    <summary>View Items</summary>
                    <ul>
                      {sale.items.map((item) => (
                        <li key={item.id}>
                          {item.quantity} x {item.productName} @ ${Number(item.price).toFixed(2)} each
                        </li>
                      ))}
                    </ul>
                  </details>
                </td>
                <td className="py-2 px-4 border">
                  <button
                    onClick={() => handleDelete(sale.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    aria-label="Delete Sale"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Sales;