import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen p-10 relative top-[-2rem]">
      <div className="md:mr-10">
        <div className="mb-4 bg-gradient-to-b from-amber-50 to-purple-500 bg-clip-text text-2xl font-bold text-transparent sm:mb-6 sm:text-5xl sm:leading-tight">
          Commands for Developers
        </div>
        <div className="font-medium text-slate-400 mb-6">
          Our project is a community-driven platform that helps users find commands for any programming language. <br /> We provide easy access to essential resources, guiding developers in their learning journey.
        </div>
        <div className='mt-2'>
          <Link
            href="/dashboard"
            className='flex items-center justify-center font-medium text-slate-400 border border-slate-400 rounded-full py-3 hover:bg-slate-400 hover:text-white transition-colors duration-300 w-44'
            aria-label="Go to Dashboard"
          >
            Dashboard <MoveRight className="ml-2" />
          </Link>
        </div>
        <div className="mt-10">
          <hr className="border-slate-300" />
        </div>
      </div>
      <div className="mt-10 md:mt-0">
        <Image
          src="/assets/images/download.gif"
          alt="Developer Commands"
          width={500} // Set your desired width
          height={500} // Set your desired height
          className="ml-10 rounded-lg shadow-lg" // Added shadow and rounded corners
        />
      </div>
    </div>
  );
}