//tes sederhana yang hanya mengetes apakah web bisa diakses 1 zombie dalam waktu 10 detik
//DaffaCahyoAlghifari

import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    vus: 1,
    duration: '10s'
};

export default function() {
    http.get('https://alumni.polinema.ac.id/beranda');
    sleep(1);
};