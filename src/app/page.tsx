import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[80vh] items-center justify-center p-8 sm:p-20">
      <main className="flex flex-col gap-8 items-center">
        <Image
          src="/logo.png"
          alt="TravelBuddy logo"
          width={120}
          height={120}
          priority
        />
        <h1 className="text-4xl font-bold text-center text-[color:var(--primary)]">
          Welcome to TravelBuddy
        </h1>
        <p className="text-lg text-center text-gray-700 max-w-xl">
          Your companion for planning and exploring amazing destinations.
        </p>
        <a className="btn mt-4" href="/signup">
          Get Started
        </a>
      </main>
    </div>
  );
}
