// Company profile data for AHSA Kreatif
export interface Service {
	id: string;
	name: string;
	description: string;
	icon: string;
	features: string[];
	technologies: string[];
}

export interface PortfolioItem {
	id: string;
	title: string;
	description: string;
	image: string;
	technologies: string[];
	category: string;
	achievements: string[];
	client?: string;
}

export interface TeamMember {
	name: string;
	role: string;
	expertise: string[];
	experience: string;
	achievements: string[];
}

export interface BlogPost {
	id: string;
	title: string;
	excerpt: string;
	date: string;
	author: string;
	readTime: string;
	image: string;
	category: string;
}

export interface Client {
	id: string;
	name: string;
	logo: string;
	website?: string;
	category: string;
}

export interface PricingFeature {
	name: string;
	included: boolean;
}

export interface PricingPlan {
	id: string;
	name: string;
	price: {
		original?: string;
		current: string;
		period: string;
	};
	description: string;
	features: PricingFeature[];
	ctaText: string;
	ctaAction: string;
	popular?: boolean;
}

export interface CompanyData {
	name: string;
	tagline: string;
	description: string;
	domain: string;
	logo: string;
	hero: {
		title: string;
		subtitle: string;
		description: string;
		ctaText: string;
		backgroundImage: string;
	};
	services: Service[];
	technologies: {
		category: string;
		items: string[];
	}[];
	portfolio: PortfolioItem[];
	whyUs: {
		title: string;
		points: {
			title: string;
			description: string;
			icon: string;
		}[];
		stats: {
			label: string;
			value: string;
		}[];
	};
	team: TeamMember[];
	blog: BlogPost[];
	clients: Client[];
	pricing: {
		title: string;
		subtitle: string;
		plans: PricingPlan[];
	};
	contact: {
		email: string;
		phone: string;
		address: string;
		officeHours: string;
		social: {
			linkedin: string;
			github: string;
			instagram: string;
		};
	};
}

