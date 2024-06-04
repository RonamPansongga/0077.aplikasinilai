document.getElementById('simpan').addEventListener('click', function() {
    const nim = document.getElementById('nim').value;
    const nama = document.getElementById('nama').value;
    const presensiTeori = parseFloat(document.getElementById('presensi-teori').value) || 0;
    const tugasTeori = parseFloat(document.getElementById('tugas-teori').value) || 0;
    const utsTeori = parseFloat(document.getElementById('uts-teori').value) || 0;
    const uasTeori = parseFloat(document.getElementById('uas-teori').value) || 0;
    const presensiPraktek = parseFloat(document.getElementById('presensi-praktek').value) || 0;
    const tugasPraktek = parseFloat(document.getElementById('tugas-praktek').value) || 0;
    const utsPraktek = parseFloat(document.getElementById('uts-praktek').value) || 0;
    const uasPraktek = parseFloat(document.getElementById('uas-praktek').value) || 0;

    const nilaiAkhir = ((presensiTeori + tugasTeori + utsTeori + uasTeori) / 4 + (presensiPraktek + tugasPraktek + utsPraktek + uasPraktek) / 4) / 2;
    let grade = '';
    
    if (nilaiAkhir >= 80) {
        grade = 'A';
    } else if (nilaiAkhir >= 70) {
        grade = 'B';
    } else if (nilaiAkhir >= 60) {
        grade = 'C';
    } else if (nilaiAkhir >= 50) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    const table = document.getElementById('nilai-body');
    const row = table.insertRow();
    row.insertCell(0).innerText = table.rows.length;
    row.insertCell(1).innerText = nim;
    row.insertCell(2).innerText = nama;
    row.insertCell(3).innerText = ((presensiTeori + presensiPraktek) / 2).toFixed(2);
    row.insertCell(4).innerText = ((tugasTeori + tugasPraktek) / 2).toFixed(2);
    row.insertCell(5).innerText = ((utsTeori + utsPraktek) / 2).toFixed(2);
    row.insertCell(6).innerText = ((uasTeori + uasPraktek) / 2).toFixed(2);
    row.insertCell(7).innerText = nilaiAkhir.toFixed(2);
    row.insertCell(8).innerText = grade;

    
    document.getElementById('nim').value = '';
    document.getElementById('nama').value = '';
    document.getElementById('presensi-teori').value = '';
    document.getElementById('tugas-teori').value = '';
    document.getElementById('uts-teori').value = '';
    document.getElementById('uas-teori').value = '';
    document.getElementById('presensi-praktek').value = '';
    document.getElementById('tugas-praktek').value = '';
    document.getElementById('uts-praktek').value = '';
    document.getElementById('uas-praktek').value = '';
});

document.getElementById('batal').addEventListener('click', function() {
   
    document.getElementById('nim').value = '';
    document.getElementById('nama').value = '';
    document.getElementById('presensi-teori').value = '';
    document.getElementById('tugas-teori').value = '';
    document.getElementById('uts-teori').value = '';
    document.getElementById('uas-teori').value = '';
    document.getElementById('presensi-praktek').value = '';
    document.getElementById('tugas-praktek').value = '';
    document.getElementById('uts-praktek').value = '';
    document.getElementById('uas-praktek').value = '';
});

document.getElementById('reset').addEventListener('click', function() {
    
    document.getElementById('nilai-body').innerHTML = '';
});