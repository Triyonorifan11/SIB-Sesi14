function cariPrimaDariRentang(m, n) {
    // membuat array dengan semua elemen bernilai true
    let bilangan = new Array(n + 1).fill(true);
  
    // menandai bilangan 0 dan 1 sebagai bukan prima
    bilangan[0] = false;
    bilangan[1] = false;
  
    // mencari bilangan prima dengan algoritma sieve of eratosthenes
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (bilangan[i]) {
        for (let j = i * i; j <= n; j += i) {
          bilangan[j] = false;
        }
      }
    }
  
    // mengumpulkan semua bilangan prima dalam array hasil
    let hasil = [];
    for (let i = m; i <= n; i++) {
      if (bilangan[i]) {
        hasil.push(i);
      }
    }
  
    return hasil;
  }
  console.log(cariPrimaDariRentang(1,5));
  console.log(cariPrimaDariRentang(5,10));
  console.log(cariPrimaDariRentang(10,20));