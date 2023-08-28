document.querySelectorAll('.panel').forEach(panel => {
  panel.addEventListener('click', () =>{
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses(){
  document.querySelectorAll('.panel').forEach(panel => {
    panel.classList.remove('active')
  })
}