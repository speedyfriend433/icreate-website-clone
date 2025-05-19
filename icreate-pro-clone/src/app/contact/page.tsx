import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "iCreate Pro - Contact & Policies",
  description: "Contact information and policies for iCreate Pro",
};

export default function Contact() {
  return (
    <div className="bg-darker-gray p-10 text-white text-lg md:text-xl items-center min-h-[70vh]">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact & Policies</h1>

      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="mb-4">
            For support, questions, or feedback, you can reach us through:
          </p>
          <ul className="list-disc list-inside ml-4 mb-6">
            <li>Join our <Link href="https://discord.gg/icreate" target="_blank" className="text-blue-300 underline">Discord server</Link></li>
            <li>Follow on <Link href="https://twitter.com/cami314la" target="_blank" className="text-blue-300 underline">Twitter</Link></li>
            <li>Subscribe on <Link href="https://youtube.com/c/camila314" target="_blank" className="text-blue-300 underline">YouTube</Link></li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Terms of Service</h2>
          <p className="mb-4">
            By using iCreate Pro, you agree to the following terms:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>iCreate Pro is provided "as is" without warranty of any kind</li>
            <li>You are responsible for how you use the software</li>
            <li>The license is for personal use only and cannot be shared</li>
            <li>We reserve the right to revoke access for misuse</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Refund Policy</h2>
          <p>
            We offer refunds within 7 days of purchase if the product doesn't work as advertised.
            Contact us through Discord for refund requests. Refunds are processed through the
            original payment method.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-3xl font-semibold mb-4">Privacy Policy</h2>
          <p>
            We collect minimal data necessary for providing our services. This includes login information
            and basic usage statistics. We do not sell your data to third parties. For more details,
            please review our full privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}
