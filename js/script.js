
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


document.addEventListener('DOMContentLoaded', function () {
  fetch('./portfolio.json')
    .then(res => res.json())
    .then(obj => {
      const target = document.getElementById("projects");
      obj.forEach(element => {
        const card = document.createElement("div");
        card.className = "content-around"
        card.innerHTML = `
          <div class="card bg-base-100 w-96 shadow-sm animate-fade-slide delay-300 p-5 border-2 m-2 flex">
          <figure>
            <img src="${element.image}" alt="${element.title}" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">${element.title}</h2>
            <p class="text-justify">${element.description}</p>
            <p>${element.technologies.join(", ")}</p>
            <div class="card-actions justify-end">
              <a href="${element.github}" target="_blank" class="btn btn-primary">Visit GITHUB</a>
            </div>
          </div>
        `;
        target.appendChild(card);
      });
    })
    .catch(err => console.error("Błąd wczytywania JSON:", err));
});