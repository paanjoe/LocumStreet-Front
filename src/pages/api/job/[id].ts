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
    // We want to get record as per id
    case 'GET':
      try {
        const record = await client.records.getOne('jobs', `${req.query.id}`, {
          expand: 'jobOwnerID, jobImageArr',
        });

        return res.status(200).json(record);
      } catch (err) {
        return res.status(400).json(err);
      }

    // We want to update record as per id
    case 'PUT':
      try {
        const update = await req.body;
        const record = await client.records.update(
          'jobs',
          `${req.query.id}`,
          update
        );
        return res.status(200).json({ success: true, data: record });
      } catch (err) {
        return res.status(400).json(err);
      }

    // We want to delete record as per id
    case 'DELETE':
      try {
        const remove = await req.body;
        const record = await client.records.delete(
          'jobs',
          `${req.query.id}`,
          remove
        );
        return res.status(200).json({ success: true, data: req.query.id });
      } catch (err) {
        return res.status(400).json(err);
      }

    // If somehthing went wrong / Wrong operation command
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).json(`Method ${method} Not Allowed`);
  }
}
