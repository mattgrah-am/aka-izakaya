function renderAbout() {
  document.body.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/img/about-bg.webp")`;
  document.body.style.backgroundSize = `cover`;
  const page = document.querySelector("#page");
  const section = document.createElement("section");
  section.classList.add("container", "fade-transition");
  page.replaceChildren(section);
  section.innerHTML = `
      <div class="container bg-black p-5" style="--bs-bg-opacity: .75;">
        <div class="row align-items-center mb-5">
          <section class="col p-5">
            <h2>Experience Aka Izkaya</h2>
            <h5>Discover a dining excellence like no other, including the Restaurant, Aka Izakaya Bar and Private Dining Rooms.</h5>
            <h5>Aka Izakaya offers an abundance of epicureanism delights with a boundless variety of regional and seasonal dishes</h5>
            <h5>Take your pick from our varity of Snacks, Yakitori, Sashimi, and Desserts!</h5>
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
          <section class="col p-5">
            <h2>Aka Izakaya draws on the purity and integrity of Japanese cuisine while infusing it with an Australian
              sensibility.</h2>
            <h5>Discover dishes both familiar and unknown, all designed to highlight the freshest local produce.</h5>
            <button class="btn btn-secondary mt-3" onclick="renderMenu('food')">Discover</button>
          </section>
        </div>
        <div class="row align-items-center">
          <section class="col p-5">
            <h2>Experience Aka Izkaya</h2>
            <h5>Beyond the large drinks wall is the Aka Izakaya Bar. Home to the largest selection of the world’s
              purest
              expression of Wine, Beer, Sake, and Whiskey.</h5>
              <h5>Our wine, beer, sake and whiskey bar serves the city’s finest libations and is home to Australia’s largest selection of Whiskey. Unwind before dinner or retire here for a nightcap.</h5>
              <button class="btn btn-secondary mt-3" onclick="renderMenu('drinks')">Find out more</button>
          </section>
          <figure class="col bg-white text-dark p-4">
            <img class="img-fluid" src="./assets/img/about/drinks.webp" alt="Aka Izakaya Bar">
            <figcaption class="text-center">Vast selection of drinks</figcaption>
          </figure>
        </div>
      </div>
  `;
}
