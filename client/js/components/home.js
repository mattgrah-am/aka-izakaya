function renderHome() {
  const header = document.querySelector("#header-nav");
  header.innerHTML = `
      <div class="vh-100 d-flex flex-column justify-content-center align-items-center">
        <div class="bg-black bg-opacity-75 p-5">
          <h1 class="logo-font-lg">Aka</h1>
          <h1 class="logo-font-lg mb-5">Izakaya</h1>
          <p class="fs-2 text-uppercase fw-lighter">居酒屋&nbsp;&nbsp; | &nbsp;&nbsp;Stay &nbsp;&nbsp; Drink
            &nbsp;&nbsp;
            Place</p>
          <p class="fs-4 text-uppercase fw-lighter">Grab a drink, settle in, get
            comfortable</p>
          <hr>
          <div class="d-flex justify-content-center text-uppercase fs-5 fw-bold mt-5">
            <p onClick="renderHeader(); renderAbout()" class="link-light pointer px-4">About</p>
            <p onClick="renderHeader(); renderMenu('food')" class="link-light pointer px-4">Food</p>
            <p onClick="renderHeader(); renderMenu('drinks')" class="link-light pointer px-4">Drinks</p>
            <p onClick="renderHeader(); renderContact()" class="link-light pointer px-4">Contact</p>
          </div>
        </div>
      </div>
  `;
}
