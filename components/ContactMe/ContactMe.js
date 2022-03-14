import axios from 'axios'
import { useState } from 'react'
import ContactField from './ContactField'
import DirectContact from './DirectContact'

const emailRegex =
  /^[a-zA-Z]{1,}[0-9]{0,}\.{0,1}[a-zA-Z]{2,}[0-9]{0,}@[a-zA-Z]{2,}\.{1}[a-zA-Z]{2,}$/

const STATIC_FORMDATA = {
  name: '',
  email: '',
  message: ''
}

const STATIC_SENDING_MESSAGE = 'Message Sending...'

const ContactMe = () => {
  const [formData, setFormData] = useState(STATIC_FORMDATA)
  const [loading, setLoading] = useState(false)
  const [sendText, setSendText] = useState(STATIC_SENDING_MESSAGE)
  const [error, setError] = useState('')

  const handleInputChange = (e) => {
    setError('')
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()

      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.message.trim()
      )
        throw new Error('Fill All Inputs')

      if (!emailRegex.test(formData.email))
        throw new Error('Invaild Email Address')

      setLoading(true)
      await axios.post('/api/message', formData)

      setSendText('Message Sent')
      setTimeout(() => {
        setLoading(false)
        setSendText(STATIC_SENDING_MESSAGE)
        setFormData(STATIC_FORMDATA)
      }, 1500)
    } catch (error) {
      setLoading(false)
      const errorMessage = error?.response?.data
        ? error.response.data?.message
        : error.message

      setError(errorMessage)
      console.error(errorMessage)
    }
  }

  return (
    <section id='contact-me' className='my-20 scroll-m-24 py-4'>
      <h2 className='mb-16 text-center text-3xl font-bold text-main underline underline-offset-4'>
        CONTACT ME
      </h2>

      {/* Direct Contact */}
      <div className='mb-12 flex flex-wrap justify-center gap-4 px-3'>
        <DirectContact
          href={'mailto:aniloli42@gmail.com'}
          text={'aniloli42@gmail.com'}
        >
          <svg
            viewBox='0 0 25 20'
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 fill-white'
          >
            <path d='M24.5264 6.81641C24.7168 6.66504 25 6.80664 25 7.0459V17.0312C25 18.3252 23.9502 19.375 22.6562 19.375H2.34375C1.0498 19.375 0 18.3252 0 17.0312V7.05078C0 6.80664 0.27832 6.66992 0.473633 6.82129C1.56738 7.6709 3.01758 8.75 7.99805 12.3682C9.02832 13.1201 10.7666 14.7021 12.5 14.6924C14.2432 14.707 16.0156 13.0908 17.0068 12.3682C21.9873 8.75 23.4326 7.66602 24.5264 6.81641ZM12.5 13.125C13.6328 13.1445 15.2637 11.6992 16.084 11.1035C22.5635 6.40137 23.0566 5.99121 24.5508 4.81934C24.834 4.59961 25 4.25781 25 3.89648V2.96875C25 1.6748 23.9502 0.625 22.6562 0.625H2.34375C1.0498 0.625 0 1.6748 0 2.96875V3.89648C0 4.25781 0.166016 4.59473 0.449219 4.81934C1.94336 5.98633 2.43652 6.40137 8.91602 11.1035C9.73633 11.6992 11.3672 13.1445 12.5 13.125Z' />
          </svg>
        </DirectContact>
        <DirectContact href={'tel:+9779806242024'} text={'+977 9806242024'}>
          <svg
            viewBox='0 0 25 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 fill-white'
          >
            <path d='M24.2866 18.1656L18.8179 15.8218C18.5843 15.7223 18.3246 15.7013 18.078 15.762C17.8315 15.8228 17.6113 15.962 17.4507 16.1587L15.0288 19.1177C11.2279 17.3256 8.16904 14.2668 6.37695 10.4659L9.33594 8.04399C9.53305 7.88368 9.67256 7.66351 9.73335 7.41682C9.79414 7.17013 9.7729 6.91035 9.67285 6.6768L7.3291 1.20805C7.21929 0.9563 7.02508 0.750751 6.77996 0.626852C6.53483 0.502952 6.25416 0.468467 5.98633 0.529342L0.908203 1.70122C0.649985 1.76085 0.419602 1.90624 0.254656 2.11366C0.0897096 2.32109 -5.94829e-05 2.57829 2.95713e-08 2.84331C2.95713e-08 15.3677 10.1514 25.4996 22.6562 25.4996C22.9213 25.4997 23.1787 25.41 23.3862 25.2451C23.5937 25.0801 23.7392 24.8497 23.7988 24.5914L24.9707 19.5132C25.0312 19.2441 24.996 18.9623 24.8711 18.7163C24.7463 18.4704 24.5396 18.2756 24.2866 18.1656Z' />
          </svg>
        </DirectContact>
        <DirectContact
          href={'https://goo.gl/maps/FkH1yPAN3kKEE9Bz6'}
          text={'Gadhawa-6, Dang 22415, Nepal'}
        >
          <svg
            className='h-4 w-4 fill-white'
            viewBox='0 0 19 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M8.41104 24.9956C1.31641 14.7105 -0.000488281 13.6549 -0.000488281 9.875C-0.000488281 4.69731 4.19683 0.5 9.37451 0.5C14.5522 0.5 18.7495 4.69731 18.7495 9.875C18.7495 13.6549 17.4326 14.7105 10.338 24.9956C9.87241 25.6682 8.87656 25.6681 8.41104 24.9956ZM9.37451 13.7812C11.5319 13.7812 13.2808 12.0324 13.2808 9.875C13.2808 7.71763 11.5319 5.96875 9.37451 5.96875C7.21714 5.96875 5.46826 7.71763 5.46826 9.875C5.46826 12.0324 7.21714 13.7812 9.37451 13.7812Z' />
          </svg>
        </DirectContact>
      </div>

      <div className='my-4 flex flex-col items-center justify-center'>
        <form
          method='post'
          className='flex w-full max-w-xs flex-1 flex-col gap-4 md:w-[500px]'
          onSubmit={handleSubmit}
        >
          <ContactField
            fieldName={'Name'}
            id={'name'}
            type={'text'}
            handleInputChange={handleInputChange}
            formData={formData}
          />
          <ContactField
            fieldName={'Email'}
            id={'email'}
            type={'text'}
            handleInputChange={handleInputChange}
            formData={formData}
            placeholder={'Use real email to get reply!'}
          />
          <ContactField
            fieldName={'Message'}
            id={'message'}
            type={'textarea'}
            handleInputChange={handleInputChange}
            formData={formData}
          />

          <button
            type='submit'
            className='disabled:cursor-disabled rounded-sm bg-main py-2 px-4 text-white outline-none transition-colors duration-200 ease-in-out hover:bg-main/90 focus-visible:bg-main/90'
            disabled={loading}
          >
            {loading ? sendText : 'Send Message'}
          </button>
          {error && (
            <p className='mt-2 w-full  rounded-sm bg-red-500 p-2 text-center text-white'>
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default ContactMe
