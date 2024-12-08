let toDoForm = document.getElementById("todoform");
const toastElement = document.querySelector('#toast');
const toastBody = toastElement.querySelector('.toast-body');
const toast = new bootstrap.Toast(toastElement); // Initialize the toast

const customMessages = {
    todotitle: {
        empty: 'Todo title should not be empty.'
    },
    tododesc: {
        empty: 'Todo desc should not be empty.'
    }
};


if (toDoForm) {
    toDoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;
        let errorMessage = '';
        const nameField = toDoForm.querySelector('#todo-title');
        const descField = toDoForm.querySelector('#todo-desc');

        if (!nameField.value.trim()) {
            isValid = false;
            errorMessage = customMessages.todotitle.empty;
            nameField.classList.add('is-invalid');
        }
        else {
            nameField.classList.remove('is-invalid');
        }
        
        if (!descField.value.trim()) {
            isValid = false;
            errorMessage = customMessages.tododesc.empty;
            descField.classList.add('is-invalid');
        }
        else {
            descField.classList.remove('is-invalid');
        }


        if (!isValid) {
            toastBody.textContent = errorMessage;
            toast.show();
        } else {
            toDoForm.submit()
            toDoForm.classList.remove('was-validated');
        }
    });
}



document.addEventListener("DOMContentLoaded", function () {
    const deleteBtns = document.querySelectorAll(".delete-btn");
    const confirmDeleteLink = document.getElementById("confirmDelete");
    deleteBtns.forEach(btn => {
      btn.addEventListener("click", function () {
        const todoId = btn.getAttribute("data-id");
        confirmDeleteLink.setAttribute("href", `/delete?id=${todoId}`);
      });
    });
  });