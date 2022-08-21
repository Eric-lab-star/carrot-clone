import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import client from "libs/server/prismaclient";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    session: { user },
    body: { name, price, description },
    method,
  } = req;
  if (method === "POST") {
    const stream = await client.stream.create({
      data: {
        name,
        price,
        description,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    return res.json({
      ok: true,
      stream,
    });
  }
  if (method === "GET") {
    const streams = await client.stream.findMany({
      take: 10,
      skip: 10,
    });
    return res.json({
      ok: true,
      streams,
    });
  }
}

export default withApiSession(
  withHandler({ methods: ["POST", "GET"], handler })
);
