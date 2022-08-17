import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    session: { user },
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
  const isWondering = Boolean(
    await client?.wondering.findFirst({
      where: {
        userId: user?.id,
        postId: +id!,
      },
      select: {
        id: true,
      },
    })
  );

  return res.json({
    ok: true,
    post,
    isWondering,
  });
}

export default withApiSession(withHandler({ handler, methods: ["GET"] }));
