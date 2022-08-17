import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;

  const post = await client?.post.findUnique({
    where: {
      id: +id!,
    },
    include: {
      user: {
        select: {
          name: true,
          avatar: true,
        },
      },
      Answer: {
        select: {
          id: true,
          answer: true,
          user: {
            select: {
              name: true,
              avatar: true,
              id: true,
            },
          },
        },
      },
      _count: {
        select: {
          Answer: true,
          Wondering: true,
        },
      },
    },
  });

  return res.json({
    ok: true,
    post,
  });
}

export default withApiSession(withHandler({ handler, methods: ["GET"] }));
