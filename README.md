# 💕 Valentine's Day Website for Billo

A sweet and interactive Valentine's Day experience with multiple love questions, fun animations, and special gifts!

## ✨ Features

- **Welcome Page with Teddy Bear**: 
  - Personalized greeting "Billo"
  - Animated teddy bear with decorative elements (roses, chocolates, hearts)
  - "No" button that runs away when you try to click it!
  
- **5 Love Questions**:
  - Each question has a unique emoji (teddy, chocolate, rose, hearts, gift)
  - "No" button moves around the screen - impossible to click!
  - Beautiful transitions between questions

- **Success Page**:
  - Fun message: "access denied, you are stuck with me haii! 😂😤"
  - Confetti celebration effect
  - Falling hearts animation

- **Special Gifts Section**:
  - 3 clickable gift boxes in a menu
  - Each gift opens in a full separate page
  - Back button to return to gifts menu
  - Beautiful full-page layouts with animations

- **Fully Responsive**:
  - Optimized for mobile devices (touch events)
  - Works perfectly on tablets and desktops
  - Adaptive layouts and font sizes

## 🚀 How to Use

1. Simply open `index.html` in any modern web browser
2. Try to click the "No" button (it won't let you! 😄)
3. Click "Yes" to start the love questions
4. Answer all 5 questions (you can only say yes!)
5. Enjoy the success page with confetti
6. Choose from 3 special gifts
7. Each gift opens in a beautiful full-page view
8. Use the back button to return to the gifts menu

The website uses no external dependencies and works completely offline. All animations are smooth CSS-based animations for great performance.

## 📱 Testing

### Desktop Testing
- Open `index.html` in your browser
- Try hovering over the "No" button
- Resize the window to see responsive behavior

### Mobile Testing
- Open `index.html` on your phone's browser
- Try tapping the "No" button
- The touch events will make it move away!

### Browser Developer Tools
You can also test responsive views using browser DevTools:
1. Open `index.html` in Chrome/Firefox/Edge
2. Press F12 to open Developer Tools
3. Click the device toolbar icon (or press Ctrl+Shift+M)
4. Test different device sizes:
   - iPhone (375x667)
   - iPad (768x1024)
   - Desktop (1920x1080)

## 🎨 Customization

### Change Colors
Edit `styles.css` and modify the gradient colors:
- Main gradient: `.hearts-background` background property
- Button colors: `.yes-btn` and `.no-btn` background properties

### Change Name
Edit `index.html` and change "Billo" in the `.name-heading` element.

### Change Questions
Edit the questions in `index.html` by modifying the `.question-text` paragraphs in each question page (question-1 through question-5).

### Change Gift Content
Edit the gift messages in `index.html` inside the `.gift-content` divs:
- `gift-1-content` for Gift 1 (Our Memory - Photo Gallery)
- `gift-2-content` for Gift 2 (My Promise)
- `gift-3-content` for Gift 3 (My Letter for You)

#### Photos Already Added! ✅
The memory gallery already includes your 3 photos:
- `images/1.jpg` - Your first memory photo
- `images/2.jpg` - Your second memory photo
- `images/3.jpg` - Your third memory photo

To replace photos:
1. Simply replace the files in the `images` folder
2. Keep the same filenames (1.jpg, 2.jpg, 3.jpg)
3. Or add more photos and update the HTML accordingly

### Adjust Animations
Modify animation speeds and effects in `styles.css`:
- Heart float speed: `@keyframes floatUp` duration
- Teddy bounce: `@keyframes teddyBounce` duration
- Emoji pulse: `@keyframes emojiPulse` duration

## 🛠️ Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Animations, gradients, responsive design
- **Vanilla JavaScript**: Interactive functionality and page navigation
- **Google Fonts**: Pacifico and Poppins fonts

## 📋 Flow Structure

1. **Welcome Page** → Click "Yes"
2. **Question 1** (Teddy) → Click "Yes"
3. **Question 2** (Chocolate) → Click "Yes"
4. **Question 3** (Rose) → Click "Yes"
5. **Question 4** (Hearts) → Click "Yes"
6. **Question 5** (Gift) → Click "Yes"
7. **Success Page** → Click "Continue"
8. **Gifts Menu** → Click on any gift
9. **Gift Full Page** → View content, click "Back to Gifts"
10. **Explore all 3 gifts!**

## 💝 Notes

- No external libraries or frameworks required
- Works offline once loaded
- Pure CSS animations for smooth performance
- Mobile-first responsive design
- All "No" buttons are impossible to click (they run away!)

## 🎁 Gift Contents

### Gift 1: Our Memory 📸
- Full-page photo gallery with 3 memory photos
- Photos automatically loaded from images folder (1.jpg, 2.jpg, 3.jpg)
- Beautiful captions for each memory
- Hover effects on photos
- Sweet closing message about treasured moments
- **Photos are already included!** (Your uploaded photos are now in the gallery)

### Gift 2: My Promise 💍
- Heartfelt handwritten promise transcribed
- Beautiful card-style presentation
- Pink gradient background with custom styling
- Promise to always be together

### Gift 3: My Letter for You 💌
- Personal handwritten letter transcribed
- Romantic letter format with hearts
- Elegant typography and styling
- Signed with love

## 🎉 Have Fun!

Share this with your Valentine and make their day special! 💕

---

Made with ❤️ for Billo
