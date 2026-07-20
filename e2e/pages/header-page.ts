import { Locator, Page } from "@playwright/test";
import urlPaths from "../fixtures/urlPaths.json";

export class HeaderPage {
  readonly page: Page;
  readonly sideMenuButton: Locator;
  readonly newTransactionButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sideMenuButton = page.locator('[data-test="sidenav-toggle"]');
    this.newTransactionButton = page.locator('[data-test="nav-top-new-transaction"]');
  }

  async goto() {
    await this.page.goto(urlPaths.home);
  }

  async clickNewTransactionButton() {
    await this.newTransactionButton.click();
  }
}
