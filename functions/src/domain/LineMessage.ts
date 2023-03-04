interface Event {
  type: string
  message: {
    type: string
    text: string
  }
}

export class LineMessage {
  readonly text: string
  constructor(event: Event) {
    if (!this.isValid(event)) throw new Error("Invalid event")
    this.text = event.message.text
  }
  private isValid = (event: Event) => {
    return event.type === "message" && event.message.type === "text"
  }
}
