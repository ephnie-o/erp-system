'use client';

import React, { useState } from 'react';

// type Customer = {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
// };

const initialCustomers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', address: '456 Elm St' },
];

const Customers = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [formState, setFormState] = useState({ id: 0, name: '', email: '', phone: '', address: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setCustomers(customers.map(customer => (customer.id === formState.id ? formState : customer)));
      setMessage('Customer updated successfully');
    } else {
      setCustomers([...customers, { ...formState, id: customers.length + 1 }]);
      setMessage('Customer added successfully');
    }
    setFormState({ id: 0, name: '', email: '', phone: '', address: '' });
    setIsEditing(false);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleEdit = (customer) => {
    setFormState(customer);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setCustomers(customers.filter(customer => customer.id !== id));
    setMessage('Customer deleted successfully');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <main className='pt-20 pb-5'>
      <div className='px-4 sm:px-6 lg:px-8 lg:ml-72'>
        <h1 className="text-2xl font-bold mb-4">Customer Management</h1>
        {message && <div className="mb-4 p-2 bg-green-200 text-green-800 rounded">{message}</div>}

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Name"
              className="p-2 border rounded text-gray-700"
              required
              aria-label="Customer Name"
            />
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-2 border rounded text-gray-700"
              required
              aria-label="Customer Email"
            />
            <input
              type="tel"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="p-2 border rounded text-gray-700"
              required
              aria-label="Customer Phone"
            />
            <input
              type="text"
              name="address"
              value={formState.address}
              onChange={handleChange}
              placeholder="Address"
              className="p-2 border rounded text-gray-700"
              required
              aria-label="Customer Address"
            />
          </div>
          <button type="submit" className="mt-4 px-4 py-2 bg-gradient-to-r from-green-800 to-green-950 text-white hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gray-700">
            {isEditing ? 'Update Customer' : 'Add Customer'}
          </button>
        </form>

        <table className="w-full bg-gray-100 dark:bg-gray-800 text-ellipsis">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Phone</th>
              <th className="py-2 px-4 border">Address</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (
              <tr key={customer.id}>
                <td className="py-2 px-4 border">{customer.name}</td>
                <td className="py-2 px-4 border">{customer.email}</td>
                <td className="py-2 px-4 border">{customer.phone}</td>
                <td className="py-2 px-4 border">{customer.address}</td>
                <td className="py-2 px-4 border">
                  <button
                    onClick={() => handleEdit(customer)}
                    className="mr-2 px-2 py-1 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                    aria-label="Edit Customer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(customer.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    aria-label="Delete Customer"
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

export default Customers;