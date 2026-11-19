const tombolTheme = document.getElementById('btnTheme');
const inputBeratBadan = document.getElementById('beratBadan');
const inputDurasiOlahraga = document.getElementById('durasiOlahraga');
const tombolHitung = document.getElementById('btnHitung');
const areaHasil = document.getElementById('areaHasil');
const teksHasil = document.getElementById('teksHasil');

tombolHitung.addEventListener('click', function() {
    const beratBadan = Number(inputBeratBadan.value);
    const durasiOlahraga = Number(inputDurasiOlahraga.value);

    airDasar = beratBadan *35;
    tambahanOlahraga = (durasiOlahraga / 30) *350;
    totalAir = airDasar + tambahanOlahraga;

    teksHasil.innerText = `Berat badan ${beratBadan} kg dengan durasi olahraga ${durasiOlahraga} menit dibutuhkan air harian sebanyak ${totalAir} ml.`;
    areaHasil.classList.remove('d-none');
});

tombolTheme.addEventListener('click', function() {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-white');
    document.body.classList.toggle('bg-light');

    if (document.body.classList.contains('bg-dark')) {
        tombolTheme.innerText = 'Mode Terang';
        tombolTheme.classList.replace('btn-outline-secondary', 'btn-outline-light');
    } else {
        tombolTheme.innerText = 'Mode Gelap';
        tombolTheme.classList.replace('btn-outline-light', 'btn-outline-secondary');
    }
});