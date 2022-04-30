const elCard = document.querySelector('.hero-section__item-contents-wrapper')
const elCardBtn = document.querySelectorAll('.hero-section__toggler')

elCardBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.hero-section__item-contents-wrapper').classList.toggle('hero-section-button--active')
  })
})
