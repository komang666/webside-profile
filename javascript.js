// Menampilkan pesan saat tombol "Hubungi Saya" ditekan
function showMessage() {
    alert("Terima kasih sudah menghubungi saya! Silakan isi form kontak untuk pesan lebih lanjut.");
}

// Validasi form kontak
document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah pengiriman form default

    // Ambil nilai input form
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validasi input
    if (name === "" || email === "" || message === "") {
        alert("Semua kolom wajib diisi!");
        return;
    }

    if (!validateEmail(email)) {
        alert("Alamat email tidak valid!");
        return;
    }

    // Jika validasi berhasil
    alert("Pesan Anda telah dikirim. Terima kasih, " + name + "!");
    this.reset(); // Reset form setelah sukses
});

// Fungsi untuk validasi format email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
