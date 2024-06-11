import Link from 'next/link';

const Dashboard = () => {
  return (
    <main className='pt-20 pb-5'>
      <div className='px-4 sm:px-6 lg:px-8 lg:ml-72'>
        <section>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/inventory" className="p-4 bg-gray-400 bg-opacity-20 dark:bg-gray-800 shadow-2xl shadow-gray-800 dark:shadow-gray-700 dark:shadow-lg rounded hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-600 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-700">
              <h3 className="text-xl font-semibold">Inventory Management</h3>
              <p>Manage your inventory, update stock, and more.</p>
            </Link>
            <Link href="/sales" className="p-4 bg-gray-400 bg-opacity-20 dark:bg-gray-800 shadow-2xl shadow-gray-800 dark:shadow-gray-700 dark:shadow-lg rounded hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-600 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-700">
              <h3 className="text-xl font-semibold">Sales</h3>
              <p>Track sales and transactions.</p>
            </Link>
            <Link href="/customers" className="p-4 bg-gray-400 bg-opacity-20 dark:bg-gray-800 shadow-2xl shadow-gray-800 dark:shadow-gray-700 dark:shadow-lg rounded hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-600 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-700">
              <h3 className="text-xl font-semibold">Customer Management</h3>
              <p>Manage customer information and history.</p>
            </Link>
            <Link href="/reports" className="p-4 bg-gray-400 bg-opacity-20 dark:bg-gray-800 shadow-2xl shadow-gray-800 dark:shadow-gray-700 dark:shadow-lg rounded hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-600 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-700">
              <h3 className="text-xl font-semibold">Reports</h3>
              <p>Generate and view detailed reports.</p>
            </Link>
          </div>
        </section>
        <br />
        <br />
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded shadow">
              <h3 className="text-xl font-semibold">Total Products</h3>
              <p className="text-3xl">1200</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded shadow">
              <h3 className="text-xl font-semibold">Total Sales</h3>
              <p className="text-3xl">$25,000</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded shadow">
              <h3 className="text-xl font-semibold">Total Customers</h3>
              <p className="text-3xl">300</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded shadow">
              <h3 className="text-xl font-semibold">Pending Orders</h3>
              <p className="text-3xl">5</p>
            </div>
          </div>
        </section>
        <br />
        <br />
        <section>
          <h2 className="text-2xl font-bold mb-4">Latest Updates</h2>
          <ul className="list-disc list-inside bg-gray-50 dark:bg-gray-700 p-4 rounded shadow">
            <li>New inventory batch received.</li>
            <li>System update on 24th May 2024.</li>
            <li>Customer feedback system improved.</li>
          </ul>
      </section>
      </div>
    </main>
  )
}

export default Dashboard