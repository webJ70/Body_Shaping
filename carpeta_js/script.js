
type="text/javascript">
        window.addEventListener("scroll",function( ){
            var header = document.querySelector(".menu");
            header.classList.toggle("abajo",window.scrollY>0);
        })