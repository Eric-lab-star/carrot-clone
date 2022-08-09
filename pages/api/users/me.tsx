import prismaclient from "libs/server/prismaclient";
import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function me(req: NextApiRequest, res: NextApiResponse) {
  const profile = await prismaclient.user.findUnique({
    where: { id: req.session.user?.id },
  });

  res.json({
    ok: true,
    profile,
  });
}

export default withApiSession(withHandler("GET", me));
