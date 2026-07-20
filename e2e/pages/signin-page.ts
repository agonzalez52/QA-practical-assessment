import { Locator, Page } from "@playwright/test";
import urlPaths from "../fixtures/urlPaths.json";

export class SignInPage {
  readonly page: Page;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly rememberMeCheckbox: Locator;
  readonly signInButton: Locator;
  readonly signUpLink: Locator;
  readonly signInError: Locator;
  readonly usernameEmptyError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('[data-test="signin-username"] input');
    this.passwordField = page.locator('[data-test="signin-password"] input');
    this.rememberMeCheckbox = page.locator('[data-test="signin-remember-me"] input');
    this.signInButton = page.locator('[data-test="signin-submit"]');
    this.signUpLink = page.locator('[data-test="signup"]');
    this.signInError = page.locator('[data-test="signin-error"]');
    this.usernameEmptyError = page.getByText("Username is required");
  }

  async goto() {
    await this.page.goto(urlPaths.signIn);
  }

  async signIn(username: string, password: string, rememberMe: boolean = false) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    if (rememberMe) {
      await this.rememberMeCheckbox.check();
    }
    await this.signInButton.click();
  }

  async fillUsername(username: string) {
    await this.usernameField.fill(username);
  }

  async fillPassword(password: string) {
    await this.passwordField.fill(password);
  }

  async clickSignUpLink() {
    await this.signUpLink.click();
  }

  async clickUsernameField() {
    await this.usernameField.click();
  }
}
