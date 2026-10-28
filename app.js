const reports = {
    "REP-1048": {
        id: "REP-1048",
        category: "Fasilitas",
        tagClass: "tag-blue",
        status: "Dalam penanganan",
        statusClass: "progress",
        title: "Proyektor & kabel VGA ruang X RPL C tidak menyala",
        location: "Ruang kelas teori · X RPL C",
        reporter: "Baraa Abyan",
        date: "27 Oktober 2026 · 09:24",
        updated: "2 jam yang lalu",
        description: "Proyektor gantung ruang kelas teori mati mendadak saat sesi coding. Lampu indikator berkedip merah dan butuh pengecekan adaptor daya. Laporan ini dibuat agar proses belajar di kelas X RPL C dapat kembali berjalan tanpa hambatan.",
        imageClass: "image-projector",
        icon: "⌁",
        timeline: [
            ["Laporan diterima", "27 Okt 2026 · 09:24", "Laporan masuk dan menunggu verifikasi tim sarpras.", "current"],
            ["Sedang diverifikasi", "27 Okt 2026 · 10:10", "Tim sarpras memeriksa kondisi adaptor dan kabel VGA.", "current"],
            ["Perbaikan dilakukan", "Menunggu jadwal", "Teknisi akan memperbarui status setelah pengecekan selesai.", ""]
        ]
    },
    "REP-1045": {
        id: "REP-1045",
        category: "Fasilitas",
        tagClass: "tag-orange",
        status: "Selesai ditangani",
        statusClass: "done",
        title: "Keran air tempat wudhu masjid timur bocor deras",
        location: "Tempat wudhu · Masjid timur",
        reporter: "Baraa Abyan",
        date: "27 Oktober 2026 · 06:18",
        updated: "5 jam yang lalu",
        description: "Keran air nomor 3 pada saf wudhu bagian timur patah dratnya sehingga air mengalir terus dan membasahi area pelataran masjid. Penggantian kepala keran telah dilakukan oleh tim sarpras.",
        imageClass: "image-faucet",
        icon: "⌁",
        timeline: [
            ["Laporan diterima", "27 Okt 2026 · 06:18", "Laporan masuk dan diteruskan ke tim sarpras.", "current"],
            ["Teknisi ditugaskan", "27 Okt 2026 · 06:42", "Teknisi mengecek keran dan menyiapkan suku cadang.", "current"],
            ["Selesai ditangani", "27 Okt 2026 · 08:15", "Kepala keran telah diganti dan area kembali aman digunakan.", "current"]
        ]
    },
    "REP-1041": {
        id: "REP-1041",
        category: "Fasilitas",
        tagClass: "tag-purple",
        status: "Dalam penanganan",
        statusClass: "progress",
        title: "AC lab komputer gedung B meneteskan air ke meja",
        location: "Lab komputer · Gedung B",
        reporter: "Baraa Abyan",
        date: "26 Oktober 2026 · 14:05",
        updated: "1 hari yang lalu",
        description: "Unit AC indoor sebelah utara bocor air pembuangan dan menetes tepat di atas meja praktik santri. Tim sarpras perlu mengecek selang drainase agar tidak berdampak pada kabel komputer.",
        imageClass: "image-ac",
        icon: "⌁",
        timeline: [
            ["Laporan diterima", "26 Okt 2026 · 14:05", "Laporan masuk dan menunggu verifikasi tim sarpras.", "current"],
            ["Sedang diverifikasi", "26 Okt 2026 · 15:20", "Lokasi telah dicek dan teknisi dijadwalkan datang.", "current"],
            ["Perbaikan dilakukan", "Menunggu jadwal", "Teknisi akan memperbarui status setelah pengecekan selesai.", ""]
        ]
    },
    "REP-1036": {
        id: "REP-1036", category: "Akademik", tagClass: "tag-blue", status: "Dalam penanganan", statusClass: "progress",
        title: "Koneksi internet lab melambat saat praktik", location: "Lab komputer · Gedung A", reporter: "Rafa Alfarizi", date: "25 Oktober 2026 · 13:40", updated: "2 hari yang lalu",
        description: "Koneksi server praktik RPL sering terputus ketika seluruh komputer digunakan bersamaan di sesi siang. Tim teknis sedang memeriksa jalur access point dan kapasitas jaringan.", imageClass: "image-projector", icon: "✧",
        timeline: [["Laporan diterima", "25 Okt 2026 · 13:40", "Laporan masuk dan diteruskan ke tim terkait.", "current"], ["Sedang diverifikasi", "25 Okt 2026 · 15:00", "Tim teknis mengecek access point di laboratorium.", "current"], ["Perbaikan dilakukan", "Menunggu jadwal", "Pembaruan berikutnya akan muncul setelah perbaikan.", ""]]
    },
    "REP-1031": {
        id: "REP-1031", category: "Aspirasi", tagClass: "tag-green", status: "Diterima", statusClass: "done",
        title: "Usulan penambahan papan informasi kegiatan", location: "Lingkungan sekolah", reporter: "Fauzan", date: "24 Oktober 2026 · 09:15", updated: "3 hari yang lalu",
        description: "Usulan agar informasi kegiatan santri dan jadwal penting tersedia di area yang mudah dilihat semua siswa. Masukan sudah diteruskan kepada pengelola sekolah.", imageClass: "image-ac", icon: "◌",
        timeline: [["Aspirasi diterima", "24 Okt 2026 · 09:15", "Usulan berhasil dicatat dalam sistem.", "current"], ["Diteruskan ke pengelola", "24 Okt 2026 · 12:30", "Pengelola sekolah menerima masukan untuk ditinjau.", "current"], ["Menunggu keputusan", "Sedang ditinjau", "Hasil tindak lanjut akan diumumkan setelah evaluasi.", ""]]
    },
    "REP-1027": {
        id: "REP-1027", category: "Fasilitas", tagClass: "tag-orange", status: "Selesai ditangani", statusClass: "done",
        title: "Lampu koridor asrama Blok C padam", location: "Asrama · Blok C", reporter: "Rizky", date: "23 Oktober 2026 · 18:20", updated: "4 hari yang lalu",
        description: "Dua lampu pada koridor lantai dua padam dan membuat akses menuju kamar kurang terang setelah maghrib. Lampu sudah diganti dan koridor kembali aman digunakan.", imageClass: "image-faucet", icon: "⌁",
        timeline: [["Laporan diterima", "23 Okt 2026 · 18:20", "Laporan diterima oleh admin sarpras.", "current"], ["Teknisi ditugaskan", "23 Okt 2026 · 19:05", "Teknisi membawa lampu pengganti ke Blok C.", "current"], ["Selesai ditangani", "23 Okt 2026 · 20:10", "Dua lampu koridor telah diganti.", "current"]]
    }
};

