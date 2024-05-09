'use client'

import { redirect } from 'next/navigation'
import { Button } from './ui/button'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/firebase'

const CheckOutButton = () => {
  const {data:session} = useSession()
  const [loading, setLoading] = useState(false) 
  

  const createCheckoutSession = async()=>{
    if(!session?.user.id) redirect('/')
    // [push in firestore db]
    setLoading(true)

    const docRef = await addDoc(collection(db,'customers',session.user.id,'checkout_session '),{
      price:"price",
      success_url:window.location.origin,
      cancel_url:window.location.origin
    })
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