export const column = [
    { label: "Kelas", accessor: "kelas", sortable: true },
    { label: "Jurusan", accessor: "jurusan.jurusan", sortable: true },
    { label: "Jumlah Siswa", accessor: "jumlah_siswa", sortable: true },
    { label: "Wali Kelas", accessor: "wali_kelas", sortable: true },
    { label: "Tanggal", accessor: "created_at", sortable: true },
];

export const columnjurusan = [
    {label: "jurusan", accessor:"jurusan", sortable: true}
]


export const kelas = [
    { id:1, kelas:10, jurusan:"Teknik Komputer Dan Jaringan", jumlah_siswa:36, wali_kelas:"Arief Santoso, S.Pd."  },
    { id:2, kelas:10, jurusan:"Otomatisasi dan Tata Kelola Perkantoran", jumlah_siswa:35, wali_kelas:"Dian Rahmawati, M.Pd."  },
    { id:3, kelas:10, jurusan:"Teknik Sepeda Motor ", jumlah_siswa:37, wali_kelas:"Anita Wijayanti, M.Pd."  },
    { id:4, kelas:10, jurusan:"Rekayasa Perangkat Lunak", jumlah_siswa:37, wali_kelas:"Joko Pramono, S.Pd."  },
    { id: 5, kelas: 11, jurusan: "Teknik Komputer & Jaringan", jumlah_siswa: 38, wali_kelas: "Ratna Kumala Sari, M.Pd." },
    { id: 6, kelas: 11, jurusan: "Otomatisasi dan Tata Kelola Perkantoran", jumlah_siswa: 36, wali_kelas: "Surya Pratama, S.Pd." },
    { id: 7, kelas: 11, jurusan: "Teknik Sepeda Motor ", jumlah_siswa: 40, wali_kelas: "Tri Wahyuningsih, M.Pd." },
    { id: 8, kelas: 11, jurusan: "Rekayasa Perangkat Lunak", jumlah_siswa: 39, wali_kelas: "Budi Santoso, S.Pd." },
    { id: 9, kelas: 12, jurusan: "Teknik Komputer & Jaringan", jumlah_siswa: 40, wali_kelas: "Yuliarti, M.Pd." },
    { id: 10, kelas: 12, jurusan: "Otomatisasi dan Tata Kelola Perkantoran", jumlah_siswa: 38, wali_kelas: "Eko Setiawan, S.Pd." },
    { id: 11, kelas: 12, jurusan: "Teknik Sepeda Motor ", jumlah_siswa: 41, wali_kelas: "Dewi Kusumawati, M.Pd." },
    { id: 12, kelas: 12, jurusan: "Rekayasa Perangkat Lunak", jumlah_siswa: 42, wali_kelas: "Ahmad Rizki, S.Pd." }
]

export const dataselect = [
    {id: 1, label: "Tutorial React Js"},
    {id: 2, label: "Tutorial Inertia"},
    {id: 3, label: "Tutorial Javascript"},
    {id: 4, label: "Tutorial Laravel"},
    {id: 5, label: "Tutorial PHP"},
]

export const limitTable = [
    {id: 10, label: 10},
    {id: 15, label: 15},
    {id: 20, label: 20},
    {id: 50, label: 50}
]