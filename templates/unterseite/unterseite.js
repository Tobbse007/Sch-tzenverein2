/**
 * Unterseite Template JavaScript für Schützenverein Tell Quierschied
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
            mobileMenuButton.setAttribute('aria-expanded', !expanded);
            mobileMenu.classList.toggle('hidden');
            mobileMenuButton.classList.toggle('active');
        });
    }
    
    // Mobile Dropdowns
    document.querySelectorAll('.mobile-dropdown button').forEach(button => {
        button.addEventListener('click', () => {
            const dropdownContent = button.nextElementSibling;
            dropdownContent.classList.toggle('hidden');
            
            const expanded = button.getAttribute('aria-expanded') === 'true' || false;
            button.setAttribute('aria-expanded', !expanded);
        });
    });
    
    // Desktop Dropdowns
    document.querySelectorAll('.nav-dropdown .dropdown-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const currentDropdown = button.nextElementSibling;
            
            // Close all other open dropdowns
            document.querySelectorAll('.nav-dropdown .dropdown-content').forEach(content => {
                if (content !== currentDropdown) {
                    content.classList.remove('show');
                    content.previousElementSibling.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Toggle current dropdown
            currentDropdown.classList.toggle('show');
            
            const expanded = button.getAttribute('aria-expanded') === 'true' || false;
            button.setAttribute('aria-expanded', !expanded);
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        document.querySelectorAll('.nav-dropdown .dropdown-content').forEach(content => {
            content.classList.remove('show');
            content.previousElementSibling.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('hidden', 'opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Lazy loading images
    const lazyImages = document.querySelectorAll('.lazy-image');
    
    if (lazyImages.length > 0) {
        const lazyLoad = (target) => {
            const io = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.dataset.src;
                        
                        if (src) {
                            img.src = src;
                        }
                        
                        observer.disconnect();
                    }
                });
            });
            
            io.observe(target);
        };
        
        lazyImages.forEach(lazyLoad);
    }
    
    // Transparent header on scroll
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Set active state for current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage) {
        document.querySelectorAll('nav a').forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage) {
                link.classList.add('active');
            }
        });
    }
});
