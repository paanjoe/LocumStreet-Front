import { production } from 'environment';
import { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  // Get request method
  const method = req.method;

  // Load API URL
  const baseUrl = production.baseUrl;

  // Init client
  const client = new PocketBase(baseUrl);

  // User object
  const user = {
    email: 'test',
    password: 'password',
    passwordConfirm: 'test',
  };

  const tryLogin = await client.users.create(user);

  return res.status(200).json(tryLogin);
}
