// Track current page and moving buttons
let currentPage = 'welcome-page';
let isMoving = false;

// Function to get random position for "No" button
function getRandomPosition(button) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const btnWidth = button.offsetWidth;
    const btnHeight = button.offsetHeight;
    
    // Calculate safe boundaries (with padding)
    const padding = 20;
    const maxX = windowWidth - btnWidth - padding;
    const maxY = windowHeight - btnHeight - padding;
    
    // Generate random position
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));
    
    return { x: randomX, y: randomY };
}

// Function to move "No" button
function moveNoButton(button) {
    if (isMoving) return;
    
    isMoving = true;
    const newPosition = getRandomPosition(button);
    
    button.style.left = newPosition.x + 'px';
    button.style.top = newPosition.y + 'px';
    
    // Reset moving flag after animation completes
    setTimeout(() => {
        isMoving = false;
    }, 300);
}

// Function to create confetti
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#ff1493', '#ff69b4', '#ff85c1', '#ffc0cb', '#ffb6c1', '#ff1493'];
    const confettiCount = 80;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        // Random shapes (rectangles and circles)
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }
        
        confettiContainer.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 3500);
    }
}

// Function to change page
function changePage(fromPage, toPage) {
    const from = document.getElementById(fromPage);
    const to = document.getElementById(toPage);
    
    if (!from || !to) {
        console.error('Page not found:', fromPage, toPage);
        return;
    }
    
    // Fade out current page
    from.style.opacity = '0';
    
    setTimeout(() => {
        // Hide old page
        from.classList.remove('active');
        from.style.display = 'none';
        
        // Show new page
        to.style.display = 'flex';
        to.style.opacity = '0';
        to.classList.add('active');
        
        // Force reflow
        void to.offsetHeight;
        
        // Fade in
        requestAnimationFrame(() => {
            to.style.opacity = '1';
        });
        
        currentPage = toPage;
    }, 300);
}

// Function to go to next question
function nextQuestion(questionNumber) {
    const currentQuestion = currentPage;
    const nextQuestion = 'question-' + questionNumber;
    changePage(currentQuestion, nextQuestion);
}

// Function to show success page
function showSuccess() {
    changePage(currentPage, 'success-page');
    
    // Create confetti effect
    setTimeout(() => {
        createConfetti();
        setTimeout(() => createConfetti(), 1000);
        setTimeout(() => createConfetti(), 2000);
    }, 500);
}

// Function to show gifts page
function showGifts() {
    changePage('success-page', 'gifts-page');
}

// Function to open gift page
function openGiftPage(giftNumber) {
    changePage(currentPage, 'gift-' + giftNumber + '-page');
}

// Function to go back to gifts menu
function backToGifts() {
    changePage(currentPage, 'gifts-page');
}

// Initialize welcome page
window.addEventListener('load', () => {
    // Hide all pages first
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(page => {
        page.style.display = 'none';
        page.style.opacity = '0';
        page.classList.remove('active');
    });
    
    // Ensure welcome page is visible
    const welcomePage = document.getElementById('welcome-page');
    welcomePage.style.display = 'flex';
    welcomePage.style.opacity = '1';
    welcomePage.classList.add('active');
    
    // Setup start page "No" button
    const startNoBtn = document.getElementById('start-no-btn');
    const startYesBtn = document.getElementById('start-yes-btn');
    
    // Set initial position for start no button
    const initialPosition = getRandomPosition(startNoBtn);
    startNoBtn.style.left = initialPosition.x + 'px';
    startNoBtn.style.top = initialPosition.y + 'px';
    
    // Event listeners for start page
    startNoBtn.addEventListener('mouseenter', () => moveNoButton(startNoBtn));
    startNoBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveNoButton(startNoBtn);
    });
    startNoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        moveNoButton(startNoBtn);
    });
    
    startYesBtn.addEventListener('click', () => {
        changePage('welcome-page', 'question-1');
    });
    
    // Setup all question pages "No" buttons
    const allNoButtons = document.querySelectorAll('.no-escape');
    
    allNoButtons.forEach(noBtn => {
        // Set initial random position
        const pos = getRandomPosition(noBtn);
        noBtn.style.left = pos.x + 'px';
        noBtn.style.top = pos.y + 'px';
        
        // Mouse events for desktop
        noBtn.addEventListener('mouseenter', () => moveNoButton(noBtn));
        
        // Touch events for mobile
        noBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            moveNoButton(noBtn);
        });
        
        // Click event
        noBtn.addEventListener('click', (e) => {
            e.preventDefault();
            moveNoButton(noBtn);
        });
    });
});

// Reposition "No" buttons on window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        const startNoBtn = document.getElementById('start-no-btn');
        const allNoButtons = document.querySelectorAll('.no-escape');
        
        // Reposition start button if on welcome page
        if (currentPage === 'welcome-page' && startNoBtn) {
            const newPosition = getRandomPosition(startNoBtn);
            startNoBtn.style.left = newPosition.x + 'px';
            startNoBtn.style.top = newPosition.y + 'px';
        }
        
        // Reposition question page no buttons
        allNoButtons.forEach(noBtn => {
            const newPosition = getRandomPosition(noBtn);
            noBtn.style.left = newPosition.x + 'px';
            noBtn.style.top = newPosition.y + 'px';
        });
    }, 250);
});
