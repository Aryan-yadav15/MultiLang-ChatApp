import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import CheckOutButton from './CheckOutButton'

const tiers = [
    {
        name: "Starter",
        id: null,
        href: "#",
        price: 0,
        description: "Get started with our platform.",
        features: [
            '20 Message Limit',
            '2 Participant limit Chat',
            '3 Chat rooms limit',
            'Supports 2 languages'
        ]
    },
    {
        name: "Pro",
        id: "si_OnlcsLNQYbMVzV",
        href: "#",
        price: 15,
        description: "Get started with our platform.",
        features: [
            'Unlimited Messages',
            'Unlimited Participants',
            'Unlimited Chat rooms',
            'Supports 10 languages'
        ]
    },

]

function PricingCard({ redirect }: { redirect: boolean }) {
    return (
        <div>
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
                {tiers.map((tier) => (
                    <div key={tier.id}>
                        <div className="relative flex flex-col h-full p-14 lg:p-20 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <h3 className="text-5xl font-bold text-gray-900">{tier.name}</h3>
                            <p className="mt-4 text-lg text-gray-500">{tier.description}</p>
                            <div className='flex flex-col gap-10 mt-10
                            '>
                                <div className="flex flex-col p-8 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
                                    <ul>
                                        {tier.features.map((feature) => (
                                            <li key={feature} className="flex items-center mt-4 space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-auto">
                                    <p className="text-5xl font-semibold text-gray-900">
                                        {tier.price === 0 ? 'Free' : `$${tier.price}`}
                                    </p>
                                    {redirect ? (
                                        <Link 
                                        href='/register'
                                        className=''
                                        >
                                            <Button variant={"outline"} className='mt-5 w-48 h-14 text-xl'>Get Started</Button>
                                        </Link>
                                    ) : (
                                        tier.id && <CheckOutButton />
                                    )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PricingCard