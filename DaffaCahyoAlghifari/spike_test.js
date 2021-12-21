//spike tes adalah seperti stress tes, bedanya berjalan lebih cepat
//jika stress tes perlahan, maka spike tes akan langsung melejit naik
//DaffaCahyoAlghifari

import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '10s', target: 10 }, //load di bawah normal
        { duration: '30s', target: 10 },
        { duration: '10s', target: 50 }, //spike ke 50 pengguna
        { duration: '30s', target: 50 }, //bertahan selama 30 detik
        { duration: '10s', target: 10 }, //penurunan
        { duration: '30s', target: 10 },
        { duration: '1m', target: 0 },
    ]
};

export default function() {
    http.get('https://alumni.polinema.ac.id/beranda');
    sleep(1);
};