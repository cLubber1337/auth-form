import { SignInFormType } from '@/components/sign-in-form/sign-in-form'

export const auth = (data: SignInFormType): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === 'test@example.com' && data.password === '123') {
        resolve({
          email: 'test@example.com',
          id: 1,
          name: 'Scrooge McDuck',
          photo: 'https://upload.wikimedia.org/wikipedia/ru/3/3f/Scrooge1.jpg',
          token: '123456789',
        })
      } else {
        reject('Incorrect email or password')
      }
    }, 2000)
  })
}

export type User = {
  email: string
  id: number
  name: string
  photo: string
  token: string
}
