import React from 'react';

import TextInput from './forms/TextInput';
import FormButton from './forms/FormButton';
import MultiOptionInput from './forms/MultiOptionInput';
import { groupRideOptions, weekDays } from '../constants/formOptions';
import style from './AddUserForm.module.scss';

const AddUserForm = ({ addUser }) => {
  return (
    <div className={style.formContainer}>
      <hr/>

      <form className={style.addUserForm}>
        <div className={style.formPart}>
          <TextInput label='Username' instructions='Instructions' />
          <TextInput label='Name' instructions='Instructions' />
          <TextInput label='Email' instructions='Instructions' />

          <div>
            <FormButton type='submit' label='Save' />
            <FormButton type='reset' label='Discard' />
          </div>
        </div>

        <div className={style.formPart}>
          <TextInput label='City' instructions='Instructions' optional />
          <MultiOptionInput
            label={'Ride in group?'}
            name={'groupRide'}
            options={groupRideOptions}
            type={'radio'}
          />
          <MultiOptionInput
            label={'Days of the week'}
            name={'weekDays'}
            options={weekDays}
            type={'checkbox'}
          />
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
