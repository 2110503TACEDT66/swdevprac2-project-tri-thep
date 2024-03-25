'use client'
import { useReducer } from 'react';
import Card from './Card';
import Link from 'next/link';

export default function CardPanel() {

    const showRatingReducer = ( ratingList: Map<string, number>, action: { type: string; companyName: string; rating: number }) => {
      
        switch (action.type) {
            case 'add' : {
                
                return new Map(ratingList.set(action.companyName, action.rating))
            }

            case 'remove' : {
                ratingList.delete(action.companyName);
                return new Map(ratingList)
            }

            default : return ratingList
        }

    }

    const [ratingList, dispatchRating] = useReducer(showRatingReducer, new Map([
        ['IBM', 5],
        ['Microsoft', 5],
        ['J.P.Morgan', 5],
        ]))

        

        /**
     * Mock data only
     */
    const mockHospitalRepo = [
        {cid:"001", name: "IBM", image: "/img/IBM.jpg"},
        {cid:"002", name: "Microsoft", image:"/img/microsoft.jpg"},
        {cid:"003", name: "J.P.Morgan", image: "/img/JP.jpg"}
    ]
    return(
        <div>
           <div style={{margin:"20px", display: "flex", flexDirection:"row",
            flexWrap: "wrap", justifyContent:"space-around", alignContent: "space-around" }}>     
            {
                mockHospitalRepo.map((companyItem)=>(
                    <Link href={`hospital/${companyItem.cid}`} className='w-1/5'>
                    <Card companyName={companyItem.name} imgSrc={companyItem.image} 
                rating={(company: string, Rating: number)=> dispatchRating({type:'add', companyName:company, rating:Rating})} />
                </Link>
                ))
                
            }
            </div>
            <div >
                {Array.from(ratingList).map(([company, rating])=>
                <div data-testid={company} className='p-2' 
                onClick={()=> dispatchRating({type:'remove', companyName:company, rating:rating})}
               > {company} Rating:{rating}
               </div>)}
            </div>
        </div>
    );
}