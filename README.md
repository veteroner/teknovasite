# TEKNOVA - Yapay Zeka Çözümleri Web Sitesi

Modern ve responsive web sitesi. Yapay zeka şirketleri için özel tasarlanmış.

## 🚀 Netlify Deploy

### İlk Kurulum (Sadece bir kez)

1. **Node.js Kurulumu**: [nodejs.org](https://nodejs.org) adresinden Node.js indirip kurun.

2. **Netlify Kurulumu**: `setup-netlify.bat` dosyasını çalıştırın:
   ```bash
   setup-netlify.bat
   ```
   Bu dosya:
   - Netlify CLI'yi kuracak
   - Netlify hesabınıza giriş yapacak
   - GitHub repo'nuzu Netlify'a bağlayacak

### Otomatik Deploy

Site güncellemelerinizi yayınlamak için:

```bash
deploy.bat
```

Bu komut:
1. Değişikliklerinizi GitHub'a push eder
2. Netlify'a otomatik deploy eder
3. Sitenizi canlıya alır

### Manuel İşlemler

Eğer bat dosyaları çalışmazsa, manuel olarak:

```bash
# GitHub'a push
git add .
git commit -m "Site güncellendi"
git push origin main

# Netlify'a deploy
netlify deploy --prod --dir .
```

## 📁 Proje Yapısı

- `index.html` - Ana sayfa
- `hakkimizda.html` - Hakkımızda sayfası
- `cozumlerimiz.html` - AI Çözümler
- `projeler.html` - Projeler
- `ai-nova.html` - AI Nova
- `iletisim.html` - İletişim
- `teknova-logo.png` - Logo dosyası
- `deploy.bat` - Otomatik deploy scripti
- `setup-netlify.bat` - İlk kurulum scripti

## 🔧 Gereksinimler

- Node.js 14+
- Git
- Netlify hesabı
- GitHub hesabı

## 📞 Destek

Herhangi bir sorun yaşadığınızda GitHub Issues üzerinden bildirebilirsiniz. 