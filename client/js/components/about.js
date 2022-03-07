function renderAbout() {
  document.body.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/img/about-bg.webp")`;
  const page = document.querySelector("#page");
  const section = document.createElement("section");
  section.classList.add("container");
  page.replaceChildren(section);
  section.innerHTML = `
            <div class="container w-75 bg-black p-5" style="--bs-bg-opacity: .75;">
        <div class="row align-items-center mb-5">
          <section class="col">
            <h2>Experience Aka Izkaya</h2>
            <h4>Discover a dining excellence like no other, including the Restaurant, Aka Izakaya Bar and Private Dining
              Rooms.</h4>
          </section>
          <figure class="col bg-white text-dark p-4">
            <img class="img-fluid" src="./assets/img/about/bar.webp" alt="Aka Izakaya Bar">
            <figcaption class="text-center">Aka Izakaya Bar</figcaption>
          </figure>
        </div>
        <div class="row align-items-center mb-5">
          <figure class="col bg-white text-dark p-4">
            <img class="img-fluid" src="./assets/img/about/foodandbeer.webp" alt="Aka Izakaya Bar">
            <figcaption class="text-center">Food perfectly paired with amazing drinks</figcaption>
          </figure>
          <section class="col">
            <h2>Aka Izakaya draws on the purity and integrity of Japanese cuisine while infusing it with an Australian
              sensibility.</h2>
            <h4>Discover dishes both familiar and unknown, all designed to highlight the freshest local produce.</h4>
            <button class="btn btn-secondary" onclick="renderMenu('food')">Discover</button>
          </section>
        </div>
        <div class="row align-items-center">
          <section class="col">
            <h2>Experience Aka Izkaya</h2>
            <h5>Beyond the large drinks wall is the Aka Izakaya Bar. Home to the largest selection of the world’s
              purest
              expression of Wine, Beer, Sake, and Whiskey.</h5>
          </section>
          <figure class="col bg-white text-dark p-4">
            <img class="img-fluid" src="./assets/img/about/drinks.webp" alt="Aka Izakaya Bar">
            <figcaption class="text-center">Vast selection of drinks</figcaption>
          </figure>
        </div>
      </div>
  `;
}
