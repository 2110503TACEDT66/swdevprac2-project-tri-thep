
import CardPanel from "@/components/CardPanel";
import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default async function Hospital() {

    const hospitals = await getHospitals()
    
    return(
        <main className="text-center p-10 m-10">
        <h1 className="text-xl font-medium text-black">Select Your Hospital</h1>
        <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
            <HospitalCatalog hospitalsJson={hospitals}/>
        </Suspense>
     
    </main>
    );

}