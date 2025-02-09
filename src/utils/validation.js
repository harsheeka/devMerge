const validator = require("validator");

const validateSignUpData = (req) => {
    const errors = [];

    const {
        firstName = "",
        lastName = "",
        emailID = "",
        password = "",
        photoUrl = "",
        skills = [],
        age,
        gender = "",
        about = "",
    } = req.body;

    if (!firstName.trim()) {
        errors.push("First name is required.");
    } else if (firstName.length < 2 || firstName.length > 10) {
        errors.push("First name must be between 2 and 10 characters.");
    }

    if (lastName && lastName.length > 15) {
        errors.push("Last name must be at most 15 characters.");
    }

    if (age === undefined || age < 12 || age > 120) {
        errors.push("Age must be at least 12 and a realistic number.");
    }

    const validGenders = ["male", "female", "other"];
    if (!validGenders.includes(gender.toLowerCase())) {
        errors.push("Invalid gender. Choose from male, female, or other.");
    }

    if (!validator.isEmail(emailID)) {
        errors.push("Invalid email address.");
    }

    if (!password) {
        errors.push("Password is required.");
    } else if (
        !validator.isStrongPassword(password, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        })
    ) {
        errors.push(
            "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
        );
    }

    if (about.length > 300) {
        errors.push("About section cannot exceed 300 characters.");
    }
 
    if (!Array.isArray(skills) || !skills.every((skill) => typeof skill === "string")) {
        errors.push("Skills must be an array of strings.");
    }

    if (photoUrl && !validator.isURL(photoUrl)) {
        errors.push("Invalid photo URL.");
    }

    return errors.length > 0 ? { success: false, errors } : { success: true };
};

module.exports = {validateSignUpData};
