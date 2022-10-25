import { production } from 'environment';
import { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  // Try check the method
  const method = req.method;

  // Get the login method from the body
  const loginMethod = 'google';

  // Get API URL
  const baseUrl = production.baseUrl;

  // Init back-end
  const client = new PocketBase(baseUrl);

  // Set Redirect page to /redirect
  const redirectUrl = production.OAuth_Redirect_URL;

  // Make sure the api calls method is valid
  switch(method) {
    case 'GET':
      // Now we want to identify which loginMethod we want to use to authenticate
      switch(loginMethod) {
        case 'google' || 'facebook': 
          try {
            const getOauthList = await (await (await client.users.listAuthMethods()).authProviders);
            const provider = getOauthList.find((providerObj) => {
              return providerObj.name = loginMethod;
            });

            const loginURL = provider?.authUrl + redirectUrl;
            return res.status(200).json(loginURL);
          } catch (err) {
            return res.status(400).json(err);
          }
        default: 
          return res.status(405).json('There was some issue in authenticating. Please try again.');
      }
    default: 
      res.setHeader('Allow', ['GET']);
      return res.status(405).json(`Method ${method} not allowed.`)
  }
}
