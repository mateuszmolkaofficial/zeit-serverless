import { NowRequest, NowResponse } from '@now/node';
import pg from '../../db/pg';

const patchUser = async (
  req: NowRequest,
  res: NowResponse,
): Promise<NowResponse> => {
  try {
    const [updatedUser] = await pg('users')
      .where({
        id: req.body.id,
      })
      .update({
        nickName: req.body.nickName,
        smartText: req.body.smartText,
      })
      .returning('*');

    res
      .status(200)
      .send(
        `A user of nickname: ${updatedUser.nickName} has been updated.`,
      );
  } catch (e) {
    return res.status(500).send(e);
  }
};

export default patchUser;
