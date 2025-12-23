// header.js
document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
  
    <link rel="stylesheet" href="../../code/css/header.css">
    <header class="site-header">
      <a href="../../index.html" title="麥塊藍月光">
        <img src="../../icon.png" alt="Logo">
      </a>
    </header>
    <br/><br/><br/>
  `;

  // Insert at the very top of <body>
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
});