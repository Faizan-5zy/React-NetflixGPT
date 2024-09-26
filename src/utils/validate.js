
export const checkValidData = (email , password , username) => {
 const isUserNameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(username);
 const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
 const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

 if (!isUserNameValid) return 'username is not valid!'
 if (!isEmailValid) return 'email is not valid!'
 if (!isPasswordValid) return 'Password is not valid!'

 return null
//  return "Both fields are valid! Proceed to log in."

}