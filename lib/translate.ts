import * as fetchPonyfill from 'fetch-ponyfill'
import { URL } from 'url'

const { fetch } = fetchPonyfill()
const API = 'https://terjemahan.madura.web.id'

export const enum Arah {
  indMad = 'indonesia-madura',
  madInd = 'madura-indonesia'
}

export const enum Tingkat {
  enjeLyah = 1,
  engghiEnten = 2,
  engghiBunthen = 3
}

interface Query {
  tingkat?: Tingkat
  arah?: Arah
}

export function queryBuilder (_query: Query = {}): Query {
  const defaultQuery = {
    tingkat: Tingkat.enjeLyah,
    arah: Arah.indMad
  }
  const resultQuery = { ...defaultQuery, ..._query }
  return resultQuery
}

export default function translate (kalimat: string = '', _query: Query) {
  if (!kalimat.length || typeof kalimat !== 'string')
    throw new Error('Kalimat tidak boleh kosong')
  const query = queryBuilder(_query)
  const url = new URL(`${API}/${query.arah}.php`)
  Object.keys(query).forEach(
    key => key !== 'direction' && url.searchParams.append(key, query[key])
  )
  url.searchParams.append('kalimat', kalimat)
  return fetch(url.toString()).then(response => response.text())
}
