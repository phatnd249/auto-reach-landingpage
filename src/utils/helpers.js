/**
 * Validate email format
 * @param {string} email
 * @returns {boolean}
 */
export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

/**
 * Validate required field
 * @param {string} value
 * @returns {boolean}
 */
export function validateRequired(value) {
  return value !== null && value !== undefined && value.toString().trim() !== ''
}

/**
 * Validate phone number (Vietnam format)
 * @param {string} phone
 * @returns {boolean}
 */
export function validatePhone(phone) {
  const re = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/
  return re.test(phone)
}

/**
 * Format currency to VND
 * @param {number} amount
 * @returns {string}
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount)
}

/**
 * Format number with dots separator
 * @param {number} num
 * @returns {string}
 */
export function formatNumber(num) {
  return new Intl.NumberFormat('vi-VN').format(num)
}
