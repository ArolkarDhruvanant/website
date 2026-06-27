document.addEventListener('DOMContentLoaded', () => {

    // ================= 1. MOBILE MENU TOGGLE =================
    const hamburger = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    // ================= 2. THEME CHANGER (DARK / LIGHT MODE) =================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    themeToggleBtn.addEventListener('click', () => {
        bodyElement.classList.toggle('light-mode');
        const isLightModeActive = bodyElement.classList.contains('light-mode');
        
        const themeIcon = themeToggleBtn.querySelector('i');
        if (isLightModeActive) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    // ================= 3. AUTOMATED TYPING EFFECT =================
    const specializedWords = ["AI / ML Architectures.", "Data Science Logic.", "Full-Stack Web Interfaces."];
    let currentWordIndex = 0;
    let currentCharacterIndex = 0;
    let isDeletingText = false;
    const typingSpanTarget = document.getElementById('typing-text');

    function continuousTypingLoop() {
        const standardWordString = specializedWords[currentWordIndex];
        
        if (isDeletingText) {
            typingSpanTarget.textContent = standardWordString.substring(0, currentCharacterIndex - 1);
            currentCharacterIndex--;
        } else {
            typingSpanTarget.textContent = standardWordString.substring(0, currentCharacterIndex + 1);
            currentCharacterIndex++;
        }

        let runtimeTypingSpeed = isDeletingText ? 40 : 120;

        if (!isDeletingText && currentCharacterIndex === standardWordString.length) {
            runtimeTypingSpeed = 2000;
            isDeletingText = true;
        } else if (isDeletingText && currentCharacterIndex === 0) {
            isDeletingText = false;
            currentWordIndex = (currentWordIndex + 1) % specializedWords.length;
            runtimeTypingSpeed = 400;
        }

        setTimeout(continuousTypingLoop, runtimeTypingSpeed);
    }
    continuousTypingLoop();

    // ================= 4. ANIMATED SKILL BARS ON SCROLL =================
    const interactiveProgressBars = document.querySelectorAll('.progress-bar');
    const skillsSectionSelector = document.getElementById('skills');

    const technicalSkillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                interactiveProgressBars.forEach(bar => {
                    const dynamicWidthParameter = bar.getAttribute('data-progress');
                    bar.style.width = dynamicWidthParameter;
                });
            }
        });
    }, { threshold: 0.15 });

    technicalSkillsObserver.observe(skillsSectionSelector);

    // ================= 5. BACK TO TOP BUTTON =================
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 400) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});