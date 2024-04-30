import {
  closeAddContact,
  modalContact,
  saveContact,
  showAddContact,
} from './src/dom/button'
import addContact from './src/features/addContact'
import showContact from './src/features/showContact'

document.addEventListener('DOMContentLoaded', function () {
  showContact()
  showAddContact.addEventListener('click', () => {
    modalContact.classList.remove('hidden')
  })

  closeAddContact.addEventListener('click', () => {
    modalContact.classList.add('hidden')
  })

  modalContact.addEventListener('click', (event) => {
    if (event.target === modalContact) {
      modalContact.classList.add('hidden')
    }
  })

  saveContact.addEventListener('click', () => {
    addContact()
  })
})
