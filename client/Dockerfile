# استخدام صورة Node.js الرسمية كأساس
FROM node:14

# تعيين دليل العمل في الحاوية
WORKDIR /usr/src/app

# نسخ ملفات package.json و package-lock.json (إذا وجد)
COPY package*.json ./

# تثبيت التبعيات
RUN npm install

# نسخ باقي ملفات المشروع
COPY . .

# بناء التطبيق
RUN npm run build

# تثبيت خادم ويب خفيف لتقديم الملفات الثابتة
RUN npm install -g serve

# كشف المنفذ الذي سيستمع عليه التطبيق
EXPOSE 5000

# تشغيل التطبيق
CMD ["serve", "-s", "dist", "-l", "3000"]