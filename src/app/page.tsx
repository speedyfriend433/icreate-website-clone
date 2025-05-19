import HeroSection from "@/components/home/HeroSection";
import DiscordInvite from "@/components/home/DiscordInvite";
import FeaturesList from "@/components/home/FeaturesList";
import NoJailbreakSection from "@/components/home/NoJailbreakSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />

      <div className="bg-darker-gray p-10 text-white text-lg md:text-xl text-center items-center">
        <DiscordInvite />

        <p className="md:w-[50rem] mx-auto pt-10">
          iShitPro, developed by camila314, is a premium collection of tweaks, mods, and
          new features for the iOS edition of Geometry&nbsp;Dash.
        </p>

        <h2 className="font-semibold pt-10 pb-5 text-3xl">60 Mods &amp; Features</h2>

        <div className="my-5 mx-auto max-w-xl">
          <Image
            src="https://ext.same-assets.com/533623464/2181506085.bin"
            alt="iShitPro Interface"
            width={688}
            height={372}
            className="w-full h-auto"
          />
        </div>

        <p className="md:px-10 pb-3">
          iShitPro has SIXTY mods and features. Here is every single one:
        </p>

        <FeaturesList />

        <NoJailbreakSection />
      </div>
    </>
  );
}
