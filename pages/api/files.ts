import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${process.env.IMAGEID}/images/v2/direct_upload`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.IMAGETOKEN}`,
      },
    }
  );
  const json = await response.json();
  return res.json({ ok: true, ...json.result });
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
