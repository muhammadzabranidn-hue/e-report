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
