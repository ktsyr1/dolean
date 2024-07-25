# build backend this project

```
project expressjs api in folder backend
use ES6 (type: module) and structure simple & mogoose & dotenv
use always create files and folders in cli for on coment and one line and not use  write code in cli
use always Destructuring Import in all code
mongoDB syntx use fun (create , deleteOne, findOne)
folders : models , router , controller ,middleware
Modules
- User = role: "admin"| "user", name, phone, email, password
- UserDetails = user_id: <@User.id>, date_create, births<@Courses.age>, nationality, living, interests, scientific_level, data_share:{free, paid} <@Courses.price>
- Courses = title, context, links, keys, location, age:{start,end}<@UserDetails.births>, nationality:<@UserDetails.nationality>, price:<@UserDetails.free | @UserDetails.paid>
- Def-courses = title, context, image, ref, location
```

## Middleware

```
Middleware auth api routes
Middleware res send Security Headers all
use create all files in cli for on coment and one line

```

## Auth

```
/api
- /auth/login post تسجيل دخول
- /auth/signup post تسجيل
- /auth/reset-password post
- /auth/new-password post

```

## Student

```
use create all files in cli for on coment and one line
/api/student
- /courses get عرض الكورسات  ✨
- /def-courses - post ارسال اعلانات الدورات الى ادارة الموقع
- /profile get طلب معلومات الشخصية
- /profile put تعديل الملف الشخصي
- /details post تسجيل معلومات الطلاب

```

## Admin

```
use create all files in cli for on coment and one line
/api/admin
- /users get
- /users/:id get
- /users/:id delete

- /courses get
- /courses post  ✨
- /courses/:id get عرض الطلاب المتاحين للدورة
- /courses/:id put
- /courses/:id delete
- /courses/:id/users get ✨

- /def-courses get
- /def-courses/:id get
- /def-courses/:id put
- /def-courses/:id delete
```

## config

```
use always create all files in cli for on coment and one line
use always Destructuring Import in all code
mongoDB syntx use fun (create , deleteOne, findOne)
```

_المهام_

1. تنزيل نسخة أولية من المشروع من GitHub
2. انشاء برينش باسمكم
3. تنزيل الحزم باستخدام _npm i_

note

```
- /courses get 
to Controllers & route only
[filter : location? ,nationality? ,price? ,age? ]
```


- dynamic 