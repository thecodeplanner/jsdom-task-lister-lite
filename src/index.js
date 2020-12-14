document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', function (event) {
    event.preventDefault()
    
    let description = document.querySelector('#new-task-description').value
    
    let date = document.querySelector('#due-date').value

    let li = document.createElement('li')
      li.textContent = description
    
    let liNest = document.createElement('li')
      liNest.textContent = date

    li.appendChild(liNest)

    let button = document.createElement('button')
      button.textContent = "I'm Done!"
    
    let ul = document.querySelector('ul#tasks')
    
    ul.append(li, button)

    button.addEventListener('click', function (event) {
      li.remove()
      button.remove()
    })


    event.target.reset()

    
    })

    
  })

 



