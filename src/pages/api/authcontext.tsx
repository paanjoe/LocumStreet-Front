import { production } from 'environment';
import { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  // Try check the method
  const method = req.method;

  // Get API URL
  const baseUrl = production.baseUrl;

  // Init back-end
  const client = new PocketBase(baseUrl);

  // Login Method
  const loginMethod: string = '';

  switch (loginMethod) {
    // Auth via Forms Authentication
    case 'Forms':
      try {
        const authData = await client.users.authViaEmail(
          'EMAIL HERE',
          'PASSWORD HERE'
        );
        return res.status(200).json(authData);
      } catch (err) {
        return res.status(400).json(err);
      }
    // Auth via OAuth2.0 Google
    case 'Google':
      try {
        const authData = await client.users.authViaOAuth2(
          loginMethod,
          'CODE',
          'VERIFIER',
          'REDIRECT_URL'
        );
        return res.status(200).json(authData);
      } catch (err) {
        return res.status(400).json(err);
      }
    // Auth via OAuth2.0 Facebook
    case 'Facebook':
      try {
        const authData = await client.users.authViaOAuth2(
          loginMethod,
          'CODE',
          'VERIFIED',
          'REDIRECT_URL'
        );
        return res.status(200).json(authData);
      } catch (err) {
        return res.status(400).json(err);
      }
    // If something went wrong / header request not valid
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).json(`Method ${method} Not Allowed`);
  }
}
