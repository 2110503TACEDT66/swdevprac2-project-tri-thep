import Banner from '@/components/Banner'

export default function Home() {
  return (
    <main >
      <div>
        <h1 className='text-4xl font-medium p-5 mt-10 text-black text-center fix
        drop-shadow-2xl shadow-pink-500 font-sans'
        >Welcome to</h1>
      </div>
      <div className='text-center fix p-2 m-10 '>
      <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block
         text-4xl font-medium p-2 m-10 text-black drop-shadow-md shadow-gray-200 ">
      <span className="relative text-white items-center">Online Job Fair Registration</span>
      </span>
      </div>
     
      {/* <div>
        <h1 className="text-4xl font-medium p-2 m-10 text-black text-center fix
        drop-shadow-md shadow-gray-200 font-sans header-client 
        "
        >Job Fair Registration</h1>
      </div> */}
      <Banner/>
    </main>
  )
}
