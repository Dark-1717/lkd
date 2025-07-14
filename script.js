// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const langButtons = document.querySelectorAll('.lang-btn');

// Translation data
const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-packages': 'Packages',
        'nav-vehicles': 'Vehicles',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title-1': 'Discover Sri Lanka',
        'hero-title-2': 'With LKD Travels',
        'hero-description': 'Experience the beauty of Sri Lanka with our expertly crafted 7-day highlights itinerary. From ancient forts to pristine beaches, we\'ll take you on an unforgettable journey.',
        'btn-view-packages': 'View Packages',
        'btn-contact-us': 'Contact Us',
        
        // Packages Section
        'packages-title': '7-Day Sri Lanka Highlights Itinerary',
        'day-1-title': 'Day 1: Arrival in Sri Lanka',
        'day-1-item-1': 'Arrive at Bandaranaike International Airport (CMB)',
        'day-1-item-2': 'Transfer to Negombo coastal town',
        'day-1-item-3': 'Check-in at hotel',
        'day-1-item-4': 'Evening at leisure with optional beach walk',
        
        'day-2-title': 'Day 2: Sigiriya & Dambulla',
        'day-2-item-1': 'Early departure from Negombo',
        'day-2-item-2': 'Climb Sigiriya Rock Fortress',
        'day-2-item-3': 'Visit Dambulla Cave Temple',
        'day-2-item-4': 'Overnight in Dambulla',
        
        'day-3-title': 'Day 3: Kandy & Peradeniya',
        'day-3-item-1': 'Travel to Kandy (2.5 hours)',
        'day-3-item-2': 'Visit Temple of the Tooth',
        'day-3-item-3': 'Explore Royal Botanic Gardens',
        'day-3-item-4': 'Visit Sandagiri Maha Seya',
        
        'day-4-title': 'Day 4: Nuwara Eliya',
        'day-4-item-1': 'Visit Ramayana-linked sites',
        'day-4-item-2': 'Seetha Amman Temple',
        'day-4-item-3': 'Tea estate and factory tour',
        'day-4-item-4': 'Gregory Lake stroll',
        
        'day-5-title': 'Day 5: Ella & Southern Coast',
        'day-5-item-1': 'Ravana Falls stop',
        'day-5-item-2': 'Nine Arches Bridge',
        'day-5-item-3': 'Ravana Cave history',
        'day-5-item-4': 'Arrive at Weligama/Mirissa',
        
        'day-6-title': 'Day 6: Southern Beaches',
        'day-6-item-1': 'Weligama Beach relaxation',
        'day-6-item-2': 'Mirissa Beach exploration',
        'day-6-item-3': 'Sunset over Indian Ocean',
        'day-6-item-4': 'Rumassala legend',
        
        'day-7-title': 'Day 7: Departure',
        'day-7-item-1': 'Visit Kelaniya Temple',
        'day-7-item-2': 'Vibhishan\'s Palace',
        'day-7-item-3': 'Transfer to airport',
        'day-7-item-4': 'Farewell to Sri Lanka',
        
        // Vehicles Section
        'vehicles-title': 'Our Premium Vehicles',
        'toyota-axio-desc': 'Comfortable sedan perfect for small groups and families',
        'toyota-premio-desc': 'Premium sedan with extra comfort and space',
        'toyota-kdh-desc': 'Spacious van ideal for larger groups and families',
        
        // About Section
        'about-title': 'About LKD Travels',
        'about-text-1': 'We are a premier Sri Lanka travel agency dedicated to providing exceptional travel experiences. Our team of experienced guides and drivers ensure your journey through this beautiful island nation is safe, comfortable, and unforgettable.',
        'about-text-2': 'With our carefully crafted itineraries and premium vehicles, we take you to the most iconic destinations while sharing the rich history and culture of Sri Lanka.',
        
        // Contact Section
        'contact-title': 'Contact Us',
        'contact-subtitle': 'Get in Touch',
        'contact-expert': 'Your Travel Expert',
        'contact-phone': 'Phone / WhatsApp',
        'contact-location': 'Location',
        'contact-sri-lanka': 'Sri Lanka',
        'form-name': 'Your Name',
        'form-email': 'Your Email',
        'form-phone': 'Your Phone',
        'form-message': 'Your Message',
        'form-send': 'Send Message',
        
        // Footer
        'footer-tagline': 'Your trusted partner for unforgettable Sri Lanka adventures.',
        'footer-quick-links': 'Quick Links',
        'footer-contact-info': 'Contact Info',
        'footer-copyright': '© 2024 LKD Travels. All rights reserved.'
    },
    hi: {
        // Navigation
        'nav-home': 'होम',
        'nav-packages': 'पैकेज',
        'nav-vehicles': 'वाहन',
        'nav-about': 'हमारे बारे में',
        'nav-contact': 'संपर्क',
        
        // Hero Section
        'hero-title-1': 'श्रीलंका की खोज करें',
        'hero-title-2': 'एलकेडी ट्रैवल्स के साथ',
        'hero-description': 'हमारे विशेषज्ञों द्वारा तैयार किए गए 7-दिन के हाइलाइट्स इटिनरेरी के साथ श्रीलंका की सुंदरता का अनुभव करें। प्राचीन किलों से लेकर निर्मल समुद्र तटों तक, हम आपको एक अविस्मरणीय यात्रा पर ले जाएंगे।',
        'btn-view-packages': 'पैकेज देखें',
        'btn-contact-us': 'संपर्क करें',
        
        // Packages Section
        'packages-title': '7-दिन का श्रीलंका हाइलाइट्स इटिनरेरी',
        'day-1-title': 'दिन 1: श्रीलंका में आगमन',
        'day-1-item-1': 'बंदरानायके अंतर्राष्ट्रीय हवाई अड्डे (CMB) पर आगमन',
        'day-1-item-2': 'नेगोम्बो तटीय शहर में स्थानांतरण',
        'day-1-item-3': 'होटल में चेक-इन',
        'day-1-item-4': 'वैकल्पिक समुद्र तट की सैर के साथ शाम का आराम',
        
        'day-2-title': 'दिन 2: सिगिरिया और दंबुला',
        'day-2-item-1': 'नेगोम्बो से जल्दी प्रस्थान',
        'day-2-item-2': 'सिगिरिया रॉक फोर्ट्रेस पर चढ़ाई',
        'day-2-item-3': 'दंबुला गुफा मंदिर का दौरा',
        'day-2-item-4': 'दंबुला में रात्रि विश्राम',
        
        'day-3-title': 'दिन 3: कैंडी और पेरादेनिया',
        'day-3-item-1': 'कैंडी की यात्रा (2.5 घंटे)',
        'day-3-item-2': 'दांत का मंदिर देखें',
        'day-3-item-3': 'रॉयल बोटैनिकल गार्डन का अन्वेषण',
        'day-3-item-4': 'संदगिरी महा सेया का दौरा',
        
        'day-4-title': 'दिन 4: नुवारा एलिया',
        'day-4-item-1': 'रामायण से जुड़े स्थलों का दौरा',
        'day-4-item-2': 'सीता अम्मन मंदिर',
        'day-4-item-3': 'चाय बागान और कारखाने का दौरा',
        'day-4-item-4': 'ग्रेगरी झील की सैर',
        
        'day-5-title': 'दिन 5: एला और दक्षिणी तट',
        'day-5-item-1': 'रावण फॉल्स पर रुकावट',
        'day-5-item-2': 'नौ मेहराब पुल',
        'day-5-item-3': 'रावण गुफा का इतिहास',
        'day-5-item-4': 'वेलिगामा/मिरिसा में आगमन',
        
        'day-6-title': 'दिन 6: दक्षिणी समुद्र तट',
        'day-6-item-1': 'वेलिगामा बीच पर आराम',
        'day-6-item-2': 'मिरिसा बीच का अन्वेषण',
        'day-6-item-3': 'हिंद महासागर पर सूर्यास्त',
        'day-6-item-4': 'रुमास्साला की कथा',
        
        'day-7-title': 'दिन 7: प्रस्थान',
        'day-7-item-1': 'केलानिया मंदिर का दौरा',
        'day-7-item-2': 'विभीषण का महल',
        'day-7-item-3': 'हवाई अड्डे में स्थानांतरण',
        'day-7-item-4': 'श्रीलंका को विदाई',
        
        // Vehicles Section
        'vehicles-title': 'हमारे प्रीमियम वाहन',
        'toyota-axio-desc': 'छोटे समूहों और परिवारों के लिए आरामदायक सेडान',
        'toyota-premio-desc': 'अतिरिक्त आराम और स्थान के साथ प्रीमियम सेडान',
        'toyota-kdh-desc': 'बड़े समूहों और परिवारों के लिए विशाल वैन',
        
        // About Section
        'about-title': 'एलकेडी ट्रैवल्स के बारे में',
        'about-text-1': 'हम एक प्रमुख श्रीलंका यात्रा एजेंसी हैं जो असाधारण यात्रा अनुभव प्रदान करने के लिए समर्पित हैं। हमारे अनुभवी गाइड और ड्राइवर आपकी यात्रा को सुरक्षित, आरामदायक और अविस्मरणीय बनाते हैं।',
        'about-text-2': 'हमारे सावधानीपूर्वक तैयार किए गए इटिनरेरी और प्रीमियम वाहनों के साथ, हम आपको श्रीलंका के इतिहास और संस्कृति को साझा करते हुए सबसे प्रतिष्ठित स्थलों पर ले जाते हैं।',
        
        // Contact Section
        'contact-title': 'संपर्क करें',
        'contact-subtitle': 'संपर्क में आएं',
        'contact-expert': 'आपका यात्रा विशेषज्ञ',
        'contact-phone': 'फोन / व्हाट्सऐप',
        'contact-location': 'स्थान',
        'contact-sri-lanka': 'श्रीलंका',
        'form-name': 'आपका नाम',
        'form-email': 'आपका ईमेल',
        'form-phone': 'आपका फोन',
        'form-message': 'आपका संदेश',
        'form-send': 'संदेश भेजें',
        
        // Footer
        'footer-tagline': 'अविस्मरणीय श्रीलंका साहसिक यात्राओं के लिए आपका विश्वसनीय साथी।',
        'footer-quick-links': 'त्वरित लिंक',
        'footer-contact-info': 'संपर्क जानकारी',
        'footer-copyright': '© 2024 एलकेडी ट्रैवल्स। सर्वाधिकार सुरक्षित।'
    }
};

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Language Management
function initLanguage() {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
}

