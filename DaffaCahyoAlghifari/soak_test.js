//Soak testing digunakan untuk memvalidasi reabilitas webnya dalam waktu lama
//Testing paling lama yang mencari-cari adakah suatu kesalahan jika user dibiarkan dalam waktu yang lama
//DaffaCahyoAlghifari

import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '1m', target: 20 }, //naik ke 20 pengguna
        { duration: '5m', target: 20 }, //bertahan selama lima menit
        { duration: '1m', target: 0 }, //penurunan
    ]
};

export default function() {
    http.get('https://alumni.polinema.ac.id/beranda');
    sleep(1);
};