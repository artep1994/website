$(document).mousemove(function(e) {
    $("html, body").scrollTop(function(i, v) {
        var h = $(window).height();
        var y = e.clientY - h / 2;
        return v + y * 0.01;
    });

      $("html, body").scrollLeft(function(i, v) {
        var w = $(window).width();
        var x = e.clientX - w / 2;
        return v + x * 0.01;
    });

});

//display project titles on hover
(function() {
  const item = document.getElementsByClassName('item');
  item.forEach((item)=> {
      const title = e.target.getAttribute("data-title");
      item.innerHTML += '<span>'+title+'</span>';
  });
});

//filtering by keywords
(function() {
   const nav = document.querySelectorAll('.navigation')
   const items = document.querySelectorAll('.item')

   nav.forEach((nav) => {
     nav.addEventListener('click', (e) => {
       e.preventDefault()
       const filter = e.target.dataset.filter

       items.forEach((item) => {
         if (filter === 'all') {
           item.style.display = 'block'
         } else {
           if (item.classList.contains(filter)) {
             item.style.display = 'block'
           } else {
             item.style.display = 'none'
           }
         }
       })
     })
   })
})();
