---
marp: true
---

<!-- https://marpit.marp.app/directives -->

# My name is James Warner 👋
## Software development at instructor Indian Hills Community College in Iowa

---

![](cornfield.jpg)
# My town

---

![](pigs.webp)
# My family
---

# OAuth

---

## What is OAuth?
- Short for "Open Authorization"
- A protocol for granting third-party websites/apps authorization to user data
- An open standard for access to websites, apps, etc
  - Think 5G, USB-C, SQL - what other open standards can you think of?

---

# Find a website that uses OAuth

---
 churchofjesuschrist.org login

 [developers.familysearch.org](https://developers.familysearch.org/main/docs/authentication)
 - FamilySearch OAuth 2.0 implementation

---

## Why do we use it?

## pros/cons of OAuth

---
# OAuth 2.0 Flow
![bg](oauth2flow.png)

---

## Code it out

---

# What is OAuth?

--- 

# Advantages of OAuth

---

# Disadvantages of OAuth

---

# Authorization servers
<!-- https://developer.okta.com/docs/concepts/auth-servers/?utm_source=google&utm_campaign=amer_mult_usa_all_wf-all_dg-ao_a-wf_search_google_text_kw_smb_utm2&utm_medium=cpc&utm_id=aNK4z000000UB9OGAW&gad_source=1&gad_campaignid=20762163115&gbraid=0AAAAACww3aHknHbg1iR5f5qGp1C1tB4Dy&gclid=CjwKCAjw04HIBhB8EiwA8jGNbe9Ri0m8TR0eNyZMyRMycK2l05-A4KEE6ruphQSs3I80PirOHuYsthoCmJYQAvD_BwE -->
Authorization servers sit between the client and the OAuth providers
 - provide session management
 - UI for logging in/out, registrating, updating account details, etc

 --- 

 # Clerk OAuth Example Setup
1. Create a free Clerk account
   - Use OAuth to sign-up 
2. Create an example app 
   - Enable email and at least one OAuth provider
3. Copy secrets to .env file in project
   - **Make sure .env's are added to .gitignore!**

---

# Clerk OAuth Example Setup

4. Create middleware.ts (proxy.ts) file and copy contents from Clerk documentation (if not already generated)
5. Wrap app in `ClerkProvider` to provide global access in the app to authentication

## Test!

Run the app locally and verify registration of chosen OAuth provider works

--- 

# Clerk Dashboard
- View your new user under your dashboard
- View user object as JSON


