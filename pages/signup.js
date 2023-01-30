import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";

import { auth } from "@/config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import {
  Container,
  Box,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  useDisclosure,
} from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { Error } from "@/components/Error";
import { FirebaseError } from "firebase/app";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("E-mail inválido")
    .required("Preenchimento obrigatório"),
  password: yup.string().required("Preenchimento obrigatório"),
});

export default function Login() {
  const router = useRouter();
  const [errorTitle, setErrorTitle] = useState("Erro:");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    onClose,
    onOpen,
    isOpen: isVisible,
  } = useDisclosure({ defaultIsOpen: false });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    onSubmit: async (values, form) => {
      try {
        await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );

        /* console.log(login); */
      } catch (error) {
        console.log(error);
        if (error instanceof FirebaseError) {
          console.error(error);
          if (error.code.toLowerCase() === "auth/email-already-in-use") {
            setErrorMessage("Usuário não cadastrado!");
          } else if (error.code.toLowerCase() === "auth/weak-password") {
            setErrorMessage("A senha deve conter no mínimo 6 caracteres!");
          }
        } else {
          setErrorMessage("Erro desconhecido");
        }

        onOpen();
      }
    },
    validationSchema,
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  return (
    <>
      <Header />
      <Error
        isVisible={isVisible}
        title={errorTitle}
        message={errorMessage}
        onClose={onClose}
      />

      <Container p={4} centerContent>
        <Box p={4} mt={8}>
          <Text>Cloud Management Plataform IGNITE 2022 🚀</Text>
        </Box>

        <Box>
          <FormControl id="email" p={4} isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              size="lg"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && (
              <FormHelperText textColor="#e74c3c">
                {errors.email}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl id="password" p={4} isRequired>
            <FormLabel>Senha</FormLabel>
            <Input
              size="lg"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && (
              <FormHelperText textColor="#e74c3c">
                {errors.password}
              </FormHelperText>
            )}
          </FormControl>

          <Box p={4}>
            <Button
              colorScheme="blue"
              width="100%"
              onClick={handleSubmit}
              isLoading={isSubmitting}
            >
              Cadastrar
            </Button>
          </Box>
        </Box>

        <Link href="/">Já tem uma conta? Acesse!</Link>
      </Container>
    </>
  );
}
