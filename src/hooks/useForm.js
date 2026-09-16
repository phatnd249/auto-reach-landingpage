import { useState } from 'react'

/**
 * Form handling hook with validation
 * @param {Object} initialValues - Initial form field values
 * @param {Function} validate - Validation function returning error object
 * @returns {{ values, errors, isSubmitting, handleChange, handleSubmit, resetForm }}
 */
export function useForm(initialValues = {}, validate = () => ({})) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (onSubmit) => {
    const validationErrors = validate(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true)
      try {
        await onSubmit(values)
      } catch (err) {
        console.error('Form submission error:', err)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
    setIsSubmitting(false)
  }

  return { values, errors, isSubmitting, handleChange, handleSubmit, resetForm }
}
