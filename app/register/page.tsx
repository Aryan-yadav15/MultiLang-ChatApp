import { authOptions } from '@/auth'
import PricingCard from '@/components/PricingCard'
import { getServerSession } from 'next-auth'
import React from 'react'

async function RegisterPage() {
  const session = await getServerSession(authOptions)
  return (
    <div className='isolate overflow-hidden bg-gray-900 flex items-center flex-col'>
      <div className='max-auto max-w-7xl px-6 pb-16 pt-24 text-center sm:pt-32 lg:px-8'>
        <div className="mx-auto max-w-4xl">
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Lets heandle your membership <br />
            <span className="text-pink-500 "> {session?.user?.name}</span>
          </p>
        </div>
        <div className="relative mt-6">
          <svg viewBox="0 0 1208 1024"
            className="absolute opacity-60 -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient (closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
            style={{ filter: "blur(100px)" }}> {/* Apply blur filter here */}
            <ellipse cx={604} cy={512} fill="url(#radial-gradient-pricing)" rx={604} ry={512} />
            <defs>
              <radialGradient id="radial-gradient-pricing">
                <stop stopColor="#7775D6" />
                <stop offset="1" stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <PricingCard redirect={false}/>
    </div>
  )
}

export default RegisterPage