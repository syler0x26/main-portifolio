/*const cards = document.querySelectorAll('.card .img-projetos');

cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Posição X dentro da imagem
        const y = e.clientY - rect.top;  // Posição Y dentro da imagem

        // Ajusta a origem do zoom e aplica a transformação
        card.style.transformOrigin = `${x}px ${y}px`;
        card.style.transform = 'scale(1.5)'; // Ampliação
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)'; // Restaura ao tamanho original
    });
});*/
class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList  = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active"
        
        this.handleClick = this.handleClick.bind(this)
    }
    animatelinks(){
        this.navLinks.forEach((link) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`)
        })
    }
    handleClick(){
        this.navList.classList.toggle(this.activeClass)
        this.mobileMenu.classList.toggle(this.activeClass)
        this.animatelinks()
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick)
    }
    init(){
        if (this.mobileMenu){
            this.addClickEvent()
        }
        return this
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
)
mobileNavbar.init()

