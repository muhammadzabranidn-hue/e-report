const ctx = document.getElementById('santriChart')

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Januari", "Februari", "Maret", "April", "Mei"],
                datasets: [{
                    label: "Jumlah Laporan Per Bulan",
                    data: [12, 4, 10, 7, 4],
                    backgroundColor: [
                        "royalblue",
                        "red",
                        "green",
                        "royalblue",
                        "orange",
                    ],
                    borderWidth: 3
                }]
            },
            options: {
                legend: {
                    position: "bottom"
                }
            }
        })

        const ctx2 = document.getElementById('statusChart')

        new Chart(ctx2, {
            type: 'doughnut',
            data: {
                labels: ["Laporan Diterima", "Laporan Ditolak", "Laporan Diproses"],
                datasets: [{
                    label: "Status Laporan",
                    data: [50, 25, 25],
                    backgroundColor: [
                        "green",
                        "red",
                        "orange",
                    ],
                    borderWidth: 3
                }]
            },
            options: {
                legend: {
                    position: "bottom"
                }
            }
        })


           // 1. Grafik Garis Bulanan (santriChart)
           const ctxSantri = document.getElementById('santriChart').getContext('2d');
           new Chart(ctxSantri, {
               type: 'line',
               data: {
                   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
                   datasets: [{
                       label: 'Jumlah Laporan',
                       data: [12, 19, 15, 25, 22, 30],
                       borderColor: '#2f63e8',
                       backgroundColor: 'rgba(47, 99, 232, 0.1)',
                       borderWidth: 3,
                       fill: true,
                       tension: 0.3
                   }]
               },
               options: {
                   responsive: true,
                   maintainAspectRatio: false
               }
           });
   
           // 2. Grafik Donat Status (statusChart)
           const ctxStatus = document.getElementById('statusChart').getContext('2d');
           new Chart(ctxStatus, {
               type: 'doughnut',
               data: {
                   labels: ['Diterima', 'Menunggu', 'Ditolak'],
                   datasets: [{
                       data: [55, 20, 10],
                       backgroundColor: ['#198754', '#ffc107', '#dc3545'],
                       borderWidth: 0
                   }]
               },
               options: {
                   responsive: true,
                   maintainAspectRatio: false,
                   plugins: {
                       legend: {
                           position: 'bottom'
                       }
                   }
               }
           });
   
           // 3. Grafik Batang Tambahan (categoryBarChart)
           const ctxCategory = document.getElementById('categoryBarChart').getContext('2d');
           new Chart(ctxCategory, {
               type: 'bar',
               data: {
                   labels: ['Fasilitas Kelas', 'Asrama', 'Laboratorium', 'Masjid', 'Koneksi Internet'],
                   datasets: [{
                       label: 'Total Kasus',
                       data: [35, 20, 15, 10, 25],
                       backgroundColor: '#2f63e8',
                       borderRadius: 6
                   }]
               },
               options: {
                   responsive: true,
                   maintainAspectRatio: false,
                   plugins: {
                       legend: {
                           display: false
                       }
                   }
               }
           });