function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
}

function initMobileMenu() {
    const button = document.querySelector("[data-mobile-menu]");
    const links = document.querySelector("[data-nav-links]");
    if (!button || !links) return;
    button.addEventListener("click", () => {
        const isOpen = links.classList.toggle("open");
        button.setAttribute("aria-expanded", String(isOpen));
    });
    links.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => links.classList.remove("open")));
}

function initReportFilter() {
    const select = document.querySelector("[data-report-filter]");
    const cards = [...document.querySelectorAll("[data-report-category]")];
    if (!select || !cards.length) return;
    const queryCategory = new URLSearchParams(window.location.search).get("category");
    if (queryCategory && ["semua", "fasilitas", "akademik", "aspirasi"].includes(queryCategory)) select.value = queryCategory;
    const update = () => {
        const value = select.value;
        cards.forEach((card) => { card.hidden = value !== "semua" && card.dataset.reportCategory !== value; });
        const emptyState = document.querySelector("[data-filter-empty]");
        if (emptyState) emptyState.hidden = cards.some((card) => !card.hidden);
    };
    select.addEventListener("change", update);
    update();
}

function renderReportDetail() {
    const target = document.querySelector("[data-report-detail]");
    if (!target) return;
    const id = new URLSearchParams(window.location.search).get("id") || "REP-1048";
    const report = reports[id] || reports["REP-1048"];
    document.title = `${report.id} · ${report.title} | IDN E-Report`;
    setText("[data-detail-id]", report.id);
    setText("[data-detail-category]", report.category);
    setText("[data-detail-status]", report.status);
    setText("[data-detail-title]", report.title);
    setText("[data-detail-location]", report.location);
    setText("[data-detail-reporter]", report.reporter);
    setText("[data-detail-date]", report.date);
    setText("[data-detail-updated]", report.updated);
    setText("[data-detail-description]", report.description);
    const banner = document.querySelector("[data-detail-banner]");
    if (banner) {
        banner.className = `detail-banner ${report.imageClass}`;
        banner.innerHTML = `<div class="detail-banner-content"><span class="tag ${report.tagClass}">${report.category}</span><h1>${report.title}</h1></div>`;
    }
    const status = document.querySelector("[data-detail-status]");
    if (status) status.className = `table-status ${report.statusClass}`;
    const timeline = document.querySelector("[data-detail-timeline]");
    if (timeline) timeline.innerHTML = report.timeline.map(([title, date, text, state]) => `<div class="timeline-item ${state}"><strong>${title}</strong><small>${date}</small><p>${text}</p></div>`).join("");
}

function initReportForm() {
    const form = document.querySelector("[data-report-form]");
    if (!form) return;
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const toast = document.querySelector("[data-toast]");
        if (toast) {
            toast.textContent = "Laporan tersimpan sebagai draft. Tim sarpras akan segera memeriksanya.";
            toast.classList.add("show");
            window.setTimeout(() => toast.classList.remove("show"), 4200);
        }
        form.reset();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initReportFilter();
    renderReportDetail();
    initReportForm();
});
