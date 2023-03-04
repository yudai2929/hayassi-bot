import * as functions from "firebase-functions"

export class RequestError extends Error {
  code: number | undefined
}

export const methodError = (response: functions.Response) => {
  const code = 405
  const message = "Only POST requests are accepted"
  response.status(code).send(message)
}
