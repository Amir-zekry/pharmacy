// filepath: /d:/webApps/noon/noon/app/login/page.js
"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
export default function Login() {
    const { data: session } = useSession();
    if (session) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <p>Welcome, {session.user.email}!</p>
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center px-6 mt-10 mx-auto mb-8 lg:py-0 min-h-screen">
            <div className="w-full rounded-lg shadow-2xl r md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <div className="flex flex-col gap-y-3">
                        <h1 className="text-2xl">Welcome back</h1>
                        <div>
                            <button className="flex gap-x-2 border rounded-lg px-4 py-1" onClick={() => signIn('google')}>
                                <FcGoogle className="w-6 h-6" />
                                <span>Log in with Google</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-x-6 items-center">
                        <hr className="border-gray-300 w-1/2" />
                        <text>or</text>
                        <hr className="border-gray-300 w-1/2" />
                    </div>
                    <form className="space-y-4 text-black md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="">Remember me</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                        <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800">Sign in</button>
                        <p className="text-sm font-light">
                            Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}