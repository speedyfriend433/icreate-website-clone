import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "iCreate Pro - Register",
  description: "Create an iCreate Pro account",
};

export default function Register() {
  return (
    <div className="bg-darker-gray p-10 text-white items-center min-h-[70vh] flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto bg-dark-gray p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Create Account</h1>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium mb-2">
                First Name
              </label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                className="w-full px-3 py-2 bg-darker-gray border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-lime"
                placeholder="First name"
                required
              />
            </div>

            <div>
              <label htmlFor="last_name" className="block text-sm font-medium mb-2">
                Last Name
              </label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                className="w-full px-3 py-2 bg-darker-gray border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-lime"
                placeholder="Last name"
                required
              />
            </div>
          </div>

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
              placeholder="Create a password"
              required
            />
            <p className="mt-1 text-xs text-gray-400">
              Password must be at least 8 characters long
            </p>
          </div>

          <div>
            <label htmlFor="confirm_password" className="block text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              id="confirm_password"
              name="confirm_password"
              type="password"
              className="w-full px-3 py-2 bg-darker-gray border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-lime"
              placeholder="Confirm your password"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              id="agree_terms"
              name="agree_terms"
              type="checkbox"
              className="h-4 w-4 bg-darker-gray border-gray-500 rounded"
              required
            />
            <label htmlFor="agree_terms" className="ml-2 block text-sm">
              I agree to the <Link href="/contact" className="text-lime hover:underline">Terms of Service</Link> and <Link href="/contact" className="text-lime hover:underline">Privacy Policy</Link>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-lime hover:bg-lime/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime"
            >
              Register
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-lime hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
