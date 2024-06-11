'use client';

import { useState } from 'react';


export const initialProducts = [
  { id: 1, name: 'Aspirin', description: 'Pain reliever', category: 'Medicine', price: 4.99, quantity: 50 },
  { id: 2, name: 'Cough Syrup', description: 'Cough suppressant', category: 'Medicine', price: 8.99, quantity: 30 },
  { id: 3, name: 'Steremed', description: 'Brain supplement', category: 'Medicine', price: 75.00, quantity: 50},
  { id: 4, name: 'Sterevite', description: 'Multivitamin', category: 'Medicine', price: 50.00, quantity: 60},
];

const Inventory = () => {
  const [products, setProducts] = useState(initialProducts);
  const [formState, setFormState] = useState({ id: 0, name: '', description: '', category: '', price: Number, quantity: Number });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setProducts(products.map(product => (product.id === formState.id ? formState : product)));
    } else {
      setProducts([...products, { ...formState, id: products.length + 1 }]);
    }
    setFormState({ id: 0, name: '', description: '', category: '', price: Number, quantity: Number });
    setIsEditing(false);
  };

  const handleEdit = (product = Product) => {
    setFormState(product);
    setIsEditing(true);
  };

  const handleDelete = (id = number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <main className='pt-20 pb-5'>
      <div className='px-4 sm:px-6 lg:px-8 lg:ml-72'>
        <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Product Name"
              className="p-2 border rounded text-gray-600"
              required
              aria-label="Product Name"
            />
            <input
              type="text"
              name="description"
              value={formState.description}
              onChange={handleChange}
              placeholder="Description"
              className="p-2 border rounded text-gray-600"
              required
              aria-label="Description"
            />
            <input
              type="text"
              name="category"
              value={formState.category}
              onChange={handleChange}
              placeholder="Category"
              className="p-2 border rounded text-gray-600"
              required
              aria-label="Category"
            />
            <input
              type="number"
              name="price"
              value={formState.price}
              onChange={handleChange}
              placeholder="Price"
              className="p-2 border rounded text-gray-600"
              required
              aria-label="Price"
            />
            <input
              type="number"
              name="quantity"
              value={formState.quantity}
              onChange={handleChange}
              placeholder="Quantity"
              className="p-2 border rounded text-gray-600"
              required
              aria-label="Quantity"
            />
          </div>
          <button type="submit" className="mt-4 px-7 py-2 bg-gradient-to-r from-green-800 to-green-950 text-white hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gray-700">
            {isEditing ? 'Update Product' : 'Add Product'}
          </button>
        </form>

        <table className="min-w-full bg-gray-100 dark:bg-gray-800">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Description</th>
              <th className="py-2 px-4 border">Category</th>
              <th className="py-2 px-4 border">Price</th>
              <th className="py-2 px-4 border">Quantity</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td className="py-2 px-4 border">{product.name}</td>
                <td className="py-2 px-4 border">{product.description}</td>
                <td className="py-2 px-4 border">{product.category}</td>
                <td className="py-2 px-4 border">${Number(product.price).toFixed(2)}</td>
                <td className="py-2 px-4 border">{product.quantity}</td>
                <td className="py-2 px-4 border">
                  <button
                    onClick={() => handleEdit(product)}
                    className="mr-2 px-2 py-1 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                    aria-label="Edit Product"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    aria-label="Delete Product"
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

export default Inventory;