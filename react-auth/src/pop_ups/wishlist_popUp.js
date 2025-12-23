import React, {useState, useEffect} from "react";

export default function WL_popUp(){
    useEffect(()=>{
        const timer = setTimeout(()=>{
            onHide()
        },3000)
    })
}