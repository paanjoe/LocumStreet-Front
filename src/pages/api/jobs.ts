import { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  // We want to add authorization for security

  // We want to know what is the request method
  const method = req.method;

  // We want to set our base API URL
  const baseUrl = process.env.baseUrl;

  // Initialize our back end apps
  const client = new PocketBase(baseUrl);

  // Identify which operation should be executed
  switch (method) {
    // Get All Records
    case 'GET':
      try {
        const records = await client.records.getFullList('jobs', 200, {
          sort: '-jobDatePosted',
          filter: 'listingStatus != false',
          expand: 'jobOwnerID, jobImageArr',
        });
        return res.status(200).json(records);
      } catch (err) {
        return res.status(400).json(err);
      }

    // Create New Records
    case 'POST':
      try {
        const create = await req.body;
        const record = await client.records.create('jobs', create);
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
