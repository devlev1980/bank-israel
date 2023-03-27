function toggleMenu(){
    document.getElementById('drawer').classList.toggle("open");
}

function toggleMenuContent(id){
    document.getElementById(`menu-content-${id}`).classList.toggle("open");
    document.getElementById('back-menu').classList.toggle("open");
}
function back(){
    
    document.getElementById('back-menu').classList.toggle("open");
    const elems = document.querySelectorAll(`.menu-content`);

    [].forEach.call(elems, function(el) {
        el.classList.remove("open");
    });
}

function toggleAdvance(){
    document.getElementById('advanced-search').classList.toggle("open");
}
function toggleSearch(){
    document.getElementById('search-container').classList.toggle("open");
}
