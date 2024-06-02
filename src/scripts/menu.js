const hello = document.querySelector(".hamburger")?.addEventListener('click' , () => {
    document.querySelector('.nav-links')?.classList.toggle('expanded')
});

console.log("ab yha hello jii aa rhe" , hello);