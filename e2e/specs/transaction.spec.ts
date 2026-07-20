import { test, expect } from "@playwright/test";
import { SignInPage } from "../pages/signin-page";
import { HeaderPage } from "../pages/header-page";
import { TransactionPage } from "../pages/transaction-page";
import { PersonalPage } from "../pages/personal-page";
import urlPaths from "../fixtures/urlPaths.json";

const VALID_USERNAME = "Heath93";
const VALID_PASSWORD = "s3cret";
const CONTACT_ID = "GjWovtg2hr";

test.describe("End to end user journey tests", () => {
  test("Verify user can send payment", async ({ page }) => {
    let date = Date.now();
    const signInPage = new SignInPage(page);
    const headerPage = new HeaderPage(page);
    const transactionPage = new TransactionPage(page);
    const personalPage = new PersonalPage(page);
    const transactionAmount = "100";
    const transactionNote = "Payment for services " + date;

    await page.goto(urlPaths.signIn);
    await signInPage.signIn(VALID_USERNAME, VALID_PASSWORD);
    await page.screenshot({ path: "e2e/screenshots/e2e-send-payment-01-login.png" });

    await headerPage.clickNewTransactionButton();
    await page.screenshot({
      path: "e2e/screenshots/e2e-send-payment-02-click-new-transaction.png",
    });

    await transactionPage.clickContactItem(CONTACT_ID);
    await page.screenshot({ path: "e2e/screenshots/e2e-send-payment-03-select-contact.png" });

    await transactionPage.fillTransactionAmount(transactionAmount);
    await transactionPage.fillTransactionNote(transactionNote);
    await page.screenshot({
      path: "e2e/screenshots/e2e-send-payment-04-fill-transaction-details.png",
    });

    const transactionId = await transactionPage.clickPayButtonAndGetTransactionId();
    await page.screenshot({ path: "e2e/screenshots/e2e-send-payment-05-click-pay-button.png" });

    await expect(transactionPage.transactionConfirmationMessage).toHaveText(
      `Paid $${transactionAmount}.00 for ${transactionNote}`
    );
    await transactionPage.clickReturnToTransactionsButton();
    await page.screenshot({
      path: "e2e/screenshots/e2e-send-payment-06-return-to-transactions.png",
    });
    await page.goto(urlPaths.personal);

    await expect(personalPage.transactionItem(transactionId)).toBeVisible();
    await page.screenshot({ path: "e2e/screenshots/e2e-send-payment-07-verify-transaction.png" });
  });

  // TODO: send-money validation (zero/negative/empty amount, no contact selected),
  // TODO: sending without a linked bank account
});
