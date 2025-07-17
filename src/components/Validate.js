export const Validate = (email, password) => {
    const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const pwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

   if (!mail) return 'email is not valid....'
   if (!pwd) return 'password is invalid';
   return null;
}

// export default Validate;