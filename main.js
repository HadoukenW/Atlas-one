//Burger
function burgerMenu(){
    let burger = document.querySelector('.burger')
    let menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    const btns = document.querySelector('.navbar__btns')
    const html = document.querySelector('html')
    burger.addEventListener('click', () =>{
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active-burger')
            body.classList.add('locked')
            btns.classList.add('active')
            html.classList.add('active')
        }
        else {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
            btns.classList.remove('active')
            html.classList.remove('active')
        }
    })

    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 992) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
            btns.classList.remove('active')
            html.classList.remove('active')
        }
    })

}
burgerMenu()

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
    const nav = document.querySelector('nav')

    // тут мы указываем в пикселях сколько нужно проскролить, чтобы наше меню стало фиксированным
    const breakpoint = 1
    if(window.scrollY >= breakpoint) {
        nav.classList.add('fixed__nav')
    }
    else {
        nav.classList.remove('fixed__nav')
    }
}

//getting uncommented if we need to execute this function
// window.addEventListener('scroll', fixedNav)



function selectionMobile() {
    const mobileMenu = document.querySelectorAll('.mobile-menu')

    mobileMenu
}

selectionMobile()

//dropdown

const menu__link = document.querySelector('.menu__item-link')

menu__link.addEventListener('click', (e) => {
    e.preventDefault()
})

document.addEventListener('click', e => {
    
    const isDropdownButton = e.target.matches('[data-dropdown-button]')
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
    
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})

//Swiper
const swiper = new Swiper('.swiper', {
    speed: 500,
    spaceBetween: 60,
    slidesPerView: 3,

    breakpoints: {
        // when window width is >= 320px
        992: {
          slidesPerView: 3,
          spaceBetween: 60
        },
        
        480: {
            slidesPerView: 2,
            spaceBetween: 0
        },

        0: {
            slidesPerView: 1,
            spaceBetween: 10
        },

      },
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-next-arrow',
      prevEl: '.swiper-prev-arrow',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
