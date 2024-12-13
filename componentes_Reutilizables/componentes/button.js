import React from "react";
import { TouchableOpacity, Text, StyleSheet, Linking, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MultiFunctionalButton = ({
  label,
  onPress,
  url,
  icon,
  style,
  textStyle,
  iconSize = 24,
  iconColor = "#fff",
}) => {
  const handlePress = () => {
    if (url) {
      Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
    } else if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        {icon && <Ionicons name={icon} size={iconSize} color={iconColor} style={styles.icon} />}
        {label && <Text style={[styles.text, textStyle]}>{label}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0055FF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
  },
  icon: {
    marginRight: 4,
  },
});

export default MultiFunctionalButton;


// ESPECIFICACIONES DE USO //

// COMO BOTON NORMAL // 

//<MultiFunctionalButton
//  label="Click Me"
//  onPress={() => console.log("Button Pressed")}
// />

// COMO BOTON CON ICONO  //

//<MultiFunctionalButton
//  label="Add to Cart"
//  icon="cart-outline"
//  onPress={() => console.log("Added to Cart")}
// />

// COMO BOTON DE ENLANCE //

//<MultiFunctionalButton
//  label="Open Google"
//  url="https://www.google.com"
// />



