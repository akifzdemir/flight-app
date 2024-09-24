# Uçuş Rezervasyon Uygulaması

## Genel Bakış

Bu proje, Schiphol Havalimanı API'sini kullanarak uçuş bilgilerini görüntüleyen ve kullanıcıların uçuş rezervasyonlarını kaydetmesine olanak tanıyan basit bir web uygulamasıdır. Uygulama, temiz, modern ve kullanıcı dostu bir arayüz geliştirmeye odaklanmaktadır.

## Proje Özellikleri

- **Uçuş Listesi**: Ana sayfada Schiphol Havalimanı API'si kullanılarak mevcut uçuşlar listelenir.
- **Filtre Seçenekleri**: Kullanıcılar uçuşları tarih ve yönlerine göre filtreleyebilir.
- **Kullanıcı Rezervasyonları**: Kullanıcılar uçuş seçimi yaparak rezervasyon yapabilir, bu bilgiler MongoDB veritabanına kaydedilir.
- **Kullanıcı Bildirimleri**: Kullanıcılar, uçuşlarının başarılı bir şekilde kaydedildiğine dair bildirim alır ve "Uçuşlarım" sayfasına yönlendirilir.
- **Doğrulama**: Kullanıcılar geçmiş tarihli uçuşlar için rezervasyon yapamaz.

## Teknolojiler

- **Frontend**: React, Tailwind
- **Backend**: Node.js (rezervasyon yönetimi ve API etkileşimleri için)
- **Veritabanı**: MongoDB (kullanıcı rezervasyonlarını saklamak için)

## Docker ile Kurulum ve Kullanım

### Ön Koşullar

- Docker ve Docker Compose yüklü olmalıdır. Yüklemek için [Docker Resmi Web Sitesi](https://www.docker.com/get-started) üzerinden gerekli talimatları izleyebilirsiniz.

### Proje Kurulumu

1. **Repo'yu Klonlayın**:

   ```bash
   git clone https://github.com/akifzdemir/flight-app.git
   cd flight-app
   ```

2. **Docker Image'lerini Oluşturun ve Uygulamayı Başlatın**:

   ```bash
   docker-compose up --build
   ```

3. **Uygulamayı Tarayıcıda Açın**:
   Backend, `http://localhost:3000` adresinde, Frontend `http://localhost:5173` adresinde çalışacaktır.

### Kullanım

- Uygulama başlatıldıktan sonra ana sayfada mevcut uçuşları görüntüleyebilir, uçuşlarınızı filtreleyebilir ve rezervasyon yapabilirsiniz.
- "Uçuşlarım" sayfasında, kaydedilen rezervasyonlarınızı görüntüleyebilirsiniz.

## Ekran Görüntüleri

Uygulamanın kullanıcı arayüzünü ve işlevselliğini göstermek için ekran görüntüleri ekleyin.

![Ana Sayfa](/imgs/home.png)
![Ana Sayfa](/imgs/home2.png)
![Ana Sayfa](/imgs/home3.png)
![Ana Sayfa](/imgs/home4.png)
![Ana Sayfa](/imgs/home5.png)

![Uçuşlarım Sayfası](/imgs/flights.png)
![Uçuşlarım Sayfası](/imgs/flights2.png)
![Uçuşlarım Sayfası](/imgs/flights3.png)
