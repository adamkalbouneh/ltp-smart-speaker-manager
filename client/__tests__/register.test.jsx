import {fireEvent, render, screen} from '@testing-library/react'
import SignUp from '../src/pages/SignUpPage'
import '@testing-library/jest-dom'
import user from '@testing-library/user-event'
import '@babel/preset-react'
import React from 'react'

describe('register', () => {

    let nameInput
    let emailInput
    let passwordInput
    let passwordInput2
    let submitButton

    beforeEach(() => {
        const { getByTestId, getByText } = render(<SignUp/>)

        nameInput = screen.getByTestId('name')
        emailInput = screen.getByTestId('email')
        passwordInput = screen.getByTestId('password')
        passwordInput2 = screen.getByTestId('password2')
        submitButton = screen.getByTestId('submit')
    })

    it('signup page successfully rendered', () => {
        const signUp = screen.getByText("Already have an account?")
        expect(signUp).toBeInTheDocument()
    })

    it('testing validation with no information entered', async () => {
        //inputs data into fields
        (async ( ) => {
            fireEvent.change(emailInput, {
                target: {value: ''},
            });

            fireEvent.change(emailInput, {
                target: {value: ''},
            });

            fireEvent.change(passwordInput, {
                target: {value: ''},
            })

            fireEvent.change(passwordInput2, {
                target: {value: ''},
            })
        })();

        //submits form
        (async ( ) => {
            fireEvent.click(submitButton);
        })();

        const errorTxt = await screen.getByTestId('error')
        expect(errorTxt.innerText).toBe("Enter a first name")

    })


})
