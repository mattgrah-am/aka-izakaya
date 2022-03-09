function renderAdminAbout() {
  const page = document.querySelector("#page");
  const section = document.createElement("section");
  section.classList.add("container");
  page.replaceChildren(section);
  section.innerHTML = `
      <div class="container">
        <h2 class="about">Welcome to your Admin portal!</h2>
        <p class="about">Please use the menu in the side bar to navigate through the food items. From here you can create, update and delete items and it will reflect the changes on your website.</p>
      </div>
      `;
}
