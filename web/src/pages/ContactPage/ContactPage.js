import { MetaTags } from '@redwoodjs/web'
import {
  Form,
  FieldError,
  FormError,
  Label,
  TextAreaField,
  TextField,
  Submit,
  useForm,
} from '@redwoodjs/forms'

import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm({ mode: 'onBlur' })

  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
      formMethods.reset()
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Toaster toastOptions={{ duration: 100000 }} />
      <Form
        onSubmit={onSubmit}
        config={{ mode: 'onBlur' }}
        error={error}
        formMethods={formMethods}
      >
        <FormError error={error} wrapperClassName="form-error" />
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
        <Submit disabled={loading}>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
