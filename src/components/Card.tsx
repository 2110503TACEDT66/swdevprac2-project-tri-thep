'use client'

import Image from "next/image";
import style from './card.module.css'
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";
import { useState } from "react";

export default function Card({hospitalName, imgSrc, rating} : {hospitalName:string, imgSrc:string, rating?:Function}) {

const [value, setValue] = useState(5);

    return (
        <InteractiveCard contentName={hospitalName}>
            <div className={'w-full h-[70%] relative rounded-t-lg shadow-cyan-800'}>
                <Image src={imgSrc}
                alt="Card"
                fill={true}
                objectFit="cover"
                />
            </div>
            <div className={'w-full h-[15%] p-[10px] text-sky-700 shadow-cyan-500/50'}>
                {hospitalName}
            </div>
            {
                rating? <Rating value={value} onChange={(event, newValue) => {setValue(newValue || 0); 
                    rating(hospitalName, newValue)}}
                    name={hospitalName + " Rating"} 
                    id={hospitalName + " Rating"} 
                    data-testid={hospitalName + " Rating"}
                    onClick={(e)=>{e.stopPropagation();}}/>
                    : ''
            }
            
        </InteractiveCard>
    );

}