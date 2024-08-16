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

- عمل auth.
- انشاء قسم إرسال الايميلات
- ربط برمجية ارسال الرسائل
- ربط api الذكاء الاصطناعي مع الموقع.
- اختبار الموقع
- تعديل back-end وفق frontend
- عمل back-end
- عمل برومت لتقييم الدورات التي يطلبها الشخص وتصنيفها واختيار المستوى
- فقرة عن اضافة الدورة
- one course
- ui courses
- عند تسجيل الدخول تحويل رابط معين
- refeshToken 
|| التحسين

```


تحليل هذا النص
 وتحوليه الى json بنفس هذه البنية التالية 

const CoursesSchema = new Schema({title: String,context: String,links: [String],keys: [String],location: String,age: {start: Number,end: Number},nationality: String,price: Number})
Reply all format json




