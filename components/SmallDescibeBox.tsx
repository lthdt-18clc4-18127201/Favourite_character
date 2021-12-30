/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'

export default function SmallDescibeBox({data_2}){
    const { name, image, gender, location, origin, species, status } = data_2;
    return(
        <div className="gulpinL_contener_rightbody" >
            <div className="profile-image">
                <Image src={image} alt={name} width={480} height={450}/>
            </div>
            <div className="profile-details">
                <h2>Character Details</h2>
                <ul>
                <li>
                    <strong>Name:</strong> { name }
                </li>
                <li>
                    <strong>Status:</strong> { status }
                </li>
                <li>
                    <strong>Gender:</strong> { gender }
                </li>
                <li>
                    <strong>Species:</strong> { species }
                </li>
                <li>
                    <strong>Location:</strong> { location?.name }
                </li>
                <li>
                    <strong>Originally From:</strong> { origin?.name }
                </li>
                </ul>
            </div>
        </div>
    )
}