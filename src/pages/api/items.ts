import type { NextApiRequest, NextApiResponse } from 'next'

import { ItemType } from '@customTypes/Item'

export default async (req: NextApiRequest, res: NextApiResponse<ItemType[]>): Promise<void> => {
  const { start, limit } = req.query
  const response = await fetch(`https://vercel-express-liart.vercel.app/api/posts?start=${start}&limit=${limit}`)
  const responseJson = await response.json()

  res.status(200).send(responseJson)
}
