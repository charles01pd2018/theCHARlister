// types
import type { NextApiRequest, NextApiResponse } from 'next'

export default (
  _: NextApiRequest, 
  res: NextApiResponse,
) => {
  res.status(200).json({ hello: 'hi', msg: `You must be a devloper checking out my api route. Well, sorry to dissapoint. There isn't anything here :-3` })
}
