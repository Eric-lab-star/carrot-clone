import prismaclient from "libs/server/prismaclient";
import withHandler, { IResponse } from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse<IResponse>) {
  const profile = await prismaclient.user.findUnique({
    where: { id: req.session.user?.id },
  });
  res.status(200).json({ ok: true, profile });
  return;
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
