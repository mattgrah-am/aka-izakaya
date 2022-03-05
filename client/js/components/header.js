function renderHeader() {
  const header = document.querySelector("#header-nav");
  header.innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid ">
    <a class="navbar-brand logo-font flex-1 pointer" href="/">Aka Izakaya</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0 text-uppercase fs-6 fw-bold">
        <li onClick="renderAbout()" class="nav-item nav-link pointer">About</li>
        <li onClick="renderMenu('food')" class="nav-item nav-link pointer">Food</li>
        <li onClick="renderMenu('drink')" class="nav-item nav-link pointer">Drinks</li>
        <li onClick="renderContact()" class="nav-item nav-link pointer">Contact</li>
      </ul>
    </div>
  </div>
</nav>
  `;
}
