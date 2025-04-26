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

## Perbedaan WebSocket dengan HTTP Tradisional
| Aspek | HTTP | WebSocket |
| :--- | :--- | :--- |
| Model | Request-Response | Full-Duplex |
| Koneksi | Terputus setiap transaksi | Tetap terbuka |
| Efisiensi | Perlu polling untuk update | Push real-time langsung |
| Overhead | Tinggi (banyak permintaan) | Rendah |

## Kasus Penggunaan WebSocket
- **Aplikasi Chat**: Komunikasi instan antar pengguna.
- **Game Online**: Sinkronisasi pemain secara real-time.
- **Notifikasi Langsung**: Mengirim pemberitahuan tanpa refresh halaman.
- **Dashboard Monitoring**: Memperbarui data langsung.

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
![image](https://github.com/user-attachments/assets/a41693f7-e8f2-49a8-9fc8-81c738d8a7c8)


### 4. Membuat Client WebSocket
**client.html**
![image](https://github.com/user-attachments/assets/e3beb61c-7e0f-42b5-926d-4e11e75a1c12)

### 5. Menjalankan Server
```bash
node server.js
```
![image](https://github.com/user-attachments/assets/baa95b81-a5ee-4b5a-9df0-12772dae0d3b)

Kemudian buka `client.html` di browser.
![image](https://github.com/user-attachments/assets/aeee190a-8838-4103-8e28-256fae184bec)



## Hasil Eksperimen
- Komunikasi dua arah terjadi real-time.
- Setiap pesan dari klien langsung diteruskan ke semua klien lain yang terhubung.

## Kesimpulan
WebSocket memungkinkan komunikasi real-time yang lebih efisien dibandingkan HTTP tradisional. Dengan koneksi yang persisten dan dua arah, WebSocket sangat ideal untuk aplikasi seperti chat, game online, dashboard monitoring, dan notifikasi langsung.

## Referensi
- [MDN Web Docs - Using WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [WebSocket.org - An Introduction to WebSockets](https://www.websocket.org/)
- [WebSocket Library for Node.js (ws)](https://github.com/websockets/ws)
