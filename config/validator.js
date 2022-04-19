const yup = require("yup");

function validate(data) {

    const userSchema = yup.object().shape({
        username: yup.string().required("username cant be null").min(3).max(20),
        email: yup.string().email().required("email cant be null").min(3).max(50),
        password: yup.string().required("password cant be null").min(8).max(20),
    });
}

module.exports=validate