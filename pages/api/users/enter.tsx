import prismaClient from "libs/server/prismaclient";
import withHandler, { IResponse } from "libs/server/withHandler";
import twilio from "twilio";
import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function enter(req: NextApiRequest, res: NextApiResponse<IResponse>) {
  const { phone, email } = req.body;
  const enterMethod = phone ? { phone: phone + "" } : email ? { email } : null;
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
  if (phone) {
    // const msg = await twilioClient.messages.create({
    //   messagingServiceSid: process.env.MSG_SID,
    //   to: process.env.MYPHONE!,
    //   body: `Your login token is ${payload}.`,
    // });
  } else if (email) {
    // const email = await sgMail.send({
    //   to: "cyon256@icloud.com",
    //   from: "cyon256@icloud.com",
    //   subject: "Please verify your code",
    //   text: `Your verification number is <strong>${payload}</strong>`,
    //   html: `Your verification number is <strong>${payload}</strong>`,
    // });
  }
  return res.json({ ok: true });
}

export default withHandler("POST", enter);
