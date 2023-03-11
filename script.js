// ----------Slider immagini---------------------
const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const thumb = document.querySelector('.thumb');

let isDragging = false;
let startPos;
let currentPos;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPos = e.clientX;
  scrollLeft = slides.scrollLeft;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  currentPos = e.clientX;
  const distance = currentPos - startPos;
  slides.scrollLeft = scrollLeft - distance;
});

slider.addEventListener('mouseup', () => {
  isDragging = false;
});

slider.addEventListener('mouseleave', () => {
  isDragging = false;
});

slides.addEventListener('scroll', () => {
  const thumbWidth = (slider.clientWidth / slides.scrollWidth) * 100;
  const thumbPosition = (slides.scrollLeft / slides.scrollWidth) * 100;
  thumb.style.width = `${thumbWidth}%`;
  thumb.style.left = `${thumbPosition}%`;
});


// ----------Cambio lingua---------------------
const select = document.getElementById("language-select");
const icon = document.getElementById("dropdown-icon");

icon.addEventListener("click", function() {
  if (select.classList.contains("open")) {
    select.classList.remove("open");
  }
  else {
    select.classList.add("open");
  }
});

select.addEventListener("change", function() {
  const selectedValue = select.value;
  window.location.href = "/?lang=" + selectedValue;
});


// ----------Dropdown menu mobile---------------------
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === 'block') {
        openDropdown.style.display = 'none';
      }
    }
  }
}



// ----------Top scroll---------------------

// selezionare il bottone Torna Su dal documento
var backToTopButton = document.getElementById("back-to-top-button");

// mostrare il bottone quando l'utente scorre in basso di una certa quantità di pixel
var amountScrolled = 300;
window.onscroll = function() {
	if (document.documentElement.scrollTop > amountScrolled || document.body.scrollTop > amountScrolled) {
		backToTopButton.classList.add("fade-in");
		backToTopButton.classList.remove("fade-out");
		backToTopButton.style.display = "block";
	} else {
		backToTopButton.classList.add("fade-out");
		backToTopButton.classList.remove("fade-in");
		setTimeout(function() {
			backToTopButton.style.display = "none";
		}, 300); // nascondere il bottone solo dopo l'animazione di dissolvenza
	}
};

// far scorrere la pagina verso l'alto quando il bottone viene cliccato
backToTopButton.onclick = function() {
	document.documentElement.scrollTop = 0;
	document.body.scrollTop = 0;
};
