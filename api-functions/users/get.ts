import { NowRequest, NowResponse } from '@now/node';
import pg from '../../db/pg';

const getUsers = async (
  req: NowRequest,
  res: NowResponse,
): Promise<NowResponse> => {
  try {
    const test = await pg('users');
    return res.status(200).send(test);
  } catch (e) {
    console.log(e);
  }
};

export default getUsers;
