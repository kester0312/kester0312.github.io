document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <link rel="stylesheet" href="../../code/css/header.css">
    <header class="site-header" style="padding-top: 8px;padding-left: 10px;">
      <div class="header-container">
        <a href="../../index.html" class="logo" title="麥塊藍月光">
          <img src="../../icon.png" alt="Logo" style="width: auto; height: 55px;">
        </a>
      </div>
    </header>
    <br>
    <br>
  `;
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
});