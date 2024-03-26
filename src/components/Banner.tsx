'use client'

import styles from './banner.module.css'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function Banner() {
    const covers = ['/img/cover.png', '/img/cover2.png', '/img/cover3.png', '/img/c.png' ]
    const [index, setIndex] = useState(0)
    const router = useRouter()
    const {data:session} = useSession()

    return (
        <div className={styles.banner} onClick={()=>{setIndex(index+1)}}>
             {/* <div className={styles.bannertext}>
                <h1 className='text-4xl font-medium '>Online Job Fair Registration</h1>
            </div> */}
            <Image src={covers[index%4]}
            alt='job'
            fill={true}
            priority
            objectFit='cover'
            />
            {
                session? <div className='z-30 absolute top-20 right-10 font-semibold text-white text-3xl'>
                    Welcome {session.user?.name}</div> : null
            }
            <button className='bg-white text-blue-600 border border-sky-600
            font-semibold px-2 py-2 m-2 rounded z-30 absolute bottom-0 right-0
            hover:bg-blue-200 hover:text-blue-700 hover:transparent'
            onClick={(e)=>{e.stopPropagation(); router.push('/company')}}>
               Select Company
            </button>
        </div>
    );

}