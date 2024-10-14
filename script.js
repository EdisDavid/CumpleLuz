function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function togglePlayPause() {
    var audio = document.getElementById("myAudio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}


function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  function togglePlayPause() {
      var audio = document.getElementById("myAudio");
      if (audio.paused) {
          audio.play();
      } else {
          audio.pause();
      }
  }
  const end = Date.now() + 15 * 1000;
  
  // go Buckeyes!
  const colors = ["#bb0000", "#ffffff"];
  
  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
  
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });
  
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();