import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import client from "libs/server/prismaclient";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    session: { user },
    body: { message },
    method,
  } = req;
  if (method === "POST") {
    const postMsg = await client.message.create({
      data: {
        strem: {
          connect: {
            id: +id!,
          },
        },
        user: {
          connect: {
            id: user?.id,
          },
        },
        message,
      },
    });
    return res.json({ ok: true });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler })
);
