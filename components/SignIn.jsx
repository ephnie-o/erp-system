'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import ThemeToggle from "./Theme";

export const SignIn = () => {
  const [formData, setFormData] = useState({username: '', password: ''});
  const [formValid, setFormValid] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { username, password } = formData;
    if (username && password) {
      setFormValid(true);
      return true;
    } else {
      setFormValid(false);
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
    router.push('/dashboard');
    }
  }


  return (
    <div>
        <div>
            <h2 className="mt-20 text-center text-2xl font-bold leading-9 tracking-tight">ERP SYSTEM</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className='px-6 py-12 sm:rounded-lg sm:px-12 bg-gray-400 bg-opacity-20 dark:bg-gray-800 shadow-2xl shadow-gray-800 dark:shadow-gray-700 dark:shadow-lg'>
                <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                    <div>
                        <div className="flex justify-between items-center">
                            <div></div>
                            <h4 className="text-center font-semibold text-xl tracking-wide">Sign In</h4>
                            <ThemeToggle />
                        </div>
                        <p className="text-center text-sm font-semibold">Don't have an account? <span className="text-green-700 cursor-pointer hover:text-green-800">Sign up</span> as a customer.</p>
                    </div>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium leading-6">
                            Username
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-500 shadow-sm focus:outline-green-950 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-500 shadow-sm focus:outline-green-950 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-green-950 text-green-950 accent-green-700"
                            />
                            <label htmlFor="remember-me" className="ml-3 block text-sm leading-6">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-gradient-to-r from-green-800 to-green-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:from-gray-400 hover:to-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-950">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
