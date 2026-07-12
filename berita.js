// INI CATATAN ISI BERITA YAHHHH , BY : FELLA
// Tinggal tambah/edit/hapus objek di array ini untuk mengatur berita yang tampil.
// - id: angka unik
// - kategori: "prestasi" | "kegiatan" | "pengumuman" (dipakai untuk filter)
// - gambar: path/nama file gambar (taruh file gambarnya di folder yang sama)
// - tanggal: format bebas, contoh "9 Juli 2026"
// - judul: judul berita
// - ringkasan: teks pendek yang muncul di card (1-2 kalimat)
// - isi: array of paragraf, tiap elemen = satu paragraf isi berita lengkap

const dataBerita = [
  {
    id: 1,
    kategori: "kegiatan",
    gambar: "berita-kegiatan1.jpeg",
    tanggal: "12 Februari 2026",
    judul: "Workshop AI Automation: Belajar AI Menyenangkan Bersama Praktisi",
    ringkasan:
      "Siswa PPLG mengikuti Workshop AI Automation untuk mempelajari dasar-dasar Artificial Intelligence, prompt engineering, chatbot, dan konsep Retrieval-Augmented Generation (RAG) bersama praktisi di bidang AI.",
    isi: [
  "Program Keahlian Pengembangan Perangkat Lunak dan Gim (PPLG) SMK Negeri 1 Kandeman mengadakan kegiatan AI Automation Workshop sebagai upaya meningkatkan wawasan siswa mengenai perkembangan teknologi Artificial Intelligence (AI). Kegiatan ini menghadirkan narasumber Alzhar Chandraditya Dewandra dan Dicky Widya Pergodi yang membagikan pengalaman serta pengetahuan mengenai penerapan AI di dunia nyata.",

  "Workshop membahas berbagai materi penting, mulai dari pengenalan Artificial Intelligence, metode-metode penerapan AI, teknik penyusunan prompt (prompt engineering), hingga konsep Retrieval-Augmented Generation (RAG) yang berperan dalam meningkatkan kualitas chatbot AI. Seluruh materi disampaikan secara interaktif sehingga peserta dapat memahami konsep AI dengan lebih mudah.",

  "Selain mendapatkan materi teori, peserta juga memperoleh gambaran mengenai bagaimana teknologi AI dimanfaatkan untuk membantu pekerjaan sehari-hari, pengembangan aplikasi, serta otomatisasi berbagai proses digital. Kegiatan ini memberikan kesempatan kepada siswa untuk mengenal teknologi yang saat ini banyak digunakan di dunia industri.",

  "Melalui AI Automation Workshop, diharapkan siswa PPLG semakin termotivasi untuk mempelajari teknologi kecerdasan buatan dan mampu mengembangkan inovasi berbasis AI sebagai bekal menghadapi tantangan dunia kerja maupun pendidikan di masa depan."
],
  },
  {
    id: 2,
    kategori: "prestasi",
    gambar: "berita-prestasi1.jpeg",
    tanggal: "28 Juni 2026",
    judul: "Workshop UI/UX Design Bersama Praktisi Industri",
    ringkasan:
      "Siswa Program Keahlian PPLG SMK Negeri 1 Kandeman, Ariq Alfatih, berhasil meraih Juara 1 pada ajang Festival Lomba Seni dan Sastra Siswa Nasional (FLS3N) Kabupaten Batang 2026 di cabang lomba Desain Poster.",
    isi: [
  "Prestasi membanggakan kembali diraih oleh Program Keahlian Pengembangan Perangkat Lunak dan Gim (PPLG) SMK Negeri 1 Kandeman. Salah satu siswa kelas XI RPL 1, Ariq Alfatih, berhasil meraih Juara 1 pada ajang Festival Lomba Seni dan Sastra Siswa Nasional (FLS3N) SMA/MA/SMK tingkat Kabupaten Batang Tahun 2026 pada cabang lomba Desain Poster.",

  "Keberhasilan ini merupakan hasil dari kerja keras, kreativitas, dan dedikasi Ariq dalam menghasilkan karya desain poster yang inovatif serta mampu memenuhi kriteria penilaian dewan juri. Selama proses persiapan lomba, Ariq juga mendapatkan bimbingan dari guru pembimbing sehingga mampu menampilkan karya terbaiknya.",

  "Prestasi tersebut menjadi bukti bahwa siswa PPLG tidak hanya memiliki kemampuan di bidang pemrograman dan teknologi informasi, tetapi juga mampu mengembangkan kreativitas dalam bidang desain grafis dan komunikasi visual. Kompetensi yang dipelajari di jurusan PPLG memberikan bekal bagi siswa untuk berprestasi di berbagai bidang teknologi dan seni digital.",

  "Seluruh keluarga besar SMK Negeri 1 Kandeman mengucapkan selamat dan apresiasi kepada Ariq Alfatih atas prestasi yang telah diraih. Diharapkan pencapaian ini dapat menjadi inspirasi bagi siswa lainnya untuk terus mengembangkan potensi, berani berkarya, dan mengharumkan nama sekolah di berbagai ajang kompetisi."
],
  },
  {
    id: 3,
    kategori: "prestasi",
    gambar: "berita-prestasi2.jpeg",
    tanggal: "28 Juni 2026",
    judul: "Siswa PPLG Raih Juara 1 LKS Dikmen XXXIV Tingkat Provinsi Jawa Tengah 2026",
    ringkasan:
      "Nafan Rizkilah, siswa kelas XI RPL 1 SMK Negeri 1 Kandeman, berhasil meraih Juara 1 pada Lomba Kompetensi Siswa (LKS) Dikmen XXXIV Provinsi Jawa Tengah 2026 di bidang Teknologi Informasi kategori Piranti Lunak untuk Bisnis.",
    isi: [
  "Prestasi membanggakan kembali diraih oleh siswa Program Keahlian Pengembangan Perangkat Lunak dan Gim (PPLG) SMK Negeri 1 Kandeman. Nafan Rizkilah, siswa kelas XI RPL 1, berhasil meraih Juara 1 pada ajang Lomba Kompetensi Siswa (LKS) Dikmen XXXIV Tingkat Provinsi Jawa Tengah Tahun 2026 pada bidang Teknologi Informasi kategori Piranti Lunak untuk Bisnis.",

  "Keberhasilan tersebut merupakan hasil dari kerja keras, semangat belajar, serta latihan yang dilakukan secara konsisten bersama guru pembimbing. Dalam kompetisi ini, peserta dituntut untuk memiliki kemampuan dalam menganalisis kebutuhan, merancang, hingga mengembangkan perangkat lunak bisnis sesuai dengan standar industri.",

  "Prestasi yang diraih Nafan menjadi bukti bahwa siswa PPLG SMK Negeri 1 Kandeman memiliki kompetensi yang mampu bersaing di tingkat provinsi. Selain menguasai pemrograman, siswa juga dibekali kemampuan berpikir logis, problem solving, dan pengembangan aplikasi yang sesuai dengan kebutuhan dunia kerja.",

  "Keluarga besar SMK Negeri 1 Kandeman mengucapkan selamat dan apresiasi kepada Nafan Rizkilah atas pencapaian luar biasa tersebut. Diharapkan prestasi ini dapat memotivasi seluruh siswa untuk terus belajar, mengembangkan kemampuan, dan mengharumkan nama sekolah pada berbagai kompetisi di tingkat yang lebih tinggi."
],
  },
  ];

