const searchInput = document.getElementById('search');
const colorPicker = document.getElementById('colorPicker');
const sizeSlider = document.getElementById('sizeSlider');

// Function to filter icons based on search input
function filterIcons() {
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll('.icon-box').forEach(icon => {
        const name = icon.getAttribute('data-name');
        icon.style.display = name.includes(query) ? 'flex' : 'none';
    });
}

// Function to handle icon click
function handleIconClick(event) {
  const iconBox = event.currentTarget;
  iconBox.classList.add('clicked');
  
  // Remove the 'clicked' class after the animation ends
  setTimeout(() => {
    iconBox.classList.remove('clicked');
  }, 1000);
}

// Add click event listener to all icon boxes
document.querySelectorAll('.icon-box').forEach(iconBox => {
  iconBox.addEventListener('click', handleIconClick);
});

function changeColor(color) {
    const icons = document.querySelectorAll('.icon-box i');

    icons.forEach(icon => {
        icon.style.color = color;
    });
}

// Function to update icon size
function updateIconSize() {
    const size = sizeSlider.value;
    document.querySelectorAll('.icon-box i').forEach(icon => {
        icon.style.fontSize = `${size}px`;
    });
}

// Event listeners
searchInput.addEventListener('input', filterIcons);
sizeSlider.addEventListener('input', updateIconSize);

updateIconSize();  // Ensure icons have initial size set correctly
