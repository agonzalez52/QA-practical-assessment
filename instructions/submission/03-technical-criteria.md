# Technical criteria for test creation

## Selectors/test IDs

### Sign In screen

`data-test="signin-username` - username field 
`data-test="signin-password"` - password field
`data-test="signin-remember-me` - "Remember me" checkbox
`data-test="signin-submit` - "Sign In" button
`data-test="signup"` - "Don't have an account? Sign Up" link

## API endpoints & contracts

`POST /login`
**Request**
{ type: "LOGIN", username: string, password: string }

`POST /logout`

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