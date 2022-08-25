import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "components/input";
import { Label } from "components/label";
import LayoutAuthentication from "layout/LayoutAuthentication";
import FieldGroup from "components/common/FieldGroup";
import { Button } from "components/button";
import { Checkbox } from "components/checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconEyeToggle } from "components/icons";
import useToggleValue from "hooks/useToggleValue";

const schema = yup
  .object({
    name: yup.string().required("This field is required!"),
    email: yup
      .string()
      .email("Pls enter valid email: example@yopmail.com")
      .required("This field is required!"),
    password: yup
      .string()
      .required("This field is required!")
      .min(8, "Password must be 8 character"),
  })
  .required();

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting, errors },
  } = useForm({ mode: "onSubmit", resolver: yupResolver(schema) });
  const handleSubmitForm = (value) => {
    if (!isValid) return;
    console.log(value);
  };
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();
  const { value: togglePassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="mb-8 text-xs text-center text-text3 lg:text-sm lg:mb-6">
        Already have an account?{" "}
        <Link className="font-medium underline text-primary" to="/sign-up">
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center w-full py-4 mb-5 border rounded-lg gap-x-3 border-stroke dark:border-darkStroke">
        <img src="./icon-google.svg" alt="icon google" />
        <p className="font-semibold lg:text-base dark:text-white">
          Sign up with google
        </p>
      </button>
      <p className="mx-auto mb-4 text-xs text-center lg:text-base lg:mb-8 dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <FieldGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            control={control}
            name="name"
            placeholder="John Doe"
            error={errors.name?.message}
          ></Input>
        </FieldGroup>
        <FieldGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            type="email"
            control={control}
            name="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FieldGroup>
        <FieldGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            type={togglePassword ? "text" : "password"}
            control={control}
            name="password"
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={togglePassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FieldGroup>
        <div className="flex items-start mb-5 gap-x-5">
          <Checkbox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
            <p className="flex-1 text-xs lg:text-sm text-text2 dark:text-text3">
              I agree to the{" "}
              <span className="underline text-secondary">Terms of Use</span> and
              have read and understand the{" "}
              <span className="underline text-secondary">Privacy policy</span>.
            </p>
          </Checkbox>
        </div>
        <Button
          className="w-full bg-primary"
          type="submit"
          isLoading={isSubmitting}
        >
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
