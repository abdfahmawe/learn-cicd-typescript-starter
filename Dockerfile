FROM node:22-slim

WORKDIR /usr/src/app

# نسخ ملفات التعريف
COPY package*.json ./

# تثبيت كل شيء (بما فيها Typescript والـ Types)
RUN npm install

# نسخ الكود المصدري
COPY . .

# تحويل TypeScript إلى JavaScript
RUN npx tsc

# إعداد المتغيرات والمنفذ
ENV PORT=8080
EXPOSE 8080

# تشغيل الملف الناتج في مجلد dist
CMD ["node", "dist/main.js"]