export const companyData: CompanyData = {
	name: 'AHSA Kreatif',
	tagline: 'Innovative IT Solutions & Digital Transformation',
	description: 'Leading IT solution provider specializing in full-stack development, cloud infrastructure, and AI-powered applications. We deliver scalable, high-performance solutions that drive business growth.',
	domain: 'ahsakreatif.com',
	logo: '/logo.svg',
	
	hero: {
		title: 'Transform Your Business with Smart Technology Solutions',
		subtitle: 'Custom Websites • Cloud Hosting • Smart Automation • Business Consulting',
		description: 'We help businesses grow with custom websites, reliable hosting, and smart automation tools. Our experienced team brings 9+ years of proven expertise to make your business more efficient and profitable.',
		ctaText: 'Get Started Today',
		backgroundImage: '/hero-bg.jpg'
	},

	services: [
		{
			id: 'fullstack',
			name: 'Custom Web Applications',
			description: 'Complete website and web application development from design to deployment, tailored to your business needs.',
			icon: '💻',
			features: [
				'Custom Business Websites',
				'Online Business Systems',
				'Data Management Solutions',
				'Fast & Reliable Performance',
				'Mobile-Friendly Design'
			],
			technologies: ['PHP/Laravel', 'Svelte', 'Vue.js', 'Golang', 'Node.js', 'REST APIs']
		},
		{
			id: 'cloud',
			name: 'Cloud & Hosting Solutions',
			description: 'Reliable, secure, and cost-effective hosting solutions that grow with your business.',
			icon: '☁️',
			features: [
				'Website Hosting & Migration',
				'Automatic Backups & Updates',
				'24/7 Monitoring & Support',
				'Enhanced Security Protection',
				'Cost-Effective Scaling'
			],
			technologies: ['Google Cloud Platform', 'Azure', 'Docker', 'CI/CD', 'DevOps']
		},
		{
			id: 'ai',
			name: 'Smart Business Solutions',
			description: 'Intelligent automation and data analysis tools that help your business work smarter, not harder.',
			icon: '🤖',
			features: [
				'Automated Data Processing',
				'Smart Document Analysis',
				'Predictive Business Insights',
				'Intelligent Customer Support',
				'Workflow Automation'
			],
			technologies: ['TensorFlow', 'OpenNLP', 'Python', 'Machine Learning', 'AI Development']
		},
		{
			id: 'consulting',
			name: 'Business Technology Consulting',
			description: 'Strategic advice and guidance to help you choose the right technology solutions for your business goals.',
			icon: '🎯',
			features: [
				'Technology Planning & Strategy',
				'System Design & Architecture',
				'Quality Assurance & Testing',
				'Team Training & Development',
				'Process Improvement'
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
			title: 'Multi-Client Website Management System',
			description: 'A powerful website management system that allows multiple businesses to easily update their websites without technical knowledge.',
			image: '/portfolio/cms-platform.jpg',
			technologies: ['FilamentPHP', 'Laravel', 'MySQL', 'Docker'],
			category: 'Business Solutions',
			achievements: [
				'20+ businesses using the system',
				'Easy to use interface',
				'Multiple business support',
				'Handles high traffic'
			],
			client: 'Various Industries'
		},
		{
			id: 'ai-resume-analyzer',
			title: 'Smart Resume Screening System',
			description: 'An intelligent system that automatically reads and analyzes job applications, helping HR teams find the best candidates faster.',
			image: '/portfolio/ai-analyzer.jpg',
			technologies: ['Golang', 'Python', 'OpenNLP', 'Machine Learning'],
			category: 'Smart Business Tools',
			achievements: [
				'Faster candidate screening',
				'Reduced manual work by 70%',
				'More accurate candidate matching',
				'95% accuracy in screening'
			]
		},
		{
			id: 'fintech-payment',
			title: 'Digital Payment & E-Money System',
			description: 'A secure online payment system that processes millions of transactions safely, connecting with multiple banks for easy money transfers.',
			image: '/portfolio/payment-system.jpg',
			technologies: ['Lumen PHP', 'Angular', 'REST APIs', 'Payment Gateways'],
			category: 'Financial Solutions',
			achievements: [
				'IDR100M+ monthly transactions',
				'Connected to multiple banks',
				'99.9% system reliability',
				'Bank-level security'
			]
		},
		{
			id: 'education-lms',
			title: 'Online Learning Management System',
			description: 'A complete online learning platform that helps schools and teachers manage courses, assignments, and student progress digitally.',
			image: '/portfolio/lms-platform.jpg',
			technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'GCP'],
			category: 'Education Solutions',
			achievements: [
				'Thousands of students using it',
				'95% user satisfaction rate',
				'Government-approved system',
				'Handles large numbers of users'
			]
		},
		{
			id: 'ml-classification',
			title: 'Smart Image Recognition System',
			description: 'An intelligent system that can automatically identify and categorize images, helping businesses organize and process visual content.',
			image: '/portfolio/ml-models.jpg',
			technologies: ['Python', 'TensorFlow', 'Machine Learning', 'Custom Models'],
			category: 'Smart Business Tools',
			achievements: [
				'8 different recognition types',
				'95% accuracy in identification',
				'Works with various image types',
				'Ready for business use'
			]
		},
		{
			id: 'recruitment-system',
			title: 'Smart Hiring Management System',
			description: 'An easy-to-use system that helps HR teams organize job applications, schedule interviews, and track candidates throughout the hiring process.',
			image: '/portfolio/recruitment-system.jpg',
			technologies: ['SvelteKit', 'Laravel', 'MySQL', 'REST APIs'],
			category: 'HR Solutions',
			achievements: [
				'Simplified hiring process',
				'Manages hundreds of applications',
				'HR team works 50% faster',
				'Intuitive user interface'
			]
		}
	],

	whyUs: {
		title: 'Why Choose AHSA Kreatif?',
		points: [
			{
				title: '9+ Years of Team Experience',
				description: 'Our experienced team has successfully helped businesses in finance, education, and technology sectors grow and succeed.',
				icon: '🏆'
			},
			{
				title: 'Smart Development Process',
				description: 'We use advanced tools and smart processes that help us deliver your project 30% faster without compromising quality.',
				icon: '🚀'
			},
			{
				title: 'Reliable & Scalable Solutions',
				description: 'We build websites and systems that can handle thousands of visitors without slowing down or crashing.',
				icon: '⚡'
			},
			{
				title: 'Complete Business Solutions',
				description: 'We handle everything from website design to hosting, from simple websites to complex business systems.',
				icon: '🔧'
			},
			{
				title: 'Quality Guarantee',
				description: 'We thoroughly test everything we build to ensure it works perfectly and won\'t break down.',
				icon: '✅'
			},
			{
				title: 'Organized Project Management',
				description: 'We use proven project management methods to keep you updated weekly and deliver on time.',
				icon: '📋'
			}
		],
		stats: [
			{ label: 'Team Experience', value: '9+ years' },
			{ label: 'Projects Completed', value: '25+' },
			{ label: 'Technologies Mastered', value: '15+' },
			{ label: 'Teams Led', value: '4+' }
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
			title: 'How Smart Tools Help Us Build Better Websites 30% Faster',
			excerpt: 'Learn how we use smart technology tools to create better websites and deliver them faster to our clients.',
			date: '2024-01-15',
			author: 'Riva\'i Amin',
			readTime: '5 min read',
			image: '/blog/ai-development.jpg',
			category: 'Smart Technology'
		},
		{
			id: 'scalable-architecture',
			title: 'Building Websites That Can Handle Thousands of Visitors',
			excerpt: 'Learn how we build websites that stay fast and reliable even when thousands of people visit them at the same time.',
			date: '2024-01-10',
			author: 'Riva\'i Amin',
			readTime: '7 min read',
			image: '/blog/scalable-architecture.jpg',
			category: 'Website Performance'
		},
		{
			id: 'cloud-migration-guide',
			title: 'Complete Guide to Moving Your Business to the Cloud',
			excerpt: 'Step-by-step guide to moving your business systems to the cloud safely while keeping everything fast and secure.',
			date: '2024-01-05',
			author: 'Riva\'i Amin',
			readTime: '10 min read',
			image: '/blog/cloud-migration.jpg',
			category: 'Cloud Solutions'
		},
		{
			id: 'team-leadership',
			title: 'How to Lead Development Teams Successfully',
			excerpt: 'Learn the best practices for managing development teams and delivering projects on time with high quality.',
			date: '2024-01-10',
			author: 'Riva\'i Amin',
			readTime: '7 min read',
			image: '/blog/team-leadership.jpg',
			category: 'Team Management'
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
		title: 'Choose the Right Package for Your Business',
		subtitle: 'Complete solutions for your website and business system needs',
		plans: [
			{
				id: 'basic',
				name: 'Basic',
				price: {
					original: 'IDR 1,5 Juta',
					current: 'IDR 500 Ribu',
					period: '/Tahun'
				},
				description: 'Perfect for starting a business and market testing',
				features: [
					{ name: 'Free Hosting & Domain', included: true },
					{ name: 'Responsive Design', included: true },
					{ name: 'SEO Friendly', included: true },
					{ name: 'Google Analytics', included: true },
					{ name: 'Exclusive Image Assets', included: true },
					{ name: 'Contact Form', included: true },
					{ name: 'Latest Technology', included: true },
					{ name: 'Animation', included: true },
					{ name: '5 Components / Page', included: true },
					{ name: 'Custom Design', included: false },
					{ name: 'Mobile Ready', included: false },
					{ name: 'Content Management', included: false },
					{ name: 'Feature Requests', included: false }
				],
				ctaText: 'Order Now',
				ctaAction: 'order-basic'
			},
			{
				id: 'pro',
				name: 'Pro',
				price: {
					original: 'IDR 2,5 Juta',
					current: 'IDR 2 Juta',
					period: '/Year'
				},
				description: 'For those who want to improve their branding and business reach',
				features: [
					{ name: 'Free Hosting & Domain', included: true },
					{ name: 'Responsive Design', included: true },
					{ name: 'SEO Friendly', included: true },
					{ name: 'Google Analytics', included: true },
					{ name: 'Exclusive Image Assets', included: true },
					{ name: 'Contact Form', included: true },
					{ name: 'Latest Technology', included: true },
					{ name: 'Animation', included: true },
					{ name: '10 Components / Page', included: true },
					{ name: 'Custom Design', included: true },
					{ name: 'Content Management', included: true },
					{ name: 'Mobile Ready', included: false },
					{ name: 'Feature Requests', included: false }
				],
				ctaText: 'Order Now',
				ctaAction: 'order-pro',
				popular: true
			},
			{
				id: 'enterprise',
				name: 'Enterprise',
				price: {
					current: 'Starting from IDR 4 Juta',
					period: ''
				},
				description: 'For your unique business idea',
				features: [
					{ name: 'Free Hosting & Domain', included: true },
					{ name: 'Responsive Design', included: true },
					{ name: 'SEO Friendly', included: true },
					{ name: 'Google Analytics', included: true },
					{ name: 'Exclusive Image Assets', included: true },
					{ name: 'Contact Form', included: true },
					{ name: 'Latest Technology', included: true },
					{ name: 'Animation', included: true },
					{ name: '10+ Components / Page', included: true },
					{ name: 'Custom Design', included: true },
					{ name: 'Mobile Ready', included: true },
					{ name: 'Content Management', included: true },
					{ name: 'Feature Requests', included: true }
				],
				ctaText: 'Consult Now',
				ctaAction: 'consult-enterprise'
			}
		]
	},

	contact: {
		email: 'hello@ahsakreatif.com',
		phone: '+62 858 1414 0079',
		address: 'Tangerang / Bogor, Indonesia',
		officeHours: 'Monday - Friday: 9:00 AM - 6:00 PM',
		social: {
			linkedin: 'https://linkedin.com/in/rivaiamin',
			github: 'https://github.com/rivaiamin',
			instagram: 'https://instagram.com/rivaiamin.tva'
		}
	}
};
