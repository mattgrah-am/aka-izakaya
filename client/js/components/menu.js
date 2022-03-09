function renderMenu(type) {
  document.body.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("../assets/img/${type}-bg.webp") no-repeat fixed center`;
  document.body.style.background-size = `cover`;
  const page = document.querySelector("#page");
  const section = document.createElement("section");
  section.classList.add("container", "fade-transition");
  page.replaceChildren(section);
  console.log(type);

  if (type === "food") {
    section.innerHTML = `
    <div class="container w-75">
      <div class="title_header pt-5 pb-4">
        <h3 class="catagory text-uppercase">${type} Menu</h3>
        <p class="desc">The connection with nature is one of the defining hallmarks of Japanese food. Where food is eaten in as natural a state as possible, as fresh as possible, as this is considered the ultimate way to eat.
        Produce is often only lightly cooked and what and how people cook is highly influenced by the season
        </p>
      </div>
    <div id="foodMenu" class="menu-container mb-5"></div>`;
  } else if (type === "drinks") {
    section.innerHTML = `
    <div class="container w-75">
      <div class="title_header pt-5 pb-4">
        <h3 class="catagory text-uppercase">${type} Menu</h3>
        <p class="desc">Our drinks selection features barrel-aged Japanese whiskey as well as premium Sake from the regions of Nada & Fushimi. You’ll also find a diverse selection of beers, wines and spirits, so you can order an old favourite or ask our bartenders for a recommendation to suit your meal. 
        </p>
      </div>
    <div id="foodMenu" class="menu-container mb-5"></div>`;
  }

  axios.get(`/api/menu/type/${type}`).then((response) => {
    const menuData = response.data;
    const foodMenu = document.querySelector("#foodMenu");
    const category = menuData
      .map((cat) => cat.category)
      .filter((elem, index, self) => index === self.indexOf(elem));

    category.forEach((category) => {
      const h3 = document.createElement("h3");
      h3.classList.add("grid-span-2", "border-bottom", "text-uppercase");
      foodMenu.appendChild(h3).innerHTML = `${category}`;

      const filterMenu = menuData.filter((elem) => elem.category === category);
      filterMenu.forEach((item) => {
        const div = document.createElement("div");
        foodMenu.appendChild(div).innerHTML = `
        <div class="d-flex justify-content-between border-bottom">
              <div>
                <h5>${item.name}</h5>
                <p>${item.description}</p>
              </div>
              <h5 class="align-self-center">${item.price}</h5>
            </div>
          </div>
          `;
      });
    });
  });
}
