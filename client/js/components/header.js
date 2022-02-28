function renderHeader() {
  const header = document.querySelector("#header-nav");
  header.innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid ">
    <a class="navbar-brand flex-1" href="#">Aka Izakaya</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li onClick="renderAbout()" class="nav-item nav-link">About</li>
        <li onClick="renderFood()" class="nav-item nav-link">Food</li>
        <li onClick="renderDrinks()" class="nav-item nav-link">Drink</li>
        <li onClick="renderContact()" class="nav-item nav-link">Contact</li>
      </ul>
    </div>
  </div>
</nav>
  `;
}
