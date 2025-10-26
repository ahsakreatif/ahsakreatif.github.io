// Indonesian translations for company data
export const companyDataId = {
	name: 'AHSA Kreatif',
	tagline: 'Solusi IT Inovatif & Transformasi Digital',
	description: 'Penyedia solusi IT terdepan yang mengkhususkan diri dalam pengembangan full-stack, infrastruktur cloud, dan aplikasi berbasis AI. Kami memberikan solusi yang dapat diskalakan dan berkinerja tinggi yang mendorong pertumbuhan bisnis.',
	domain: 'ahsakreatif.com',
	logo: '/logo.svg',
	
	hero: {
		title: 'Transformasikan Bisnis Anda dengan Solusi Teknologi Cerdas',
		subtitle: 'Website Kustom • Hosting Cloud • Otomasi Cerdas • Konsultasi Bisnis',
		description: 'Kami membantu bisnis berkembang dengan website kustom, hosting yang andal, dan alat otomasi cerdas. Tim berpengalaman kami membawa keahlian terbukti 9+ tahun untuk membuat bisnis Anda lebih efisien dan menguntungkan.',
		ctaText: 'Mulai Hari Ini',
		backgroundImage: '/hero-bg.jpg'
	},

	services: [
		{
			id: 'fullstack',
			name: 'Aplikasi Web Kustom',
			description: 'Pengembangan website dan aplikasi web lengkap dari desain hingga deployment, disesuaikan dengan kebutuhan bisnis Anda.',
			icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',
			features: [
				'Website Bisnis Kustom',
				'Sistem Bisnis Online',
				'Solusi Manajemen Data',
				'Performa Cepat & Andal',
				'Desain Mobile-Friendly'
			],
			technologies: ['PHP/Laravel', 'Svelte', 'Vue.js', 'Golang', 'Node.js', 'REST APIs']
		},
		{
			id: 'cloud',
			name: 'Solusi Cloud & Hosting',
			description: 'Solusi hosting yang andal, aman, dan hemat biaya yang berkembang bersama bisnis Anda.',
			icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path></svg>',
			features: [
				'Hosting & Migrasi Website',
				'Backup & Update Otomatis',
				'Monitoring & Support 24/7',
				'Perlindungan Keamanan Tingkat Lanjut',
				'Skalabilitas Hemat Biaya'
			],
			technologies: ['Google Cloud Platform', 'Azure', 'Docker', 'CI/CD', 'DevOps']
		},
		{
			id: 'ai',
			name: 'Solusi Bisnis Cerdas',
			description: 'Alat otomasi cerdas dan analisis data yang membantu bisnis Anda bekerja lebih pintar, bukan lebih keras.',
			icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>',
			features: [
				'Pemrosesan Data Otomatis',
				'Analisis Dokumen Cerdas',
				'Wawasan Bisnis Prediktif',
				'Dukungan Pelanggan Cerdas',
				'Otomasi Workflow'
			],
			technologies: ['TensorFlow', 'OpenNLP', 'Python', 'Machine Learning', 'AI Development']
		},
		{
			id: 'consulting',
			name: 'Konsultasi Teknologi Bisnis',
			description: 'Nasihat strategis dan panduan untuk membantu Anda memilih solusi teknologi yang tepat untuk tujuan bisnis Anda.',
			icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>',
			features: [
				'Perencanaan & Strategi Teknologi',
				'Desain & Arsitektur Sistem',
				'Quality Assurance & Testing',
				'Pelatihan & Pengembangan Tim',
				'Peningkatan Proses'
			],
			technologies: ['Agile/Scrum', 'Code Review', 'Architecture', 'Leadership']
		}
	],

	technologies: [
		{
			category: 'Backend Development',
			items: ['PHP', 'Golang', 'Node.js', 'Python', '.NET', 'Laravel', 'FilamentPHP']
		},
		{
			category: 'Frontend Development',
			items: ['Vue.js', 'Svelte', 'Angular', 'Alpine.js', 'JavaScript', 'TypeScript']
		},
		{
			category: 'Database & Storage',
			items: ['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Redis']
		},
		{
			category: 'Cloud & DevOps',
			items: ['Google Cloud Platform', 'Azure', 'Docker', 'CI/CD', 'Git', 'Azure DevOps']
		},
		{
			category: 'AI & Machine Learning',
			items: ['TensorFlow', 'OpenNLP', 'Python', 'Machine Learning', 'Custom Models']
		}
	],

	portfolio: [
		{
			id: 'enterprise-cms',
			title: 'Sistem Manajemen Website Multi-Klien',
			description: 'Sistem manajemen website yang powerful yang memungkinkan beberapa bisnis dengan mudah memperbarui website mereka tanpa pengetahuan teknis.',
			image: '/portfolio/cms-platform.jpg',
			technologies: ['FilamentPHP', 'Laravel', 'MySQL', 'Docker'],
			category: 'Solusi Bisnis',
			achievements: [
				'20+ bisnis menggunakan sistem',
				'Interface yang mudah digunakan',
				'Dukungan multi-bisnis',
				'Menangani traffic tinggi'
			],
			client: 'Berbagai Industri'
		},
		{
			id: 'ai-resume-analyzer',
			title: 'Sistem Screening CV Cerdas',
			description: 'Sistem cerdas yang secara otomatis membaca dan menganalisis lamaran kerja, membantu tim HR menemukan kandidat terbaik lebih cepat.',
			image: '/portfolio/ai-analyzer.jpg',
			technologies: ['Golang', 'Python', 'OpenNLP', 'Machine Learning'],
			category: 'Alat Bisnis Cerdas',
			achievements: [
				'Screening kandidat lebih cepat',
				'Mengurangi pekerjaan manual 70%',
				'Pencocokan kandidat lebih akurat',
				'Akurasi 95% dalam screening'
			]
		},
		{
			id: 'fintech-payment',
			title: 'Sistem Pembayaran Digital & E-Money',
			description: 'Sistem pembayaran online yang aman yang memproses jutaan transaksi dengan aman, terhubung dengan beberapa bank untuk transfer uang yang mudah.',
			image: '/portfolio/payment-system.jpg',
			technologies: ['Lumen PHP', 'Angular', 'REST APIs', 'Payment Gateways'],
			category: 'Solusi Finansial',
			achievements: [
				'Transaksi bulanan IDR100M+',
				'Terkoneksi dengan beberapa bank',
				'Reliabilitas sistem 99.9%',
				'Keamanan tingkat bank'
			]
		},
		{
			id: 'education-lms',
			title: 'Sistem Manajemen Pembelajaran Online',
			description: 'Platform pembelajaran online lengkap yang membantu sekolah dan guru mengelola kursus, tugas, dan kemajuan siswa secara digital.',
			image: '/portfolio/lms-platform.jpg',
			technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'GCP'],
			category: 'Solusi Pendidikan',
			achievements: [
				'Ribuan siswa menggunakannya',
				'Tingkat kepuasan pengguna 95%',
				'Sistem disetujui pemerintah',
				'Menangani jumlah pengguna besar'
			]
		},
		{
			id: 'ml-classification',
			title: 'Sistem Pengenalan Gambar Cerdas',
			description: 'Sistem cerdas yang dapat secara otomatis mengidentifikasi dan mengkategorikan gambar, membantu bisnis mengorganisir dan memproses konten visual.',
			image: '/portfolio/ml-models.jpg',
			technologies: ['Python', 'TensorFlow', 'Machine Learning', 'Custom Models'],
			category: 'Alat Bisnis Cerdas',
			achievements: [
				'8 jenis pengenalan berbeda',
				'Akurasi 95% dalam identifikasi',
				'Bekerja dengan berbagai jenis gambar',
				'Siap untuk penggunaan bisnis'
			]
		},
		{
			id: 'recruitment-system',
			title: 'Sistem Manajemen Rekrutmen Cerdas',
			description: 'Sistem yang mudah digunakan yang membantu tim HR mengorganisir lamaran kerja, menjadwalkan wawancara, dan melacak kandidat sepanjang proses perekrutan.',
			image: '/portfolio/recruitment-system.jpg',
			technologies: ['SvelteKit', 'Laravel', 'MySQL', 'REST APIs'],
			category: 'Solusi HR',
			achievements: [
				'Proses perekrutan disederhanakan',
				'Mengelola ratusan lamaran',
				'Tim HR bekerja 50% lebih cepat',
				'Interface pengguna yang intuitif'
			]
		}
	],

	whyUs: {
		title: 'Mengapa Memilih AHSA Kreatif?',
		points: [
			{
				title: 'Pengalaman Tim 9+ Tahun',
				description: 'Tim berpengalaman kami telah berhasil membantu bisnis di sektor keuangan, pendidikan, dan teknologi tumbuh dan sukses.',
				icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>'
			},
			{
				title: 'Proses Pengembangan Cerdas',
				description: 'Kami menggunakan alat canggih dan proses cerdas yang membantu kami menyelesaikan proyek Anda 30% lebih cepat tanpa mengorbankan kualitas.',
				icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>'
			},
			{
				title: 'Solusi Andal & Dapat Dikalakan',
				description: 'Kami membangun website dan sistem yang dapat menangani ribuan pengunjung tanpa melambat atau crash.',
				icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
			},
			{
				title: 'Solusi Bisnis Lengkap',
				description: 'Kami menangani segalanya dari desain website hingga hosting, dari website sederhana hingga sistem bisnis kompleks.',
				icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>'
			},
			{
				title: 'Jaminan Kualitas',
				description: 'Kami menguji secara menyeluruh semua yang kami bangun untuk memastikan semuanya berfungsi sempurna dan tidak akan rusak.',
				icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
			},
			{
				title: 'Manajemen Proyek Terorganisir',
				description: 'Kami menggunakan metode manajemen proyek yang terbukti untuk membuat Anda tetap update mingguan dan menyelesaikan tepat waktu.',
				icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>'
			}
		],
		stats: [
			{ label: 'Pengalaman Tim', value: '9+ tahun' },
			{ label: 'Proyek Selesai', value: '25+' },
			{ label: 'Teknologi Dikuasai', value: '15+' },
			{ label: 'Tim Dipimpin', value: '4+' }
		]
	},

	team: [
		{
			name: 'Riva\'i Amin',
			role: 'Founder & Lead Developer',
			expertise: ['Full-Stack Development', 'Cloud Architecture', 'AI/ML', 'Team Leadership'],
			experience: '9+ years',
			achievements: [
				'VP of Engineering at AIMSIS',
				'Led teams of 5+ developers',
				'Reduced system problems by 40%',
				'Delivered projects 35% faster',
				'Web Design Competition Winner'
			]
		}
	],

	blog: [
		{
			id: 'ai-development-workflow',
			title: 'Cara Alat Cerdas Membantu Kami Membangun Website Lebih Baik 30% Lebih Cepat',
			excerpt: 'Pelajari bagaimana kami menggunakan alat teknologi cerdas untuk membuat website yang lebih baik dan mengirimkannya lebih cepat kepada klien kami.',
			date: '2024-01-15',
			author: 'Riva\'i Amin',
			readTime: '5 menit baca',
			image: '/blog/ai-development.jpg',
			category: 'Teknologi Cerdas'
		},
		{
			id: 'scalable-architecture',
			title: 'Membangun Website yang Dapat Menangani Ribuan Pengunjung',
			excerpt: 'Pelajari bagaimana kami membangun website yang tetap cepat dan andal bahkan ketika ribuan orang mengunjunginya pada saat yang bersamaan.',
			date: '2024-01-10',
			author: 'Riva\'i Amin',
			readTime: '7 menit baca',
			image: '/blog/scalable-architecture.jpg',
			category: 'Performa Website'
		},
		{
			id: 'cloud-migration-guide',
			title: 'Panduan Lengkap Memindahkan Bisnis Anda ke Cloud',
			excerpt: 'Panduan langkah demi langkah untuk memindahkan sistem bisnis Anda ke cloud dengan aman sambil menjaga semuanya tetap cepat dan aman.',
			date: '2024-01-05',
			author: 'Riva\'i Amin',
			readTime: '10 menit baca',
			image: '/blog/cloud-migration.jpg',
			category: 'Solusi Cloud'
		},
		{
			id: 'team-leadership',
			title: 'Cara Memimpin Tim Development dengan Sukses',
			excerpt: 'Pelajari praktik terbaik untuk mengelola tim development dan menyelesaikan proyek tepat waktu dengan kualitas tinggi.',
			date: '2024-01-10',
			author: 'Riva\'i Amin',
			readTime: '7 menit baca',
			image: '/blog/team-leadership.jpg',
			category: 'Manajemen Tim'
		}
	],

	clients: [
		{
			id: 'techcorp',
			name: 'TechCorp Solutions',
			logo: 'https://placehold.co/150x80/4F46E5/FFFFFF?text=TechCorp&font=lobster',
			website: 'https://techcorp.com',
			category: 'Technology'
		},
		{
			id: 'fintech-startup',
			name: 'FinTech Startup',
			logo: 'https://placehold.co/150x80/059669/FFFFFF?text=FinTech%2024&font=montserrat',
			website: 'https://fintech-startup.com',
			category: 'Financial Services'
		},
		{
			id: 'edu-platform',
			name: 'EduPlatform',
			logo: 'https://placehold.co/150x80/DC2626/FFFFFF?text=EduPlat&font=caveat',
			website: 'https://eduplatform.com',
			category: 'Education'
		},
		{
			id: 'healthcare-sys',
			name: 'HealthCare Systems',
			logo: 'https://placehold.co/150x80/7C3AED/FFFFFF?text=HealthSys&font=fira',
			website: 'https://healthcare-sys.com',
			category: 'Healthcare'
		},
		{
			id: 'ecommerce-giant',
			name: 'E-Commerce Giant',
			logo: 'https://placehold.co/150x80/EA580C/FFFFFF?text=MarketKing&font=orbitron',
			website: 'https://ecommerce-giant.com',
			category: 'E-Commerce'
		},
		{
			id: 'logistics-pro',
			name: 'Logistics Pro',
			logo: 'https://placehold.co/150x80/0891B2/FFFFFF?text=LogiPro+X&font=raleway',
			website: 'https://logistics-pro.com',
			category: 'Logistics'
		},
		{
			id: 'real-estate',
			name: 'Real Estate Plus',
			logo: 'https://placehold.co/150x80/BE185D/FFFFFF?text=Estate%20Pro&font=pacifico',
			website: 'https://realestate-plus.com',
			category: 'Real Estate'
		},
		{
			id: 'media-agency',
			name: 'Media Agency',
			logo: 'https://placehold.co/150x80/65A30D/FFFFFF?text=Media9&font=fredokaone',
			website: 'https://media-agency.com',
			category: 'Media & Marketing'
		}
	],

	pricing: {
		title: 'Pilih Paket yang Tepat untuk Bisnis Anda',
		subtitle: 'Solusi lengkap untuk kebutuhan website dan sistem bisnis Anda',
		plans: [
			{
				id: 'basic',
				name: 'Basic',
				price: {
					original: 'IDR 1,5 Juta',
					current: 'IDR 500 Ribu',
					period: '/Tahun'
				},
				description: 'Sempurna untuk memulai bisnis dan uji pasar',
				features: [
					{ name: 'Hosting & Domain Gratis', included: true },
					{ name: 'Desain Responsif', included: true },
					{ name: 'SEO Friendly', included: true },
					{ name: 'Google Analytics', included: true },
					{ name: 'Aset Gambar Eksklusif', included: true },
					{ name: 'Form Kontak', included: true },
					{ name: 'Teknologi Terbaru', included: true },
					{ name: 'Animasi', included: true },
					{ name: '5 Komponen / Halaman', included: true },
					{ name: 'Desain Kustom', included: false },
					{ name: 'Mobile Ready', included: false },
					{ name: 'Manajemen Konten', included: false },
					{ name: 'Permintaan Fitur', included: false }
				],
				ctaText: 'Pesan Sekarang',
				ctaAction: 'order-basic'
			},
			{
				id: 'pro',
				name: 'Pro',
				price: {
					original: 'IDR 2,5 Juta',
					current: 'IDR 2 Juta',
					period: '/Tahun'
				},
				description: 'Untuk mereka yang ingin meningkatkan branding dan jangkauan bisnis',
				features: [
					{ name: 'Hosting & Domain Gratis', included: true },
					{ name: 'Desain Responsif', included: true },
					{ name: 'SEO Friendly', included: true },
					{ name: 'Google Analytics', included: true },
					{ name: 'Aset Gambar Eksklusif', included: true },
					{ name: 'Form Kontak', included: true },
					{ name: 'Teknologi Terbaru', included: true },
					{ name: 'Animasi', included: true },
					{ name: '10 Komponen / Halaman', included: true },
					{ name: 'Desain Kustom', included: true },
					{ name: 'Manajemen Konten', included: true },
					{ name: 'Mobile Ready', included: false },
					{ name: 'Permintaan Fitur', included: false }
				],
				ctaText: 'Pesan Sekarang',
				ctaAction: 'order-pro',
				popular: true
			},
			{
				id: 'enterprise',
				name: 'Enterprise',
				price: {
					current: 'Mulai dari IDR 4 Juta',
					period: ''
				},
				description: 'Untuk ide bisnis unik Anda',
				features: [
					{ name: 'Hosting & Domain Gratis', included: true },
					{ name: 'Desain Responsif', included: true },
					{ name: 'SEO Friendly', included: true },
					{ name: 'Google Analytics', included: true },
					{ name: 'Aset Gambar Eksklusif', included: true },
					{ name: 'Form Kontak', included: true },
					{ name: 'Teknologi Terbaru', included: true },
					{ name: 'Animasi', included: true },
					{ name: '10+ Komponen / Halaman', included: true },
					{ name: 'Desain Kustom', included: true },
					{ name: 'Mobile Ready', included: true },
					{ name: 'Manajemen Konten', included: true },
					{ name: 'Permintaan Fitur', included: true }
				],
				ctaText: 'Konsultasi Sekarang',
				ctaAction: 'consult-enterprise'
			}
		]
	},

	contact: {
		email: 'hello@ahsakreatif.com',
		phone: '+62 858 1414 0079',
		address: 'Tangerang / Bogor, Indonesia',
		officeHours: 'Senin - Jumat: 09:00 - 18:00',
		social: {
			linkedin: 'https://linkedin.com/in/rivaiamin',
			github: 'https://github.com/rivaiamin',
			instagram: 'https://instagram.com/rivaiamin.tva'
		}
	}
};
