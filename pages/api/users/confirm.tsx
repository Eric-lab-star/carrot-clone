import withHandler from "libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function tokenHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    body: { token },
  } = req;
  console.log(token);
  return res.status(200).end();
}

export default withHandler("POST", tokenHandler);
