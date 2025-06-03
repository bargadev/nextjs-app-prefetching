// @ts-nocheck
'use client'

import { queryOptions, useQuery } from '@tanstack/react-query'

const pokemonOptions = queryOptions({
  queryKey: ['pokemon'],
  queryFn: async () => { },

})


export function PokemonInfo() {
  const { data } = useQuery(pokemonOptions)

  console.log('data: ', data)

  return (
    <div>
      <figure>
        <img src={data.sprites.front_shiny} height={200} alt={data.name} />
        <h2>I'm {data.name}</h2>
      </figure>
    </div>
  )
}
