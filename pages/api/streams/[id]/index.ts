import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import client from "libs/server/prismaclient";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    session: { user },
  } = req;
  const stream = await client.stream.findUnique({
    where: {
      id: +id!,
    },
    include: {
      message: {
        select: {
          message: true,
          id: true,
          user: {
            select: {
              avatar: true,
              id: true,
            },
          },
        },
      },
      user: true,
    },
  });
  const isOwner = stream?.userId === user?.id;

  if (stream && !isOwner) {
    stream.cloudflareURL = "xxxx";
    stream.cloudflareKey = "xxxx";
  }

  return res.json({
    ok: true,
    stream,
  });
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
