import { Locator, Page } from '@playwright/test';
import urlPaths from '../fixtures/urlPaths.json';

export class TransactionPage {
    readonly page: Page;
    readonly contactItem: (contactId: string) => Locator;
    readonly transactionAmountField: Locator;
    readonly transactionNoteField: Locator;
    readonly payButton: Locator;
    readonly transactionConfirmationMessage: Locator;
    readonly returnToTransactionsButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.contactItem = (contactId: string) => page.locator(`[data-test="user-list-item-${contactId}"]`);
        this.transactionAmountField = page.locator('[data-test="transaction-create-amount-input"] input');
        this.transactionNoteField = page.locator('[data-test="transaction-create-description-input"] input');
        this.payButton = page.locator('[data-test="transaction-create-submit-payment"]');
        this.transactionConfirmationMessage = page.getByRole('heading', { level: 2 }).nth(1);
        this.returnToTransactionsButton = page.locator('[data-test="new-transaction-return-to-transactions"]');
    }
    
    async goto() {
        await this.page.goto(urlPaths.newTransaction);
    }

    async clickContactItem(contactId: string) {
        await this.contactItem(contactId).click();
    }

    async fillTransactionAmount(amount: string) {
        await this.transactionAmountField.fill(amount);
    }

    async fillTransactionNote(note: string) {
        await this.transactionNoteField.fill(note);
    }
    
    async clickPayButtonAndGetTransactionId(): Promise<string> {
        const [response] = await Promise.all([
            this.page.waitForResponse(resp =>
                resp.url().includes('/transactions') && resp.request().method() === 'POST'
            ),
            this.payButton.click(),
        ]);
        const body = await response.json();
        return body.transaction.id;
    }

    async clickReturnToTransactionsButton() {
        await this.returnToTransactionsButton.click();
    }
}