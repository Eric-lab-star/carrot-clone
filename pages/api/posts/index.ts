import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    body: { question, lat, long },
    session: { user },
    method,
  } = req;
  if (method === "POST") {
    const post = await client?.post.create({
      data: {
        title: question,
        user: {
          connect: {
            id: user?.id,
          },
        },
        lat,
        long,
      },
    });

    return res.json({
      ok: true,
      post,
    });
  }
  if (method === "GET") {
    const {
      query: { lat, long },
    } = req;
    const parsedLat = parseFloat(lat!.toString());
    const parsedLong = parseFloat(long!.toString());
    console.log(lat, long);
    const post = await client?.post.findMany({
      include: {
        user: {
          select: {
            name: true,
          },
        },

        _count: {
          select: {
            Wondering: true,
            Answer: true,
          },
        },
      },
      where: {
        lat: {
          gte: parsedLat - 0.01,
          lte: parsedLat + 0.01,
        },
        long: {
          gte: parsedLong - 0.01,
          lte: parsedLong + 0.01,
        },
      },
    });
    return res.json({ ok: true, post });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler })
);
