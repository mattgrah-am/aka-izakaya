function renderFooter() {
  const footer = document.querySelector("#footer");
  footer.innerHTML = `
    <p class="text-light fw-light">Created by <a class="link-light text-decoration-none fw-bold" href="https://github.com/dalessi93" target="_blank" rel="noopener noreferrer">Daniel</a>,
      <a class="link-light text-decoration-none fw-bold" href="https://github.com/BillyHoke" target="_blank" rel="noopener noreferrer">Stefan</a>, <a
        class="link-light text-decoration-none fw-bold" href="https://github.com/tonesfrantz" target="_blank" rel="noopener noreferrer">Tony</a> & <a
        class="link-light text-decoration-none fw-bold" href="https://www.mattgrah.am/" target="_blank" rel="noopener noreferrer">Matt</a>. Code
      available on <a class="link-light text-decoration-none fw-bold" href="https://github.com/mattgrah-am/aka-izakaya" target="_blank"
        rel="noopener noreferrer">Github</a>.
    </p>
  `;
}
