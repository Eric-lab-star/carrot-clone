import { connect } from "http2";
import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    session: { user },
  } = req;

  const alreadyExist = await client?.wondering.findFirst({
    where: {
      userId: user?.id,
      postId: +id!,
    },
    select: {
      id: true,
    },
  });

  if (alreadyExist) {
    await client?.wondering.delete({
      where: {
        id: alreadyExist.id,
      },
    });
  } else {
    await client?.wondering.create({
      data: {
        post: {
          connect: {
            id: +id!,
          },
        },
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
  }

  return res.json({
    ok: true,
  });
}

export default withApiSession(withHandler({ handler, methods: ["POST"] }));
