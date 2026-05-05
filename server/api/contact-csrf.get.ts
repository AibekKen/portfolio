import { createContactCsrfToken } from '../utils/contactSecurity'

export default defineEventHandler((event) => {
  return {
    token: createContactCsrfToken(event),
  }
})
