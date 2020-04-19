import { NowRequest, NowResponse } from '@now/node';
import getUsers from '../api-functions/users/get';
import postUser from '../api-functions/users/post';
import deleteUser from '../api-functions/users/delete';
import patchUser from '../api-functions/users/patch';

export default async (req: NowRequest, res: NowResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  switch (req.method.toUpperCase()) {
    case 'GET':
      return getUsers(req, res);
    case 'POST':
      return postUser(req, res);
    case 'DELETE':
      return deleteUser(req, res);
    case 'PATCH':
      return patchUser(req, res);
    default:
      return res
        .status(404)
        .send(
          'This method is not available. Try another one... like GET, POST, PATCH or DELETE?',
        );
  }
};
