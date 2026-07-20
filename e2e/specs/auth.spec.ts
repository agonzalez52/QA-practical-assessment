import { test, expect } from '@playwright/test';
import { SignInPage } from '../pages/signin-page';
import urlPaths from '../fixtures/urlPaths.json';

const VALID_USERNAME = 'Heath93';
const INVALID_USERNAME = 'invaliduser';
const VALID_PASSWORD = 's3cret';
const INVALID_PASSWORD = 'wrongpassword';

test.describe('RWA-118 - Sign in with username and password', () => {
    let signInPage: SignInPage;

    test.beforeEach(async ({ page }) => {
        signInPage = new SignInPage(page);
        await signInPage.goto();
    });

    test.describe('AC1 — Happy path: successful sign in', () => {
        test('TC-118-01: Verify sign in happy path', async ({ page }) => {
            await signInPage.signIn(VALID_USERNAME, VALID_PASSWORD);

            await expect(page).toHaveURL(urlPaths.home);
            await page.screenshot({ path: 'e2e/screenshots/auth-TC-118-01-home-after-login.png' });
            // check session is established
        });
    });

    test.describe('AC2 — Invalid credentials', () => {
        test('TC-118-02: Verify behavior when attempting to sign in with an invalid username', async ({ page }) => {
            await signInPage.signIn(INVALID_USERNAME, VALID_PASSWORD);

            await expect(page).toHaveURL(urlPaths.signIn);
            await expect(signInPage.signInError).toBeVisible();
            await expect(signInPage.signInError).toHaveText('Username or password is invalid');
            await page.screenshot({ path: 'e2e/screenshots/auth-TC-118-02-invalid-username.png' });
            // check no user session is established
        });

        test('TC-118-03: Verify behavior when attempting to sign in with an invalid password', async ({ page }) => {
            await signInPage.signIn(VALID_USERNAME, INVALID_PASSWORD);

            await expect(page).toHaveURL(urlPaths.signIn);
            await expect(signInPage.signInError).toBeVisible();
            await expect(signInPage.signInError).toHaveText('Username or password is invalid');
            await page.screenshot({ path: 'e2e/screenshots/auth-TC-118-03-invalid-password.png' });
            // check no user session is established
        });
    });

    test.describe('AC3 — Field validation', () => {
        test('TC-118-04: Verify Sign In screen field validation', async ({ page }) => {
            await signInPage.clickUsernameField();
            await signInPage.clickSignUpLink(); // Click on another element to trigger validation
            
            await expect(signInPage.usernameEmptyError).toBeVisible();
            await expect(signInPage.signInButton).toBeDisabled();
            await page.screenshot({ path: 'e2e/screenshots/auth-TC-118-04-field-validation.png' });
        });
    });

    test.describe('AC4 - Remember me / session persistence', () => {});

    test.describe('AC5 — Protected routes require authentication', () => {
        test('TC-118-07: Verify /personal route requires authentication', async ({ page }) => {
            await page.goto(urlPaths.personal);

            await expect(page).toHaveURL(urlPaths.signIn);
            await page.screenshot({ path: 'e2e/screenshots/auth-TC-118-07-protected-route.png' });
        });

        test('TC-118-08: Verify /bankaccounts route requires authentication', async ({ page }) => {
            await page.goto(urlPaths.bankAccounts);

            await expect(page).toHaveURL(urlPaths.signIn);
            await page.screenshot({ path: 'e2e/screenshots/auth-TC-118-08-protected-route.png' });
        });
    });

    test.describe('AC6 — Navigate to Sign Up', () => {
        test('TC-118-09: Verify navigation to the Sign Up screen from Sign In', async ({ page }) => {
            await signInPage.clickSignUpLink();
            
            await expect(page).toHaveURL(urlPaths.signUp);
            await page.screenshot({ path: 'e2e/screenshots/auth-TC-118-09-navigate-to-signup.png' });
        });
    });
});