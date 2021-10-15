import Items from '@components/Items'
import Layout from '@components/Layout'
import useItems from '@hooks/useItems'

export const Home = (): JSX.Element => {
  const { data, isFetching, isFetchingNextPage, fetchNextPage } = useItems()

  return (
    <Layout>
      <Layout.Header />
      <Layout.Content>
        <Items
          items={data?.pages?.reduce((prev, cur) => prev.concat(cur.map((item) => item)), [])}
          isFetching={isFetching || isFetchingNextPage}
          fetchNextPage={fetchNextPage}
        />
      </Layout.Content>
      <Layout.Footer />
    </Layout>
  )
}

export default Home
