import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "iCreate Pro - Login",
  description: "Login to your iCreate Pro account",
};

export default function Login() {
  return (
    <div className="bg-darker-gray p-10 text-white items-center min-h-[70vh] flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto bg-dark-gray p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-3 py-2 bg-darker-gray border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-lime"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full px-3 py-2 bg-darker-gray border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-lime"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 bg-darker-gray border-gray-500 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link href="#" className="text-lime hover:underline">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-lime hover:bg-lime/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-lime hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
