/**
 * ===================================================================
 * GASREM (NGEGAS OR NGEREM) - INTERACTIVE SCRIPTS
 * Logika Interaktif, Tool Dialektika Naskah, Modal Reader, & Filter
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* =================================================================
     1. THEME TOGGLE (DARK / LIGHT MODE)
     ================================================================= */
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const savedTheme = localStorage.getItem('gasrem-theme') || 'light';
  
  body.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      body.setAttribute('data-theme', nextTheme);
      localStorage.setItem('gasrem-theme', nextTheme);
    });
  }

  /* =================================================================
     2. NAVBAR SCROLL EFFECT & MOBILE MENU
     ================================================================= */
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* =================================================================
     3. HERO INTERACTIVE DIAL (NGEGAS vs BALANCE vs NGEREM)
     ================================================================= */
  const dialTabs = document.querySelectorAll('.pedal-tab');
  const dialIcon = document.getElementById('dial-icon');
  const dialModeBadge = document.getElementById('dial-mode-badge');
  const dialHeading = document.getElementById('dial-heading');
  const dialDesc = document.getElementById('dial-desc');
  const dialCta = document.getElementById('dial-cta');
  const gaugeFill = document.getElementById('gauge-fill');
  const gaugePointerText = document.getElementById('gauge-pointer-text');

  const dialData = {
    gas: {
      icon: '⚡',
      badge: 'MODE NGEGAS: AKSELERASI & POLEMIK',
      heading: '"Bila gagasanmu tak memantik perdebatan, mungkin kamu hanya mengulang kebisingan."',
      desc: 'Kapan waktu <strong>Ngegas</strong>? Saat publik terbuai narasi mapan yang manipulatif. Saat ada ketidakadilan yang menuntut advokasi tulisan berani, lugas, menghentak, dan membongkar kepura-puraan sosial.',
      badgeColor: 'var(--gas-base)',
      ctaText: 'Lihat Tulisan Ngegas &rarr;',
      filterTarget: 'gas',
      gaugeWidth: '85%',
      pointerText: '85% Gas Power (Akselerasi)'
    },
    balance: {
      icon: '⚖️',
      badge: 'TITIK SEIMBANG: DIALEKTIKA SINTESIS',
      heading: '"Menghantam dengan argumen baja, memeluk dengan kerendahhatian metodologis."',
      desc: 'Inilah esensi sejati <strong>GasRem</strong>: gagasan yang bernyali besar (Gas) dikawinkan dengan kejujuran riset yang ketat (Rem). Tulisan yang tidak hanya viral sesaat, tetapi menjadi rujukan abadi lintas generasi.',
      badgeColor: 'var(--balance-gold)',
      ctaText: 'Lihat Kajian Kebijakan &rarr;',
      filterTarget: 'kajian',
      gaugeWidth: '50%',
      pointerText: '50% Gas : 50% Rem (Seimbang)'
    },
    rem: {
      icon: '🧘',
      badge: 'MODE NGEREM: KEDALAMAN & KONTEMPLASI',
      heading: '"Sebelum jarimu menyulut api perdebatan, pastikan bahan bakarmu fakta, bukan gosip."',
      desc: 'Kapan waktu <strong>Ngerem</strong>? Saat banjir hoaks dan amarah massal mengaburkan fakta. Menulis dengan tenang, mengutip literatur primer, membedah definisi, dan mengendapkan tulisan semalam sebelum dipublikasikan.',
      badgeColor: 'var(--rem-base)',
      ctaText: 'Lihat Esai Ngerem &rarr;',
      filterTarget: 'rem',
      gaugeWidth: '15%',
      pointerText: '15% Gas : 85% Rem (Kedalaman)'
    }
  };

  dialTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      dialTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const mode = tab.getAttribute('data-mode');
      const data = dialData[mode];

      if (data) {
        dialIcon.textContent = data.icon;
        dialModeBadge.textContent = data.badge;
        dialModeBadge.style.color = data.badgeColor;
        dialHeading.innerHTML = data.heading;
        dialDesc.innerHTML = data.desc;
        dialCta.innerHTML = data.ctaText;
        dialCta.setAttribute('data-target-filter', data.filterTarget);
        gaugeFill.style.width = data.gaugeWidth;
        gaugePointerText.textContent = data.pointerText;
      }
    });
  });

  if (dialCta) {
    dialCta.addEventListener('click', (e) => {
      const targetFilter = dialCta.getAttribute('data-target-filter');
      if (targetFilter) {
        const filterButton = document.querySelector(`.filter-btn[data-filter="${targetFilter}"]`);
        if (filterButton) filterButton.click();
      }
    });
  }

  /* =================================================================
     4. DATABASE NASKAH UNTUK MODAL READER & FILTER
     ================================================================= */
  const articlesDatabase = {
    1: {
      id: 1,
      mode: 'gas',
      modeLabel: '⚡ MODE NGEGAS • Opini Kritis',
      category: 'Pendidikan Tinggi',
      title: 'Komersialisasi Skripsi: Ketika Kampus Berubah Menjadi Pabrik Ijazah & Mahasiswa Jadi Konsumen Pasrah',
      author: 'Rangga Dewantara',
      date: '4 November 2026',
      readTime: '5 Menit Baca',
      ratio: '85% Gas / 15% Rem',
      content: `
        <p class="lead-dropcap">Pernahkah kita bertanya dengan jujur: untuk siapa sebenarnya ratusan ribu lembar skripsi dicetak setiap semester di negeri ini? Apakah untuk memajukan peradaban, atau sekadar memenuhi prasyarat administratif agar birokrasi kampus bisa mengklaim akreditasi unggul?</p>
        
        <p>Realitas di lapangan memperlihatkan tragedi intelektual yang telanjang. Mahasiswa tingkat akhir tidak lagi didorong untuk memikirkan problem riil masyarakat di sekitarnya—tentang petani yang kehilangan tanah, tentang polusi sungai di belakang kampus, atau tentang buruh yang tercekik upah minimum. Sebaliknya, mereka dipaksa tunduk pada format margin 4-4-3-3, font Times New Roman, dan tanda tangan dosen pembimbing yang kerap kali lebih sulit ditemui daripada pejabat istana.</p>
        
        <blockquote>
          "Ketika kampus direduksi menjadi pabrik ijazah, mahasiswa bukan lagi kaum intelektual penggerak perubahan, melainkan konsumen pasrah yang membayar mahal demi selembar kertas bertuliskan gelar sarjana."
        </blockquote>

        <p>Nalar kritis dimatikan sejak dini di ruang kelas. Diskusi yang mempertanyakan status quo dicap sebagai pembangkangan. Penelitian yang berani mengkritik kebijakan konglomerat atau patron kampus dipotong di tengah jalan dengan alasan 'kurang akademis'. Akibatnya, kita melahirkan generasi sarjana yang pandai mengutip buku tebal, tetapi bisu dan gemetar saat berhadapan dengan ketidakadilan di depan mata.</p>

        <p>Inilah saatnya kita menginjak pedal gas: kita harus menuntut dekonstruksi total kurikulum pendidikan tinggi kita. Skripsi tidak boleh lagi menjadi monumen kertas usang di gudang perpustakaan. Setiap karya intelektual harus memiliki dampak sosial yang nyata, berpihak pada kaum yang terpinggirkan, dan berani menantang keangkuhan kekuasaan.</p>
        
        <div class="references-box">
          <strong>Rujukan & Catatan Kurasi GasRem:</strong>
          <ul>
            <li>Freire, Paulo. (1970). <em>Pedagogy of the Oppressed</em>. Continuum Publishing.</li>
            <li>Data Kemendikbudristek 2025: Rasio publikasi skripsi mahasiswa yang dapat diakses publik vs yang membeku di arsip fisik.</li>
            <li>Catatan Kurator: Tulisan ini masuk kategori <strong>Ngegas Murni</strong> dengan tendensi advokasi dan bahasa pamfletik yang menggugah.</li>
          </ul>
        </div>
      `
    },
    2: {
      id: 2,
      mode: 'rem',
      modeLabel: '🧘 MODE NGEREM • Esai Reflektif',
      category: 'Filsafat Bahasa & Kehidupan',
      title: 'Menghidupkan Kesunyian: Sebuah Pembelaan atas Lambatnya Membaca Buku Tebal di Jagat Medsos',
      author: 'Annisa Larasati',
      date: '2 November 2026',
      readTime: '9 Menit Baca',
      ratio: '20% Gas / 80% Rem',
      content: `
        <p class="lead-dropcap">Dalam era di mana algoritma menuntut respons instan dalam tempo kurang dari tiga detik, memutuskan untuk duduk tenang dan membaca buku setebal lima ratus halaman terasa seperti tindakan pembangkangan sipil yang paling hening.</p>
        
        <p>Kita sedang hidup dalam tirani percepatan. Kita tidak lagi membaca untuk memahami, melainkan memindai (*scanning*) untuk segera berkomentar. Kita tergesa-gesa membagikan opini di linimasa bahkan sebelum tuntas membaca paragraf pembuka. Akibatnya, pemikiran kita menjadi dangkal, reaktif, dan rapuh laksana gelembung sabun yang pecah diterpa angin pertama keraguan.</p>
        
        <blockquote>
          "Hening bukanlah ketiadaan suara, melainkan ruang suci di mana gagasan berhenti menjadi kebisingan dan mulai menjelma menjadi kebijaksanaan."
        </blockquote>

        <p>Di sinilah kita wajib menginjak rem sedalam-dalamnya. Konsep 'Ngerem' dalam tradisi GasRem bukan berarti pasif atau apatis. Ngerem adalah tindakan sadar untuk menarik diri dari hiruk-pikuk linimasa demi menguji kembali premis-premis dasar pemikiran kita. Menghabiskan waktu dua jam untuk mencerna satu bab filsafat atau meresapi puisi Sutardji Calzoum Bachri adalah terapi terbaik untuk menyelamatkan jiwa kita dari neurosis digital.</p>

        <p>Tulisan yang bertahan melintasi zaman bukanlah tulisan yang diracik dalam ketergesa-gesa demi mengejar 'trending topic'. Ia lahir dari perenungan panjang di sudut sunyi, dari tumpukan catatan kaki yang diverifikasi dengan teliti, dan dari keberanian untuk tidak buru-buru menyimpulkan sesuatu yang memang rumit.</p>

        <div class="references-box">
          <strong>Rujukan & Catatan Kurasi GasRem:</strong>
          <ul>
            <li>Han, Byung-Chul. (2015). <em>The Scent of Time: A Philosophical Essay on the Art of Lingering</em>. Polity Press.</li>
            <li>Carr, Nicholas. (2010). <em>The Shallows: What the Internet Is Doing to Our Brains</em>. W. W. Norton & Company.</li>
            <li>Catatan Kurator: Esai ini memperoleh indeks kontemplatif tertinggi edisi November dengan prosa puitis yang menenangkan.</li>
          </ul>
        </div>
      `
    },
    3: {
      id: 3,
      mode: 'kajian',
      modeLabel: '⚖️ KAJIAN KEBIJAKAN • Policy Brief',
      category: 'Tata Kelola Lingkungan',
      title: 'Transisi Energi Tanpa Mengorbankan Ruang Hidup: Tinjauan Kritis atas Proyek Pertambangan Nikel Daerah',
      author: 'Tim Divisi Riset GasRem',
      date: '29 Oktober 2026',
      readTime: '12 Menit Baca',
      ratio: '50% Gas / 50% Rem',
      content: `
        <p class="lead-dropcap">Narasi global mengenai kendaraan listrik dan energi hijau sering kali dijual sebagai obat mujarab bagi krisis iklim. Namun, di balik klaim ramah lingkungan tersebut, bentang alam di kepulauan timur Nusantara tengah mengalami degradasi ekologis dan sosial yang luar biasa dahsyat.</p>

        <p>Laporan investigasi dan telaah kebijakan ini meneliti korelasi antara izin usaha pertambangan (IUP) mineral nikel dengan penyempitan akses nelayan tradisional terhadap sumber mata pencaharian bahari di empat kabupaten prioritas hilirisasi nasional.</p>

        <blockquote>
          "Tidak ada keadilan iklim dalam baterai mobil listrik yang bersih jika proses ekstraksi bahan bakunya mengotori air minum dan menyingkirkan warga adat dari tanah leluhurnya."
        </blockquote>

        <p>Temuan utama riset kami mengungkap tiga persoalan mendasar: (1) Lemahnya penegakan analisis mengenai dampak lingkungan (AMDAL) yang independen; (2) Minimnya mekanisme persetujuan atas dasar informasi awal tanpa paksaan (FPIC) bagi komunitas terdampak; serta (3) Disparitas ekonomi lokal yang justru melebar akibat ketergantungan pada tenaga kerja luar daerah tanpa transfer kapasitas kejuruan yang memadai.</p>

        <p>GasRem merekomendasikan moratorium izin baru sampai audit daya dukung lingkungan komprehensif diselesaikan, serta pembentukan dewan pengawas independen berbasis komunitas sipil.</p>

        <div class="references-box">
          <strong>Basis Data & Metodologi:</strong>
          <ul>
            <li>Analisis citra satelit tutupan hutan kawasan hulu sungai periode 2020-2026.</li>
            <li>Wawancara mendalam terhadap 48 kepala keluarga nelayan dan tokoh adat di Halmahera dan Morowali.</li>
            <li>Cross-check silang laporan keuangan perusahaan tambang terbuka vs alokasi dana CSR daerah.</li>
          </ul>
        </div>
      `
    },
    4: {
      id: 4,
      mode: 'gas',
      modeLabel: '⚡ MODE NGEGAS • Kritik Budaya',
      category: 'Ekonomi Kreatif',
      title: 'Tipu Daya Romantisasi "Hustle Culture": Menghamba pada Kerja Berlebih demi Kekayaan Pemilik Modal',
      author: 'Farhan Al-Kautsar',
      date: '24 Oktober 2026',
      readTime: '6 Menit Baca',
      ratio: '75% Gas / 25% Rem',
      content: `
        <p class="lead-dropcap">"Tidur hanya empat jam sehari, bangun subuh, minum kopi tiga gelas, dan bekerja sampai tengah malam demi mewujudkan impian." Kita dicekoki propaganda ini tanpa henti lewat konten video motivasi di reels dan TikTok.</p>

        <p>Namun mari kita buka tabirnya: siapa yang sebenarnya membeli mobil mewah dan liburan ke pulau pribadi dari kerja keras 16 jam sehari itu? Apakah Anda, si pekerja lepas atau pegawai kontrak tanpa asuransi ketenagakerjaan? Tentu bukan. Pemilik modal dan para platform-lah yang menangguk untung besar dari keringat dan kelelahan mental Anda.</p>

        <p>Hustle culture adalah racun paling mematikan bagi generasi muda karena ia mengubah eksploitasi struktural menjadi seolah-olah masalah disiplin pribadi. Jika Anda miskin atau stres, itu bukan salah sistem upah murah, melainkan Anda dituduh 'kurang gigih'. Ini adalah gaslighting ekonomi paling canggih di abad ke-21.</p>
        
        <p>Sudah saatnya kita merebut kembali hak untuk beristirahat, hak untuk membaca buku tanpa rasa bersalah, dan hak untuk bercengkerama dengan sesama manusia tanpa harus menghitung monetisasinya!</p>
      `
    },
    5: {
      id: 5,
      mode: 'rem',
      modeLabel: '🧘 MODE NGEREM • Metodologi',
      category: 'Praktik Kepenulisan',
      title: 'Seni Memeriksa Diri: 7 "Rem Mental" yang Wajib Diinjak Sebelum Menekan Tombol Publish',
      author: 'Dr. Maya Saraswati',
      date: '18 Oktober 2026',
      readTime: '8 Menit Baca',
      ratio: '10% Gas / 90% Rem',
      content: `
        <p class="lead-dropcap">Salah satu tanda kematangan seorang penulis bukanlah seberapa fasih ia memuntahkan kata-kata pedas, melainkan seberapa ketat ia mengedit dan mengoreksi keyakinan dirinya sendiri sebelum mengirimkan tulisannya ke publik.</p>

        <p>Berikut adalah 7 'Rem Mental' yang wajib Anda operasikan sebelum mempublikasikan esai atau opini:</p>
        
        <ol style="margin-left: 1.5rem; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
          <li><strong>Rem Konfirmasi Bias:</strong> Apakah saya mengutip data ini hanya karena ia membenarkan kemarahan saya, atau memang datanya representatif?</li>
          <li><strong>Rem Strawman:</strong> Apakah saya menggambarkan argumen lawan dengan jujur dan paling kuat, atau saya sengaja membuatnya tampak konyol agar mudah dihancurkan?</li>
          <li><strong>Rem Generalisasi Gegabah:</strong> Apakah satu kasus unik yang saya alami cukup menjadi dasar untuk menyimpulkan kondisi jutaan orang?</li>
          <li><strong>Rem Emosi Panas:</strong> Bacalah tulisan Anda esok pagi setelah tidur malam yang nyenyak. Apakah Anda masih setuju dengan kalimat yang Anda tulis kemarin sore?</li>
          <li><strong>Rem Sumber Sekunder:</strong> Jangan pernah mengutip kutipan yang mengutip kutipan. Cari naskah aslinya!</li>
          <li><strong>Rem Nada Merendahkan:</strong> Kritiklah ide dan strukturnya, jangan pernah menyerang martabat pribadi fisik lawan debat Anda.</li>
          <li><strong>Rem Sintesis:</strong> Jika Anda merobohkan sebuah gagasan, apa alternatif konkret yang Anda tawarkan ke meja makan pembaca?</li>
        </ol>
      `
    },
    6: {
      id: 6,
      mode: 'kajian',
      modeLabel: '⚖️ KAJIAN KEBIJAKAN • Etika AI',
      category: 'Kecerdasan Buatan',
      title: 'Antara Bantuan Mesin dan Kemandulan Otak: Menetapkan Batas Etis Penggunaan LLM dalam Kepenulisan Esai',
      author: 'Bagus Pratama & Redaksi',
      date: '12 Oktober 2026',
      readTime: '10 Menit Baca',
      ratio: '45% Gas / 55% Rem',
      content: `
        <p class="lead-dropcap">Kecerdasan buatan tidak membunuh kepenulisan. Yang ia bunuh adalah kepenulisan yang medioker dan malas berpikir. Pertanyaannya: di mana kita menarik garis antara AI sebagai asisten riset vs AI sebagai pengganti orisinalitas jiwa manusia?</p>

        <p>Survei GasRem terhadap 200 penulis muda di 8 kota menemukan fenomena 'homogenitas gaya bahasa': tulisan yang terlalu banyak disunting oleh LLM cenderung kehilangan ketajaman rasa bahasa, sarkasme halus, serta pengalaman tubuh yang hanya bisa dirasakan oleh manusia berdarah dan bernapas.</p>

        <p>Redaksi GasRem merumuskan pedoman 'Simbiosis Kritis': AI diizinkan untuk mencari analogi pembanding, memeriksa tata bahasa, atau memetakan literatur asing; namun tesis utama, argumen nilai moral, dan keberpihakan ideologis wajib murni lahir dari perenungan dan pengalaman empiris penulis manusia.</p>
      `
    }
  };

  /* =================================================================
     5. FILTER ARTIKEL & PENCARIAN REAL-TIME
     ================================================================= */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const articleCards = document.querySelectorAll('.article-card');
  const searchInput = document.getElementById('article-search');
  const articleCountLabel = document.getElementById('article-count-label');

  let currentCategory = 'all';
  let searchQuery = '';

  function updateArticlesVisibility() {
    let visibleCount = 0;

    articleCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const cardText = card.innerText.toLowerCase();

      const matchesCategory = (currentCategory === 'all') || (cardCategory === currentCategory);
      const matchesSearch = searchQuery === '' || cardText.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (articleCountLabel) {
      articleCountLabel.textContent = `Menampilkan ${visibleCount} tulisan pilihan`;
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      updateArticlesVisibility();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      updateArticlesVisibility();
    });
  }

  // Support link dari kluster kajian
  const kajianLinks = document.querySelectorAll('.kajian-readmore');
  kajianLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // scroll smoothly to bengkel
      const targetBtn = document.querySelector('.filter-btn[data-filter="kajian"]');
      if (targetBtn) targetBtn.click();
    });
  });

  /* =================================================================
     6. MODAL READER (BACA NASKAH LENGKAP)
     ================================================================= */
  const readerModal = document.getElementById('reader-modal');
  const readerCloseBtn = document.getElementById('reader-close-btn');
  const btnModalCloseBottom = document.getElementById('btn-modal-close-bottom');
  const readerModalContent = document.getElementById('reader-modal-content');
  const readerModeTag = document.getElementById('reader-mode-tag');
  const fontSizeDec = document.getElementById('font-size-dec');
  const fontSizeInc = document.getElementById('font-size-inc');
  const btnCopyLink = document.getElementById('btn-copy-link');

  let currentReaderFontSize = 1.08;

  function openReader(articleId) {
    const article = articlesDatabase[articleId];
    if (!article) return;

    readerModeTag.textContent = article.modeLabel;
    if (article.mode === 'gas') {
      readerModeTag.style.background = 'var(--gas-bg-soft)';
      readerModeTag.style.color = 'var(--gas-base)';
    } else if (article.mode === 'rem') {
      readerModeTag.style.background = 'var(--rem-bg-soft)';
      readerModeTag.style.color = 'var(--rem-base)';
    } else {
      readerModeTag.style.background = 'var(--balance-bg-soft)';
      readerModeTag.style.color = 'var(--balance-gold)';
    }

    readerModalContent.innerHTML = `
      <h1>${article.title}</h1>
      <div class="reader-article-meta">
        <strong>Oleh:</strong> ${article.author} &bull; 
        <span>${article.date}</span> &bull; 
        <span>${article.readTime}</span> &bull; 
        <span>Kategori: ${article.category}</span> &bull; 
        <span>Rasio: ${article.ratio}</span>
      </div>
      <div class="article-body-text">
        ${article.content}
      </div>
    `;

    readerModal.classList.add('open');
    readerModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeReader() {
    readerModal.classList.remove('open');
    readerModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Delegated click for reader buttons
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.open-reader-btn');
    if (trigger) {
      const id = trigger.getAttribute('data-id');
      if (id) {
        openReader(id);
      }
    }
  });

  if (readerCloseBtn) readerCloseBtn.addEventListener('click', closeReader);
  if (btnModalCloseBottom) btnModalCloseBottom.addEventListener('click', closeReader);

  if (readerModal) {
    readerModal.addEventListener('click', (e) => {
      if (e.target === readerModal) closeReader();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && readerModal && readerModal.classList.contains('open')) {
      closeReader();
    }
  });

  // Font size adjustments in reader
  if (fontSizeInc && fontSizeDec && readerModalContent) {
    fontSizeInc.addEventListener('click', () => {
      if (currentReaderFontSize < 1.4) {
        currentReaderFontSize += 0.08;
        readerModalContent.style.fontSize = `${currentReaderFontSize}rem`;
      }
    });

    fontSizeDec.addEventListener('click', () => {
      if (currentReaderFontSize > 0.85) {
        currentReaderFontSize -= 0.08;
        readerModalContent.style.fontSize = `${currentReaderFontSize}rem`;
      }
    });
  }

  // Copy article link
  if (btnCopyLink) {
    btnCopyLink.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        const originalText = btnCopyLink.textContent;
        btnCopyLink.textContent = '✓ Tautan Disalin!';
        setTimeout(() => {
          btnCopyLink.textContent = originalText;
        }, 2000);
      }).catch(() => {
        alert('Tautan naskah: ' + window.location.href);
      });
    });
  }

  /* =================================================================
     7. INTERACTIVE TOOL: KALKULATOR DIALEKTIKA "GAS-REM" NASKAH
     ================================================================= */
  const sliderTone = document.getElementById('slider-tone');
  const toneIndicatorVal = document.getElementById('tone-indicator-val');
  const btnCalculate = document.getElementById('btn-calculate-dialektika');

  const checkBold = document.getElementById('check-bold-stance');
  const checkRhetoric = document.getElementById('check-rhetoric');
  const checkData = document.getElementById('check-data');
  const checkCounter = document.getElementById('check-counter');
  const checkSolutive = document.getElementById('check-solutive');

  const ratioGasBar = document.getElementById('ratio-gas-bar');
  const ratioRemBar = document.getElementById('ratio-rem-bar');
  const resultStatusTitle = document.getElementById('result-status-title');
  const resultEvalText = document.getElementById('result-eval-text');
  const resultTipsText = document.getElementById('result-tips-text');
  const resultRubrikTarget = document.getElementById('result-rubrik-target');

  function updateSliderLabel() {
    if (!sliderTone || !toneIndicatorVal) return;
    const val = parseInt(sliderTone.value, 10);
    if (val > 65) {
      toneIndicatorVal.textContent = `Lebih Cenderung Provokatif (${val}% Gas)`;
      toneIndicatorVal.className = 'text-gas';
    } else if (val < 35) {
      toneIndicatorVal.textContent = `Sangat Hati-Hati & Netral (${100 - val}% Rem)`;
      toneIndicatorVal.className = 'text-rem';
    } else {
      toneIndicatorVal.textContent = `Imbang & Dialektis (${val}% Gas / ${100 - val}% Rem)`;
      toneIndicatorVal.className = 'text-gold';
    }
  }

  if (sliderTone) {
    sliderTone.addEventListener('input', updateSliderLabel);
  }

  function calculateDialektikaScore() {
    let gasPoints = 0;
    let remPoints = 0;

    // Checkbox scores
    if (checkBold && checkBold.checked) gasPoints += 20;
    if (checkRhetoric && checkRhetoric.checked) gasPoints += 20;
    if (checkData && checkData.checked) remPoints += 25;
    if (checkCounter && checkCounter.checked) remPoints += 20;
    if (checkSolutive && checkSolutive.checked) {
      gasPoints += 10;
      remPoints += 10;
    }

    // Slider weight
    const toneVal = sliderTone ? parseInt(sliderTone.value, 10) : 50;
    const sliderGasFactor = (toneVal / 100) * 40;
    const sliderRemFactor = ((100 - toneVal) / 100) * 40;

    gasPoints += sliderGasFactor;
    remPoints += sliderRemFactor;

    const total = gasPoints + remPoints;
    let finalGasRatio = Math.round((gasPoints / total) * 100);
    let finalRemRatio = 100 - finalGasRatio;

    // Boundary protection
    if (finalGasRatio > 95) finalGasRatio = 95;
    if (finalGasRatio < 10) finalGasRatio = 10;
    finalRemRatio = 100 - finalGasRatio;

    // Visual updates
    ratioGasBar.style.width = `${finalGasRatio}%`;
    ratioGasBar.innerHTML = `<span>${finalGasRatio}% Gas</span>`;
    ratioRemBar.style.width = `${finalRemRatio}%`;
    ratioRemBar.innerHTML = `<span>${finalRemRatio}% Rem</span>`;

    // Diagnosa & Rekomendasi Dinamis
    if (finalGasRatio >= 70) {
      resultStatusTitle.innerHTML = 'Status: Terlalu Liar / Emosional ⚡🔥';
      resultStatusTitle.style.color = 'var(--gas-base)';
      resultEvalText.innerHTML = 'Draf Anda memiliki daya ledak yang menggetarkan pembaca. Namun karena minimnya basis data dan keengganan menjawab sanggahan lawan, naskah ini mudah diserang balik sebagai opini subjektif tanpa dasar ilmiah.';
      resultTipsText.innerHTML = '<strong>Saran Kurator:</strong> Tekan pedal rem! Masukkan minimal 2 data statistik atau kutipan hasil survei kredibel. Hapus kata-kata yang bernada menghakimi personal dan gantilah dengan dekonstruksi argumen logis.';
      resultRubrikTarget.textContent = 'Kesesuaian: Kolom Opini Tajam (Perlu Revisi Rem Data)';
    } else if (finalGasRatio <= 35) {
      resultStatusTitle.innerHTML = 'Status: Terlalu Kaku & Dingin 🧘🧊';
      resultStatusTitle.style.color = 'var(--rem-base)';
      resultEvalText.innerHTML = 'Naskah Anda sangat kokoh dari segi metodologi, data, dan kehati-hatian. Namun naskah ini membosankan bagi pembaca awam karena kekurangan "gas": tidak ada keberanian mengambil posisi yang tegas.';
      resultTipsText.innerHTML = '<strong>Saran Kurator:</strong> Injak pedal gas! Jangan ragu menyatakan keberpihakan Anda. Gunakan analogi yang dekat dengan keseharian masyarakat dan pertegas implikasi sosial dari temuan riset Anda.';
      resultRubrikTarget.textContent = 'Kesesuaian: Jurnal Ilmiah / Monograf (Perlu Diinjeksi Nyawa)';
    } else {
      resultStatusTitle.innerHTML = 'Status: Keseimbangan Dialektika Sempurna! ⚖️✨';
      resultStatusTitle.style.color = 'var(--balance-gold)';
      resultEvalText.innerHTML = 'Luar biasa! Naskah Anda berhasil memadukan keberanian bersuara (Gas) dengan ketelitian metodologis (Rem). Pembaca akan terpantik oleh daya gugatnya sekaligus terpuaskan oleh bobot kebenaran datanya.';
      resultTipsText.innerHTML = '<strong>Saran Kurator:</strong> Naskah sudah matang! Anda tinggal merapikan tipografi, memastikan format kutipan konsisten, dan langsung kirimkan ke form redaksi kami di bawah.';
      resultRubrikTarget.textContent = 'Kesesuaian: Edisi Pilihan Rubrik Utama GasRem';
    }
  }

  if (btnCalculate) {
    btnCalculate.addEventListener('click', () => {
      calculateDialektikaScore();
      // Smooth scroll to result on mobile
      const resultBox = document.getElementById('tool-result-box');
      if (window.innerWidth < 1024 && resultBox) {
        resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  /* =================================================================
     8. FORM KIRIM NASKAH (SUBMISSION SIMULATION)
     ================================================================= */
  const submissionForm = document.getElementById('submission-form');
  const btnSubmitNaskah = document.getElementById('btn-submit-naskah');
  const submitAlert = document.getElementById('submit-alert');

  if (submissionForm) {
    submissionForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const authorName = document.getElementById('author-fullname').value;
      const manuscriptTitle = document.getElementById('manuscript-title').value;

      // Loading state
      btnSubmitNaskah.disabled = true;
      btnSubmitNaskah.innerHTML = '<span>Sedang Mengirim ke Dewan Kurator...</span>';

      setTimeout(() => {
        btnSubmitNaskah.disabled = false;
        btnSubmitNaskah.innerHTML = '<span class="btn-text">Kirimkan Naskah ke Dewan Kurator</span>';

        submitAlert.style.display = 'block';
        submitAlert.className = 'alert-box alert-success';
        submitAlert.innerHTML = `
          <strong>🎉 Naskah Berhasil Diterima!</strong><br>
          Terima kasih kawan <strong>${authorName}</strong>. Naskah berjudul <em>"${manuscriptTitle}"</em> telah masuk antrean kurasi Klinik Naskah GasRem. 
          Tim kurator kami akan meninjau rasio dialektika dan mengirimkan catatan peer-review via Email/WhatsApp dalam waktu 2-3 hari kerja.
        `;

        submissionForm.reset();
      }, 1200);
    });
  }

  /* =================================================================
     9. FORM REGISTRASI ANGGOTA (JOIN COMMUNITY)
     ================================================================= */
  const joinForm = document.getElementById('join-form');
  const joinAlert = document.getElementById('join-alert');
  const btnJoinSubmit = document.getElementById('btn-join-submit');

  if (joinForm) {
    joinForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('join-name').value;
      btnJoinSubmit.disabled = true;
      btnJoinSubmit.textContent = 'Memproses Pendaftaran...';

      setTimeout(() => {
        btnJoinSubmit.disabled = false;
        btnJoinSubmit.textContent = 'Gabung Jadi Bagian GasRem →';

        joinAlert.style.display = 'block';
        joinAlert.className = 'alert-box alert-success';
        joinAlert.innerHTML = `
          Selamat bergabung di lingkaran GasRem, <strong>${name}</strong>! Tautan undangan grup diskusi Telegram dan jadwal Diskusi Reboan terdekat telah dikirimkan ke email Anda. Mari merawat nalar bersama!
        `;

        joinForm.reset();
      }, 1000);
    });
  }

  /* =================================================================
     10. NEWSLETTER BULETIN FORM
     ================================================================= */
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('.newsletter-input');
      const email = input.value;
      if (email) {
        alert(`Terima kasih! Buletin mingguan GasRem edisi Jumat akan dikirimkan ke ${email}.`);
        input.value = '';
      }
    });
  }

  /* =================================================================
     11. PROGRAM BUTTONS INTERACTIVITY
     ================================================================= */
  const programButtons = document.querySelectorAll('.btn-program-detail');
  programButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const prog = btn.getAttribute('data-program');
      if (prog === 'reboan') {
        alert('☕ Diskusi Reboan #42:\nTopik: "Dialektika Gas-Rem dalam Esai Kontemporer"\nJadwal: Rabu, 19.30 WIB via Zoom.\nLink akses telah kami sematkan di grup anggota & Warta Ticker.');
      } else if (prog === 'klinik') {
        const submitSection = document.getElementById('kirim-naskah');
        if (submitSection) submitSection.scrollIntoView({ behavior: 'smooth' });
      } else if (prog === 'bootcamp') {
        const joinSection = document.getElementById('gabung');
        if (joinSection) joinSection.scrollIntoView({ behavior: 'smooth' });
      } else if (prog === 'antologi') {
        alert('📚 Antologi GasRem:\nBuku Vol. 01 "Menolak Bisu", Vol. 02 "Rem yang Goyah", dan Vol. 03 "Akal yang Menyala" dapat diunduh gratis dalam format PDF open-access di sekretariat komunitas.');
      }
    });
  });

});
