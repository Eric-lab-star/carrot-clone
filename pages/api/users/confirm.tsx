import withHandler from "libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import prismaclient from "libs/server/prismaclient";

async function tokenHandler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.session);
  const {
    body: { token },
  } = req;
  const dbToken = await prismaclient.token.findUnique({
    where: {
      payload: token,
    },
  });
  console.log(dbToken);
  console.log(token);
  return res.status(200).end();
}

export default withIronSessionApiRoute(withHandler("POST", tokenHandler), {
  cookieName: "carrotsession",
  password: process.env.SESSION_PASSWORD!,
});
