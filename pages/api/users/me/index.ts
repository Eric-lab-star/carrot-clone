import client from "libs/server/prismaclient";
import withHandler, { IResponse } from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse<IResponse>) {
  const {
    method,
    session: { user },
    body: { email, phone },
  } = req;
  if (method === "GET") {
    const profile = await client.user.findUnique({
      where: { id: req.session.user?.id },
    });
    return res.status(200).json({ ok: true, profile });
  }
  if (method === "POST") {
    const profile = await client.user.update({
      data: {
        email,
        phone,
      },
      where: {
        id: user?.id,
      },
    });
    return res.json({
      ok: true,
      profile,
    });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler })
);
