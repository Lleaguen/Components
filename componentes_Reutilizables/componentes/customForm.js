import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import CustomInput from "./CustomInput"; // Asegúrate de importar el componente previamente creado

const CustomForm = ({ title, inputs, buttons, onSubmit }) => {
  const handleInputChange = (field, value) => {
    if (onSubmit) {
      onSubmit(field, value); // Reporta cambios al controlador externo
    }
  };

  return (
    <View style={styles.formContainer}>
      {title && <Text style={styles.title}>{title}</Text>}
      {inputs.map((input, index) => (
        <CustomInput
          key={index}
          label={input.label}
          placeholder={input.placeholder}
          value={input.value}
          onChangeText={(value) => handleInputChange(input.name, value)}
          type={input.type}
          options={input.options} // Para inputs como checkbox o radio
          min={input.min}
          max={input.max}
          step={input.step}
          keyboardType={input.keyboardType}
        />
      ))}
      <View style={styles.buttonContainer}>
        {buttons.map((button, index) => (
          <Button
            key={index}
            title={button.title}
            onPress={button.onPress}
            color={button.color || "#007BFF"} // Color predeterminado
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default CustomForm;


// EJEMPLO DE USO //

// import React, { useState } from "react";
// import { View } from "react-native";
// import CustomForm from "./CustomForm";

// const App = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//   });

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     console.log("Form Data:", formData);
//   };

//   return (
//     <View>
//       <CustomForm
//         title="Register"
//         inputs={[
//           {
//             name: "name",
//             label: "Name",
//             placeholder: "Enter your name",
//             value: formData.name,
//             type: "text",
//           },
//           {
//             name: "email",
//             label: "Email",
//             placeholder: "Enter your email",
//             value: formData.email,
//             type: "email",
//           },
//         ]}
//         buttons={[
//           {
//             title: "Submit",
//             onPress: handleSubmit,
//           },
//           {
//             title: "Cancel",
//             onPress: () => console.log("Cancelled"),
//             color: "red",
//           },
//         ]}
//         onSubmit={handleInputChange}
//       />
//     </View>
//   );
// };

// export default App;


// EJEMPLO 2 MAS COMPLEJO //

{/* <CustomForm
  title="Complete the Form"
  inputs={[
    {
      name: "username",
      label: "Username",
      placeholder: "Enter your username",
      value: formData.username,
      type: "text",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      value: formData.password,
      type: "password",
    },
    {
      name: "dob",
      label: "Date of Birth",
      placeholder: "Select your date of birth",
      value: formData.dob,
      type: "date",
    },
    {
      name: "newsletter",
      label: "Subscribe to Newsletter",
      type: "checkbox",
      value: formData.newsletter,
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
  ]}
  buttons={[
    {
      title: "Submit",
      onPress: handleSubmit,
    },
  ]}
  onSubmit={handleInputChange}
/> */}
