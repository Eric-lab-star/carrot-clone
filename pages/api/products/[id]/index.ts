import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import client from "libs/server/prismaclient";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    session: { user },
  } = req;
  try {
    const product = await client?.product.findUnique({
      where: {
        id: +id?.toString()!,
      },
      include: {
        user: {
          select: {
            name: true,
            id: true,
            avatar: true,
          },
        },
      },
    });
    const terms = product?.name.split(" ").map((word) => ({
      name: {
        contains: word,
      },
    }));
    const relatedProducts = await client?.product.findMany({
      where: {
        OR: terms,
        AND: {
          id: {
            not: product?.id,
          },
        },
      },
    });
    const isLiked = Boolean(
      await client?.fav.findFirst({
        where: {
          userId: user?.id,
          productId: product?.id,
        },
        select: {
          id: true,
        },
      })
    );
    return res
      .status(200)
      .json({ ok: true, product, relatedProducts, isLiked });
  } catch (error) {
    return res.status(404).json({ ok: false });
  }
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
