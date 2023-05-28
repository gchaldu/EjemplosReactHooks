import React, { useState } from 'react'

export const useForm = (inicialForm = {}) => {

    const [formState, setFormState] = useState(inicialForm)

    const onChangeForm = ({ target }) => {

        const { name, value } = target;

        setFormState(
            {
                ...formState,
                [name]: value
            }
        )
    }
    const onResetForm = () => {
        setFormState(inicialForm);
    }
    return {
        formState,
        setFormState,
        onChangeForm,
        onResetForm
    }
}
