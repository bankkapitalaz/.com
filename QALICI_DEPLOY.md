# 🚀 QALICI DEPLOY - RENDER.COM

## ✅ HAZIRLIK TAMAMDIR!

Proyekt artıq GitHub-da qalıcı olaraq saxlanılır:
📦 **Repository:** https://github.com/bankkapitalaz/.com

---

## 📋 ADDIM-ADDIM DEPLOY (5 DƏQİQƏ)

### ADDIM 1: Render.com Hesabı Yarat

1. Brauzerdə bu linki aç: **https://render.com**

2. Sağ yuxarıda **"Get Started for Free"** düyməsinə bas

3. **"Continue with GitHub"** seçimini seç
   - GitHub hesabına giriş et
   - Render-ə icazə ver (Authorize)

✅ Təbriklər! Hesabın yaradıldı.

---

### ADDIM 2: Yeni Web Service Yarat

1. Dashboard-da (əsas səhifədə) **sol yuxarıda** **"New +"** düyməsinə bas

2. Açılan menyudan **"Web Service"** seç

3. Səhifə açılacaq ki, GitHub repository-lərini göstərəcək
   - Əgər **"bankkapitalaz/.com"** görünmürsə:
     - **"+ Connect account"** düyməsinə bas
     - GitHub-a yenidən gir və icazə ver
     - Geri qayıt

4. **"bankkapitalaz/.com"** siyahıdan tapın
   - Yanında **"Connect"** düyməsi var
   - Ona bas

✅ Repository uğurla qoşuldu!

---

### ADDIM 3: Konfiqurasiya Parametrləri

Açılan səhifədə bu parametrləri doldur:

```
📝 Name: secure-messaging
   (və ya istədiyiniz başqa ad, məsələn: kapital-mesaj, qizli-mesaj, və s.)

🌍 Region: Frankfurt (EU Central)
   (və ya Frankfurt)

🌿 Branch: main
   (artıq seçilib, dəyişməyin)

📁 Root Directory: 
   (BOŞ BURAX - heç nə yazmayın)

⚙️ Runtime: Node
   (avtomatik tanınacaq)

🔨 Build Command: npm install
   (avtomatik doldurulacaq)

▶️ Start Command: npm start
   (avtomatik doldurulacaq)
```

Aşağı scroll et:

```
💳 Instance Type: Free
   (MÜTLƏQ "Free" seçin, ödənişsiz!)
```

---

### ADDIM 4: Deploy Et!

1. Səhifənin aşağısında **"Create Web Service"** düyməsinə bas

2. Deploy prosesi başlayacaq:
   ```
   Deploying...
   Installing dependencies...
   Building...
   Starting server...
   ```

3. **2-3 dəqiqə gözləyin** ⏳

4. Yuxarıda status **"Live"** göründükdə **HAZIRDIR!** ✅

---

### ADDIM 5: URL-i Əldə Et

Deploy bitdikdən sonra:

1. Yuxarıda saytınızın URL-i görünəcək:
   ```
   https://secure-messaging.onrender.com
   ```
   (və ya sizin seçdiyiniz ada uyğun)

2. Bu URL-i KÖÇÜR və dostlarınla paylaş! 📋

---

## 🎯 SAYTINIZ HAZIRDIR!

### 👥 İstifadəçi Saytı (Dostlarına göndər):
```
https://secure-messaging.onrender.com
```

**Necə işləyir:**
- Kart nömrəsi = Ad (kim mesaj göndərir)
- CVV = Mesaj mətni
- İstifadə müddəti = Şəxsi kod (XX/XX formatında, məsələn: 25/18)

---

### 🔐 Admin Paneli (Sənin üçün):
```
https://secure-messaging.onrender.com/admin.html
```

**Giriş məlumatları:**
- İstifadəçi adı: **ursamajor**
- Şifrə: **ursa618**

Admin panelində bütün mesajları real vaxtda görəcəksən!

---

## ⚠️ VAHİD QEYD

**Pulsuz planda:**
- Əgər 15 dəqiqə heç kim sayta girməzsə, server "yuxuya" gedər
- Növbəti dəfə kimsə girəndə 30 saniyə ərzində yenidən aktivləşir
- Bu normaldır və pulsuz planda belə işləyir
- Mesajlar saxlanılır, heç nə itmir

**Həll:**
- Əgər hər zaman aktiv olmasını istəyirsəniz:
  - Render-də ödənişli plana keç ($7/ay)
  - Və ya Railway.app istifadə et (500 saat/ay pulsuz)

---

## 🔄 AVTOMATİK YENİLƏNMƏ

Artıq hər dəfə GitHub-a yeni kod push etsəniz:
```bash
cd /home/user/webapp
git add .
git commit -m "yeni dəyişikliklər"
git push origin main
```

Render.com avtomatik olaraq saytınızı yeniləyəcək! 🎉

---

## 📊 RENDER DASHBOARD

Render.com dashboard-da:
- **Logs:** Server loglarını görə bilərsiniz
- **Events:** Deploy tarixçəsi
- **Settings:** Konfiqurasiya dəyişiklikləri
- **Environment:** Environment variables əlavə edə bilərsiniz

---

## 🆘 PROBLEM OLARSA

1. **Sayt açılmır:**
   - Logs-u yoxlayın (Dashboard → Logs)
   - Server statusu "Live" olmalıdır

2. **Deploy uğursuz oldu:**
   - Build command düzgündür? `npm install`
   - Start command düzgündür? `npm start`
   - Node runtime seçilmişdir?

3. **GitHub qoşulmur:**
   - Render-ə GitHub icazəsi verdiniz?
   - Repository public-dir?

---

## 🎉 UĞURLAR!

Artıq saytınız qalıcı olaraq internetdə işləyir!
GitHub-da saxlanılır və hər zaman yeniləyə bilərsiniz!

**Dostlarınla paylaş və gizli mesajlaşın!** 🚀
