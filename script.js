window.revelar = ScrollReveal({reset:true})
revelar.reveal('.efeito', {
    duration:2000,
    distance: '95px',
    delay: 100
})
revelar.reveal('.esquerda', {
    duration:2000,
    distance: '95px',
    delay: 200,
    origin: 'left'
})
revelar.reveal('.direita', {
    duration:2000,
    distance: '95px',
    delay: 200,
    origin: 'right'
})
revelar.reveal('.bottom', {
    duration:2000,
    distance: '95px',
    delay: 200,
    origin: 'bottom'
})