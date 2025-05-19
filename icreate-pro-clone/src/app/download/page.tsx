import Image from "next/image";
import Link from "next/link";
import DiscordInvite from "@/components/home/DiscordInvite";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "iCreate Pro - Download",
  description: "Download iCreate Pro for iOS",
};

export default function Download() {
  return (
    <div className="items-center py-5 text-white bg-gradient-to-b from-darker-gray via-black to-black">
      <section className="justify-center items-end z-10 rounded-2xl px-10 mb-2 flex">
        <Image
          src="https://ext.same-assets.com/533623464/1452418507.bin"
          alt="iCreate Pro Logo Large"
          width={382}
          height={176}
          className="hidden sm:inline h-44 mr-5"
        />
      </section>

      <h2 className="text-center pt-5 pb-2 text-4xl font-semibold">Version&nbsp;6.9.0</h2>

      <div className="rounded-xl bg-darker-gray w-1/2 py-2 my-4 mx-auto">
        <details className="no-marker">
          <summary className="list-none items-center flex px-4 py-2 cursor-pointer">
            <h5 className="text-center flex-grow text-xl">Changelog</h5>
          </summary>

          <ul className="list-disc text-sm sm:text-base md:text-xl mx-8 py-4">
            <li>Icon Selection in Pause Menu</li>
            <li>CBF Fixes</li>
            <li>Icon Randomizer Fixes</li>
            <li>CPS Indicator</li>
            <li>Smart StartPos</li>
          </ul>
        </details>
      </div>

      <button className="underline text-blue-300 mx-auto block">
        Get notified for new updates
      </button>

      <p className="px-10 text-sm sm:text-base my-4 font-semibold text-center">
        There are a few ways to download iCreate&nbsp;Pro. Watch this to find the best download&nbsp;method for you:
      </p>

      <div className="aspect-video mx-auto max-w-2xl my-5 px-4">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/UKn9eaht3IY"
          title="How to install iCreate Pro"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <h6 className="text-center mb-5 px-10">
        Free for 24 hours. Buy a license <Link className="underline text-blue-300" href="/features_pricing">here</Link> to continue using.
      </h6>

      <div className="md:flex md:flex-row justify-center items-center -my-2 md:-my-5 w-full mb-2">
        <Link
          className="button1 block mx-auto md:mx-2 w-1/2 md:w-48 border-med-gray bg-darker-gray text-med-gray cursor-not-allowed m-2 md:m-5"
          href="#"
        >
          Open in AltStore
        </Link>
        <Link
          className="button1 block mx-auto md:mx-2 w-1/2 md:w-48 border-white hover:bg-white hover:text-black transition-all m-2 md:m-5"
          href="#"
        >
          Download IPA
        </Link>
        <Link
          className="button1 block mx-auto md:mx-2 w-1/2 md:w-48 border-lime hover:bg-lime hover:text-black transition-all m-2 md:m-5"
          href="/esign"
        >
          eSign Method
        </Link>
      </div>

      <div className="mb-12 mx-auto">
        <DiscordInvite />
      </div>
    </div>
  );
}
