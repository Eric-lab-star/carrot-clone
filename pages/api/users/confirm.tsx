import withHandler from "libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import prismaclient from "libs/server/prismaclient";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

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
  console.log(exists);
  req.session.user = {
    id: exists.userId,
  };
  await req.session.save();
  return res.json({
    ok: true,
  });
}

export default withIronSessionApiRoute(withHandler("POST", tokenHandler), {
  cookieName: "carrotsession",
  password: process.env.SESSION_PASSWORD!,
});
