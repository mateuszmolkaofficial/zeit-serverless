import { NowRequest, NowResponse } from '@now/node';
import pg from '../../db/pg';

const postUser = async (
  req: NowRequest,
  res: NowResponse,
): Promise<NowResponse> => {
  try {
    const [newUser] = await pg('users')
      .insert({
        nickName: req.body.nickName,
        smartText: req.body.smartText,
      })
      .returning('*');

    res
      .status(200)
      .send(
        `A new user of nickname: ${newUser.nickName} has been created.`,
      );
  } catch (e) {
    return res.status(500).send(e);
  }
};

export default postUser;
