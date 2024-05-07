'use client'

import { redirect } from 'next/navigation'
import { Button } from './ui/button'
import { useSession } from 'next-auth/react'

const CheckOutButton = () => {
  const {data:session} = useSession()

  const createCheckoutSession = async()=>{
    if(!session) redirect('/')
    // [push in firestore db]

    // strip[e extension on firebase]

    // redirect to checkout page
  }

  return (
    <div className=" flex flex-col space-y-2">
      <button onClick={()=>createCheckoutSession()}>
      <Button variant={"outline" } className='w-72 h-12 mt-6 text-[20px]' >Sign up</Button>
    </button>
    </div>
  )
}

export default CheckOutButton