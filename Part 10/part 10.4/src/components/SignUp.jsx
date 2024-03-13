import { View, TextInput, Pressable, StyleSheet } from "react-native";

import { useFormik } from "formik";
import { useNavigate } from "react-router-native";

import * as yup from "yup";

import Text from "./Text";
import theme from "../theme";
import useSignUp from "../hooks/useSignUp";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  field: {
    marginBottom: 15,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 5,
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
  confirm: "",
};

const validationSchema = yup.object().shape({
  user: yup
    .string()
    .min(5, "username length must be greater or equal to 5")
    .max(30, "username length is too big")
    .required("this field is required"),
  pass: yup
    .string()
    .min(5, "password length must be greater or equal to 5")
    .max(50, "password length is too big")
    .required("this field is required"),
  confirm: yup
    .string()
    .oneOf([yup.ref("pass"), undefined], "passwords don't match")
    .required("this field is required"),
});

const SignUpForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <TextInput
          placeholder="Username"
          value={formik.values.user}
          onChangeText={formik.handleChange("user")}
          autoComplete="name"
          style={styles.input}
        />
        {formik.touched.user && formik.errors.user && (
          <Text style={{ color: "red" }}>{formik.errors.user}</Text>
        )}
      </View>
      <View style={styles.field}>
        <TextInput
          placeholder="Password"
          value={formik.values.pass}
          onChangeText={formik.handleChange("pass")}
          autoComplete="new-password"
          secureTextEntry
          style={styles.input}
        />
        {formik.touched.pass && formik.errors.pass && (
          <Text style={{ color: "red" }}>{formik.errors.pass}</Text>
        )}
      </View>
      <View style={styles.field}>
        <TextInput
          placeholder="Confirm Password"
          value={formik.values.confirm}
          onChangeText={formik.handleChange("confirm")}
          secureTextEntry
          style={styles.input}
        />
        {formik.touched.confirm && formik.errors.confirm && (
          <Text style={{ color: "red" }}>{formik.errors.confirm}</Text>
        )}
      </View>
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text fontWeight="bold">Sign up</Text>
      </Pressable>
    </View>
  );
};

const SignUp = () => {
  const navigate = useNavigate();
  const [handleSingUp] = useSignUp();

  const onSubmit = async (values) => {
    const { user, pass } = values;

    try {
      await handleSingUp(user, pass);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpForm onSubmit={onSubmit} />;
};

export default SignUp;
