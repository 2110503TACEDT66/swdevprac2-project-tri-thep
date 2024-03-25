'use client'

import { useReducer } from 'react';
import Card from './Card';
import { act } from 'react-dom/test-utils';
import Link from 'next/link';

export default function CardPanel() {

    const showRatingReducer = ( ratingList: Map<string, number>, action: { type: string; hospitalName: string; rating: number }) => {
      
        switch (action.type) {
            case 'add' : {
                
                return new Map(ratingList.set(action.hospitalName, action.rating))
            }

            case 'remove' : {
                ratingList.delete(action.hospitalName);
                return new Map(ratingList)
            }

            default : return ratingList
        }

    }

    const [ratingList, dispatchRating] = useReducer(showRatingReducer, new Map([
        ['Chulalongkorn Hospital', 5],
        ['Rajavithi Hospital', 5],
        ['Thammasat University Hospital', 5],
        ]))

        

        /**
     * Mock data only
     */
    const mockHospitalRepo = [
        {hid:"001", name: "Chulalongkorn Hospital", image: "/img/chula.jpg"},
        {hid:"002", name: "Rajavithi Hospital", image:"/img/rajavithi.jpg"},
        {hid:"003", name: "Thammasat University Hospital", image: "/img/thammasat.jpg"}
    ]
    return(
        <div>
           <div style={{margin:"20px", display: "flex", flexDirection:"row",
            flexWrap: "wrap", justifyContent:"space-around", alignContent: "space-around" }}>
                
            {
                mockHospitalRepo.map((hospitalItem)=>(
                    <Link href={`hospital/${hospitalItem.hid}`} className='w-1/5'>
                    <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.image} 
                rating={(hospital: string, Rating: number)=> dispatchRating({type:'add', hospitalName:hospital, rating:Rating})} />
                </Link>
                ))
                
            }
            </div>
            <div >
                {Array.from(ratingList).map(([hospital, rating])=>
                <div data-testid={hospital} className='p-2' 
                onClick={()=> dispatchRating({type:'remove', hospitalName:hospital, rating:rating})}
               > {hospital} Rating:{rating}
               </div>)}
            </div>
        </div>
    );
}