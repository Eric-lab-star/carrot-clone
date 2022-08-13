import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import client from "libs/server/prismaclient";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;
  try {
    const product = await client?.product.findUnique({
      where: {
        id: +id?.toString()!,
      },
    });
    return res.json({ ok: true, product });
  } catch (error) {
    return res.status(404).json({ ok: false });
  }
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
