import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    body: { question },
    session: { user },
    method,
  } = req;

  if (method === "POST") {
    const post = await client?.post.create({
      data: {
        title: question,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });

    return res.json({
      ok: true,
      post,
    });
  }
  if (method === "GET") {
    const post = await client?.post.findMany({
      include: {
        user: {
          select: {
            name: true,
          },
        },
        _count: {
          select: {
            Wondering: true,
            Answer: true,
          },
        },
      },
    });
    return res.json({ ok: true, post });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler })
);
