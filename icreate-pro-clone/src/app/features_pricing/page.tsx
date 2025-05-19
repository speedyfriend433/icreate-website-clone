import Link from "next/link";
import FeaturesList from "@/components/home/FeaturesList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "iCreate Pro - Features & Pricing",
  description: "Features and pricing information for iCreate Pro",
};

export default function FeaturesPricing() {
  return (
    <div className="items-center py-5 text-white bg-gradient-to-b from-darker-gray via-black to-black">
      <h2 className="text-4xl text-center font-semibold py-4">Features & Pricing</h2>

      <div className="rounded-lg text-white px-5 py-4 justify-center border-lime border-2 my-5 max-w-lg mx-auto">
        <p className="text-xl text-center font-semibold">
          Get it <span className="text-lime">Free</span> for first 24 hours.
        </p>
        <div className="justify-center pt-4 pb-2 flex">
          <Link
            className="button2 text-lime px-6 py-2 rounded-lg hover:bg-lime hover:text-darker-gray transition-all"
            href="/download"
          >
            Download Free Trial
          </Link>
        </div>
      </div>

      <div className="items-start text-xl max-w-2xl mx-auto px-4">
        <h3 className="py-3 font-medium">For $6, you can get:</h3>
        <FeaturesList />
      </div>

      <div className="mt-16 flex justify-center">
        <button className="mt-16 py-3 px-8 rounded-lg border-2 border-white bg-white hover:bg-black text-black hover:text-white transition-all m-2 md:m-5 text-2xl">
          Buy iCreate Pro
        </button>
      </div>

      <div className="text-center mt-4 mb-16">
        <Link className="text-center px-8 underline text-gray-200" href="/contact">
          Make sure to review our Terms, Refund Policy, and Privacy Policy
        </Link>
      </div>
    </div>
  );
}
