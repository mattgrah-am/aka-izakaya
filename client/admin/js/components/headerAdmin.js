function renderAdminHeader() {
    const header = document.querySelector('#header-nav');
    header.innerHTML = `
  <nav class="d-flex flex-column p-4 text-white bg-dark" style="width: 18rem;">
      <div class="d-flex align-items-center text-decoration-none text-white bg-dark fs-4 ps-2">Admin
        Portal
      </div>
      <hr>
      <ul class="nav nav-pills flex-column mb-auto">
        <li onClick="renderAdminAbout()" class="nav-item nav-link link-light pointer">About</li>
        <div class="dropdown">
          <button class="nav-item nav-link link-light dropdown-toggle" type="button" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false">
            Food Menu
          </button>
          <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownMenuButton1">
            <li onClick="renderAdminSnacks()" class="dropdown-item pointer">Snacks</li>
            <li onClick="renderAdminYakitori()" class="dropdown-item pointer">Yakitori</li>
            <li onClick="renderAdminSashimi()" class="dropdown-item pointer">Sashimi</li>
            <li onClick="renderAdminDesserts()" class="dropdown-item pointer">Desserts</li>
          </ul>
        </div>
        <div class="dropdown">
          <button class="nav-item nav-link link-light dropdown-toggle" type="button" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false">
            Drinks Menu
          </button>
          <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownMenuButton2">
            <li onClick="renderAdminWine()" class="dropdown-item pointer">Wine</li>
            <li onClick="renderAdminBeer()" class="dropdown-item pointer">Beer</li>
            <li onClick="renderAdminSake()" class="dropdown-item pointer">Sake</li>
            <li onClick="renderAdminWhiskey()" class="dropdown-item pointer">Whiskey</li>
          </ul>
        </div>
        <li class="nav-item nav-link link-light pointer">Messages</li>
      </ul>
      <hr>
      <!-- Bottom Profile -->
      <div class="dropdown">
        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1"
          data-bs-toggle="dropdown" aria-expanded="false">
          <strong>user-name</strong>
        </a>
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
          <li class="dropdown-item pointer">Profile</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li class="dropdown-item pointer">Sign out</li>
        </ul>
      </div>
    </nav>
  `;
}
