document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <link rel="stylesheet" href="../../code/css/header.css">
    <header class="site-header">
      <div class="header-container">
        <a href="../../index.html" class="logo" title="麥塊藍月光">
          <img src="../../icon.png" alt="Logo">
        </a>
      </div>
    </header>
  `;
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
});