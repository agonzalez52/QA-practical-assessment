import { Locator, Page } from "@playwright/test";

export class SideMenuPage {
  readonly page: Page;
  readonly homeButton: Locator;
  readonly myAccountButton: Locator;
  readonly bankAccountsButton: Locator;
  readonly notificationsButton: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeButton = page.locator('[data-test="sidenav-home"]');
    this.myAccountButton = page.locator('[data-test="sidenav-user-settings"]');
    this.bankAccountsButton = page.locator('[data-test="sidenav-bankaccounts"]');
    this.notificationsButton = page.locator('[data-test="sidenav-notifications"]');
    this.logoutButton = page.locator('[data-test="sidenav-signout"]');
  }

  async clickHomeButton() {
    await this.homeButton.click();
  }

  async clickMyAccountButton() {
    await this.myAccountButton.click();
  }

  async clickBankAccountsButton() {
    await this.bankAccountsButton.click();
  }

  async clickNotificationsButton() {
    await this.notificationsButton.click();
  }

  async clickLogoutButton() {
    await this.logoutButton.click();
  }
}
