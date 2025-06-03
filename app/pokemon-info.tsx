// @ts-nocheck
'use client'

import { useQuery } from '@tanstack/react-query'
import { pokemonOptions } from './pokemon'


export function PokemonInfo() {
  const { data } = useQuery(pokemonOptions)

  console.log('data: ', data)

  return (
    <div>
      {data &&
        <figure>
          <img src={data.sprites.front_shiny} height={200} alt={data.name} />
          <h2>I'm {data.name}</h2>
        </figure>

      }
    </div>
  )
}
