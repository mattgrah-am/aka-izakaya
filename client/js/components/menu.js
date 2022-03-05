function renderMenu(type) {
  document.body.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("../assets/img/${type}-bg.jpg") no-repeat fixed center`;
  const page = document.querySelector("#page");
  const section = document.createElement("section");
  section.classList.add("container");
  page.replaceChildren(section);

  section.innerHTML = `
  <div class="container w-75">
    <div class="title_header pt-5 pb-4">
      <h3 class="catagory text-uppercase">${type} Menu</h3>
      <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ad aliquam dolorum.
        Deleniti placeat nulla quas doloribus, perferendis ab error atque quisquam. Excepturi, consequuntur. Ex
        officia illum iste exercitationem quasi.</p>
    </div>
  <div id="foodMenu" class="menu-container mb-5"></div>`;

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
        console.log(item);
        const div = document.createElement("div");
        foodMenu.appendChild(div).innerHTML = `
        <div class="d-flex justify-content-between border-bottom">
              <div>
                <h5>${item.name}</h4>
                <p>${item.description}</p>
              </div>
              <h5 class="align-self-center">${item.price}</h4>
            </div>
          </div>
          `;
      });
    });
  });
}
