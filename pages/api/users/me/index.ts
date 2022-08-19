import client from "libs/server/prismaclient";
import withHandler, { IResponse } from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import Id from "pages/api/posts/[id]";
import { json } from "stream/consumers";

async function handler(req: NextApiRequest, res: NextApiResponse<IResponse>) {
  const {
    method,
    session: { user },
    body: { email, phone, name },
  } = req;
  if (method === "GET") {
    const profile = await client.user.findUnique({
      where: { id: req.session.user?.id },
    });
    return res.status(200).json({ ok: true, profile });
  }
  if (method === "POST") {
    const currentUser = await client.user.findUnique({
      where: {
        id: user?.id,
      },
    });

    if (email && email !== currentUser?.email) {
      const isExists = Boolean(
        await client.user.findUnique({
          where: {
            email,
          },
        })
      );
      if (isExists) {
        return res.json({
          ok: false,
          error: "the Email is already taken",
        });
      }
      const updateEmail = await client.user.update({
        data: {
          email,
        },
        where: {
          id: user?.id,
        },
      });
      return res.json({
        ok: true,
      });
    }
    if (phone && phone !== currentUser?.phone) {
      const isExists = await client.user.findUnique({
        where: {
          phone,
        },
      });
      if (isExists) {
        return res.json({
          ok: false,
          error: "The phonenumber is already taken",
        });
      }
      const updatedPhone = await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          phone,
        },
      });
      return res.json({
        ok: true,
      });
    }
    if (name) {
      await client.user.update({
        where: {
          id: user?.id,
        },
        data: {
          name,
        },
      });
      return res.json({ ok: true });
    }
    return res.json({ ok: true });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler })
);
