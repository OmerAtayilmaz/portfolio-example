$(function() {
    // Sidebar toggle behavior
    $('#sidebarCollapse').on('click', function() {
      $('#sidebar, #content').toggleClass('active');
    });
  });

  document.querySelector('.navigation-nav')
  .addEventListener('click',(e)=>{
    e.preventDefault();
    //Matching strategy
    if(e.target.classList.contains('nav-link')){
      const id=e.target.getAttribute('href');
      console.log("id");
      document.querySelector(id)
      .scrollIntoView({behavior:"smooth"});
    }
  })