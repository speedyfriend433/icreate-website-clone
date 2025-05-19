'use client';

const NoJailbreakSection = () => {
  return (
    <div className="py-10">
      <h2 className="font-semibold pt-10 pb-5 text-3xl">No Jailbreak!</h2>

      <div className="aspect-video mx-auto max-w-3xl mb-5">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/UKn9eaht3IY"
          title="How to install iShitPro"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p className="md:w-[50rem] mx-auto">
        You can install iShitPro without jailbreaking your phone, and in some* cases
        without a computer at all! Just follow the installation method and you can get
        iShitPro in minutes.
      </p>

      <p className="md:px-10 pt-2 text-base">
        *The supported non-computer method may not work for everybody.
      </p>
    </div>
  );
};

export default NoJailbreakSection;
