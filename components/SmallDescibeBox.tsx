/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'

export default function SmallDescibeBox(){
    return(
        <div className="gulpinL_contener_rightbody" >
                        <h1>PikachuName</h1>
                        <div >
                            {/* <img src="/images/graph.png"/>  */}
                            <Image src="/images/pikachu_.png" width={480} height={450}/> 
                        </div>

                        <p>Height</p>
                        <p>Weight</p>
                        
            </div>
    )
}