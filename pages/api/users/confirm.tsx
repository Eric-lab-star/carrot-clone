import withHandler from "libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import prismaclient from "libs/server/prismaclient";
import { withApiSession } from "libs/server/withSession";

async function tokenHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    body: { token },
  } = req;
  const exists = await prismaclient.token.findUnique({
    where: {
      payload: token,
    },
  });
  if (!exists) {
    return res.status(404).end();
  }
  req.session.user = {
    id: exists.userId,
  };
  await req.session.save();
  await prismaclient.token.deleteMany({
    where: {
      userId: exists.userId,
    },
  });
  return res.json({
    ok: true,
  });
}

export default withApiSession(
  withHandler({ method: "POST", handler: tokenHandler, isPrivate: false })
);
