'use client'

import styles from './banner.module.css'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function Banner() {

    
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg' ]
    const [index, setIndex] = useState(0)
    const router = useRouter()
    const {data:session} = useSession()


    return (
        <div className={styles.banner} onClick={()=>{setIndex(index+1)}}>
            <Image src={covers[index%4]}
            alt='vaccine'
            fill={true}
            priority
            objectFit='cover'
            />
            <div className={styles.bannertext}>
                <h1 className='text-4xl font-medium'>Vaccine Service Center</h1>
            </div>
            {
                session? <div className='z-30 absolute top-20 right-10 font-semibold text-white text-3xl'>
                    Welcome {session.user?.name}</div> : null
            }
            <button className='bg-white text-sky-600 border border-sky-600
            font-semibold px-2 py-2 m-2 rounded z-30 absolute bottom-0 right-0
            hover:bg-sky-600 hover:text-white hover:transparent'
            onClick={(e)=>{e.stopPropagation(); router.push('/hospital')}}>
               Select Hospital
            </button>
        </div>
    );

}