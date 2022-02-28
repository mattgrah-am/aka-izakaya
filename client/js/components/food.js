function renderFood() {
  document.body.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/img/food-bg.jpg")`;
  const page = document.querySelector("#page");
  const section = document.createElement("section");
  section.classList.add("container");
  page.replaceChildren(section);
  section.innerHTML = `
  <div class="container w-75">
    <div class="row py-3 gx-5">
      <div class="title_header py-5">
        <h3 class="catagory">Food Type</h3>
        <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ad aliquam dolorum.
          Deleniti placeat nulla quas doloribus, perferendis ab error atque quisquam. Excepturi, consequuntur. Ex
          officia illum iste exercitationem quasi.</p>
      </div>
      <div class="col">
        <div class="d-flex justify-content-between border-bottom">
          <div>
            <h4>Food</h4>
            <p>desc of drink blah blah blah blah</p>
          </div>
          <h4 class="align-self-center">19</h4>
        </div>
      </div>
      <div class="col">
        <div class="d-flex justify-content-between border-bottom">
          <div>
            <h4>Food</h4>
            <p>desc of drink blah blah blah blah</p>
          </div>
          <h4 class="align-self-center">19</h4>
        </div>
      </div>
    </div>
    <div class="row py-3 gx-5">
      <div class="col">
        <div class="d-flex justify-content-between border-bottom">
          <div>
            <h4>Food</h4>
            <p>desc of drink blah blah blah blah</p>
          </div>
          <h4 class="align-self-center">19</h4>
        </div>
      </div>
      <div class="col">
        <div class="d-flex justify-content-between border-bottom">
          <div>
            <h4>Food</h4>
            <p>desc of drink blah blah blah blah</p>
          </div>
          <h4 class="align-self-center">19</h4>
        </div>
      </div>
      </div>
      <div class="row py-3 gx-5">
        <div class="col">
          <div class="d-flex justify-content-between border-bottom">
            <div>
              <h4>Food</h4>
              <p>desc of drink blah blah blah blah</p>
            </div>
            <h4 class="align-self-center">19</h4>
          </div>
        </div>
        <div class="col">
          <div class="d-flex justify-content-between border-bottom">
            <div>
              <h4>Food</h4>
              <p>desc of drink blah blah blah blah</p>
            </div>
            <h4 class="align-self-center">19</h4>
          </div>
        </div>
      </div>
      <div class="row py-3 gx-5">
        <div class="col">
          <div class="d-flex justify-content-between border-bottom">
            <div>
              <h4>Food</h4>
              <p>desc of drink blah blah blah blah</p>
            </div>
            <h4 class="align-self-center">19</h4>
          </div>
        </div>
        <div class="col">
          <div class="d-flex justify-content-between border-bottom">
            <div>
              <h4>Food</h4>
              <p>desc of drink blah blah blah blah</p>
            </div>
            <h4 class="align-self-center">19</h4>
          </div>
        </div>
      </div>
    
`;
}
