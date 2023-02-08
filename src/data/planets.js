const PlanetsData = [
  {
    id: 1,
    nama: "Merkurius",
    path: "/image/planets/merkurius.png",
    distance: "151.92 million km",
    age: "4.503 billion years",
    description:
      "Merkurius adalah planet terkecil di Tata Surya sekaligus yang terdekat dari Matahari. Periode revolusi planet ini merupakan yang terpendek dari semua planet di Tata Surya, yakni 87,79 hari",
    detail: [
      "Merkurius merupakan planet inferior yang letak orbitnya berada di sebelah dalam orbit Bumi, dan ketika diamati dari Bumi, jarak sudutnya dari Matahari tidak pernah melebihi 28°",
      "Karena jarak yang dekat dengan Matahari, planet ini hanya dapat dilihat di dekat ufuk barat setelah matahari terbenam atau ufuk timur sebelum matahari terbit.",
    ],
  },
  {
    id: 2,
    nama: "Venus",
    description:
      "planet terdekat kedua dari Matahari setelah Merkurius. Planet ini mengorbit Matahari selama 224,7 hari Bumi. Venus tidak memiliki satelit alami, Setelah Bulan planet ini merupakan objek alami tercerah di langit malam.",
    distance: "224.95 million km",
    age: "4.503 billion years",
    path: "/image/planets/venus.webp",
    detail: [
      "Venus merupakan planet inferior dengan sudut elongasi yang mencapai 47,8°. Kecerahan maksimal planet ini dapat dilihat segera sebelum matahari terbit atau setelah matahari terbenam, sehingga disebut Bintang Fajar atau Bintang Senja.",
      "Tekanan atmosfer permukaan Venus 92 kali lebih besar daripada Bumi. Dengan rata-rata suhu permukaan sebesar 735 K (462 °C; 863 °F), Venus merupakan planet terpanas di Tata Surya.",
    ],
  },
  {
    id: 3,
    nama: "Bumi",
    description:
      "Bumi adalah planet ketiga dari Matahari yang merupakan planet terpadat dan terbesar kelima dari delapan planet dalam Tata Surya. Bumi juga merupakan planet terbesar dari empat planet kebumian di Tata Surya",
    distance: "On site",
    age: "4.543 billion years",
    path: "/image/planets/earth.png",
    detail: [
      "Bumi terbentuk sekitar 4,54 miliar tahun yang lalu, dan kehidupan sudah muncul di permukaannya paling tidak sekitar 3,5 miliar tahun yang lalu. Hingga sekarang bumi tempat terlayak untuk di tinggal.",
      "Bumi adalah tempat tinggal bagi jutaan makhluk hidup, termasuk manusia. Sumber daya mineral Bumi dan produk-produk biosfer lainnya bersumbangsih terhadap penyediaan sumber daya untuk mendukung populasi manusia global.",
    ],
  },
  {
    id: 4,
    nama: "Mars",
    description:
      "Mars adalah planet bebatuan dengan atmosfer yang tipis. Di permukaan Mars terdapat kawah, gunung berapi, lembah, gurun, dan tudung es. Periode rotasi dan siklus musim Mars mirip dengan Bumi.",
    distance: "131.11 million km",
    age: "4.603 billion year",
    path: "/image/planets/mars.png",
    detail: [
      "Planet ini memiliki 2 buah satelit, yaitu Fobos dan Deimos. Planet ini mengorbit selama 687 hari dalam mengelilingi Matahari. Planet ini juga berotasi. Kala rotasinya 25,62 jam.",
      "Mars memiliki jari-jari sekitar setengah dari jari-jari Bumi. Planet ini kurang padat bila dibandingkan dengan Bumi, dan hanya mempunyai sekitar 15% volume dan 11% massa Bumi",
    ],
  },
  {
    id: 5,
    nama: "Jupiter",
    description:
      "Jupiter atau Yupiter adalah planet terdekat kelima dari Matahari setelah Merkurius, Venus, Bumi, dan Mars. Planet ini juga merupakan planet terbesar di Tata Surya.",
    distance: "815.71 million km",
    age: "4.603 billion years",
    path: "/image/planets/jupiter.png",
    detail: [
      "Jupiter merupakan raksasa gas dengan massa seperseribu massa Matahari dan dua setengah kali jumlah massa semua planet lain di Tata Surya.",
      "Jupiter sebagian besar terdiri dari hidrogen dan helium. Seperempat massa Jupiter merupakan helium, walaupun jumlahnya hanya sepersepuluh komposisi Jupiter.",
    ],
  },
  {
    id: 6,
    nama: "Saturnus",
    description:
      "Saturnus adalah planet keenam dari Matahari dan merupakan planet terbesar kedua di Tata Surya setelah Jupiter. Saturnus juga merupakan sebuah raksasa gas yang memiliki radius rata-rata sekitar 9 kali radius rata-rata Bumi",
    distance: "1.6106 billion km",
    age: "4.503 billion years",
    path: "/image/planets/saturnus.png",
    detail: [
      "Inti Saturnus dikelilingi oleh lapisan dalam yang terdiri dari hidrogen metalik, lapisan menengah yang terdiri dari hidrogen cair dan helium cair, dan lapisan luar yang mengandung gas",
      "Meskipun tidak memiliki permukaan yang padat, Saturnus diperkirakan memiliki inti yang padat, Saturnus adalah satu-satunya planet di Tata Surya yang massa jenisnya lebih rendah dari massa jenis air (sekitar 30% lebih rendah).",
    ],
  },
  {
    id: 7,
    nama: "Uranus",
    description:
      "Uranus adalah planet ketujuh dari Matahari. Uranus merupakan planet yang memiliki jari-jari terbesar ketiga sekaligus massa terbesar keempat di Tata Surya. Para astronom sering menempatkan Uranus dalam kategori raksasa es",
    distance: "2.9281 billion km",
    age: "4.503 billion years",
    path: "/image/planets/uranus.png",
    detail: [
      "Seperti planet raksasa lain, Uranus memiliki sistem cincin, magnetosfer, serta banyak satelit alami.",
      "Uranus telah diamati pada banyak kesempatan sebelum penemuannya sebagai planet, namun ia dianggap secara salah sebagai bintang",
    ],
  },
  {
    id: 7,
    nama: "Neptunus",
    distance: "4.5817 billion km",
    age: "4.503 billion years",
    description:
      "Neptunus merupakan planet terjauh (kedelapan) jika ditinjau dari Matahari. Neptunus merupakan planet terbesar keempat berdasarkan diameter (49.530 km) dan terbesar ketiga berdasarkan massa. Massa Neptunus tercatat 17 kali lebih besar daripada Bumi, dan sedikit lebih kecil daripada Uranus.",
    path: "/image/planets/neptune.png",
    detail: [
      "Neptunus ditemukan pada tanggal 23 September 1846.[1] Planet ini merupakan planet pertama yang ditemukan melalui prediksi matematika.",
      "Sementara atmosfer Uranus relatif tidak berciri, atmosfer Neptunus bersifat aktif dan menunjukkan pola cuaca.",
    ],
  },
];

export default PlanetsData;
