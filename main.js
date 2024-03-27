document.addEventListener('DOMContentLoaded', function () {
  const modalAddContact = document.getElementById('modal-add-contact')
  const closeAddContact = document.getElementById('close-add-contact')
  const showAddContact = document.getElementById('show-add-contact')

  showAddContact.addEventListener('click', function () {
    modalAddContact.classList.remove('hidden')
  })

  closeAddContact.addEventListener('click', function () {
    modalAddContact.classList.add('hidden')
  })

  modalAddContact.addEventListener('click', function (event) {
    if (event.target === modalAddContact) {
      modalAddContact.classList.add('hidden')
    }
  })
})
