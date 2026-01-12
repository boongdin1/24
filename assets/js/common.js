const aside = {
    init(){
        document.querySelector('header .menu-btn').addEventListener('click', function(){
            document.querySelectorAll('header, aside').forEach(el => el.classList.toggle('open'));
            document.querySelector('html').classList.toggle('hidden');
        });
        document.querySelectorAll('aside .m-nav .btn-link').forEach(function(btn){
            btn.addEventListener('click', function(){
                const depth = this.parentElement.querySelector('.depth');
                if(depth){
                    depth.slideToggle(300);
                }
            });
        });
    }
}
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration:800
    });
    aside.init();

    document.querySelectorAll('#board .board-tab').forEach(tab => {
        const ul = tab.querySelector('ul');
        if (!ul) return;
      
        const checkAlign = () => {
          const needScroll = ul.scrollWidth > tab.clientWidth;
          ul.classList.toggle('is-scroll', needScroll);
        };
      
        checkAlign();
        window.addEventListener('resize', checkAlign);
    });
});
window.addEventListener('load', function() {
    document.documentElement.classList.add('init');
});