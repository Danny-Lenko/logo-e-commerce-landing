// ----------------------------------- header
const navBtn = document.querySelector('#nav-btn')
const navContainer = document.querySelector('.header__nav')
const links = document.querySelectorAll('.header__li')
const linkHeight = links[0].getBoundingClientRect().height
const allLinksHeight = linkHeight * links.length

navBtn.addEventListener('click', () => {
   if (navContainer.classList.contains('opened')) {
      navContainer.classList.remove('opened')
   } else {
      navContainer.classList.add('opened')
   }

   if (navBtn.classList.contains('cross')) {
      navBtn.classList.remove('cross')
   } else {
      navBtn.classList.add('cross')
   }

   manageMenu(allLinksHeight)
})

function manageMenu(height) {
   if (navContainer.classList.contains('opened')) {
      navContainer.style.height=`${height}px`
   } else {
      navContainer.style.height='0'
   }
}

links.forEach(link => {
   link.addEventListener('click', () => {
      links.forEach(link => {
         link.classList.remove('active')
      })
      link.classList.add('active')
   })
})


// --------------------------------- client section

const clientBtns = document.querySelectorAll('.client__comment-btn')
clientBtns.forEach(btn => {
   btn.addEventListener('click', () => {
      clientBtns.forEach(link => {
         link.classList.remove('active-btn')
      })
      btn.classList.add('active-btn')
   })
})

