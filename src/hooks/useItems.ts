import { useInfiniteQuery } from 'react-query'
import type { UseInfiniteQueryResult } from 'react-query'

import { LIMIT_PER_REQUEST } from '@constants/pagination'
import { ItemType } from '@customTypes/Item'

const useItems = (): UseInfiniteQueryResult<ItemType[], Error> => {
  const fetchItems = ({ pageParam = 0, limit = LIMIT_PER_REQUEST } = {}) =>
    fetch(
      `https://cors-anywhere.herokuapp.com/https://vercel-express-liart.vercel.app/api/posts?start=${pageParam}&limit=${limit}`
    ).then((response) => response.json())

  return useInfiniteQuery<ItemType[], Error>('items', fetchItems, {
    refetchOnWindowFocus: false,
    cacheTime: Infinity,
    staleTime: Infinity,

    getNextPageParam: (lastPage, _pages) => {
      try {
        return lastPage[lastPage.length - 1].id
      } catch {
        return 0
      }
    },
  })
}

export default useItems
