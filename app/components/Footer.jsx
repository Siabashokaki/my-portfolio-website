import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='text-center mt-20'>
        <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' />
        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={assets.mail_icon} alt='' className='w-6' />
          freddiealicante1a@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Freddie Alicante. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a target='_blank' href='https://github.com/codewith-freddie/'>GitHub</a></li>
          <li><a target='_blank' href='https://www.linkedin.com/in/codewith-freddie/'>LinkedIn</a></li>
          <li><a target='_blank' href='https://www.facebook.com/itsme.freddie/'>Facebook</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
