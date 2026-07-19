# Manual Test Script · RWA-118 · Sign in with username and password

## TC-118-01: Verify sign in happy path

**Priority:** High
**Automation Candidate:** Yes
**Preconditions:** User is signed out and on the Sign In screen
**Required test data:** valid username: Heath93, valid password: s3cret
**Steps**

1. Enter valid username and password
2. Click "Sign In"

**Expected Result:**

1. User is redirected to the home screen
2. User sees their account and transactions
3. User session is established

## TC-118-02: Verify behavior when attempting to sign in with an invalid username

**Priority:** High
**Automation Candidate:** Yes
**Preconditions:** User is signed out and on the Sign In screen
**Required test data:** valid username: Heath93, invalid password: wrongpass
**Steps**

1. Enter valid username and invalid password
2. Click "Sign In"

**Expected Result:**

1. User remains on the Sign In screen
2. User sees an error message indicating the credentials are invalid
3. No user session is established



## TC-118-03: Verify behavior when attempting to sign in with an invalid password

**Priority:** High
**Automation Candidate:** Yes
**Preconditions:** User is signed out and on the Sign In screen
**Required test data:** invalid username: wronguser, valid password: s3cret
**Steps**

1. Enter invalid username and valid password
2. Click "Sign In"

**Expected Result:**

1. User remains on the Sign In screen
2. User sees an error message indicating the credentials are invalid
3. No user session is established



## TC-118-04: Verify Sign In screen field validation

**Priority:** Medium
**Automation Candidate:** Yes
**Preconditions:** User is signed out and on the Sign In screen
**Required test data:** N/A
**Steps**

1. Click into the username field

**Expected Result:** Username field becomes active
2. Click out of the username field leaving it empty
**Expected Result:**

1. "Username is required" error surfaces
2. "Sign In" button is disabled



## TC-118-05: Verify "Remember me" session persistence

**Priority:** High
**Automation Candidate:** Yes
**Preconditions:** User is signed out and on the Sign In screen
**Required test data:** valid username: Heath93, valid password: s3cret
**Steps**

1. Enter valid username and valid password
2. Check "Remember me"

**Expected Result:** "Remember me" becomes checked
3. Click "Sign In" button
**Expected Result:** User is signed in successfully
4. Close the browser
5. Reopen the browser
6. Navigate back to the app
**Expected Result:** User lands in an authenticated state

## TC-118-06: Verify non-"Remember me" session does not persist

**Priority:** High
**Automation Candidate:** Yes
**Preconditions:** User is signed out and on the Sign In screen
**Required test data:** valid username: Heath93, valid password: s3cret
**Steps**

1. Enter valid username and valid password
2. Leave "Remember me" unchecked
3. Click "Sign In" button

**Expected Result:** User is signed in successfully
4. Close the browser
5. Reopen the browser
6. Navigate to the Sign In page
**Expected Result:** User lands on the Sign In page in an unauthenticated state

## TC-118-07: Verify /personal route requires authentication

**Priority:** High
**Automation Candidate:** Yes
**Preconditions:** User is signed out
**Required test data:** N/A
**Steps**

1. Navigate to /personal route

**Expected Result:** User is redirected to the Sign In screen

## TC-118-08: Verify /bankaccounts route requires authentication

**Priority:** High
**Automation Candidate:** Yes
**Preconditions:** User is signed out
**Required test data:** N/A
**Steps**

1. Navigate to /bankaccounts route

**Expected Result:** User is redirected to the Sign In screen

## TC-118-09: Verify navigation to the Sign Up screen from Sign In

**Priority:** Low
**Automation Candidate:** Yes
**Preconditions:** User is signed out and on the Sign In screen
**Required test data:** N/A
**Steps**

1. Click "Don't have an account? Sign Up"

**Expected Result:** User is directed to the Sign Up screen

## TC-118-10: Verify sign out happy path

**Priority:** Low
**Automation Candidate:** Yes
**Preconditions:** User is signed in
**Required test data:** valid username: Heath93, valid password: s3cret
**Steps**

1. Sign out

**Expected Result:**

1. User session is cleared
2. User is returned to the Sign In screen
3. Navigating back to a protected route redirects user to Sign In



## TC-118-11: Edge case: Verify "Sign In" button can become disabled once enabled

**Priority:** Low
**Automation Candidate:** Yes
**Preconditions:** User is signed out and on the Sign In screen
**Required test data:** N/A
**Steps**

1. Type "username" into the username field
2. Type "password" into the password field

**Expected Result:** "Sign In" button becomes enabled
3. Empty the username field
**Expected Result:**
1. "Username is required" error surfaces
2. "Sign In" button becomes disabled

