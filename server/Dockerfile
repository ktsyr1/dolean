# استخدام صورة Node.js الرسمية كأساس
FROM node:20

# تعيين دليل العمل في الحاوية
WORKDIR /usr/src/app

# نسخ ملفات package.json و package-lock.json (إذا وجد)
COPY package*.json ./

# تثبيت التبعيات
RUN npm install

# نسخ باقي ملفات المشروع
COPY . .

# كشف المنفذ الذي سيستمع عليه التطبيق
EXPOSE 3000

# تشغيل التطبيق
CMD ["node", "app.js"]