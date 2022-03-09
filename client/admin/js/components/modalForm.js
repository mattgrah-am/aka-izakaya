function renderModItem(
    type,
    category,
    isCreate = true,
    id = '',
    name = '',
    description = '',
    price = ''
) {
    const createModal = document.querySelector('#formModal');
    const div = document.createElement('div');
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
      <div class="errorMessage"></div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save changes</button>
      </div>
    </form>
    `;

    const form = document.getElementById('createItem');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        clearErrors();
        const nameField = document.querySelector('input[name=name]');
        const priceField = document.querySelector('input[name=price]');
        const descField = document.querySelector('input[name=description]');
        const formModal = document.querySelector('#create');
        const modal = bootstrap.Modal.getInstance(formModal);

        if (isCreate === true) {
            let body = {
                name: nameField.value,
                price: priceField.value,
                type,
                description: descField.value,
                category,
            };
            let error = null;
            if (body.name === '') {
                error = 'Name is required';
            } else if (body.price === '') {
                error = 'Price is required';
            } else if (body.description === '') {
                error = 'Description is required';
            }
            if (!error) {
                axios
                    .post('/api/menu/', body)
                    .then((response) => {
                        modal.hide();

                        renderCategory(type, category);
                    })
                    .catch((error) => {});
            } else {
                displayError(error);
            }
        } else {
            let body = {
                id,
                name: nameField.value,
                price: priceField.value,
                type,
                description: descField.value,
                category,
            };
            let error = null;
            if (body.name === '') {
                error = 'Name is required';
            } else if (body.price === '') {
                error = 'Price is required';
            } else if (body.description === '') {
                error = 'Description is required';
            }
            if (!error) {
                axios
                    .put(`/api/menu/`, body)
                    .then((response) => {
                        modal.hide();
                        renderCategory(type, category);
                    })
                    .catch((error) => {});
            } else {
                displayError(error);
            }
        }
    });
}

function renderDelItem(type, category, id) {
    const createModal = document.querySelector('#formModal');
    const div = document.createElement('div');
    createModal.replaceChildren(div);
    div.innerHTML = `
    <p>Are you sure you want to delete this item?</p>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="renderDel('${type}', '${category}', ${id})">Delete</button>
    </div>
  `;
}

function renderDel(type, category, id) {
    axios
        .delete(`/api/menu/${id}`)
        .then((response) => {
            renderCategory(type, category);
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}

function renderDelMessage(id) {
    const createModal = document.querySelector('#formModal');
    const div = document.createElement('div');
    createModal.replaceChildren(div);
    div.innerHTML = `
    <p>Are you sure you want to delete this message?</p>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="renderDelMsg(${id})">Delete</button>
    </div>
  `;
}

function renderDelMsg(id) {
    axios
        .delete(`/api/contact/${id}`)
        .then((response) => {
            renderContactMessages();
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}
