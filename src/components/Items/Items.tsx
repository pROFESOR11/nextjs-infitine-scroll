import { Grid } from '@material-ui/core'
import React, { useRef } from 'react'

import Item from '@components/Item'
import ItemSkeleton from '@components/ItemSkeleton'
import { LIMIT_PER_REQUEST } from '@constants/pagination'
import useIntersectionObserver from '@hooks/useIntersectionObserver'
import type { ItemsComponent } from 'src/types/ItemsComponent'

const Items = ({ items, isFetching = true, fetchNextPage }: ItemsComponent): JSX.Element => {
  const loadMoreRef = useRef(null)

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: fetchNextPage,
    enabled: !isFetching,
    threshold: 0, // meaning as soon as even one pixel is visible, the callback will be run
  })

  return (
    <>
      <Grid container spacing={2} justifyContent="center" data-test="item-container">
        {items?.map((item) => (
          <Grid key={item.id.toString()} item xs={12} sm={6} md={4} lg={3}>
            <Item {...item} />
          </Grid>
        ))}
        {isFetching &&
          Array.from(Array(LIMIT_PER_REQUEST), (_, index) => index + 1).map((skeletonIx) => (
            <Grid key={`skeleton-${skeletonIx}`} item xs={12} sm={6} md={4} lg={3}>
              <ItemSkeleton />
            </Grid>
          ))}
      </Grid>
      <div id="#loadMoreRef" ref={loadMoreRef} />
    </>
  )
}

export default Items
