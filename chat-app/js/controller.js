const controller = {};
const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const passRegex = /^[a-z0-9_-]{6,18}$/;
controller.validateLoginInfo = (email, password) => {

  if (!email) {
    view.renderErrorMessage('email-error-message', 'Please input email');
  } else if (!emailRegex.test(email)) {
    view.renderErrorMessage('email-error-message', 'Invalid email address');
  } else {
    view.renderErrorMessage('email-error-message', '');
  }

  if (!password) {
    view.renderErrorMessage('password-error-message', 'Please input password');
  } else {
    view.renderErrorMessage('password-error-message', '');
  }


  // check database
  if(email && password){
      model.loginUser(email,password);
  }

};

controller.validateRegisterInfo = (registerInfo) =>{
  console.log(registerInfo.firstName);
  if(!registerInfo.firstName){
    view.renderErrorMessage('firstName-error-message', 'Please input First name');
  }else{
    view.renderErrorMessage('firstName-error-message','');
  }

  if(!registerInfo.lastName){
    view.renderErrorMessage('lastName-error-message', 'Please input Last name');
  }else{
    view.renderErrorMessage('lastName-error-message','');
  }

  if (!registerInfo.email) {
    view.renderErrorMessage('email-error-message','Please input email');
  } else if (!emailRegex.test(registerInfo.email)) {
    view.renderErrorMessage('email-error-message', 'Invalid email address');
  } else {
    view.renderErrorMessage('email-error-message', '');
  }

  if(!registerInfo.password){
    view.renderErrorMessage('password-error-message','Please input password');
  }else if(!passRegex.test(registerInfo.password)){
    view.renderErrorMessage('password-error-message','Invalid password');
  }else{
    view.renderErrorMessage('password-error-message','');
  }

  if(!registerInfo.confirmPassword){
    view.renderErrorMessage('confirmPassword-error-message','Please input confirm password');
  }else{
    if(registerInfo.confirmPassword==registerInfo.password){
      view.renderErrorMessage('confirmPassword-error-message','');
    }else{
      view.renderErrorMessage('confirmPassword-error-message','Please input again confirm password');
    }
  }

  if(registerInfo.firstName && registerInfo.lastName && registerInfo.email && registerInfo.password && registerInfo.confirmPassword){
      model.createNewUser(
        registerInfo.firstName,
        registerInfo.lastName,
        registerInfo.email,
        registerInfo.password
      );
  }
};
controller.validateResetInfo = (email)=>{
  if (!email) {
    view.renderErrorMessage('email-error-message', 'Please input email');
  } else if (!emailRegex.test(email)) {
    view.renderErrorMessage('email-error-message', 'Invalid email address');
  } else {
    view.renderErrorMessage('email-error-message', '');
  }
  if(email){
    model.resetPassword(email);
  }
};