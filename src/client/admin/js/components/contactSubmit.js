function checkMessages() {
  axios.get("/api/contact/").then((response) => {
    message = response.data;
    let messageButton = document.querySelector("#message-button");
    message.forEach((message) => {
      if (message.unread === true) {
        messageButton.innerHTML = `Messages <span class="badge bg-danger">New</span>`;
      } else {
        messageButton.innerHTML = `Messages`;
      }
    });
  });
}

function renderContactMessages() {
  const page = document.querySelector("#page");
  const section = document.createElement("section");
  section.classList.add("container");
  page.replaceChildren(section);

  section.innerHTML = `      
  <div class="container">
      <div class="title_header pt-5 pb-2">
        <h3 class="catagory text-uppercase">Messages</h3>
      </div>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th style="width: 8rem" scope="col">Name</th>
            <th style="width: 8rem" scope="col">Email</th>
            <th scope="col">Enquiry</th>
          </tr>
        </thead>
        <tbody id="messageTable">
        </tbody>
      </table>
    </div>
    
<!-- Modal -->
<div class="modal fade" id="create" tabindex="-1" aria-labelledby="create" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="create">Delete Message</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div id="formModal" class="modal-body">
          </div>
        </div>
      </div>
    </div>
    `;

  axios.patch("../api/contact").then((response) => {
    const message = response.data;
    checkMessages();
  });

  axios.get(`../api/contact`).then((response) => {
    const messageData = response.data;
    const messageTable = document.querySelector("#messageTable");
    messageData.forEach((message) => {
      const tr = document.createElement("tr");
      messageTable.appendChild(tr).innerHTML = `
            <th scope="row">${message.name}</th>
            <td>${message.email}</td>
            <td>${message.enquiry}</td>
            <td>
              
              <button class="btn btn-danger" onClick="renderDelMessage(${message.id}
            )" data-bs-toggle="modal" data-bs-target="#create">Delete</button>
            </td>
          `;
    });
  });
}
