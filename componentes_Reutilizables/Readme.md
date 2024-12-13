# Reusable React Native Components

Este proyecto incluye una serie de componentes reutilizables en React Native diseñados para facilitar la construcción de interfaces flexibles y personalizables. A continuación, se describen los componentes principales, sus propiedades, y ejemplos de uso para integrarlos en tus aplicaciones.

---

## **Componentes Disponibles**

### **1. `CustomInput`**
Un componente reutilizable para manejar diferentes tipos de campos de entrada en formularios.

#### Propiedades
| Propiedad       | Descripción                                                                 | Tipo       | Valor Predeterminado |
|-----------------|-----------------------------------------------------------------------------|------------|-----------------------|
| `label`         | Texto que describe el input.                                               | `string`   | `undefined`          |
| `placeholder`   | Texto que aparece como placeholder dentro del campo de entrada.            | `string`   | `""`               |
| `value`         | Valor actual del campo de entrada.                                         | `string`   | `""`               |
| `onChangeText`  | Función para manejar el cambio en el valor del input.                      | `function` | `() => {}`           |
| `type`          | Tipo del input (e.g., `text`, `email`, `password`, `date`, etc.).          | `string`   | `"text"`           |
| `style`         | Estilos adicionales para el contenedor del input.                         | `object`   | `undefined`          |
| `inputStyle`    | Estilos adicionales para el campo de entrada.                              | `object`   | `undefined`          |
| `labelStyle`    | Estilos adicionales para el label del input.                               | `object`   | `undefined`          |

#### Ejemplo de Uso
```javascript
<CustomInput
  label="Email"
  placeholder="Enter your email"
  type="email"
  value={email}
  onChangeText={setEmail}
/>
```

---

### **2. `CustomForm`**
Un componente reutilizable que permite crear formularios con cualquier cantidad de inputs y botones, configurados mediante props.

#### Propiedades
| Propiedad       | Descripción                                                                 | Tipo       | Valor Predeterminado |
|-----------------|-----------------------------------------------------------------------------|------------|-----------------------|
| `title`         | Título que aparece en la parte superior del formulario.                    | `string`   | `undefined`          |
| `inputs`        | Lista de inputs con sus configuraciones (array de objetos).                | `array`    | `[]`                 |
| `buttons`       | Lista de botones con sus configuraciones (array de objetos).               | `array`    | `[]`                 |
| `formStyle`     | Estilo adicional para el contenedor del formulario.                        | `object`   | `undefined`          |
| `titleStyle`    | Estilo adicional para el título del formulario.                            | `object`   | `undefined`          |

#### Ejemplo de Uso
```javascript
<CustomForm
  title="Register"
  inputs={[
    { name: "username", label: "Username", placeholder: "Enter your username", type: "text" },
    { name: "password", label: "Password", placeholder: "Enter your password", type: "password" },
  ]}
  buttons={[
    { title: "Submit", onPress: () => console.log("Submitted!") },
  ]}
/>
```

---

### **3. `Layout`**
Un componente contenedor reutilizable que permite definir secciones como `header`, `main`, `aside`, `footer`, o cualquier tipo de `section`.

#### Propiedades
| Propiedad       | Descripción                                                                 | Tipo       | Valor Predeterminado |
|-----------------|-----------------------------------------------------------------------------|------------|-----------------------|
| `type`          | Define el tipo de contenedor (`header`, `main`, `aside`, `footer`, `section`). | `string`   | `"section"`        |
| `title`         | Texto del título que aparece en la parte superior del contenedor.           | `string`   | `undefined`          |
| `children`      | Elementos hijos que se renderizarán dentro del contenedor.                  | `ReactNode`| `undefined`          |
| `style`         | Estilo adicional para personalizar el contenedor.                          | `object`   | `undefined`          |
| `titleStyle`    | Estilo adicional para personalizar el título.                              | `object`   | `undefined`          |

#### Ejemplo de Uso
##### Layout Básico con `header`, `main`, y `footer`
```javascript
<View style={{ flex: 1 }}>
  <Layout type="header" title="My App" />

  <Layout type="main">
    <CustomForm
      title="Contact Us"
      inputs={[
        { name: "name", label: "Name", placeholder: "Enter your name", type: "text" },
        { name: "email", label: "Email", placeholder: "Enter your email", type: "email" },
      ]}
      buttons={[
        { title: "Submit", onPress: () => console.log("Submitted!") },
      ]}
    />
  </Layout>

  <Layout type="footer" title="© 2024 My App" />
</View>
```

##### Layout Complejo con `aside` y `section`
```javascript
<View style={{ flex: 1, flexDirection: "row" }}>
  <Layout type="aside" title="Navigation" style={{ flex: 1 }}>
    <Text>Home</Text>
    <Text>About</Text>
    <Text>Contact</Text>
  </Layout>

  <Layout type="main" style={{ flex: 3 }}>
    <Layout title="Welcome" type="section">
      <Text>This is the main content area.</Text>
    </Layout>

    <Layout title="Additional Info" type="section">
      <Text>Here is some more information.</Text>
    </Layout>
  </Layout>
</View>
```

---

### **Consideraciones**
- Todos los componentes están diseñados para ser altamente personalizables mediante estilos y props.
- Puedes combinar estos componentes para construir interfaces completas de manera modular y eficiente.


