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
		title: 'Transform Your Business with Cutting-Edge Technology',
		subtitle: 'Full-Stack Development • Cloud Solutions • AI Integration',
		description: 'We deliver innovative IT solutions that scale with your business. From enterprise applications to AI-powered systems, we bring 9+ years of expertise to every project.',
		ctaText: 'Get Started Today',
		backgroundImage: '/hero-bg.jpg'
	},

	services: [
		{
			id: 'fullstack',
			name: 'Full-Stack Development',
			description: 'End-to-end web application development using modern technologies and best practices.',
			icon: '💻',
			features: [
				'Custom Web Applications',
				'API Development & Integration',
				'Database Design & Optimization',
				'Performance Optimization',
				'Mobile-Responsive Design'
			],
			technologies: ['PHP/Laravel', 'Svelte', 'Vue.js', 'Golang', 'Node.js', 'REST APIs']
		},
		{
			id: 'cloud',
			name: 'Cloud Infrastructure',
			description: 'Scalable cloud solutions and DevOps implementations for modern businesses.',
			icon: '☁️',
			features: [
				'Cloud Migration',
				'Infrastructure Automation',
				'CI/CD Pipeline Setup',
				'Monitoring & Security',
				'Cost Optimization'
			],
			technologies: ['Google Cloud Platform', 'Azure', 'Docker', 'CI/CD', 'DevOps']
		},
		{
			id: 'ai',
			name: 'AI & Machine Learning',
			description: 'Intelligent solutions powered by AI and machine learning technologies.',
			icon: '🤖',
			features: [
				'Custom ML Models',
				'Natural Language Processing',
				'Image Classification',
				'Predictive Analytics',
				'AI Integration'
			],
			technologies: ['TensorFlow', 'OpenNLP', 'Python', 'Machine Learning', 'AI Development']
		},
		{
			id: 'consulting',
			name: 'Technical Consulting',
			description: 'Expert guidance on technology strategy, architecture, and team leadership.',
			icon: '🎯',
			features: [
				'Technology Strategy',
				'Architecture Design',
				'Code Review & Quality',
				'Team Mentoring',
				'Process Optimization'
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
			title: 'Enterprise Multi-Tenancy CMS Platform',
			description: 'Scalable content management system serving multiple clients across various industries with modular architecture.',
			image: '/portfolio/cms-platform.jpg',
			technologies: ['FilamentPHP', 'Laravel', 'MySQL', 'Docker'],
			category: 'Enterprise Solutions',
			achievements: [
				'20+ client deployments',
				'Modular architecture',
				'Multi-tenant support',
				'High scalability'
			],
			client: 'Various Industries'
		},
		{
			id: 'ai-resume-analyzer',
			title: 'AI-Powered Resume Analyzer',
			description: 'Intelligent resume parsing and analysis system using NLP to improve hiring efficiency.',
			image: '/portfolio/ai-analyzer.jpg',
			technologies: ['Golang', 'Python', 'OpenNLP', 'Machine Learning'],
			category: 'AI Solutions',
			achievements: [
				'Improved parsing accuracy',
				'Reduced manual screening time',
				'NLP pipeline optimization',
				'High accuracy rates'
			]
		},
		{
			id: 'fintech-payment',
			title: 'E-Money & Payment Processing System',
			description: 'High-volume payment processing system handling millions of transactions with multiple bank integrations.',
			image: '/portfolio/payment-system.jpg',
			technologies: ['Lumen PHP', 'Angular', 'REST APIs', 'Payment Gateways'],
			category: 'Fintech Solutions',
			achievements: [
				'IDR100M+ monthly transactions',
				'Multiple bank integrations',
				'99.9% uptime',
				'Secure processing'
			]
		},
		{
			id: 'education-lms',
			title: 'Academic LMS Platform',
			description: 'Comprehensive learning management system serving thousands of students and teachers.',
			image: '/portfolio/lms-platform.jpg',
			technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'GCP'],
			category: 'Education Technology',
			achievements: [
				'Thousands of users',
				'High user satisfaction',
				'Government integration',
				'Scalable architecture'
			]
		},
		{
			id: 'ml-classification',
			title: 'Image Classification ML Models',
			description: 'Custom machine learning models for diverse image classification tasks with high accuracy.',
			image: '/portfolio/ml-models.jpg',
			technologies: ['Python', 'TensorFlow', 'Machine Learning', 'Custom Models'],
			category: 'AI Solutions',
			achievements: [
				'8 custom models',
				'High accuracy rates',
				'Diverse classification tasks',
				'Production-ready'
			]
		},
		{
			id: 'recruitment-system',
			title: 'Recruitment Management System',
			description: 'Streamlined hiring workflow system for HR teams managing hundreds of applicants.',
			image: '/portfolio/recruitment-system.jpg',
			technologies: ['SvelteKit', 'Laravel', 'MySQL', 'REST APIs'],
			category: 'HR Solutions',
			achievements: [
				'Streamlined workflow',
				'Hundreds of applicants',
				'HR team optimization',
				'User-friendly interface'
			]
		}
	],

	whyUs: {
		title: 'Why Choose AHSA Kreatif?',
		points: [
			{
				title: '9+ Years of Experience',
				description: 'Proven track record delivering high-impact solutions across fintech, education, and AI sectors.',
				icon: '🏆'
			},
			{
				title: 'AI-Assisted Development',
				description: 'Pioneering AI-assisted development workflows that boost productivity by up to 30%.',
				icon: '🚀'
			},
			{
				title: 'Scalable Architecture',
				description: 'Expertise in building systems that handle thousands of concurrent users with zero downtime.',
				icon: '⚡'
			},
			{
				title: 'Full-Stack Expertise',
				description: 'Complete technology stack coverage from frontend to backend, cloud to AI.',
				icon: '🔧'
			},
			{
				title: 'Quality Assurance',
				description: 'Rigorous code review processes and quality standards ensuring maintainable, stable code.',
				icon: '✅'
			},
			{
				title: 'Agile Methodology',
				description: 'Proven Agile/Scrum implementation with weekly sprints and on-time delivery.',
				icon: '📋'
			}
		],
		stats: [
			{ label: 'Years Experience', value: '9+' },
			{ label: 'Projects Completed', value: '25+' },
			{ label: 'Technologies Mastered', value: '15+' },
			{ label: 'Teams Led', value: '4+' }
		]
	},

	team: [
		{
			name: 'Riva\'i Amin',
			role: 'Founder & Lead Engineer',
			expertise: ['Full-Stack Development', 'Cloud Architecture', 'AI/ML', 'Team Leadership'],
			experience: '9+ years',
			achievements: [
				'VP of Engineering at AIMSIS',
				'Led teams of 5+ engineers',
				'Reduced bugs by 40%',
				'Increased delivery velocity by 35%',
				'LKS Web Design Competition Winner'
			]
		}
	],

	blog: [
		{
			id: 'ai-development-workflow',
			title: 'How AI-Assisted Development Boosts Productivity by 30%',
			excerpt: 'Discover how integrating AI tools into your development workflow can significantly improve code quality and delivery speed.',
			date: '2024-01-15',
			author: 'Riva\'i Amin',
			readTime: '5 min read',
			image: '/blog/ai-development.jpg',
			category: 'AI & Development'
		},
		{
			id: 'scalable-architecture',
			title: 'Building Scalable Web Applications: Best Practices',
			excerpt: 'Learn the key principles and technologies for creating web applications that can handle thousands of concurrent users.',
			date: '2024-01-10',
			author: 'Riva\'i Amin',
			readTime: '7 min read',
			image: '/blog/scalable-architecture.jpg',
			category: 'Architecture'
		},
		{
			id: 'cloud-migration-guide',
			title: 'Complete Guide to Cloud Migration for Enterprises',
			excerpt: 'Step-by-step guide to migrating your applications to the cloud while maintaining performance and security.',
			date: '2024-01-05',
			author: 'Riva\'i Amin',
			readTime: '10 min read',
			image: '/blog/cloud-migration.jpg',
			category: 'Cloud & DevOps'
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
