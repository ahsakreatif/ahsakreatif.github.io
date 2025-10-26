// Simple i18n system for bilingual support
export type Language = 'en' | 'id';

export const languages: Language[] = ['en', 'id'];

// Language detection from URL or localStorage
export function getLanguage(): Language {
	if (typeof window !== 'undefined') {
		// Check URL path
		const path = window.location.pathname;
		if (path.startsWith('/id')) return 'id';
		if (path.startsWith('/en')) return 'en';
		
		// Check localStorage
		const stored = localStorage.getItem('language') as Language;
		if (stored && languages.includes(stored)) return stored;
		
		// Check browser language
		const browserLang = navigator.language.split('-')[0];
		if (browserLang === 'id') return 'id';
	}
	
	return 'en'; // Default to English
}

// Store language preference
export function setLanguage(lang: Language) {
	if (typeof window !== 'undefined') {
		localStorage.setItem('language', lang);
		// Redirect to language-specific URL
		const currentPath = window.location.pathname;
		const newPath = currentPath.startsWith('/en') || currentPath.startsWith('/id') 
			? currentPath.replace(/^\/(en|id)/, `/${lang}`)
			: `/${lang}`;
		window.location.href = newPath;
	}
}

// Translation function
export function t(key: string, lang: Language = getLanguage()): string {
	const translations = getTranslations(lang);
	return translations[key] || key;
}

// Get all translations for a language
function getTranslations(lang: Language) {
	return lang === 'id' ? indonesianTranslations : englishTranslations;
}

// English translations (default content)
const englishTranslations: Record<string, string> = {
	// Navigation
	'nav.home': 'Home',
	'nav.services': 'Services',
	'nav.portfolio': 'Portfolio',
	'nav.about': 'About',
	'nav.pricing': 'Pricing',
	'nav.blog': 'Blog',
	'nav.contact': 'Contact',
	
	// Hero section
	'hero.badge': 'Innovative IT Solutions',
	'hero.cta.secondary': 'View Our Work',
	'hero.stats.experience': 'Years Experience',
	'hero.stats.projects': 'Projects Completed',
	'hero.stats.technologies': 'Technologies',
	'hero.stats.satisfaction': 'Client Satisfaction',
	'hero.scroll': 'Scroll to explore',
	
	// Services
	'services.title': 'Our Services',
	'services.subtitle': 'Comprehensive IT solutions tailored to your business needs',
	'services.technologies.title': 'Technologies We Master',
	
	// Why Us
	'whyus.title': 'Why Choose AHSA Kreatif?',
	
	// Pricing
	'pricing.title': 'Choose the Right Package for Your Business',
	'pricing.subtitle': 'Complete solutions for your website and business system needs',
	'pricing.order': 'Order Now',
	'pricing.consult': 'Consult Now',
	
	// Contact
	'contact.title': 'Get In Touch',
	'contact.subtitle': 'Ready to start your project? Let\'s discuss your needs.',
	
	// Footer
	'footer.rights': 'All rights reserved.',
	'footer.description': 'Leading IT solution provider specializing in full-stack development, cloud infrastructure, and AI-powered applications.',
};

// Indonesian translations
const indonesianTranslations: Record<string, string> = {
	// Navigation
	'nav.home': 'Beranda',
	'nav.services': 'Layanan',
	'nav.portfolio': 'Portfolio',
	'nav.about': 'Tentang',
	'nav.pricing': 'Harga',
	'nav.blog': 'Blog',
	'nav.contact': 'Kontak',
	
	// Hero section
	'hero.badge': 'Solusi IT Inovatif',
	'hero.cta.secondary': 'Lihat Karya Kami',
	'hero.stats.experience': 'Tahun Pengalaman',
	'hero.stats.projects': 'Proyek Selesai',
	'hero.stats.technologies': 'Teknologi',
	'hero.stats.satisfaction': 'Kepuasan Klien',
	'hero.scroll': 'Scroll untuk menjelajahi',
	
	// Services
	'services.title': 'Layanan Kami',
	'services.subtitle': 'Solusi IT komprehensif yang disesuaikan dengan kebutuhan bisnis Anda',
	'services.technologies.title': 'Teknologi yang Kami Kuasai',
	
	// Why Us
	'whyus.title': 'Mengapa Memilih AHSA Kreatif?',
	
	// Pricing
	'pricing.title': 'Pilih Paket yang Tepat untuk Bisnis Anda',
	'pricing.subtitle': 'Solusi lengkap untuk kebutuhan website dan sistem bisnis Anda',
	'pricing.order': 'Pesan Sekarang',
	'pricing.consult': 'Konsultasi Sekarang',
	
	// Contact
	'contact.title': 'Hubungi Kami',
	'contact.subtitle': 'Siap memulai proyek Anda? Mari diskusikan kebutuhan Anda.',
	
	// Footer
	'footer.rights': 'Semua hak dilindungi.',
	'footer.description': 'Penyedia solusi IT terdepan yang mengkhususkan diri dalam pengembangan full-stack, infrastruktur cloud, dan aplikasi berbasis AI.',
};
