import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import client from "libs/server/prismaclient";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const products = await client?.product.findMany({
      include: {
        _count: {
          select: {
            fav: true,
          },
        },
      },
    });
    return res.json({ ok: true, products });
  }
  if (req.method === "POST") {
    const {
      body: { price, name, description, photo },
      session: { user },
    } = req;
    const product = await client?.product.create({
      data: {
        name,
        price,
        description,
        image: photo,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    return res.json({ ok: true, product });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler })
);
