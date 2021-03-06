import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface GetCharactersResult {
    data: {
        characters: {
            info: {
                pages: number,
            },
            results: Character[]
        } | null
    }
}

export interface Character {
    id: string,
    name: string,
    species: string,
    image: string,
    location: {
        name: string,
        type: string,
    },
    origin: {
        name: string,
        type: string,
    },
    episode: {name: string}[]
    status: string,
}

export interface Filter {
    page?: number,
    name?: string,
    status?: string,
    species?: string,
}

const getCharactersQuery = `
query GetCharacters($page: Int, $name: String, $status: String, $species: String) {
    characters(page: $page, filter: { name: $name, status: $status, species: $species}) {
    info {
      pages
    }
    results {
        id
      name
      species
      image
      location {
        name
        type
      }
      origin {
        name
        type
      }
      episode {
        name
      }
      status
    }
  }
}
`

export const rickAndMortyApi = createApi({
    reducerPath: 'rickAndMortyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/graphql' }),
    tagTypes: ['Characters'],
    endpoints: (builder) => ({
        getCharacters: builder.query<GetCharactersResult, Filter>({
            query: (filter: Filter) => {
                return ({
                    url: '',
                    method: 'POST',
                    body: {
                        query: getCharactersQuery,
                        variables: filter,
                    },
                })
            },
            providesTags: ['Characters'],
        }),
    }),
})

export const {
    useGetCharactersQuery,
} = rickAndMortyApi