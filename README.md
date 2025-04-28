<div align="center">
Made with ❤️ by Nurul Aisyah
</div>

# UTS_PemrogramanWeb2

## PROFIL

| Variable           | Isi                       |
| ------------------ | ------------------------- |
| **Nama**           | Nurul Aisyah     |
| **NIM**            | 312310476                 |
| **Kelas**          | TI.23.A.5                 |
| **Mata Kuliah**    | Pemrograman Web 2         |
| **Dosen Pengampu** |Agung Nugroho, S.Kom., M.Kom. |
# Mengenal WebSocket: Solusi Komunikasi Real-Time di Web Modern

## Apa itu WebSocket?
WebSocket adalah protokol jaringan yang memberikan saluran komunikasi **dua arah** (full-duplex) dan **persisten** antara klien dan server. Berbeda dengan HTTP yang bersifat stateless dan hanya berdasarkan permintaan-respons, WebSocket memungkinkan server mengirim data ke klien tanpa permintaan baru.


## Eksperimen Sederhana dengan WebSocket

### 1. Persiapan
Pastikan Node.js terinstal:
```bash
node -v
npm -v
```
![image](https://github.com/user-attachments/assets/ca809760-580f-43f3-be18-4620bdaa6dce)


### 2. Instalasi Library `ws`
Buat folder proyek baru:
```bash
mkdir websocket-demo
cd websocket-demo
npm init -y
npm install ws
```
![image](https://github.com/user-attachments/assets/d864ed8e-d425-4f0a-8497-e7740b8c9411)


### 3. Membuat Server WebSocket
**server.js**

![image](https://github.com/user-attachments/assets/8b794247-9a93-4e3c-9bc5-558a4eca562e)



### 4. Membuat Client WebSocket
**client.html**

![image](https://github.com/user-attachments/assets/c73e06fb-660b-4333-b7f0-dbb5945c705e)
![image](https://github.com/user-attachments/assets/c84866db-24d2-4741-bfdb-96189a3786d5)



### 5. Menjalankan Server
```bash
node server.js
```
![image](https://github.com/user-attachments/assets/bd3fb346-a01b-4933-972e-05b6aaea6143)


Kemudian buka `client.html` di browser.
![image](https://github.com/user-attachments/assets/4586cebb-702e-460f-97e7-799533bc2332)




## Hasil Eksperimen
- Komunikasi dua arah terjadi real-time.
- Setiap pesan dari klien langsung diteruskan ke semua klien lain yang terhubung.

## Kesimpulan
WebSocket memungkinkan komunikasi real-time yang lebih efisien dibandingkan HTTP tradisional. Dengan koneksi yang persisten dan dua arah, WebSocket sangat ideal untuk aplikasi seperti chat, game online, dashboard monitoring, dan notifikasi langsung.

## Referensi
- [MDN Web Docs - Using WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [WebSocket.org - An Introduction to WebSockets](https://www.websocket.org/)
- [WebSocket Library for Node.js (ws)](https://github.com/websockets/ws)
