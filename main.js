import {
  closeAddContact,
  modalAddContact,
  saveContact,
  showAddContact,
} from './src/dom/button'
import { addContact } from './src/main/addContact'

document.addEventListener('DOMContentLoaded', function () {
  showAddContact.addEventListener('click', () => {
    modalAddContact.classList.remove('hidden')
  })

  closeAddContact.addEventListener('click', () => {
    modalAddContact.classList.add('hidden')
  })

  modalAddContact.addEventListener('click', (event) => {
    if (event.target === modalAddContact) {
      modalAddContact.classList.add('hidden')
    }
  })

  saveContact.addEventListener('click', () => {
    addContact()
  })
})
