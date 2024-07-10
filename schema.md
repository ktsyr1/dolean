## User

```ts
const User = new Schema({
  id: ObjectId,
  role: [String], // enum: ["admin", "user"],
  name: String,
  phone: String,
  email: String,
  password: String,
});
```

## User Details

```ts
const UserDetails = new Schema({
  user_id: ObjectId, // @User.id
  date_create: Date,
  births: Date, // @Courses.age
  nationality: String,
  living: String,
  interests: [String],
  scientific_level: String,
  data_share: {
    // @Courses.price
    free: Boolean,
    paid: Boolean,
  },
});
```

## Courses

```ts
const Courses = new Schema({
  title: String,
  context: String,
  links: [String],
  keys: [String],
  age: {
    start: Number, // @UserDetails.births - min
    end: Number, // @UserDetails.births - max
  },
  nationality: [], // @UserDetails.nationality
  price: Number, // @UserDetails.free || @UserDetails.paid
});
```

##

```json
[
  {
    "title": " ",
    "context": " ",

    "topics": ["تعلم مبادئ التصميم الغرافيكي", "تطبيق مشاريع عملية"],
    "target_audience": "الشبان والشابات (20-25 عاماً) من الجنسيات السورية، اللبنانية، والفلسطينية.",
    "requirements": [
      "أن تكون ضمن الفئة المستهدفة",
      "اجتياز اختبار القبول و المقابلة",
      "الجدية و الالتزام"
    ],
    "duration": "80 ساعة موزعة على 20 جلسة تدريبية",
    "schedule": {
      "days": "السبت - الاثنين - الأربعاء",
      "time": "من الساعة 8:30 صباحاً حتى 12:30 ظهراً"
    },
    "location": "تعنايل - الطريق العام - بجانب الصيدلية المركزية - منظمة مابس",
    "note": "الدورة مجانية ولا يوجد بدل مواصلات 🆓",
    "registration_link": "https://forms.office.com/r/RCbEpnSk7v",
    "whatsapp_group": "https://chat.whatsapp.com/Gr2RAeQvrdHIgszRAExA1u",
    "date": "الخميس 4 يوليو 2024",
    "links": [
      "https://www.facebook.com/share/p/VbpMdnizXRcey7Ge/?mibextid=L0MuaQ"
    ],
    "keys": ["تصميم الويب", "تطوير الواجهات", "مواقع شخصية", "متاجر إلكترونية"],
    "age": {
      "start": 19,
      "end": 25
    },
    "nationality": [],
    "price": 0,
    "days": ["الاثنين", "الأربعاء", "الخميس"],
    "time": {
      "start": "1:00 ظهراً",
      "end": "5:00 عصراً"
    },
    "additional_requirements": [
      "أن تكون ضمن الفئة المستهدفة (19-25 سنة)",
      "اجتياز اختبار القبول والمقابلة",
      "الجدية والالتزام"
    ],
    "job_opportunities": "بعد الدورة، سيحصل أصحاب الأداء المتميز على فرصة عمل"
  }
]
```
