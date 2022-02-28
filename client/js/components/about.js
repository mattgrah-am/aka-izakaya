function renderAbout() {
  document.body.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/img/about-bg.jpg")`;
  const page = document.querySelector("#page");
  const section = document.createElement("section");
  section.classList.add("container");
  page.replaceChildren(section);
  section.innerHTML = `
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A magnam error soluta tempora dolorem quia quae, inventore voluptatum nostrum et fuga numquam aperiam, nisi, officiis placeat? Ut, tenetur ipsa. Accusantium?</p>
  `;
}
