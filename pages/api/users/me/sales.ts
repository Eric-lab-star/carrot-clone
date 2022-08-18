import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import client from "libs/server/prismaclient";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    session: { user },
  } = req;

  const sales = await client?.sale.findMany({
    where: {
      userId: user?.id,
    },
    include: {
      product: {
        include: {
          _count: {
            select: {
              fav: true,
            },
          },
        },
      },
    },
  });

  return res.json({
    ok: true,
    sales,
  });
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
