function renderContact() {
  document.body.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/img/contact-bg.webp")`;
  document.body.style.backgroundSize = `cover`;
  const page = document.querySelector("#page");
  const section = document.createElement("section");
  section.classList.add("container", "fade-transition");
  page.replaceChildren(section);
  section.innerHTML = `
  <div class="container w-75 bg-black p-4" style="--bs-bg-opacity: .75;">
  <h2>Contact Us</h2>
  <p class="mb-0">You can find us at 123 Tokyo Street Japan 3000, or call us on <a class="link-secondary text-decoration-none" href="tel:+61 444 555 666">+61 444 555 666</a></p>
  <p>Alternatively leave a message below and we will get right back to you.</p>
  <div class="row align-items-center">
    <div class="col">
      <img class="img-fluid" src="./assets/img/map.webp" alt="Map of Tokyo">
    </div>
    <div class="col">
      <form id="contact-submit">
        <div class="mb-3">
          <label for="name" class="form-label">Full Name</label>
          <input type="text" class="form-control" id="name">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email">
        </div>
        <div class="mb-3">
          <label for="enquiry" class="form-label">Enquiry</label>
          <textarea class="form-control" id="enquiry" rows="3"></textarea>
        </div>
        <div class="errorMessage"></div>
        <button type="submit" class="btn btn-light">Submit</button>
      </form>
      <div class="mt-4">
        <a class="link-secondary m-2" href="/"><i class="bi bi-facebook" style="font-size: 2rem;"></i></a>
        <a class="link-secondary m-2" href="/"><i class="bi bi-twitter" style="font-size: 2rem;"></i></a>
        <a class="link-secondary m-2" href="/"><i class="bi bi-instagram" style="font-size: 2rem;"></i></a>
        <a class="link-secondary m-2" href="/"><i class="bi bi-envelope-fill" style="font-size: 2rem;"></i></a>
      </div>
    </div>
  </div>
  `;

  const contactForm = document.getElementById("contact-submit");
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();
    const nameField = document.querySelector("#name");
    const emailField = document.querySelector("#email");
    const enquiryField = document.querySelector("#enquiry");
    const body = {
      name: nameField.value,
      email: emailField.value,
      enquiry: enquiryField.value,
    };
    let error = null;
    if (body.name === "") {
      error = "Name is required";
    } else if (body.email === "") {
      error = "Email is required";
    } else if (body.enquiry === "") {
      error = "Enquiry is required";
    }
    if (!error) {
      axios
        .post("/api/contact/", body)
        .then((response) => {
          nameField.value = "";
          emailField.value = "";
          enquiryField.value = "";
          // renderContact();
          displaySuccess();
          console.log(response);
        })
        .catch((error) => {
          console.log(error.data);
        });
    } else {
      console.log(error);
      displayError(error);
    }
  });
}
