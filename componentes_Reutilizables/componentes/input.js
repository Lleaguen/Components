import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CustomInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  icon,
  iconSize = 24,
  iconColor = "#0055FF",
  keyboardType = "default",
  secureTextEntry = false,
  style,
  inputStyle,
  labelStyle,
  error,
  errorStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={styles.inputContainer}>
        {icon && <Ionicons name={icon} size={iconSize} color={iconColor} style={styles.icon} />}
        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          placeholderTextColor="#aaa"
        />
      </View>
      {error && <Text style={[styles.error, errorStyle]}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    paddingVertical: 8,
  },
  error: {
    fontSize: 12,
    color: "red",
    marginTop: 4,
  },
});

export default CustomInput;


