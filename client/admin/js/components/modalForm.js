function renderModItem(
  type,
  category,
  isCreate = true,
  id = "",
  name = "",
  description = "",
  price = ""
) {
  const createModal = document.querySelector("#formModal");
  const div = document.createElement("div");
  createModal.replaceChildren(div);
  div.innerHTML = `      
    <form id="createItem" action="../api/menu/" method="post">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" name="name" id="name" class="form-control" value="${name}">
      </div>
      <div class="mb-3">
        <label for="price" class="form-label">Price</label>
        <input type="text" name="price" id="price" class="form-control" value="${price}">
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <input type="text" name="description" id="description" class="form-control" value="${description}">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
      </div>
    </form>
    `;

  const form = document.getElementById("createItem");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameField = document.querySelector("input[name=name]");
    const priceField = document.querySelector("input[name=price]");
    const descField = document.querySelector("input[name=description]");

    if (isCreate === true) {
      let body = {
        name: nameField.value,
        price: priceField.value,
        type,
        description: descField.value,
        category,
      };
      axios
        .post("/api/menu/", body)
        .then((response) => {
          renderCategory(type, category);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      let body = {
        id,
        name: nameField.value,
        price: priceField.value,
        type,
        description: descField.value,
        category,
      };
      axios
        .put(`/api/menu/${id}`, body)
        .then((response) => {
          renderCategory(type, category);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
}
