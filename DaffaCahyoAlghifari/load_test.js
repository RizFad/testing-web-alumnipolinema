//load test adalah untuk mengukur performa
//Digunakan agar mendapatkan tolak ukur untuk tes-tes lain
//Jumlah pengguna yang bisa diterima, perhitungan maksimalnya adalah dari sini
//DaffaCahyoAlghifari

import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '30s', target: 10 }, //simulasi jumlah pengguna dari 1-10 selama 30 detik
        { duration: '1m', target: 30 }, //bertahan di 30 pengguna selama 1 menit
        { duration: '30s', target: 0 }, //penurunan
    ],

    thresholds: {
        http_req_duration: ['p(99)<180'], //99% request harus diselesaikan kurang dari 180 detik
    }
};

export default function() {
    http.get('https://alumni.polinema.ac.id/beranda');
    sleep(1);
};