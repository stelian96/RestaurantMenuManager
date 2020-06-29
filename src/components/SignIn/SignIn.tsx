import React, { ReactElement } from "react";
import * as Yup from "yup";
import { UserCallback, User } from "../../shared/shared";
import { Formik, Form } from "formik";
// import { DisplayFormikState } from "";
import { InputFields } from "../InputFields/InputFields";

interface Props {
  user: User | undefined;
  onSubmitUser: UserCallback;
}

interface MyFormValues {
  id: string;
  userName: string;
  fullName: string;
  password: string;
  email: string;
  phone: string;
  adress: string;
}

export default function SignIn({ user, onSubmitUser }: Props): ReactElement {
  const initialValues: MyFormValues = {
    id: user?.id || "",
    userName: user?.userName || "",
    fullName: user?.fullName || "",
    password: user?.password || "",
    email: user?.email || "",
    phone: user?.phone || "",
    adress: user?.adress || "",
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: User) => {
          const result = {
            id: values.id,
            userName: values.userName,
            fullName: values.fullName,
            password: values.password,
            email: values.email,
            phone: values.phone,
            adress: values.adress,
          } as User;
          onSubmitUser(result);
        }}
        validateOnChange
        validationSchema={Yup.object().shape({
          userName: Yup.string().required("Username is Required.").min(4).max(40),
          password: Yup.string().required('No password provided.') 
          .min(8, 'Password is too short - should be 8 chars minimum.')
          .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        })}
      >
        {({  dirty, errors, isSubmitting }) => {
          return (
            <Form>
              <div className="formContainer">
                <p>Sign In</p>
                <InputFields type={"text"} name="userName" label="Username:" />
                <InputFields type={"password"} name="password" label="Password:" />
                <button className="registerSubmit"
                  type="submit"
                  name="action"
                  disabled={
                    isSubmitting ||
                    !dirty ||
                    Object.values(errors).some((err) => !!err === true)
                  }
                >
                  Submit
                </button>
              </div>
              {/* <DisplayFormikState /> */}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
