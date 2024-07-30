# Docs Api

## API Auth

```ts
// login
PUT "/api/auth" 
body: { email, password }

200: {success, token}
401: {success, message}
```

```ts
// signUp
POST "/api/auth" 
body: { name,email, phone, password }

201: {message, token}
400: {message}
500: {message}
```
- [ ? ] send OTP
```ts
// reset Password
POST "/api/auth/reset-password" 
body: { name,email, phone, password }
 
200: {message, token}
404: {message}
500: {message}
```

- [ ? ] send OTP link newpassword

```ts
// New Password
POST "/api/auth/new-password" 
body: { token, newPassword }
 
200: {message}
404: {message}
500: {message}
```
