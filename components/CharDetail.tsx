import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import EmbedVideoCom from './EmbedVideo';
import SmallDescibeBoxCom from './SmallDescibeBox';


export default function ShowCharDetail(){
    return(
        // <div className="Home_grid__GxQ85">
        //     <div className="Home_card___LpL1">
        //     <h2>CharGulpin</h2>
        //     <p>naniiii char guklpjjnju</p>
        //     </div>
        // </div>
        /* <img src = {Image2} /> */
        /* <img src="/images/pkm_blueTrainer.jpg"/> */
        <div className="gulpinL_main_contener">
            <div className="gulpinL_contener_body">
                <h1>
                    Pikachu Gul
                </h1>
                    
                
                {/* <img src="/images/pikachu_.png"/> */}
                <p>
                Pikachu[c] is a species of Pokémon, fictional creatures that appear in an assortment of media of the Pokémon franchise by The Pokémon Company. Pikachu is a yellow mouse-like Pokémon with powerful electrical abilities. Pikachu is the best-known species of Pokémon, largely due to its appearance in the anime series as the starter Pokémon of the protagonist, Ash Ketchum. Pikachu is a major character of the Pokémon franchise as well as its mascot, and has become an icon of Japanese pop culture in recent years, as well as one of the major mascots for Nintendo.

                Pikachus design was conceived by Atsuko Nishida and finalized by Ken Sugimori.[1] Pikachu first appeared in Pokémon Red and Green in Japan, and later in the first internationally released Pokémon video games, Pokémon Red and Blue, for the Game Boy.

                In most vocalized appearances, including the anime and certain video games, it is primarily voiced by Ikue Ōtani. Pikachu also appeared in the primary cast of the live-action animated film Pokémon Detective Pikachu, performed in CGI and voiced by Ryan Reynolds, as well as in every installment of the Super Smash Bros. series, including Katy Perry's music video, Electric.
                </p>

            </div>
            <SmallDescibeBoxCom/>
            <EmbedVideoCom/>
            
          
        </div>
        
    )
}