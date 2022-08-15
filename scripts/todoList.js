const addButton = document.querySelector('.todo__push')
const task = document.querySelector('.todo__task')
const tasks = document.querySelector('.todo__tasks')
const toDoInput = document.querySelector('.todo__input')
const toDoIcon = document.querySelector('.todo-icon')
const container = document.querySelector('.todo__container')
const cancelToDo = document.querySelector('.cancel__todo')

addButton.addEventListener('click', () => {
  if (toDoInput.value.length == 0) {
    alert('Please Enter a Task')
  } else {
    tasks.innerHTML += `
                <div class='todo__task task'>
                    <span class='task__text'>
                        ${toDoInput.value}
                    </span>
                    <button class='task__delete'>
                        <img src='assets/svg/trash.svg' alt='trash'>
                    </button>
                </div>
            `
    toDoInput.value = ''
  }

  let currentTasks = document.querySelectorAll('.task__delete')

  for (let i = 0; i < currentTasks.length; i++) {
    currentTasks[i].onclick = function () {
      this.parentNode.remove()
    }
  }
})

toDoIcon.addEventListener('click', () => {
  container.style.right = '0'
  container.classList.remove('hide')
  container.classList.add('show')
  container.style.zIndex = 3
})

cancelToDo.addEventListener('click', () => {
  container.classList.remove('show')
  container.classList.add('hide')
  container.style.zIndex = 1
  setTimeout(() => {
    container.style.right = '100%'
  }, 500)
})
