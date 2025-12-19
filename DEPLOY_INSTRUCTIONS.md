# 🚀 Deployment Təlimatları

## GitHub Repository
✅ Kod artıq GitHub-dadır: https://github.com/bankkapitalaz/.com

## Ən Asan Deploy Metodları (Pulsuz)

### 1. 🎯 Render.com (ÖNƏRİLƏN - Ən Asan)

1. **Render.com hesabı yarat:**
   - https://render.com saytına daxil ol
   - "Get Started for Free" düyməsinə bas
   - GitHub hesabınla qoşul

2. **Yeni Web Service yarat:**
   - Dashboard-da "New +" düyməsinə bas
   - "Web Service" seç
   - GitHub-dan repository-ni seç: `bankkapitalaz/.com`

3. **Konfiqurasiya:**
   - **Name:** istədiyin adı yaz (məsələn: `secure-messaging`)
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - "Free" planı seç
   - "Create Web Service" düyməsinə bas

4. **Gözlə:**
   - Deploy prosesi 2-3 dəqiqə çəkir
   - Render avtomatik olaraq sizə URL verəcək
   - Məsələn: `https://secure-messaging.onrender.com`

✅ **Hazırdır!** Bu URL-i dostlarınla paylaş!

---

### 2. 🚂 Railway.app (Çox Sürətli)

1. **Railway hesabı yarat:**
   - https://railway.app saytına daxil ol
   - GitHub ilə giriş et

2. **Proyekt yarat:**
   - "New Project" düyməsinə bas
   - "Deploy from GitHub repo" seç
   - `bankkapitalaz/.com` repository-ni seç

3. **Deployment:**
   - Railway avtomatik olaraq deploy edəcək
   - Settings-də domain görəcəksən
   - Məsələn: `https://secure-messaging.up.railway.app`

✅ **Hazırdır!** Çox sürətli və etibarlıdır!

---

### 3. 🔷 Vercel (Ən Populyar)

1. **Vercel hesabı yarat:**
   - https://vercel.com saytına daxil ol
   - GitHub ilə giriş et

2. **Import et:**
   - "Add New..." → "Project"
   - GitHub-dan `bankkapitalaz/.com` seç
   - "Import" düyməsinə bas

3. **Deploy:**
   - Vercel avtomatik konfiqurasiyanı tapacaq
   - "Deploy" düyməsinə bas
   - 1-2 dəqiqədə hazır olacaq

✅ **Hazırdır!** Vercel sizə `.vercel.app` domain verəcək!

---

### 4. 🎨 Replit (Kod Edit + Host)

1. **Replit-ə daxil ol:**
   - https://replit.com saytına daxil ol
   - "Create Repl" → "Import from GitHub"

2. **Repository əlavə et:**
   - GitHub URL-i yapışdır: `https://github.com/bankkapitalaz/.com`
   - Import et

3. **Run et:**
   - "Run" düyməsinə bas
   - Avtomatik olaraq başlayacaq
   - Public URL görəcəksən

✅ **Hazırdır!** Həm də real vaxtda kod edit edə bilərsən!

---

## ⚠️ Vacib Qeydlər

### Pulsuz Planlarda Limitlər:
- **Render:** Əgər 15 dəqiqə istifadə olmazsa, server "yuxuya" gedir. İlk sorğu 30 saniyə çəkə bilər.
- **Railway:** Ayda 500 saat pulsuz (kifayət edir)
- **Vercel:** Serverless, hər zaman aktiv
- **Replit:** Hər zaman aktiv, lakin yavaş ola bilər

### Ən Yaxşı Seçim:
🏆 **Render.com** - Ən etibarlı və sadə deploy
🏆 **Railway.app** - Ən sürətli və professional

---

## 🔗 Saytdan İstifadə

Deploy edildikdən sonra:

1. **İstifadəçi Saytı:** `https://your-app-url.com`
2. **Admin Panel:** `https://your-app-url.com/admin.html`
   - Username: `ursamajor`
   - Password: `ursa618`

---

## 💡 Əlavə Məsləhətlər

1. **Custom Domain:** İstəsən öz domain-ini qoşa bilərsən (məsələn: `mesaj.az`)
2. **HTTPS:** Bütün platformalar avtomatik SSL sertifikatı verir
3. **Auto-Deploy:** GitHub-a yeni kod push etsən, avtomatik yenilənir

---

## 🆘 Kömək Lazımdırsa

Hər hansı problem olarsa, bu addımları yoxla:
1. GitHub repository public olmalıdır
2. `package.json` və `server.js` faylları olmalıdır
3. Port dəyişənini düzgün istifadə et: `process.env.PORT || 3000`

**Uğurlar!** 🎉
