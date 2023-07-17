export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    if (!this.validateContentLength(content)) {
      throw new Error('Invalid content length');
    }

    this.content = content;
  }
}