function setLanguage(lang) {
    // Update active button
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update content
    updateContent(lang);
    localStorage.setItem('language', lang);
}

function updateContent(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    const inputs = document.querySelectorAll('input[data-translate-placeholder], textarea[data-translate-placeholder]');
    inputs.forEach(input => {
        const key = input.dataset.translatePlaceholder;
        if (translations[lang] && translations[lang][key]) {
            input.placeholder = translations[lang][key];
        }
    });
}

// Mobile Navigation
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

function closeMobileMenu() {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                closeMobileMenu();
            }
        });
    });
}

// Form Handling
function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Intersection Observer for Animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.package-card, .vehicle-card, .about-content, .contact-content');
    animatedElements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });
}

// Package Card Interactions
function initPackageCards() {
    const packageCards = document.querySelectorAll('.package-card');
    packageCards.forEach(card => {
        card.addEventListener('click', () => {
            const day = card.dataset.day;
            // Add any specific interaction for package cards
            console.log(`Package day ${day} clicked`);
        });
    });
}

// Video Player Functionality
function initVideoPlayer() {
    const video = document.querySelector('.hero-video video');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = playPauseBtn.querySelector('i');
    
    if (video && playPauseBtn) {
        // Enhanced autoplay functionality
        function ensureAutoplay() {
            if (video.paused) {
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        // Autoplay started successfully
                        playIcon.classList.remove('fa-play');
                        playIcon.classList.add('fa-pause');
                        playPauseBtn.style.opacity = '0.3'; // Dim the button when autoplaying
                        video.parentElement.classList.add('video-autoplaying');
                        
                        // Remove the autoplaying class after a few seconds
                        setTimeout(() => {
                            video.parentElement.classList.remove('video-autoplaying');
                        }, 3000);
                    }).catch(error => {
                        // Autoplay was prevented
                        console.log('Autoplay prevented:', error);
                        playIcon.classList.remove('fa-pause');
                        playIcon.classList.add('fa-play');
                        playPauseBtn.style.opacity = '1'; // Show button clearly
                    });
                }
            }
        }
        
        // Try to autoplay when page loads
        ensureAutoplay();
        
        // Try autoplay when video becomes visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && video.paused) {
                    // Small delay to ensure smooth transition
                    setTimeout(ensureAutoplay, 100);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(video);
        
        // Handle play/pause button click
        playPauseBtn.addEventListener('click', () => {
            if (video.paused) {
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        playIcon.classList.remove('fa-play');
                        playIcon.classList.add('fa-pause');
                        playPauseBtn.style.opacity = '0.3';
                    }).catch(error => {
                        console.log('Play failed:', error);
                    });
                }
            } else {
                video.pause();
                playIcon.classList.remove('fa-pause');
                playIcon.classList.add('fa-play');
                playPauseBtn.style.opacity = '1';
            }
        });
        
        // Handle video events
        video.addEventListener('play', () => {
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');
            playPauseBtn.style.opacity = '0.3';
        });
        
        video.addEventListener('pause', () => {
            playIcon.classList.remove('fa-pause');
            playIcon.classList.add('fa-play');
            playPauseBtn.style.opacity = '1';
        });
        
        video.addEventListener('ended', () => {
            // Video will loop automatically due to loop attribute
            playIcon.classList.remove('fa-pause');
            playIcon.classList.add('fa-play');
            playPauseBtn.style.opacity = '1';
        });
        
        // Handle video loading
        video.addEventListener('loadstart', () => {
            playPauseBtn.style.opacity = '0.7';
        });
        
        video.addEventListener('canplay', () => {
            // Try autoplay once video is ready
            setTimeout(ensureAutoplay, 200);
        });
        
        video.addEventListener('error', () => {
            console.log('Video failed to load, showing fallback image');
            playPauseBtn.style.display = 'none';
        });
        
        // Handle user interaction to enable sound (optional)
        document.addEventListener('click', function enableSound() {
            if (video.muted) {
                video.muted = false;
                console.log('Sound enabled by user interaction');
            }
            document.removeEventListener('click', enableSound);
        }, { once: true });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initSmoothScrolling();
    initContactForm();
    initAnimations();
    initPackageCards();
    initVideoPlayer();
    
    // Event Listeners
    themeToggle.addEventListener('click', toggleTheme);
    navToggle.addEventListener('click', toggleMobileMenu);
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                navbar.style.background = 'rgba(26, 26, 26, 0.98)';
            }
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                navbar.style.background = 'rgba(26, 26, 26, 0.95)';
            }
        }
    });
});

