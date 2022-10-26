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

  switch (method) {
    // We want to get record based on Query
    case 'GET':
      try {
        const records = await client.records.getOne(
          'profiles',
          `${req.query.id}`,
          {
            sort: '-created',
            expand: 'jobOwnerID',
          }
        );

        return res.status(200).json(records);
      } catch (err) {
        return res.status(400).json(err);
      }

    // We want to update the record as per id
    case 'PUT':
      try {
        const update = await req.body;
        const record = await client.records.update(
          'profiles',
          `${req.query.id}`,
          update
        );
        return res.status(200).json({ success: true, data: record });
      } catch (err) {
        return res.status(400).json(err);
      }

    // We want to delete the record as per id
    case 'DELETE':
      try {
        const remove = await req.body;
        const record = await client.records.delete(
          'profiles',
          `${req.query.id}`,
          remove
        );

        return res.status(200).json({ success: true, data: req.query.id });
      } catch (err) {
        return res.status(400).json(err);
      }

    // If something went wrong / Wrong operation request
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).json(`Method ${method} Not Allowed`);
  }
}
