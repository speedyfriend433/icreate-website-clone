import { Metadata } from "next";

export const metadata: Metadata = {
  title: "iCreate Pro - FAQ",
  description: "Frequently Asked Questions about iCreate Pro",
};

export default function FAQ() {
  return (
    <div className="bg-darker-gray p-10 text-white text-lg md:text-xl items-center min-h-[70vh]">
      <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Do I need to jailbreak my device?</h3>
          <p>No, iCreate Pro can be installed without jailbreaking your device.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">How much does iCreate Pro cost?</h3>
          <p>iCreate Pro is free for the first 24 hours, after which it costs $6.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">How do I install iCreate Pro?</h3>
          <p>You can follow the installation methods on our Download page. We offer multiple ways to install, including AltStore and eSign method.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Is it safe to use?</h3>
          <p>Yes, iCreate Pro is safe to use and does not contain any malware.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Will I get banned for using iCreate Pro?</h3>
          <p>iCreate Pro is designed for local use. However, using modifications in online features could potentially violate terms of service.</p>
        </div>
      </div>
    </div>
  );
}
