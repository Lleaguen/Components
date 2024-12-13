import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Layout = ({ 
  type = "section", 
  title, 
  children, 
  style, 
  titleStyle 
}) => {
  return (
    <View style={[styles[type], style]}>
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#007BFF",
    padding: 15,
    alignItems: "center",
  },
  main: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    padding: 20,
  },
  aside: {
    backgroundColor: "#F0F0F0",
    padding: 15,
    width: 250,
  },
  footer: {
    backgroundColor: "#222",
    padding: 15,
    alignItems: "center",
  },
  section: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Layout;


