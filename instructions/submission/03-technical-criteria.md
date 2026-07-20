# Technical criteria for test creation

## Selectors/test IDs

### Sign In screen

**Available:**
`data-test="signin-username"` - username field

`data-test="signin-password"` - password field

`data-test="signin-remember-me"` - "Remember me" checkbox

`data-test="signin-submit"` - "Sign In" button

`data-test="signup"` - "Don't have an account? Sign Up" link

`data-test="sidenav-home"` - Side menu > Home

`data-test="sidenav-user-settings"` - Side menu > Settings

`data-test="sidenav-bankaccounts"` - Side menu > Bank Accounts

`data-test="sidenav-notifications"` - Side menu > Notifications

`data-test="sidenav-signout"` - Side menu > Sign out

`data-test="user-list-item-GjWovtg2hr"` - First contact

`data-test="transaction-create-amount-input"` - New transaction amount field

`data-test="transaction-create-description-input"` - New transaction note field

`data-test="transaction-create-submit-payment"` - New transaction Pay button

**Missing**
- 'Username is required' error message
  - Propose: `data-test="signin-username-required-error"`
- Transaction confirmation message
  - Propose: `data-test="transaction-confirmation"`

## API endpoints & contracts

`POST /login`
**Request**
{ type: "LOGIN", username: string, password: string }

`POST /logout`

`POST /transactions`
- Verify transaction id via the API

TODO: add additional information on validating /transactions response shape as well as taking a deeper look into this and other endpoints to see what else can be validated through the endpoint vs the UI and documented

## Test data strategy

`yarn db:seed:dev`
Use to reset data after a test run to always start from a known state

- Keep track of which accounts are created and when the database is reset in the test suite to avoid dependency issues



## Reliability & flake observations

- Rely on implicit waits rather than explicit ones
  - When necessary for slow operations, override action or assertion timeouts rather than adding explicit waits
- For endpoints that can take longer to respond, wait for the endpoint response itself before checking the UI
- Prefer asserting against calculated/derived values rather than hardcoded ones to avoid test staleness
- Always use developer provided custom data attributes as locators. If one is not available for a required element, flag to developers.



## Tooling choice

Playwright can handle UI and API testing for web out of the box and is more effiecient than other web automation frameworks as it communicates directly with the browser, bypassing W3C Protocol