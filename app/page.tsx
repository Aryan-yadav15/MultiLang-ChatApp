import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  // const session = await getServerSession(authOptions)
  // console.log(session)

  return (
    <main className="">
      <div className="relative isolate pt-14 dark:bg-gray-900">
        <div
          className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.18% 48.1%, 100% 61.6%, 57.5% 26.9%, 85.5% 0.18%, 80.74% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0% 64.0%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.18%)"
            }}
          ></div>
        </div>
        <div className="py-12 sm:py-12 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
                Chat with<span className="text-pink-500"> Anyone</span><br /> anywhere!
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                You speak your Language,they speak their language.
                <span className="text-purple-400">Let Ai handle the translation of your words</span>
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/chat"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Get Started
                </Link>
                <Link
                  href="/pricing"
                  className="flex gap-x-1.5 rounded-md bg-gray-200 px-3.5 py-2.5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
                >
                  View Pricing<span aria-hidden = "true">↗</span>
                </Link>
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-2 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 ">
                <Image
                  src="/images/image.png"
                  alt="Next.js Starter"
                  width={1200}
                  height={800}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.18% 48.1%, 100% 61.6%, 57.5% 26.9%, 85.5% 0.18%, 80.74% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0% 64.0%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.18%)"
            }}
          ></div>
        </div>
      </div>
    </main>
  );
}
