//tes stress adalah untuk menentukan batas web 
//menghitung stabilitas web kalau-kalau sedang dalam kondisi ekstrem
//DaffaCahyoAlghifari

import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '10s', target: 1 }, //load di bawah normal
        { duration: '30s', target: 1 },
        { duration: '10s', target: 3 }, //load normal
        { duration: '30s', target: 3 },
        { duration: '10s', target: 5 }, //sekitar titik batas
        { duration: '30s', target: 5 },
        { duration: '10s', target: 7 }, //melebihi titik batas
        { duration: '30s', target: 7 },
        { duration: '1m', target: 0 }, //penurunan
    ]
};

export default function() {
    http.get('https://alumni.polinema.ac.id/beranda');
    sleep(1);
};