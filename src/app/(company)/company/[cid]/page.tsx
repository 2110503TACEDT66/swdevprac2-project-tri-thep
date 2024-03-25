// import Image from "next/image"
import getCompany from "@/libs/getCompany";

export default async function CompanyDetailPage({params} : {params: {cid : string}}) {
    
    const companyID = await getCompany(params.cid)

//     const mockHospitalRepo = new Map()
//    mockHospitalRepo.set("001", {name:"Chulalongkorn Hospital", image: "/img/chula.jpg"})
//     mockHospitalRepo.set("002", {name: "Rajavithi Hospital", image: "/img/rajavithi.jpg"})
//     mockHospitalRepo.set("003", {name: "Thammasat University Hospital ", image: "/img/thammasat.jpg"})


    return(
        <main className="text-center p-5">
            <h1 className="tetxt-lg font-medium p-10">
                Company Id :{companyID.data.id}
            </h1>
            <div className="flex flex-row my-5">
                <Image src={companyID.data.picture}
                    alt="Company Image"
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5 text-left">
                    {companyID.data.name}
                    {/* <div className="text-md mx-5">Address:  {companyID.data.address}</div>
                    <div className="text-md mx-5">Province:  {companyID.data.province}</div>
                    <div className="text-md mx-5">Postal code:  {companyID.data.postalcode}</div> */}
                    <div className="text-md mx-5">Tel:  {companyID.data.tel}</div>
                </div>    
            </div>
        </main>
    );
}

