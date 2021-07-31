import useInput from "./use-input";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredAddress,
    isValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddressInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredCity,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCityInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredState,
    isValid: stateIsValid,
    hasError: stateHasError,
    valueChangeHandler: stateChangeHandler,
    inputBlurHandler: stateBlurHandler,
    reset: resetStateInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredZip,
    isValid: zipIsValid,
    hasError: zipHasError,
    valueChangeHandler: zipChangeHandler,
    inputBlurHandler: zipBlurHandler,
    reset: resetZipInput,
  } = useInput((value) => value.trim().length === 5);

  let formIsValid = false;
  if (
    nameIsValid &&
    addressIsValid &&
    cityIsValid &&
    stateIsValid &&
    zipIsValid
  ) {
    formIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetNameInput();
    resetAddressInput();
    resetCityInput();
    resetStateInput();
    resetZipInput();

    props.onConfirm({
      name: enteredName,
      address: enteredAddress,
      city: enteredCity,
      state: enteredState,
      zip: enteredZip,
    });
  };

  const nameClasses = `${classes.control} ${
    nameHasError ? classes.invalid : ""
  }`;
  const addressClasses = `${classes.control} ${
    addressHasError ? classes.invalid : ""
  }`;
  const cityClasses = `${classes.control} ${
    cityHasError ? classes.invalid : ""
  }`;
  const stateClasses = `${classes.control} ${
    stateHasError ? classes.invalid : ""
  }`;
  const zipClasses = `${classes.control} ${zipHasError ? classes.invalid : ""}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Full Name (First and Last name)</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameHasError && (
          <p className={classes.error}>Please enter a valid name!</p>
        )}
      </div>
      <div className={addressClasses}>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          placeholder="Street Address"
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
          value={enteredAddress}
        />
        {addressHasError && (
          <p className={classes.error}>Please enter a valid street address!</p>
        )}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          value={enteredCity}
        />
        {cityHasError && (
          <p className={classes.error}>Please enter a valid city!</p>
        )}
      </div>
      <div className={stateClasses}>
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          onChange={stateChangeHandler}
          onBlur={stateBlurHandler}
          value={enteredState}
        />
        {stateHasError && (
          <p className={classes.error}>Please enter a valid state!</p>
        )}
      </div>
      <div className={zipClasses}>
        <label htmlFor="zip">Zipcode</label>
        <input
          type="text"
          id="zip"
          onChange={zipChangeHandler}
          onBlur={zipBlurHandler}
          value={enteredZip}
        />
        {zipHasError && (
          <p className={classes.error}>
            Please enter a valid zip code (5 characters long) !
          </p>
        )}
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCancel}>Cancel</button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
