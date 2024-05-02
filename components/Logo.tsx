import Link from 'next/link'
import React from 'react'
import { AspectRatio } from './ui/aspect-ratio'

{/*No logos currently but we acana make one
    1. make a logo in figma
    2. export it as an svg
    3. make a images folder in the chapp dir
    4. make a logo folder in the images folder
    5. put the svg in the logo folder
    6. import the logo here and use it
    7. make sure to make it color responsive
*/}

const Logo = () => {
  return (
    <Link href ="/" className='overflow-hidden'>
        <div className='flex items-center w-72 h-14'>
            <AspectRatio ratio={16/9} className='flex items-center justify-center'>
                <h1 className='text-3xl font-bold'>Logo Here</h1>
            </AspectRatio>
        </div>
    </Link>
  )
}

export default Logo