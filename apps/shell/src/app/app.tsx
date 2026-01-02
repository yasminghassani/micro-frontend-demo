import * as React from 'react';

import { Routes, Route, Link } from 'react-router-dom';

const Products = React.lazy(() => import('products/Module'));
const Cart = React.lazy(() => import('cart/Module'));


function App() {
  return (
      <div className="min-h-screen bg-gray-50">
        {/* Navigation Header */}
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-2xl font-bold text-blue-600">Shell App</h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    to="/"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    to="/products"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
                  >
                    Products
                  </Link>
                  <Link
                    to="/cart"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
                  >
                    Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-12">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-sm">
              © 2024 Shell App. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
  );
}

// Home Component
function Home() {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome to Shell Application
        </h2>
        <p className="text-gray-600 mb-6">
          This is your main shell application that hosts the microfrontends for
          products and cart.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Products
            </h3>
            <p className="text-blue-700 mb-4">
              Browse our product catalog and find what you need.
            </p>
            <Link
              to="/products"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              View Products
            </Link>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-xl font-semibold text-green-900 mb-2">
              Shopping Cart
            </h3>
            <p className="text-green-700 mb-4">
              Review your selected items and proceed to checkout.
            </p>
            <Link
              to="/cart"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Products Page Component (placeholder for microfrontend)
function ProductsPage() {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Products</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800">
            <Products />
          </p>
        </div>
      </div>
    </div>
  );
}

// Cart Page Component (placeholder for microfrontend)
function CartPage() {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Shopping Cart</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800">
            <Cart />
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;