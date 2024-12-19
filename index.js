document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar')
    const rotate = document.getElementById ('inchide-sidebar')
    const body =document.querySelector('.main-content')
    const OpenSideBar = document.getElementById("deschide-sidebar");
    const CloseSideBar = document.getElementById("inchide-sidebar");

OpenSideBar.addEventListener('click', () =>{
    ShowSideBar();
})

CloseSideBar.addEventListener('click', ()=>{
    setTimeout(HideSideBar,400)
    CloseSideBar.style.backgroundColor = 'white'
            setTimeout( () => {
                 CloseSideBar.style.backgroundColor = '';
        },620)

})


function ShowSideBar () {
   
    body.classList.add('blur');
    sidebar.classList.add('open');
    rotate.classList.remove('rotate');
}
function HideSideBar () {
    body.classList.remove('blur');
    sidebar.classList.remove('open');
    rotate.classList.add('rotate');
}

});




