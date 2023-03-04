import * as functions from "firebase-functions"
import { Request, Response } from "firebase-functions"
import { methodError } from "./utils/error"
import { Hayaasi } from "./domain/Hayaasi"
import { client } from "./plugins/line"
import { LineMessage } from "./domain/LineMessage"

export const lineBot = functions.https.onRequest(async (request, response) => {
  postMethodValidation(request, response)
  const events = request.body.events
  const hayaasi = new Hayaasi()
  for (const event of events) {
    const replyToken = event.replyToken
    const lineMessage = new LineMessage(event)
    const replyText = hayaasi.reply(lineMessage.text)
    await client.replyMessage(replyToken, { type: "text", text: replyText })
  }
  response.status(200).end()
})

const postMethodValidation = (request: Request, response: Response) => {
  if (request.method === "POST") return
  methodError(response)
}
