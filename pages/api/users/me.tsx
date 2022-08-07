import { withIronSessionApiRoute } from "iron-session/next";
import prismaclient from "libs/server/prismaclient";
import withHandler from "libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function me(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.session.user);
  const profile = await prismaclient.user.findUnique({
    where: { id: req.session.user?.id },
  });

  res.json({
    ok: true,
    profile,
  });
}

export default withIronSessionApiRoute(withHandler("GET", me), {
  cookieName: "carrotsession",
  password: process.env.SESSION_PASSWORD!,
});
