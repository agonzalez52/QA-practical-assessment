# BUG: Sign In Page - Initial click of 'Don't have an account' button surfaces 'Username is required' error

**Severity:** Low
**Priority:** P3
**Affected story / AC:** RWA-118 · AC6
**Environment:** local — commit 479b19a0ae416e187667e3985674ced495c0dda0, browser Google Chrome Version Version 149.0.7827.55, Node v24.18.0

## Steps to reproduce
1. Navigate to the Sign In page on a fresh browser session
2. Click "Don't have an account? Sign Up" link

## Expected result
User is taken to the Sign Up screen

## Actual result
User remains on the Sign In screen with the 'Username is required' error surfacing

## Evidence
Link to screenshot: https://github.com/agonzalez52/QA-practical-assessment/blob/main/e2e/screenshots/auth-TC-118-09-navigate-to-signup.png
Path to screenshot: e2e/screenshots/auth-TC-118-09-navigate-to-signup.png
Failing test name: TC-118-09: Verify navigation to the Sign Up screen from Sign In

## Impact / notes
- Low impact navigation issue with a clear workaround.
    - **Workaround:** Click the "Don't have an account? Sign Up" link again or navigate directly to the /signup route
- This issue occurs because landing on the Sign In screen automatically activates the Username field. Therefore, any user click on any part of the app will be interpreted as leaving the Username field blank and will surface the related error instead of completing the user's click action.