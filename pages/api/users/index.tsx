import clientPromise from '../../../utils/dbConnect'
import { NextApiRequest, NextApiResponse } from "next"


// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await clientPromise;
    
    const data = await db("User").find({}).toArray();
    res.json(data);
}