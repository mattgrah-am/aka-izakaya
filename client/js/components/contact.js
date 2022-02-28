function renderContact() {
  document.body.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/img/contact-bg.jpg")`;
  const page = document.querySelector("#page");
  const section = document.createElement("section");
  section.classList.add("container");
  page.replaceChildren(section);
  section.innerHTML = `
      <h2>Contact Us</h2>
      <form>
  <div class="mb-3">
    <label for="name" class="form-label">Full Name</label>
    <input type="text" class="form-control" id="name" >
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" >
  </div>
  <div class="mb-3">
    <label for="enquiry" class="form-label">Enquiry</label>
    <textarea class="form-control" id="enquiry" rows="3"></textarea>
  </div>
  
  <button type="submit" class="btn btn-light">Submit</button>
</form>
  `;
}
