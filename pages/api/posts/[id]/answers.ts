import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    session: { user },
    query: { id },
    body: { comment },
  } = req;

  const post = await client?.post.findUnique({
    where: {
      id: +id!,
    },
  });
  if (!post) {
    return res
      .status(404)
      .json({ ok: false, error: "Post is deleted or does not exists" });
  }

  const answer = await client?.answer.create({
    data: {
      user: {
        connect: {
          id: user?.id,
        },
      },
      post: {
        connect: {
          id: +id!,
        },
      },
      answer: comment,
    },
  });

  return res.json({
    ok: true,
    answer,
  });
}

export default withApiSession(withHandler({ methods: ["POST"], handler }));
