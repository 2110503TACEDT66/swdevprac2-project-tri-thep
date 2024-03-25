import Link from "next/link"
import Card from "./Card"
import { CompanyItem, CompanyJson } from "../../interface"

export default async function CompanyCatalog({companiesJson}:{companiesJson:CompanyJson}) {
    return (
        <>
        Explore {companiesJson.count} companies in our catalog
        <div style={{margin:"20px", display: "flex", flexDirection:"row",
            flexWrap: "wrap", justifyContent:"space-around", alignContent: "space-around"}}>
           
            {
                companiesJson.data.map((companyItem:CompanyItem)=>(
                    <Link href={`/company/${companyItem.id}`} className="w-1/5">
                    <Card companyName={companyItem.name} imgSrc={companyItem.picture}
                    />
                    </Link>
                ))
            }
            </div>
        </>
    )
}