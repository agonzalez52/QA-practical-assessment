import { Locator, Page } from "@playwright/test";
import urlPaths from "../fixtures/urlPaths.json";

export class PersonalPage {
  readonly page: Page;
  readonly transactionItem: (transactionId: string) => Locator;

  constructor(page: Page) {
    this.page = page;
    this.transactionItem = (transactionId: string) =>
      page.locator(`[data-test="transaction-item-${transactionId}"]`);
  }

  async goto() {
    await this.page.goto(urlPaths.personal);
  }
}
