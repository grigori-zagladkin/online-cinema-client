import { FC, Fragment } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import Field from '@/components/ui/form-elements/Field'

import { validEmail } from '@/shared/regex'

import { IAuthInput } from './auth.interface'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<IAuthInput>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<Fragment>
			<Field
				{...register('email', {
					required: 'email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address',
					},
				})}
				placeholder="E-mail"
				error={errors.email}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'password is required',
								minLength: {
									value: 6,
									message: 'Min length should more 6 symbols',
								},
						  }
						: {}
				)}
				type="password"
				placeholder="Password"
				error={errors.password}
			/>
		</Fragment>
	)
}

export default AuthFields
