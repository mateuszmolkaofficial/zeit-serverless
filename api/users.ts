import { NowRequest, NowResponse } from '@now/node';
import getUsers from '../api-functions/users/get';
import postUser from '../api-functions/users/post';

export default async (
  req: NowRequest,
  res: NowResponse,
): Promise<NowResponse> => {
  switch (req.method.toUpperCase()) {
    case 'GET':
      return getUsers(req, res);
    case 'POST':
      return postUser(req, res);
    default:
      return res
        .status(404)
        .send(
          'This method is not available. Try another one... like GET or POST?',
        );
  }
};
