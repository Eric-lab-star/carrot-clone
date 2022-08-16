import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import client from "libs/server/prismaclient";
import products from "..";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    session: { user },
  } = req;
  try {
    const alreadyExists = await client.fav.findFirst({
      where: {
        productId: +id!,
        userId: user?.id,
      },
    });

    if (alreadyExists) {
      await client.fav.delete({
        where: {
          id: alreadyExists.id,
        },
      });
    } else {
      await client.fav.create({
        data: {
          user: {
            connect: {
              id: user?.id,
            },
          },
          product: {
            connect: {
              id: +id!,
            },
          },
        },
      });
    }
    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(404).json({ ok: false });
  }
}

export default withApiSession(withHandler({ methods: ["POST"], handler }));
