# Story feedback

## Ambiguities & gaps

For AC1 — Happy path: successful sign in

- Navigation is unclear for an authenticated user that visits the Sign In page

For AC3 - Field validation

- Unclear if there should also be a "Password is required" error message if the password field is left empty
- Missing requirement on email/password character limits (lower and upper bound for email, upper bound for password). It is important that Frontend and Backend stay aligned with these limits since they will be enforcing them separately.

For AC5 — Protected routes require authentication

- Unclear whether the user should be redirected to the home screen or the protected route after successful sign in



## Untestable or weak acceptance criteria

For AC1 — Happy path: successful sign in

- It is assumed that the user will always enter their username but user may also type in their email, it is unclear whether this is allowed
  - Suggested rewrite: "When I enter a valid username (email is not allowed) and password" (assuming username-only authentication is confirmed by Product)

For AC2 - Invalid credentials, step "And I see an error message indicating the credentials are invalid"

- Missing criteria on exactly what the error message should say
- Unclear whether the error message should indicate whether the username was found to be associated with an account
  - Suggested rewrite: "And I see an error message reading "Username or password is incorrect" displayed below the password field" (assuming we do not want to inform the user if their inputted username exists in our system - pending final Product decision)

For AC4 — Remember me / session persistence

- Unclear how long the session will persist after closing browser
  - Suggested rewrite: "Then my session persists for 30 days after closing and reopening the browser" (exact session length to be determined by Product and Eng)



## Missing scenarios

Rate limiting

- This is a real security concern. Rate limiting should be in place to prevent a brute force approach to password guessing and resource consumption

For AC3 - Field validation 

- Edge case to consider for QA: Once the "Sign In" button becomes enabled, verify that it becomes disabled if any of the Field validation criteria become unmet

For AC7 — Sign out

- It is not specified whether a scenario in which the user selected Remember Me on Sign In would continue to persist even after the user signs out



## Questions for Product/Design/Eng

- For Product/Design: Have the designs been finalized for this feature? If so, can we include them as a linked asset to this ticket?
- For Product/Eng: Has an API contract been agreed upon between Frontend and Backend? If so, can this be linked to the ticket for reference?
- For Product: Could a user's email be used in the username field for authentication or do we want this field to only handle username?
- For Product/Eng: Lower bound character count limits are specified for password in AC3 but do we want to set upper bound limits for this field as well as both lower and upper bound limits for the username field?
- For Product: When the user signs in with Remember Me checked, how long do we want the session to persist after the browser is closed?
- For Product: When an unauthenticated user reaches a protected route, do we want them routed back to the protected route after authentication or be redirected to home?
- For Product: If an authenticated user routes back to the sign in screen should we expect them to be redirected back to home?
- For Product/Design: When a user attempts to sign in with invalid credentials, exactly what should the resulting error message say? If the inputted username exists in our system, do we want to notify them of that or just have one generic error message?
- For Product/Design: AC3 indicates an error message will be displayed when the user leaves the username field blank, should that also apply to the password field? If so, would it read "Password is required?" 
- For Eng: How will session persistence be implemented? Will this be through a single long-lived cookie, a combination of a short-lived access cookie and a long-lived refresh cookie, or other?
- For Eng: Rate limiting on the sign in endpoint is not specified but I want to make sure this is being implemented as this is a real security concern. Assuming it is being implemented, what are the details in terms of timing and number of attempts for this?



## A recommendation

This story is not ready to begin work until concerns around rate limiting, username vs email authentication, session persistence and API contract are addressed. Beginning work as-is will likely cause misalignment between Frontend and Backend as well as unintended assumptions from Eng that Product may not agree on. This would lead to avoidable bugs and avoidable offline alignment after the feature has been implemented causing additional overhead in terms of communication, reimplementation and testing.