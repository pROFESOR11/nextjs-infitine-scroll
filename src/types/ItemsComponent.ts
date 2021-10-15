import { InfiniteQueryObserverResult } from 'react-query'

import type { ItemType } from './Item'

export type ItemsComponent = {
  items: ItemType[]
  isFetching?: boolean
  fetchNextPage: () => Promise<InfiniteQueryObserverResult<ItemType[], Error>>
}
