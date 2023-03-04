export class Hayaasi {
  private concernWords: string[] = ["気にする？", "気にしない？", "気にならん？", "気になる？", "気になるよね？"]
  private regularWord = "うん。"
  private irregularWords: string[] = ["気にしない。", "気にならん。"]

  public reply(message: string): string {
    const replyText = this.hasConcern(message) ? this.irregularWord() : this.regularWord
    return replyText
  }

  private hasConcern(message: string): boolean {
    return this.concernWords.some((word) => message.includes(word))
  }

  private irregularWord(): string {
    const index = Math.floor(Math.random() * this.irregularWords.length)
    return this.irregularWords[index]
  }
}
