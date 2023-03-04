import * as line from "@line/bot-sdk"
import * as functions from "firebase-functions"

const CHANNEL_SECRET = functions.config().line.channel_secret
const CHANNEL_ACCESS_TOKEN = functions.config().line.channel_access_token
export const config = {
  channelAccessToken: CHANNEL_ACCESS_TOKEN,
  channelSecret: CHANNEL_SECRET,
}

export const client = new line.Client(config)
