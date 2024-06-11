'use client';

import React, { useEffect, useState } from 'react';
import { useGlobalState } from '@context/GlobalStateContext';

const Reports = () => {
  const { products, sales, customers } = useGlobalState();
  const [totalSales, setTotalSales] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState(0);

  useEffect(() => {
    // Calculate total sales
    const totalSalesCount = sales.reduce((acc, sale) => acc + sale.items.reduce((itemAcc, item) => itemAcc + item.quantity, 0), 0);
    setTotalSales(totalSalesCount);

    // Calculate total revenue
    const totalRevenueAmount = sales.reduce((acc, sale) => acc + sale.total, 0);
    setTotalRevenue(totalRevenueAmount);

    // Calculate total products
    const totalProductsCount = products.reduce((acc, product) => acc + product.quantity, 0);
    setTotalProducts(totalProductsCount);

    // Calculate total customers
    setTotalCustomers(customers.length);
  }, [products, sales, customers]);

  return (
    <main className='pt-20 pb-5'>
      <div className='px-4 sm:px-6 lg:px-8 lg:ml-72'>
        <h1 className="text-2xl font-bold mb-4">Reports</h1>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded shadow">
              <h3 className="text-xl font-semibold">Total Products</h3>
              <p className="text-3xl">{totalProducts}</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded shadow">
              <h3 className="text-xl font-semibold">Total Sales</h3>
              <p className="text-3xl">{totalSales}</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded shadow">
              <h3 className="text-xl font-semibold">Total Revenue</h3>
              <p className="text-3xl">${totalRevenue.toFixed(2)}</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded shadow">
              <h3 className="text-xl font-semibold">Total Customers</h3>
              <p className="text-3xl">{totalCustomers}</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Product Report</h2>
          <table className="min-w-full bg-gray-100 dark:bg-gray-800">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Description</th>
                <th className="py-2 px-4 border">Category</th>
                <th className="py-2 px-4 border">Price</th>
                <th className="py-2 px-4 border">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td className="py-2 px-4 border">{product.name}</td>
                  <td className="py-2 px-4 border">{product.description}</td>
                  <td className="py-2 px-4 border">{product.category}</td>
                  <td className="py-2 px-4 border">${product.price.toFixed(2)}</td>
                  <td className="py-2 px-4 border">{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Sales Report</h2>
          <table className="min-w-full bg-gray-100 dark:bg-gray-800">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Date</th>
                <th className="py-2 px-4 border">Customer</th>
                <th className="py-2 px-4 border">Total</th>
                <th className="py-2 px-4 border">Details</th>
              </tr>
            </thead>
            <tbody>
              {sales.map(sale => (
                <tr key={sale.id}>
                  <td className="py-2 px-4 border">{sale.date}</td>
                  <td className="py-2 px-4 border">{sale.customerName}</td>
                  <td className="py-2 px-4 border">${sale.total.toFixed(2)}</td>
                  <td className="py-2 px-4 border">
                    <details>
                      <summary>View Items</summary>
                      <ul>
                        {sale.items.map(item => (
                          <li key={item.id}>
                            {item.quantity} x {item.productName} @ ${item.price.toFixed(2)} each
                          </li>
                        ))}
                      </ul>
                    </details>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Customer Report</h2>
          <table className="min-w-full bg-gray-100 dark:bg-gray-800">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Phone</th>
                <th className="py-2 px-4 border">Address</th>
              </tr>
            </thead>
            <tbody>
              {customers.map(customer => (
                <tr key={customer.id}>
                  <td className="py-2 px-4 border">{customer.name}</td>
                  <td className="py-2 px-4 border">{customer.email}</td>
                  <td className="py-2 px-4 border">{customer.phone}</td>
                  <td className="py-2 px-4 border">{customer.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
};

export default Reports;

