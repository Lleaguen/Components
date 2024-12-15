import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import CustomInput from "./CustomInput"; 

const CustomForm = ({ title, inputs, buttons, onSubmit }) => {
  const handleInputChange = (field, value) => {
    if (onSubmit) {
      onSubmit(field, value); 
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
            color={button.color || "#007BFF"} 
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

