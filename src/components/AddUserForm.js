import React from 'react';

import style from './AddUserForm.module.scss';

const AddUserForm = ({ addUser }) => (
  <div className={style.formContainer}>
    <div className={style.upperBorderContainer}>
      <hr className={style.upperBorder}/>
    </div>

    <form
      className={style.addForm}
      onSubmit={addUser}
    >
      <div className={style.formPart}>
        <div className={style.fieldContainer}>
          <span className={style.fieldLabel}>Username</span>
          <input type='text' className={`${style.formTextInput} ${style.usernameInput}`} />
          <span className={`${style.formInstructions} ${style.usernameInstruction}`}>Instruções</span>
        </div>

        <div className={style.fieldContainer}>
          <span className={`${style.fieldLabel} ${style.nameField}`}>Name</span>
          <input type='text' className={style.formTextInput} />
          <span className={style.formInstructions}>Instruções</span>
        </div>

        <div className={style.fieldContainer}>
          <span className={style.fieldLabel}>Email</span>
          <input type='text' className={style.formTextInput} />
          <span className={style.formInstructions}>Instruções</span>
        </div>

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
        <div className={style.fieldContainer}>
          <span className={style.fieldLabel}>City</span>
          <input type='text' className={style.formTextInput} />
          <span className={style.formInstructions}>Instruções</span>
        </div>

        <div className={style.multiFieldContainer}>
          <span className={style.fieldLabel}>Ride in group?</span>
          <div>
            <input type='radio' id='always' name='groupRide' value='always' />
            <label for='male'>Always</label>

            <input type='radio' id='sometimes' name='groupRide' value='sometimes' />
            <label for='sometimes'>Sometimes</label>

            <input type='radio' id='never' name='groupRide' value='never' />
            <label for='never'>Never</label>
          </div>
        </div>

        <div className={style.multiFieldContainer}>
          <span className={style.fieldLabel}>Days of the week</span>
          <div>
            <input type='checkbox' id='sun' name='sun' value='sun' />
            <label for='sun'>Sun</label>

            <input type='checkbox' id='mon' name='mon' value='mon' />
            <label for='mon'>Mon</label>

            <input type='checkbox' id='tue' name='tue' value='tue' />
            <label for='tue'>Tue</label>

            <input type='checkbox' id='wed' name='wed' value='wed' />
            <label for='wed'>Wed</label>

            <input type='checkbox' id='thu' name='thu' value='thu' />
            <label for='thu'>Thu</label>

            <input type='checkbox' id='fri' name='fri' value='fri' />
            <label for='fri'>Fri</label>

            <input type='checkbox' id='sat' name='sat' value='sat' />
            <label for='sat'>Sat</label>
          </div>
        </div>
      </div>


    </form>
  </div>
);

export default AddUserForm;
