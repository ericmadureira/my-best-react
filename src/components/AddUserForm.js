import React from 'react';
import { Link } from 'react-router-dom';

import TextInput from './forms/TextInput';
import FormButton from './forms/FormButton';
import MultiOptionInput from './forms/MultiOptionInput';
import { groupRideOptions, weekDays } from '../constants/formOptions';
import style from './AddUserForm.module.scss';

const AddUserForm = ({ addUser }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    console.log('SUBMITTED VALUES: ', data);
    // ADICIONA USER NO STATE
    alert('The form was submitted. Thanks for your contact.');
    reset();
  };

  return (
    <div className={style.formContainer}>
      <hr/>

      <form className={style.addUserForm} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className={style.formPart}>
            <TextInput label='Username' name='username' instructions='Instructions' registerField={register} />
            <TextInput label='Name' name='name' instructions='Instructions' registerField={register} />
            <TextInput label='Email' name='email' instructions='Instructions' registerField={register} />
          </div>

          <div className={style.formPart}>
            <TextInput label='City' name='city' instructions='Instructions' optional registerField={register} />
            <MultiOptionInput
              label={'Ride in group?'}
              name={'groupRide'}
              options={groupRideOptions}
              type={'radio'}
              registerField={register}
            />
            <MultiOptionInput
              label={'Days of the week'}
              name={'weekDays'}
              options={weekDays}
              type={'checkbox'}
              registerField={register}
            />
          </div>
        </div>

        <div>
          <FormButton type='submit' label='Save' />
          <FormButton type='reset' label='Discard' />
        </div>

        <div>
          <Link to="/users">
            <button style={{ marginTop: '20px'}}>User List</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
