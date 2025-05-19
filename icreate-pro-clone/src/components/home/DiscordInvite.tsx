'use client';

import Image from 'next/image';
import Link from 'next/link';

const DiscordInvite = () => {
  return (
    <div className="w-80 p-4 rounded-lg mx-auto" style={{ backgroundColor: 'rgb(91, 101, 234)' }}>
      <p className="text-white text-left text-baseline uppercase font-semibold pb-3">
        Join the Discord
      </p>
      <div className="flex items-center justify-between">
        <Image
          src="/assets/images/discord-logo.bin"
          alt="Discord Logo"
          width={56}
          height={56}
          className="rounded-xl h-14 w-14"
        />
        <p className="text-white px-5 text-sm text-left">
          Giveaways &amp; more!
        </p>
        <Link
          href="https://discord.gg/icreate"
          target="_blank"
          className="bg-green-600 px-4 py-2 rounded-xl drop-shadow-lg text-white"
        >
          Join
        </Link>
      </div>
    </div>
  );
};

export default DiscordInvite;
