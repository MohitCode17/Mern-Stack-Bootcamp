import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (name, value) => {
    switch (name) {
      case "name":
        return value.trim().length < 3
          ? "Name must be at least 3 characters"
          : "";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Enter a valid email";
      case "password":
        return value.length < 6 ? "Password must be at least 6 characters" : "";
      case "confirmPassword":
        return value !== formData.password ? "Passwords do not match" : "";
      case "age":
        return value < 18 ? "You must be at least 18 years old" : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate on change
    setErrors((prev) => ({
      ...prev,
      [name]: validate(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation before submit
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  const isFormValid =
    Object.values(formData).every((val) => val.trim() !== "") &&
    Object.values(errors).every((err) => err === "");

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-96">
      <h1 className="text-2xl font-bold mb-6 text-center">Form Validator</h1>

      {submitted && (
        <p className="text-green-600 text-center mb-4">
          ✅ Form submitted successfully!
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "email", "password", "confirmPassword", "age"].map(
          (field) => (
            <div key={field}>
              <input
                type={
                  field.includes("password")
                    ? "password"
                    : field === "age"
                    ? "number"
                    : "text"
                }
                name={field}
                placeholder={
                  field === "confirmPassword"
                    ? "Confirm Password"
                    : field.charAt(0).toUpperCase() + field.slice(1)
                }
                value={formData[field]}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md focus:outline-none focus:ring ${
                  errors[field] ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          )
        )}

        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full p-2 rounded-md text-white font-semibold transition ${
            isFormValid
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
