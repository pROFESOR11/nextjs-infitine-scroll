import { Card, CardContent } from '@material-ui/core'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ItemSkeleton = (): JSX.Element => {
  return (
    <Card style={{ maxWidth: 345 }}>
      <Skeleton height={100} />
      <CardContent>
        <Skeleton count={3} />
      </CardContent>
    </Card>
  )
}

export default ItemSkeleton
