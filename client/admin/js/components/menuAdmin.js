function renderCategory(type, category) {
  const page = document.querySelector("#page");
  const section = document.createElement("section");
  section.classList.add("container");
  page.replaceChildren(section);

  section.innerHTML = `      
  <div class="container">
      <div class="title_header pt-5 pb-2">
        <h3 class="catagory">${category}</h3>
        <p class="desc">Short desc on how to update / delete items</p>
        <button onClick="renderModItem('${type}', '${category}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#create">Create New</button>
      </div>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th style="width: 8rem" scope="col">Name</th>
            <th scope="col">Description</th>
            <th style="width: 4rem" scope="col">Price</th>
            <th style="width: 12rem" scope="col">Actions</th>
          </tr>
        </thead>
        <tbody id="menuTable">
        </tbody>
      </table>
    </div>
    
<!-- Modal -->
<div class="modal fade" id="create" tabindex="-1" aria-labelledby="create" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="create">Add Item</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div id="formModal" class="modal-body">
          </div>
        </div>
      </div>
    </div>
    `;

  axios.get(`../api/menu/${category}`).then((response) => {
    const menuData = response.data;
    const menuTable = document.querySelector("#menuTable");
    menuData.forEach((menuData) => {
      const tr = document.createElement("tr");
      menuTable.appendChild(tr).innerHTML = `
            <th scope="row">${menuData.name}</th>
            <td>${menuData.description}</td>
            <td>${menuData.price}</td>
            <td>
              <button class="btn btn-secondary" onClick="renderModItem('${
                menuData.type
              }','${menuData.category}',${(isCreate = false)},${menuData.id},'${
        menuData.name
      }','${menuData.description}',${
        menuData.price
      })" data-bs-toggle="modal" data-bs-target="#create">Update</button>
              <button class="btn btn-danger" onClick="deleteBlah(${
                menuData.id
              })">Delete</button>
            </td>
          `;
    });
  });
}
