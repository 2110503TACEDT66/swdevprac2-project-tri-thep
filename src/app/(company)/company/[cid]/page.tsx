import Image from "next/image"
import getCompany from "@/libs/getCompany";

export default async function CompanyDetailPage({params} : {params: {cid : string}}) {
    const companyID = await getCompany(params.cid)

    return(
        <main className="text-center p-5">
            <h1 className="text-xl font-medium p-10">
                {companyID.data.name}
            </h1>
            <div className="flex flex-row my-5">
                <Image src={companyID.data.picture}
                    alt="Company Image"
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5 text-left">
                    <div className="text-md mx-5">Address: {companyID.data.address}</div>
                    <div className="text-md mx-5">Website: {companyID.data.website}</div>
                    <div className="text-md mx-5">Tel:  {companyID.data.tel}</div>
                    <div className="text-md mx-5">Description:  {companyID.data.description}</div>
                </div>    
            </div>
        </main>
    );
}

