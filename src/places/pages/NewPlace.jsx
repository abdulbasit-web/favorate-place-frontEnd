import React from 'react'

import Input from '../../shared/components/FormElements/Input'
import {VALIDATOR_REQUIRE} from '../../shared/util/validators'
import './NewPlace.css'

function NewPlace() {
  return (
    <form className='place-form'>
      <Input
        type='text'
        label='Title'
        element={'input'}
        validators={[VALIDATOR_REQUIRE()]}
        errorText='please enter a valid title.'
      />
    </form>
  )
}

export default NewPlace
