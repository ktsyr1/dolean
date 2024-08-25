# build started this project AI

this [all prompt](Ai-prompt.md)

## team

1. Qotayba Mohammad ( team leader )
2. Jaber lweis
3. Manar Alzorkan
4. Malak Ka

## tasks

```bash
# stap 1 
git checkout main
git pull ; cd client ; npm i 

npm run dev  
git checkout -b new-branch

git add .
git commit -m "Initial commit on new branch"
git push -u origin <new-branch>
```

```
|| المهام

- انشاء قسم إرسال الايميلات
- ربط برمجية ارسال الرسائل 
- عمل برومت لتقييم الدورات التي يطلبها الشخص وتصنيفها واختيار المستوى 
- refeshToken 
- اضافة الدورة 
- فلترة المستخدمين وارسال الرسائل
- ربط واتساب
- صورة بدلية عند فقدان الصورة
- اختبار الموقع
- اضافة خيار العمل لاجل تحسين 

|| التحسين
- عند تسجيل الدخول تحويل رابط معين
- الترجمة لانكليزي والفرنسي للوصول للسوق اللبناني
- دراسة تجربة المستخدم
- جمع كل الدورات المدفوعة
- دراسة شاملة للمراكز التعليمة كلها في لبنان
- خورزمية تقسيم المدن الى مناطق 
- مشكلة بين المكان والاون لاين 
- لقيت مشكلة قاتلة بالمشروع او نقطة ضعف ,الي هي انو الشخص ما بيحط غير دورة حتى ٣ دورات واذا قدرنا نوصل لطريقة نسحب كل اهتمامات الشخص هون الهدف الي لازم نوصل اله
- قانون GDPR
- اختيار السنة مشكلة
- مستوى الخبرة في الحاسب ذكرها كتخصص
```



const CoursesSchema = new Schema({title: String,context: String,links: [String],keys: [String],location: String,age: {start: Number,end: Number},center: String,nationality: String,price: Number})
"nationality": [{"value": "Lebanese","label": "لبناني"},{"value": Palestinian","label": "فلسطيني"},{"value": "Syrian","label": "سوري"},{"value": "All","label": "الكل"}] يجب ان تكون الجنسية وفقا للقيم هذه فقط 
context syntax markdown
only lang arabic
اذا رقم الهاتف موجود قم بمعالجته وتحويله الى رابط واتس اب ,واضافتها لقسم الروابط 
اذا كانت هناك الدورة ليست اونلاين يجب إضافة الموقع واذا كانت اونلاين يمكن اضافة الموقع اختياري
Reply all format json


تحليل النصوص في الردود القادمة وتحويلها  وتحوليه الى json بنفس هذه البنية أعلاه
انتظرني

Backend Point
- cashing
- Load Balancer
- Containerization
- Microservices
- Scalability
- WebSocket
- ORM (Object-Relational Mapping)
- Session Management 
- SSL/TLS
- Endpoint
- Rate Limiting
- Webhook 
- Load Testing
- Hotfix
- Release
- Rollback
- Data Encryption
- Logging
- Error Handling
- Monitoring

folders
|- server
|--|- app.js
|--|- package.json # express.js
|--|- ...
|- client
|--|- package.json # Vite.js => react
|--|- ...