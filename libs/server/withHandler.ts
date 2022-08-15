import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export interface IResponse {
  ok: boolean;
  [key: string]: any;
}

type method = "GET" | "POST" | "DELETE";

interface IConfig {
  methods: method[];
  isPrivate?: boolean;
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<any>;
}

export default function withHandler({
  isPrivate = true,
  handler,
  methods,
}: IConfig) {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<any> {
    if (req.method && !methods.includes(req.method as any)) {
      console.log("no method");
      return res.status(405).end();
    }
    if (isPrivate && !req.session.user) {
      return res.status(401).json({ ok: false, error: "please log in" });
    }
    try {
      await handler(req, res);
    } catch (error) {
      console.log("error from withHandler", error);
      return res.status(500).json({ error });
    }
  };
}