// Add data-translate attributes to HTML elements for translation
document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    document.querySelector('a[href="#home"]').setAttribute('data-translate', 'nav-home');
    document.querySelector('a[href="#packages"]').setAttribute('data-translate', 'nav-packages');
    document.querySelector('a[href="#vehicles"]').setAttribute('data-translate', 'nav-vehicles');
    document.querySelector('a[href="#about"]').setAttribute('data-translate', 'nav-about');
    document.querySelector('a[href="#contact"]').setAttribute('data-translate', 'nav-contact');
    
    // Hero Section
    document.querySelector('.hero-title .gradient-text').setAttribute('data-translate', 'hero-title-1');
    document.querySelector('.hero-description').setAttribute('data-translate', 'hero-description');
    document.querySelector('.btn-primary').setAttribute('data-translate', 'btn-view-packages');
    document.querySelector('.btn-secondary').setAttribute('data-translate', 'btn-contact-us');
    
    // Section Titles
    document.querySelector('#packages .section-title').setAttribute('data-translate', 'packages-title');
    document.querySelector('#vehicles .section-title').setAttribute('data-translate', 'vehicles-title');
    document.querySelector('#about .section-title').setAttribute('data-translate', 'about-title');
    document.querySelector('#contact .section-title').setAttribute('data-translate', 'contact-title');
    
    // Form Placeholders
    document.querySelector('#name').setAttribute('data-translate-placeholder', 'form-name');
    document.querySelector('#email').setAttribute('data-translate-placeholder', 'form-email');
    document.querySelector('#phone').setAttribute('data-translate-placeholder', 'form-phone');
    document.querySelector('#message').setAttribute('data-translate-placeholder', 'form-message');
    document.querySelector('.contact-form button').setAttribute('data-translate', 'form-send');
    
    // Initialize translation
    const currentLang = localStorage.getItem('language') || 'en';
    updateContent(currentLang);
}); 