import { Locator, Page } from '@playwright/test';

export class SignInPage {
    private readonly page: Page;
    private readonly usernameField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('[data-test="signin-username ');
    }

    async goto() {
        this.page.goto('/signin');
    }
}