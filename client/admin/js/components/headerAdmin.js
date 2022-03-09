function renderAdminHeader() {
    axios.get('/api/session/').then((response) => {
        const user = response.data.email;
        const header = document.querySelector('#header-nav');
        header.innerHTML = `
  <nav class="d-flex flex-column p-4 text-white bg-dark" style="width: 18rem;">
      <div class="d-flex align-items-center text-decoration-none text-white bg-dark fs-4 ps-2"> <a href="/admin" id="admin-link"> Admin
        Portal</a>
      </div>
      <hr>
      <ul class="nav nav-pills flex-column mb-auto">
        <div class="dropdown">
          <button class="nav-item nav-link link-light dropdown-toggle" type="button" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false">
            Food Menu
          </button>
          <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownMenuButton1">
            <li onClick="renderCategory('food', 'snack')" class="dropdown-item pointer">Snacks</li>
            <li onClick="renderCategory('food', 'yakitori')" class="dropdown-item pointer">Yakitori</li>
            <li onClick="renderCategory('food', 'sashimi')" class="dropdown-item pointer">Sashimi</li>
            <li onClick="renderCategory('food', 'dessert')" class="dropdown-item pointer">Desserts</li>
          </ul>
        </div>
        <div class="dropdown">
          <button class="nav-item nav-link link-light dropdown-toggle" type="button" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false">
            Drinks Menu
          </button>
          <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownMenuButton2">
            <li onClick="renderCategory('drinks', 'wine')" class="dropdown-item pointer">Wine</li>
            <li onClick="renderCategory('drinks', 'beer')" class="dropdown-item pointer">Beer</li>
            <li onClick="renderCategory('drinks', 'sake')" class="dropdown-item pointer">Sake</li>
            <li onClick="renderCategory('drinks', 'whiskey')" class="dropdown-item pointer">Whiskey</li>
          </ul>
        </div>
        <li class="nav-item nav-link link-light pointer" onClick = "renderContactMessages()">Messages</li>
      </ul>
      <hr>
      <!-- Bottom Profile -->
      <div class="dropdown">
        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1"
          data-bs-toggle="dropdown" aria-expanded="false">
          <strong>${user}</strong>
        </a>
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
          <li class="dropdown-item pointer" onClick="logout()">Sign out</li>
        </ul>
      </div>
    </nav>
  `;
    });
}
