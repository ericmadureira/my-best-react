import React from 'react';

import TextInput from './forms/TextInput';
import style from './AddUserForm.module.scss';

const AddUserForm = ({ addUser }) => {
  return (
    <div className={style.formContainer}>
      <hr className={style.upperBorder}/>

      <form className={style.addForm}>
        <div className={style.formPart}>
          <TextInput label='Username' instructions='Instructions' />
          <TextInput label='Name' instructions='Instructions' />
          <TextInput label='Email' instructions='Instructions' />

          <div>
            <button type='submit' className={`${style.formButton} ${style.submitButton}`}>
              Save
            </button>
            <button className={`${style.formButton} ${style.cancelButton}`}>
              Discard
            </button>
          </div>
        </div>

        <div className={style.formPart}>
          <TextInput label='City' instructions='Instructions' optional />

          <div className={style.multiFieldContainer}>
            <span className={style.fieldLabel}>Ride in group?</span>
            <div>
              <div className={style.inputContainer}>
                <input type='radio' id='always' name='groupRide' value='always' />
                <label for='male'>Always</label>
              </div>
              <div className={style.inputContainer}>
                <input type='radio' id='sometimes' name='groupRide' value='sometimes' />
                <label for='sometimes'>Sometimes</label>
              </div>
              <div className={style.inputContainer}>
                <input type='radio' id='never' name='groupRide' value='never' />
                <label for='never'>Never</label>
              </div>
            </div>
          </div>

          <div className={style.multiFieldContainer}>
            <span className={style.fieldLabel}>Days of the week</span>
            <div>
              <div className={style.inputContainer}>
                <input type='checkbox' name='sun' value='sun' />
                <label for='sun'>Sun</label>
              </div>
              <div className={style.inputContainer}>
                <input type='checkbox' name='mon' value='mon' />
                <label for='mon'>Mon</label>
              </div>
              <div className={style.inputContainer}>
                <input type='checkbox' name='tue' value='tue' />
                <label for='tue'>Tue</label>
              </div>
              <div className={style.inputContainer}>
                <input type='checkbox' name='wed' value='wed' />
                <label for='wed'>Wed</label>
              </div>
              <div className={style.inputContainer}>
                <input type='checkbox' name='thu' value='thu' />
                <label for='thu'>Thu</label>
              </div>
              <div className={style.inputContainer}>
                <input type='checkbox' name='fri' value='fri' />
                <label for='fri'>Fri</label>
              </div>
              <div className={style.inputContainer}>
                <input type='checkbox' name='sat' value='sat' />
                <label for='sat'>Sat</label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
