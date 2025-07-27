
document.addEventListener('DOMContentLoaded', function () {
  if (window.VANTA && window.VANTA.WAVES) {
    window.VANTA.WAVES({
      el: "#vanta-hero",
      mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x6b21a8,
      shininess: 45.0,
      waveHeight: 20.0,
      waveSpeed: 1.0,
      zoom: 0.85
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  if (window.VANTA && window.VANTA.HALO) {
      VANTA.HALO({
        el: "#vanta-hero-contact",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 0.85,
        scaleMobile: 1.00,
        xOffset:0.20
      })
  }
});