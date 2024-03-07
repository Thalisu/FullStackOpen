import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 3,
    opacity: 0.5,
  },
  button: {
    backgroundColor: theme.colors.buttonBackground,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
  },
});

const initialValues = {
  user: "",
  pass: "",
};

const validationSchema = yup.object().shape({
  user: yup.string().length(4, "username length must be greater or equal to 4"),
  pass: yup.string().length(4, "password length must be greater or equal to 4"),
});

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={formik.values.user}
        onChangeText={formik.handleChange("user")}
        autoComplete="name"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={formik.values.pass}
        onChangeText={formik.handleChange("pass")}
        autoComplete="new-password"
        secureTextEntry
        style={styles.input}
      />
      {formik.touched.user && formik.errors.user && (
        <Text style={{ color: "red" }}>{formik.errors.user}</Text>
      )}
      {formik.touched.pass && formik.errors.pass && (
        <Text style={{ color: "red" }}>{formik.errors.pass}</Text>
      )}
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text fontWeight="bold">Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    const user = values.user;
    const password = values.pass;

    if (user && password) {
      console.log(`user: ${user} password: ${password}`);
    }
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
