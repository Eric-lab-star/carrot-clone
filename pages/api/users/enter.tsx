import prismaClient from "libs/server/prismaclient";
import withHandler, { IResponse } from "libs/server/withHandler";

import { NextApiRequest, NextApiResponse } from "next";

async function enter(req: NextApiRequest, res: NextApiResponse<IResponse>) {
  const { phone, email } = req.body;
  const enterMethod = phone ? { phone: +phone } : email ? { email } : null;
  if (!enterMethod) {
    return res.status(400).json({ ok: true });
  }
  const payload = Math.floor(100000 + Math.random() * 90000) + "";
  const token = await prismaClient.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...enterMethod,
          },
          create: {
            name: "Annonymous",
            ...enterMethod,
          },
        },
      },
    },
  });
  console.log(token);
  return res.json({ ok: true });
}

export default withHandler("POST", enter);
