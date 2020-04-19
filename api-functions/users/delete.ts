import { NowRequest, NowResponse } from '@now/node';
import pg from '../../db/pg';

const deleteUser = async (
  req: NowRequest,
  res: NowResponse,
): Promise<NowResponse> => {
  try {
    const [deletedUser] = await pg('users')
      .where({
        id: req.body.id,
      })
      .del()
      .returning('*');

    res
      .status(200)
      .send(
        `A new user of nickname: ${deletedUser.nickName} has been deleted.`,
      );
  } catch (e) {
    return res.status(500).send(e);
  }
};

export default deleteUser;
