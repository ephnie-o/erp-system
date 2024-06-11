'use client';

import React, { useState } from 'react';

const initialSales = [
  {
    id: 1,
    date: '2024-05-20',
    customerName: 'John Doe',
    items: [
      { id: 1, productName: 'Aspirin', quantity: 2, price: 9.98 },
      { id: 2, productName: 'Cough Syrup', quantity: 1, price: 8.99 },
    ],
  },
  {
    id: 2,
    date: '2024-05-20',
    customerName: 'Stephanie Odoom',
    items: [
      { id: 1, productName: 'Steremed', quantity: 2, price: 150.00 },
      { id: 2, productName: 'Sterevite', quantity: 1, price: 50.00 },
    ],
  },
];

const Sales = () => {
  const [sales, setSales] = useState(initialSales);
  const [formState, setFormState] = useState({
    date: '',
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
    items[index] = {
      ...items[index],
      [name]: name === 'quantity' || name === 'price' ? parseFloat(value) : value
    };
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
      date: formState.date,
      customerName: formState.customerName,
      items: formState.items,
      total: calculateTotal(formState.items),
    };
    setSales([...sales, newSale]);
    setFormState({
      date: '',
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
            <input
              type="text"
              name="customerName"
              value={formState.customerName}
              onChange={handleFormChange}
              placeholder="Customer Name"
              className="p-2 border rounded dark:text-gray-700"
              required
              aria-label="Customer Name"
            />
          </div>
          <h3 className="text-xl font-bold mt-4">Items</h3>
          {formState.items.map((item, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 my-2">
              <input
                type="text"
                name="productName"
                value={item.productName}
                onChange={(e) => handleItemChange(index, e)}
                placeholder="Product Name"
                className="p-2 border rounded dark:text-gray-700"
                required
                aria-label={`Product Name ${index + 1}`}
              />
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