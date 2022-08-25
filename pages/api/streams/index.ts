import withHandler from "libs/server/withHandler";
import { withApiSession } from "libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import client from "libs/server/prismaclient";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    session: { user },
    body: { name, price, description },
    method,
  } = req;
  if (method === "POST") {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLAREID}/stream/live_inputs`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.STREAMTOKEN}`,
        },
        body: `{"meta":{"name":"${name}"},"recording":{"mode":"automatic","timeoutSeconds":10}}`,
      }
    );
    const json = await response.json();
    console.log(json);
    const stream = await client.stream.create({
      data: {
        name,
        price,
        description,
        user: {
          connect: {
            id: user?.id,
          },
        },
        streamId: "",
        cloudflareKey: "",
        cloudflareURL: "",
      },
    });
    return res.json({
      ok: true,
      stream,
    });
  }
  if (method === "GET") {
    const streams = await client.stream.findMany({
      take: 10,
      skip: 10,
    });
    return res.json({
      ok: true,
      streams,
    });
  }
}

export default withApiSession(
  withHandler({ methods: ["POST", "GET"], handler })
);
