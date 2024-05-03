export const saveContactToLocalStorage = (data) => {
  return localStorage.setItem('contact', data)
}

export const getContactFromLocalStorage = () => {
  return localStorage.getItem('contact')
}
