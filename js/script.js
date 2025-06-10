// Mobil menü için açılıp kapanma fonksiyonu
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Menü ikonunu değiştir
            const icon = mobileMenuBtn.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Sayfa kaydırıldığında header'ın görünümünü değiştir
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Animasyonlar için görünüm takibi
    const elements = document.querySelectorAll('.feature-card, .project-card, .testimonial-card, .blog-card');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        observer.observe(element);
    });

    // Form gönderimi
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aslında burada form verilerini bir API'ye gönderme kodu olacak
            // Şimdilik basit bir onay mesajı gösterelim
            
            const formInputs = form.querySelectorAll('input, textarea');
            let isValid = true;
            
            formInputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
                
                if (input.type === 'email' && input.value.trim()) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(input.value.trim())) {
                        isValid = false;
                        input.classList.add('error');
                    }
                }
            });
            
            if (isValid) {
                // Başarılı form gönderimi
                form.reset();
                
                // Eğer form, bülten aboneliği formuysa
                if (form.classList.contains('newsletter-form')) {
                    const button = form.querySelector('button');
                    const originalText = button.textContent;
                    button.textContent = 'Teşekkürler!';
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                    }, 3000);
                } else {
                    // Diğer formlar için (iletişim vb.)
                    alert('Mesajınız alındı. En kısa sürede size dönüş yapacağız!');
                }
            }
        });
    });
});

// Proje ve blog slider'ları için basit slider fonksiyonu
class SimpleSlider {
    constructor(sliderSelector, autoplay = false, interval = 5000) {
        this.slider = document.querySelector(sliderSelector);
        this.items = this.slider ? this.slider.children : [];
        this.autoplay = autoplay;
        this.interval = interval;
        this.currentIndex = 0;
        this.slideWidth = 0;
        this.totalSlides = this.items.length;
        
        if (this.slider && this.totalSlides > 0) {
            this.init();
        }
    }
    
    init() {
        // Mobil için kaydırma olaylarını ekle
        let startX;
        let endX;
        
        this.slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.slider.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            
            if (startX - endX > 50) {
                // Sola kaydırma
                this.next();
            } else if (endX - startX > 50) {
                // Sağa kaydırma
                this.prev();
            }
        });
        
        // Otomatik oynatma
        if (this.autoplay) {
            this.play();
        }
    }
    
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        this.updateSlider();
    }
    
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        this.updateSlider();
    }
    
    updateSlider() {
        // Burada slider'ı güncelleyeceğiz
        // Bu örnekte, mobil cihazlarda kaydırma işlevi eklemek için kullanacağız
    }
    
    play() {
        setInterval(() => {
            this.next();
        }, this.interval);
    }
}

// Sayfa yüklendiğinde slider'ları başlat
document.addEventListener('DOMContentLoaded', () => {
    new SimpleSlider('.project-slider', true, 5000);
    new SimpleSlider('.testimonial-slider', true, 6000);
}); 