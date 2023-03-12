export class MetaDescription {
  static #errorKey: string = 'Error';
  #description: string;

  constructor(description: string) {
    this.#description = description;
  }

  static formatErrorMessage(error: string) {
    return `${MetaDescription.#errorKey}: ${error}`;
  }

  isErrorMessage() {
    if (!this.#description.length) return false;

    return this.#description.indexOf(MetaDescription.#errorKey) > -1;
  }

  normalize() {
    return this.#description.replace(/\r?\n|\r/g, '').trim();
  }

  isValid() {
    if (!this.#description.length) return false;

    return !this.isErrorMessage();
  }
}
