import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Modal,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

const CustomInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  type = "text", 
  icon,
  iconSize = 24,
  iconColor = "#0055FF",
  keyboardType = "default",
  secureTextEntry = false,
  multiline = false,
  numberOfLines = 1,
  style,
  inputStyle,
  labelStyle,
  error,
  errorStyle,
  options = [], // Para checkbox o radio
  step = 1, // Para range o number
  min = 0,
  max = 100,
  disabled = false,
}) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
      onChangeText(selectedDate.toISOString());
    }
  };

  const renderInputByType = () => {
    switch (type) {
      case "date":
      case "datetime-local":
        return (
          <TouchableOpacity
            style={[styles.inputContainer, inputStyle]}
            onPress={() => setShowPicker(true)}
            disabled={disabled}
          >
            {icon && <Ionicons name={icon} size={iconSize} color={iconColor} style={styles.icon} />}
            <Text style={styles.inputText}>
              {value || placeholder || "Select a date"}
            </Text>
            {showPicker && (
              <DateTimePicker
                value={date}
                mode={type === "date" ? "date" : "datetime"}
                display="default"
                onChange={handleDateChange}
              />
            )}
          </TouchableOpacity>
        );
      case "checkbox":
        return (
          <View style={styles.checkboxContainer}>
            {options.map((option, index) => (
              <View key={index} style={styles.checkboxRow}>
                <Switch
                  value={value.includes(option.value)}
                  onValueChange={() => {
                    if (value.includes(option.value)) {
                      onChangeText(value.filter((val) => val !== option.value));
                    } else {
                      onChangeText([...value, option.value]);
                    }
                  }}
                  disabled={disabled}
                />
                <Text style={styles.checkboxLabel}>{option.label}</Text>
              </View>
            ))}
          </View>
        );
      case "radio":
        return (
          <View style={styles.radioContainer}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.radioRow}
                onPress={() => onChangeText(option.value)}
                disabled={disabled}
              >
                <Ionicons
                  name={value === option.value ? "radio-button-on" : "radio-button-off"}
                  size={iconSize}
                  color={iconColor}
                  style={styles.icon}
                />
                <Text style={styles.radioLabel}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      case "range":
        return (
          <View style={styles.rangeContainer}>
            <Text>{value || min}</Text>
            <TextInput
              style={[styles.input, inputStyle]}
              value={String(value)}
              keyboardType="numeric"
              onChangeText={(text) => onChangeText(Math.min(max, Math.max(min, Number(text))))}
              disabled={disabled}
            />
            <Text>{max}</Text>
          </View>
        );
      case "hidden":
        return null;
      default:
        return (
          <TextInput
            style={[styles.input, inputStyle]}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            secureTextEntry={type === "password"}
            multiline={multiline}
            numberOfLines={numberOfLines}
            placeholderTextColor="#aaa"
            editable={!disabled}
          />
        );
    }
  };

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      {renderInputByType()}
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
    height: 40,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    paddingVertical: 8,
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    paddingVertical: 8,
  },
  checkboxContainer: {
    flexDirection: "column",
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
  radioContainer: {
    flexDirection: "column",
  },
  radioRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
  rangeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  error: {
    fontSize: 12,
    color: "red",
    marginTop: 4,
  },
});

export default CustomInput;
