
import { useState, useEffect } from "react"


export function useWindowListener(eventType:string, listerner:EventListener) {


    useEffect(()=>{

        window.addEventListener(eventType, listerner)
        
        return ()=>{
            window.removeEventListener(eventType, listerner)
        }
    }, [])
}