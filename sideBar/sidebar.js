const body = document.getElementById('body');
      sidebar = document.getElementById('.sidebar');
      toggle = document.getElementById('.toggle');
      searchBox = document.getElementById('.search-box');
      modeSwitch = document.getElementById('.toggle-switch');
      modeText = document.getElementById('.mode-text');

toggle.addEventListener('click', ()=> {
    sidebar.classList.toggle('close');
})


modeSwitch.addEventListener('click', ()=> {
    body.classList.toggle('dark');
})