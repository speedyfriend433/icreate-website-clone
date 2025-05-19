import { Metadata } from "next";

export const metadata: Metadata = {
  title: "iCreate Pro - Tutorial",
  description: "Learn how to use iCreate Pro",
};

export default function Tutorial() {
  return (
    <div className="bg-darker-gray p-10 text-white text-lg md:text-xl text-center items-center min-h-[70vh]">
      <h1 className="text-4xl font-bold mb-8">Tutorial</h1>
      <p className="max-w-3xl mx-auto mb-6">
        This page would contain tutorials on how to use iCreate Pro.
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
    </div>
  );
}
