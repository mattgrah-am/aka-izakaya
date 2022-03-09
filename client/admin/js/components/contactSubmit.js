function renderContactMessages() {
    const page = document.querySelector('#page');
    const section = document.createElement('section');
    section.classList.add('container');
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
    
    <div id="test">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis accusamus consectetur amet, debitis ab animi ad numquam quibusdam culpa alias saepe fugiat, harum, asperiores a nostrum possimus ut ea magnam.

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, vitae perspiciatis doloremque eligendi quam harum praesentium in molestiae quae sit adipisci necessitatibus natus perferendis delectus dolorum expedita quasi dicta eos!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime maiores facilis consectetur laudantium deserunt aliquam, quaerat dolorem distinctio neque asperiores non ex qui eos. Ut recusandae nesciunt magni molestias voluptatibus?

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore tempore nobis iusto aspernatur earum? Porro expedita iste quis quod veritatis deserunt iusto facere labore tenetur. Repellendus quasi ipsum necessitatibus.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime omnis deleniti ad similique quasi non excepturi, eaque magnam perspiciatis nisi totam inventore eveniet dicta, minima eos quas impedit incidunt vero?

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis obcaecati velit numquam nulla harum quod nostrum. Eveniet cupiditate in aspernatur iusto praesentium accusantium autem minus eius debitis! Maiores, inventore quo?

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio harum eos id accusamus, voluptas quia mollitia cum, dicta laudantium nesciunt quaerat, quisquam tempora libero. Sequi nihil odit expedita voluptas explicabo!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque aliquid quam in modi nemo fuga omnis vero dolorem sunt vel eius magni, atque harum? Ex harum error voluptates fugit.

            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias deleniti nisi ex inventore incidunt quas tempore at doloremque, omnis blanditiis! Aut dolorum tempora assumenda, neque optio rem accusantium magnam est!

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi beatae qui corporis voluptates quas dicta nihil illo odio nulla ut eius, magnam sapiente et maxime molestiae dolore quia hic! Doloribus.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident magni, tempore necessitatibus facilis voluptate ullam quisquam unde obcaecati in id sequi rerum voluptas possimus nostrum ratione similique exercitationem! Autem.

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta magnam mollitia cumque cupiditate, officiis quaerat consequatur. Quia facilis quo amet architecto quam, adipisci similique facere totam hic delectus reiciendis expedita!
        </div>

        <div id="test">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis accusamus consectetur amet, debitis ab animi ad numquam quibusdam culpa alias saepe fugiat, harum, asperiores a nostrum possimus ut ea magnam.

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, vitae perspiciatis doloremque eligendi quam harum praesentium in molestiae quae sit adipisci necessitatibus natus perferendis delectus dolorum expedita quasi dicta eos!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime maiores facilis consectetur laudantium deserunt aliquam, quaerat dolorem distinctio neque asperiores non ex qui eos. Ut recusandae nesciunt magni molestias voluptatibus?

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore tempore nobis iusto aspernatur earum? Porro expedita iste quis quod veritatis deserunt iusto facere labore tenetur. Repellendus quasi ipsum necessitatibus.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime omnis deleniti ad similique quasi non excepturi, eaque magnam perspiciatis nisi totam inventore eveniet dicta, minima eos quas impedit incidunt vero?

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis obcaecati velit numquam nulla harum quod nostrum. Eveniet cupiditate in aspernatur iusto praesentium accusantium autem minus eius debitis! Maiores, inventore quo?

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio harum eos id accusamus, voluptas quia mollitia cum, dicta laudantium nesciunt quaerat, quisquam tempora libero. Sequi nihil odit expedita voluptas explicabo!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque aliquid quam in modi nemo fuga omnis vero dolorem sunt vel eius magni, atque harum? Ex harum error voluptates fugit.

            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias deleniti nisi ex inventore incidunt quas tempore at doloremque, omnis blanditiis! Aut dolorum tempora assumenda, neque optio rem accusantium magnam est!

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi beatae qui corporis voluptates quas dicta nihil illo odio nulla ut eius, magnam sapiente et maxime molestiae dolore quia hic! Doloribus.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident magni, tempore necessitatibus facilis voluptate ullam quisquam unde obcaecati in id sequi rerum voluptas possimus nostrum ratione similique exercitationem! Autem.

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta magnam mollitia cumque cupiditate, officiis quaerat consequatur. Quia facilis quo amet architecto quam, adipisci similique facere totam hic delectus reiciendis expedita!
        </div>

        <div id="test">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis accusamus consectetur amet, debitis ab animi ad numquam quibusdam culpa alias saepe fugiat, harum, asperiores a nostrum possimus ut ea magnam.

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, vitae perspiciatis doloremque eligendi quam harum praesentium in molestiae quae sit adipisci necessitatibus natus perferendis delectus dolorum expedita quasi dicta eos!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime maiores facilis consectetur laudantium deserunt aliquam, quaerat dolorem distinctio neque asperiores non ex qui eos. Ut recusandae nesciunt magni molestias voluptatibus?

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore tempore nobis iusto aspernatur earum? Porro expedita iste quis quod veritatis deserunt iusto facere labore tenetur. Repellendus quasi ipsum necessitatibus.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime omnis deleniti ad similique quasi non excepturi, eaque magnam perspiciatis nisi totam inventore eveniet dicta, minima eos quas impedit incidunt vero?

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis obcaecati velit numquam nulla harum quod nostrum. Eveniet cupiditate in aspernatur iusto praesentium accusantium autem minus eius debitis! Maiores, inventore quo?

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio harum eos id accusamus, voluptas quia mollitia cum, dicta laudantium nesciunt quaerat, quisquam tempora libero. Sequi nihil odit expedita voluptas explicabo!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque aliquid quam in modi nemo fuga omnis vero dolorem sunt vel eius magni, atque harum? Ex harum error voluptates fugit.

            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias deleniti nisi ex inventore incidunt quas tempore at doloremque, omnis blanditiis! Aut dolorum tempora assumenda, neque optio rem accusantium magnam est!

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi beatae qui corporis voluptates quas dicta nihil illo odio nulla ut eius, magnam sapiente et maxime molestiae dolore quia hic! Doloribus.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident magni, tempore necessitatibus facilis voluptate ullam quisquam unde obcaecati in id sequi rerum voluptas possimus nostrum ratione similique exercitationem! Autem.

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta magnam mollitia cumque cupiditate, officiis quaerat consequatur. Quia facilis quo amet architecto quam, adipisci similique facere totam hic delectus reiciendis expedita!
        </div>

        <div id="test">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis accusamus consectetur amet, debitis ab animi ad numquam quibusdam culpa alias saepe fugiat, harum, asperiores a nostrum possimus ut ea magnam.

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, vitae perspiciatis doloremque eligendi quam harum praesentium in molestiae quae sit adipisci necessitatibus natus perferendis delectus dolorum expedita quasi dicta eos!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime maiores facilis consectetur laudantium deserunt aliquam, quaerat dolorem distinctio neque asperiores non ex qui eos. Ut recusandae nesciunt magni molestias voluptatibus?

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem inventore tempore nobis iusto aspernatur earum? Porro expedita iste quis quod veritatis deserunt iusto facere labore tenetur. Repellendus quasi ipsum necessitatibus.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime omnis deleniti ad similique quasi non excepturi, eaque magnam perspiciatis nisi totam inventore eveniet dicta, minima eos quas impedit incidunt vero?

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis obcaecati velit numquam nulla harum quod nostrum. Eveniet cupiditate in aspernatur iusto praesentium accusantium autem minus eius debitis! Maiores, inventore quo?

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio harum eos id accusamus, voluptas quia mollitia cum, dicta laudantium nesciunt quaerat, quisquam tempora libero. Sequi nihil odit expedita voluptas explicabo!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque aliquid quam in modi nemo fuga omnis vero dolorem sunt vel eius magni, atque harum? Ex harum error voluptates fugit.

            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias deleniti nisi ex inventore incidunt quas tempore at doloremque, omnis blanditiis! Aut dolorum tempora assumenda, neque optio rem accusantium magnam est!

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi beatae qui corporis voluptates quas dicta nihil illo odio nulla ut eius, magnam sapiente et maxime molestiae dolore quia hic! Doloribus.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident magni, tempore necessitatibus facilis voluptate ullam quisquam unde obcaecati in id sequi rerum voluptas possimus nostrum ratione similique exercitationem! Autem.

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta magnam mollitia cumque cupiditate, officiis quaerat consequatur. Quia facilis quo amet architecto quam, adipisci similique facere totam hic delectus reiciendis expedita!
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

    axios.get(`../api/contact`).then((response) => {
        const messageData = response.data;
        const messageTable = document.querySelector('#messageTable');
        messageData.forEach((message) => {
            const tr = document.createElement('tr');
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
