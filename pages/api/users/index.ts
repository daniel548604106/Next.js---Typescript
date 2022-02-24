import { NextApiRequest, NextApiResponse } from 'next';
import users from '@/Mock/users';
export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ users: users });
};
