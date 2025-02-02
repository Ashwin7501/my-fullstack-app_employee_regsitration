// validation.js

export const validateName = (name) => {
    if (!name.trim()) return "Name is required.";
    if (name.length < 3) return "Name must be at least 3 characters.";
    return "";
  };
  
  export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) return "Email is required.";
    if (!emailRegex.test(email)) return "Email is invalid.";
    return "";
  };
  
  export const validatePassword = (password) => {
    if (!password) return "Password is required.";
    if (password.length < 6) return "Password must be at least 6 characters.";
    return "";
  };
  
  export const validateSalary = (salary) => {
    if (!salary) return "Salary is required.";
    if (isNaN(salary) || Number(salary) <= 0) return "Salary must be a positive number.";
    return "";
  };
  
  export const validateAddress = (address) => {
    if (!address.trim()) return "Address is required.";
    return "";
  };
  
  export const validateImage = (image) => {
    if (!image) return "Image is required.";
    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(image.type)) return "Only JPEG or PNG images are allowed.";
    return "";
  };
  