// ================= RENDER CARD BERITA =================

function formatKategori(kategori) {
  const map = {
    prestasi: "Prestasi",
    kegiatan: "Kegiatan",
    pengumuman: "Pengumuman",
  };
  return map[kategori] || kategori;
}

function renderNewsGrid(filter = "all") {
  const grid = document.getElementById("newsGrid");
  grid.innerHTML = "";

  const filtered =
    filter === "all"
      ? dataBerita
      : dataBerita.filter((item) => item.kategori === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-12"><p class="news-empty">Belum ada berita untuk kategori ini.</p></div>`;
    return;
  }

  filtered.forEach((item) => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";

    col.innerHTML = `
      <div class="news-card" data-id="${item.id}">
        <div class="news-card-image">
          <img src="${item.gambar}" alt="${item.judul}" />
          <span class="news-badge">${formatKategori(item.kategori)}</span>
        </div>
        <div class="news-card-body">
          <span class="news-date"><i class="bi bi-calendar3"></i> ${item.tanggal}</span>
          <h5 class="news-card-title">${item.judul}</h5>
          <p class="news-card-text">${item.ringkasan}</p>
          <button class="news-read-btn" data-id="${item.id}">
            Baca Selengkapnya <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    `;

    grid.appendChild(col);
  });
}

// ================= MODAL BACA LENGKAP =================

function openNewsModal(id) {
  const item = dataBerita.find((n) => n.id === Number(id));
  if (!item) return;

  const content = document.getElementById("newsModalContent");
  content.innerHTML = `
    <span class="news-badge news-badge-modal">${formatKategori(item.kategori)}</span>
    <h2 class="news-modal-title">${item.judul}</h2>
    <span class="news-date"><i class="bi bi-calendar3"></i> ${item.tanggal}</span>
    <img src="${item.gambar}" alt="${item.judul}" class="news-modal-image" />
    <div class="news-modal-text">
      ${item.isi.map((p) => `<p>${p}</p>`).join("")}
    </div>
  `;

  document.getElementById("newsModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeNewsModal() {
  document.getElementById("newsModal").classList.remove("active");
  document.body.style.overflow = "";
}

// ================= EVENT LISTENERS =================

document.addEventListener("DOMContentLoaded", () => {
  renderNewsGrid("all");

  // Klik tombol filter kategori
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderNewsGrid(btn.dataset.filter);
    });
  });

  // Klik tombol "Baca Selengkapnya" atau card (pakai event delegation karena card dirender dinamis)
  document.getElementById("newsGrid").addEventListener("click", (e) => {
    const btn = e.target.closest(".news-read-btn");
    const card = e.target.closest(".news-card");
    if (btn) {
      openNewsModal(btn.dataset.id);
    } else if (card) {
      openNewsModal(card.dataset.id);
    }
  });

  // Tutup modal
  document.getElementById("newsModalClose").addEventListener("click", closeNewsModal);
  document.getElementById("newsModal").addEventListener("click", (e) => {
    if (e.target.id === "newsModal") closeNewsModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNewsModal();
  });
});
