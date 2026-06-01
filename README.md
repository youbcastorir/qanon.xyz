# 🕌 KatibMarrakech.com

> موقع كاتب عمومي احترافي في مراكش — متعدد اللغات، محسّن لمحركات البحث، جاهز للنشر على GitHub Pages

---

## 📁 هيكل الملفات

```
katib-marrakech/
├── index.html          ← الصفحة الرئيسية (HTML + SEO كامل)
├── style.css           ← التصميم (RTL/LTR, Responsive)
├── app.js              ← منطق التطبيق (اللغات، التصيير، الأحداث)
├── translations.js     ← محتوى 4 لغات + 110 مقالة مدونة
├── sitemap.xml         ← خريطة الموقع (110+ رابط)
├── robots.txt          ← توجيهات محركات البحث
├── manifest.json       ← PWA manifest
├── service-worker.js   ← خدمة عمال للعمل بدون إنترنت
├── offline.html        ← صفحة عدم الاتصال
├── 404.html            ← صفحة الخطأ المخصصة
├── seo.json            ← بيانات SEO المنظمة
├── .gitignore          ← ملفات Git المستبعدة
└── README.md           ← هذا الملف
```

---

## 🚀 النشر على GitHub Pages

### الطريقة 1: رفع مباشر (الأسرع)

1. سجّل دخولك إلى [github.com](https://github.com)
2. اضغط **"New repository"**
3. اسم المستودع: `katibmarrakech` (أو أي اسم)
4. اختر **Public** ✓
5. اضغط **"Create repository"**
6. ارفع جميع الملفات عبر **"uploading an existing file"**
7. اذهب إلى **Settings → Pages → Branch: main → /root → Save**
8. موقعك يعمل على: `https://yourusername.github.io/katibmarrakech`

### الطريقة 2: عبر Git CLI

```bash
git init
git add .
git commit -m "🚀 Initial launch: KatibMarrakech.com"
git branch -M main
git remote add origin https://github.com/yourusername/katibmarrakech.git
git push -u origin main
```

ثم فعّل GitHub Pages من Settings.

### ربط دومين مخصص (katibmarrakech.com)

1. في مزود الدومين، أضف DNS records:
   ```
   Type: A    → 185.199.108.153
   Type: A    → 185.199.109.153
   Type: A    → 185.199.110.153
   Type: A    → 185.199.111.153
   Type: CNAME → www → yourusername.github.io
   ```
2. في GitHub Pages Settings، أدخل: `katibmarrakech.com`
3. فعّل **Enforce HTTPS** ✓

---

## ✏️ تخصيص المحتوى

### تغيير رقم واتساب

في `app.js` السطر الأول:
```javascript
const WA_NUMBER = "212612605737"; // ← غيّر هذا الرقم
```

### تغيير البريد الإلكتروني

في `app.js`:
```javascript
const EMAIL = "salatrir@gmail.com"; // ← غيّر هذا البريد
```

### تغيير نصوص الموقع

جميع النصوص موجودة في `translations.js` في الكائن `TRANSLATIONS`.
كل لغة لها قسمها:
```javascript
TRANSLATIONS.ar  // العربية
TRANSLATIONS.fr  // الفرنسية
TRANSLATIONS.en  // الإنجليزية
TRANSLATIONS.es  // الإسبانية
```

### إضافة خدمة جديدة

في `translations.js`، داخل `services.list` لكل لغة:
```javascript
{ icon: "⭐", title: "اسم الخدمة", desc: "وصف الخدمة هنا" }
```

### تغيير صورة الخلفية

في `style.css`، قسم `.hero-bg`:
```css
background:
  linear-gradient(...),
  url('رابط-الصورة-الجديدة') center/cover;
```

### إضافة مقالة مدونة

في `translations.js`، داخل `BLOG_ARTICLES.ar` (أو أي لغة):
```javascript
{
  id: "ar-51",
  slug: "slug-url-friendly",
  title: "عنوان المقالة",
  excerpt: "مقتطف قصير من المقالة...",
  category: "فئة",
  date: "2025-10-01",
  readTime: "5 دقائق"
}
```

---

## 🔍 دليل SEO

### البيانات المنظمة (Schema.org)

الموقع يتضمن تلقائياً:
- ✅ `LocalBusiness` schema مع عنوان ومواعيد العمل
- ✅ `AggregateRating` للتقييمات
- ✅ `OfferCatalog` لكل الخدمات
- ✅ `ContactPoint` مع اللغات المتاحة

### Open Graph & Twitter Cards

تُحدَّث تلقائياً عند تبديل اللغة.

### Hreflang متعدد اللغات

مُدرج في `sitemap.xml` لكل صفحة بالروابط الأربعة.

### تحسين سرعة التحميل

- الخطوط محملة مسبقاً (`preconnect`)
- Service Worker يخزّن الأصول مؤقتاً
- لا توجد صور خارجية ثقيلة
- CSS و JS مضغوطان

### إضافة Google Analytics

أضف قبل `</head>` في `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### إضافة Google Search Console

أضف meta tag في `<head>`:
```html
<meta name="google-site-verification" content="XXXXXXXXXXXXX">
```

ثم أرسل `sitemap.xml` من لوحة Search Console.

---

## 📱 ميزات PWA

الموقع يدعم التثبيت كتطبيق على الهاتف:
- **iOS**: Safari → Share → Add to Home Screen
- **Android**: Chrome → Menu → Add to Home Screen

يعمل بدون إنترنت بعد أول زيارة (Service Worker).

---

## 🌐 اللغات المدعومة

| اللغة | الاتجاه | المقالات |
|-------|---------|---------|
| العربية 🇲🇦 | RTL | 50 مقالة |
| الفرنسية 🇫🇷 | LTR | 20 مقالة |
| الإنجليزية 🇬🇧 | LTR | 20 مقالة |
| الإسبانية 🇪🇸 | LTR | 20 مقالة |

تُحفظ اللغة المختارة تلقائياً في `localStorage`.

---

## 📞 معلومات الاتصال

| | |
|--|--|
| **واتساب** | +212 612 605 737 |
| **بريد** | salatrir@gmail.com |
| **موقع** | katibmarrakech.com |
| **مدينة** | مراكش، المغرب |

---

## ⚡ قائمة تحقق ما بعد النشر

- [ ] تغيير `katibmarrakech.com` بدومينك الحقيقي في: `sitemap.xml`, `robots.txt`, `index.html`, `seo.json`
- [ ] إضافة Google Analytics
- [ ] إرسال sitemap لـ Google Search Console
- [ ] اختبار الموقع على: [PageSpeed Insights](https://pagespeed.web.dev)
- [ ] اختبار البيانات المنظمة على: [Schema Validator](https://validator.schema.org)
- [ ] اختبار RTL على جهاز عربي حقيقي
- [ ] إضافة صورة `og-image.jpg` (1200×630) في مجلد الجذر
- [ ] إضافة أيقونات `icons/icon-192.png` و `icons/icon-512.png`

---

## 🛠️ تقنيات مستخدمة

- **HTML5** — دلالي، ARIA, accessibility
- **CSS3** — Custom Properties, Grid, Flexbox, RTL/LTR
- **Vanilla JavaScript** — بدون frameworks
- **PWA** — Service Worker, Web App Manifest
- **Schema.org** — LocalBusiness structured data
- **Google Fonts** — Amiri, Tajawal, Lato

---

*بُني بـ ❤️ لخدمة مجتمع مراكش*
