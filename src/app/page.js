import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-white">
      <Head>
        <title>Photo Card Game</title>
        <meta name="description" content="Turn your photos into trading cards!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center text-center px-4 py-8">
        <h1 className="text-5xl font-bold text-red-600 mb-6">
          Welcome to the <span className="text-gray-900">Photo Card Game!</span>
        </h1>

        <p className="text-lg text-gray-700 mb-10 max-w-lg">
          Capture photos of objects, people, or animals, and let our AI transform them into unique trading cards with personalized stats.
          Embark on a new adventure with every click!
        </p>

        <div className="flex space-x-6">
          <Link href="/login" className="px-8 py-3 text-lg font-semibold bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105">
            Log In
          </Link>
          <Link href="/signup" className="px-8 py-3 text-lg font-semibold bg-white text-red-600 border-2 border-red-600 rounded-full shadow-lg hover:bg-red-50 transition duration-300 ease-in-out transform hover:scale-105">
            Sign Up
          </Link>
        </div>
      </main>

      <footer className="w-full py-6 bg-red-600 text-white text-center">
        <p className="text-sm">Created by [Your Name]</p>
      </footer>
    </div>
  );
}
