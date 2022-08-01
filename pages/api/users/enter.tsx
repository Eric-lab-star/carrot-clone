import prismaclient from "libs/server/prismaclient";
import withHandler from "libs/server/withHandler";

import { NextApiRequest, NextApiResponse } from "next";

async function enter(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "GET") {
    return res.status(405).end();
  }

  console.log(req.body);
  return res.json({ ok: true });
}

export default withHandler("POST", enter);
