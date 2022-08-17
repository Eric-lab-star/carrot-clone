import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    body: { question },
    session: { user },
  } = req;
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
  res.json({
    ok: true,
    post,
  });
}

export default withApiSession(withHandler({ methods: ["POST"], handler }));
