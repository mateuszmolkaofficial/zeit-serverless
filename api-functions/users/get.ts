import { NowRequest, NowResponse } from '@now/node';
import pg from '../../db/pg';

const getUsers = async (req: NowRequest, res: NowResponse) => {
  try {
    const users = await pg('users');
    res.status(200).send(users);
  } catch (e) {
    res.status(500).send(e);
  }
};

export default getUsers;
