/* baicai 的主页 · 共享脚本（导航高亮 + 页脚年份） */
(function(){
  var path = location.pathname.split('/').pop() || 'index.html';
  var links = document.querySelectorAll('.nav-links a[data-page]');
  for (var i = 0; i < links.length; i++){
    if (links[i].getAttribute('data-page') === path){
      links[i].classList.add('active');
      links[i].setAttribute('aria-current', 'page');
    }
  }
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
