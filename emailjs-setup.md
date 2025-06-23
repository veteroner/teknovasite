# EmailJS Kurulum Talimatları - TEKNOVA İletişim Formu

## 1. EmailJS Hesabı Oluşturma

1. [https://www.emailjs.com/](https://www.emailjs.com/) adresine gidin
2. "Sign Up" butonuna tıklayın
3. Hesabınızı oluşturun (Gmail ile giriş yapabilirsiniz)

## 2. Email Service Ekleme

1. Dashboard'da "Email Services" sekmesine gidin
2. "Add New Service" butonuna tıklayın
3. **Gmail** seçeneğini seçin
4. Service ID'yi kaydedin (örn: `service_fmkti4t`)
5. "Connect Account" butonuna tıklayın
6. Gmail hesabınızla bağlantı kurun (`bilgi@teknovagroup.com`)
7. "Create Service" butonuna tıklayın

## 3. Email Template Oluşturma

1. Dashboard'da "Email Templates" sekmesine gidin
2. "Create New Template" butonuna tıklayın
3. Template ayarları:

### Template Ayarları:
- **Template Name**: TEKNOVA Contact Form
- **Template ID**: Otomatik oluşacak (örn: `template_xyz123`)

### ⚠️ Kritik: Template Ayarları

EmailJS Template'inizde (`template_spv7pkk`) şu ayarları yapın:

#### Email Settings:
- **To Email**: `bilgi@teknovagroup.com`
- **From Name**: `{{from_name}}`
- **Reply To**: `{{reply_to}}`
- **Subject**: `TEKNOVA İletişim - {{subject}}`

#### Email Content (Body):
```
TEKNOVA İletişim Formu Mesajı

═══════════════════════════════════════

👤 Gönderen Bilgileri:
Ad Soyad: {{from_name}}
E-posta: {{from_email}}
Telefon: {{phone}}
Şirket/Kurum: {{company}}

📋 Mesaj Detayları:
Konu: {{subject}}

Mesaj İçeriği:
{{message}}

═══════════════════════════════════════
🌐 TEKNOVA Web Sitesi İletişim Formu
```

#### ✅ Template Değişken Kontrol Listesi:
- `{{from_name}}` - Gönderenin adı
- `{{from_email}}` - Gönderenin e-postası  
- `{{phone}}` - Telefon numarası
- `{{company}}` - Şirket bilgisi
- `{{subject}}` - Mesaj konusu
- `{{message}}` - Mesaj içeriği
- `{{reply_to}}` - Yanıt adresi

4. "Save" butonuna tıklayın

## 4. Kod Güncellemeleri

`iletisim.html` dosyasında aşağıdaki değerleri güncelleyin:

```javascript
// 1. EmailJS Public Key (Account Settings > API Keys)
emailjs.init("YOUR_PUBLIC_KEY_HERE");

// 2. Service ID ve Template ID
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
```

### ✅ Tamamlanan Entegrasyon (EmailJS v4):
```javascript
// ✅ EmailJS v4 ile güncellendi - Son sürüm!
emailjs.init({
  publicKey: "VI55cGZbM-LjtSY7f"
});
emailjs.send('service_fmkti4t', 'template_spv7pkk', formData)

// 🎉 EmailJS v4 entegrasyonu tamamlandı!
```

## 5. Test Etme

1. Web sitesindeki iletişim formunu doldurun
2. "AI Projesini Başlat" butonuna tıklayın
3. `bilgi@teknovagroup.com` adresine e-posta gelip gelmediğini kontrol edin
4. Browser console'da hata mesajları olup olmadığını kontrol edin

## 6. Güvenlik Notları

- ✅ Public Key kullanımı güvenlidir (frontend'de görünür olabilir)
- ✅ Service ID ve Template ID'ler herkese açık olabilir
- ✅ EmailJS spam koruması vardır (günlük limit: 200 e-posta)
- ✅ Sadece belirlediğiniz template'ler kullanılabilir

## 7. Sorun Giderme

### Yaygın Hatalar:
- **Invalid service ID**: Service ID'yi kontrol edin
- **Invalid template ID**: Template ID'yi kontrol edin
- **Invalid user ID**: Public Key'i kontrol edin
- **Gmail connection failed**: Gmail hesabı bağlantısını yeniden yapın

### Debug için:
```javascript
// Console'da hata mesajlarını görmek için
console.log('EmailJS Response:', response);
console.error('EmailJS Error:', error);
```

## 8. Alternatif Çözüm

EmailJS çalışmazsa, formun `action` attribute'unu bir form handler service'e yönlendirebilirsiniz:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

**Not**: Bu kurulum tamamlandıktan sonra `emailjs-setup.md` dosyasını silebilirsiniz. 