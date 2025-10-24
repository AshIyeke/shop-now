import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <div className=' bg-[#F4EBCD] mx-auto flex flex-col md:flex-row items-center justify-between pt-10 px-7  space-y-10 md:space-y-0 mb-15'>
      <div className=' space-y-6 text-center md:text-left'>
        <h1 className=' font-medium text-3xl'>Grab Upto 30% Off On <br /> Selected Headphone</h1>

        <Button className="bg-[#0E290E] text-white"><Link href={''}>Shop Now</Link></Button>

      </div>
      <div>
        <Image
        src={'/hero.png'}
        alt='hero'
        width={500}
        height={500}
        />
      </div>
    </div>
  )
}


