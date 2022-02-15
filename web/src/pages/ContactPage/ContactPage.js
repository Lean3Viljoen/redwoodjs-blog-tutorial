import { MetaTags } from '@redwoodjs/web'
import {
  Form,
  FieldError,
  Label,
  TextAreaField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <h1>ContactPage</h1>
      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
        <Label name="name" errorClassName="error">
          Name
        </Label>
        <TextField
          validation={{ required: true }}
          errorClassName="error"
          name="name"
        />
        <FieldError className="error" name="name" />

        <Label name="email" errorClassName="error">
          Email
        </Label>
        <TextField
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^.]+\..+$/,
              message: 'Please enter a valid email address',
            },
          }}
          errorClassName="error"
          name="email"
        />
        <FieldError className="error" name="email" />

        <Label name="message" errorClassName="error">
          Message
        </Label>
        <TextAreaField
          validation={{ required: true }}
          errorClassName="error"
          name="message"
        />
        <FieldError className="error" name="message" />
        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
