import { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';
import { production } from '../../../environment';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  // We want to add authorization for security

  // We want to know what is the request method
  const method = req.method;

  // We want to set our base API URL
  const baseUrl = production.baseUrl;

  // Initialize our back end apps
  const client = new PocketBase(baseUrl);

  // Identify which operation should be executed
  switch (method) {
    // We want to get all records
    case 'GET':
      try {
        const records = await client.records.getFullList('profiles', 200, {
          sort: '-created',
          expand: 'jobOwnerID',
        });
        return res.status(200).json(records);
      } catch (err) {
        return res.status(400).json(err);
      }

    // We want to create new records
    case 'POST':
      try {
        const create = await req.body;
        const record = await client.records.create('profiles', create);
        return res.status(201).json({ success: true, data: record });
      } catch (err) {
        return res.status(400).json(err);
      }
    // If something went wrong / header request not valid
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).json(`Method ${method} Not Allowed`);
  }
}
