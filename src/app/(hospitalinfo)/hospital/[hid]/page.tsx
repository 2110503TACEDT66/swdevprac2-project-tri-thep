import Image from "next/image"
import getHospital from "@/libs/getCompany"

export default async function HospitalDetailPage({params} : {params: {hid : string}}) {
    
    const hospitalId = await getHospital(params.hid)

//     const mockHospitalRepo = new Map()
//    mockHospitalRepo.set("001", {name:"Chulalongkorn Hospital", image: "/img/chula.jpg"})
//     mockHospitalRepo.set("002", {name: "Rajavithi Hospital", image: "/img/rajavithi.jpg"})
//     mockHospitalRepo.set("003", {name: "Thammasat University Hospital ", image: "/img/thammasat.jpg"})


    return(
        <main className="text-center p-5">
            <h1 className="tetxt-lg font-medium p-10">
                Hospital Id :{hospitalId.data.id}
            </h1>
            <div className="flex flex-row my-5">
                <Image src={hospitalId.data.picture}
                    alt="Hospital Image"
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5 text-left">
                    {hospitalId.data.name}
                    <div className="text-md mx-5">Address:  {hospitalId.data.address}</div>
                    <div className="text-md mx-5">Province:  {hospitalId.data.province}</div>
                    <div className="text-md mx-5">Postal code:  {hospitalId.data.postalcode}</div>
                    <div className="text-md mx-5">Tel:  {hospitalId.data.tel}</div>
                </div>    
            </div>
        </main>
    );
}

