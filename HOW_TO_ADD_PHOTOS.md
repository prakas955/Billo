# 📸 How to Add Photos to "Our Memory" Gift

## Quick Instructions

### Step 1: Prepare Your Photos
1. Choose 3 special photos you want to include
2. Rename them to something simple like:
   - `memory1.jpg`
   - `memory2.jpg`
   - `memory3.jpg`

### Step 2: Create Images Folder
1. In the `valentine` folder, create a new folder called `images`
2. Copy your 3 photos into this `images` folder

### Step 3: Update the HTML

Open `index.html` and find Gift 1 section (around line 158). Replace the placeholder divs with your images:

**Replace this:**
```html
<div class="memory-placeholder">
    <span class="placeholder-icon">📷</span>
    <p class="placeholder-text">Add your favorite memory photo here</p>
</div>
```

**With this:**
```html
<img src="images/memory1.jpg" alt="Our Memory" style="width: 100%; height: 200px; object-fit: cover; border-radius: 15px;">
```

Do this for all 3 memory items, changing the image filename for each one.

### Step 4: Update Captions (Optional)

Change the caption text to describe each photo:
```html
<p class="memory-caption">Our first date at the cafe...</p>
```

## Example Complete Memory Item

```html
<div class="memory-item">
    <img src="images/memory1.jpg" alt="Our Memory" style="width: 100%; height: 200px; object-fit: cover; border-radius: 15px; box-shadow: 0 5px 15px rgba(255, 105, 180, 0.2);">
    <p class="memory-caption">The day we first met... ❤️</p>
</div>
```

## Tips

- Use JPG or PNG format for photos
- Keep file sizes under 2MB for faster loading
- Use landscape/horizontal photos for best fit
- Photos will be automatically cropped to fit the space

## Need Help?

If photos don't show up:
1. Check that the folder is named exactly `images` (lowercase)
2. Check that photo filenames match exactly in the HTML
3. Make sure photos are in the valentine folder: `valentine/images/your-photo.jpg`

---

Have fun personalizing your Valentine's website! 💕
