import Image from "next/image";
import styles from './topmenu.module.css'
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from 'next-auth';
import { Link } from '@mui/material'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function TopMenu() {

    const session = await getServerSession(authOptions)

    return(
        <div className={styles.menucontainer}>
            {
                session ? <Link href="/api/auth/signout" className='flex items-center left-0 h-full px-2 absolute left-0 text-cyan-600 text-sm'>Sign-Out of {session.user?.name}</Link> 
                : <Link href="/api/auth/signin"  className='flex items-center left-0 h-full px-2 absolute left-0 text-cyan-600 text-sm'>Sign-In</Link>
            }
            {
                !session ? <div className="flex items-center left-20 h-full px-2 absolute left-0 text-cyan-600 text-sm">
                    <TopMenuItem title='Register' pageRef='/register'/>
                </div> : <></>
            }
            {
                session ? <div className="flex items-center left-20 h-full px-2 absolute left-0 text-cyan-600 text-sm">
                    <TopMenuItem title='My-Interviews' pageRef='/interviewList'/>
                </div> : <></>
            }

            <a href={'/'}>
                <Image src="/img/logo.jpg"
                alt="logo"
                className={styles.logoimg}
                width={0}
                height={0}
                sizes='100vh'
                />
            </a>

            {
                session ? <TopMenuItem title='Book-An-Interview' pageRef='/interview'/> : <></>
            }
           
            
        </div> 
    );
}