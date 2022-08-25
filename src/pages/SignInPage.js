import ButtonGoogle from "components/button/ButtonGoogle";
import React from "react";
import { Link } from "react-router-dom";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Label } from "components/label";
import { Input } from "components/input";
import { Button } from "components/button";
import { IconEyeToggle } from "components/icons";
import FieldGroup from "components/common/FieldGroup";
import useToggleValue from "hooks/useToggleValue";

const schema = yup
  .object({
    email: yup.string().email().required("This field is required!"),
    password: yup
      .string()
      .required("This field is required!")
      .min(8, "Password must be 8 character"),
  })
  .required();

const SignInPage = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting, errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });
  const handleSignIn = (value) => {
    if (!isValid) return;
    console.log(value);
  };
  const { value: togglePassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="mb-8 text-xs text-center text-text3 lg:text-sm lg:mb-6">
        Don't have an account?{" "}
        <Link to="/sign-up" className="font-medium underline text-primary">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
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
            placeholder="Enter Password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={togglePassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FieldGroup>
        <FieldGroup>
          <div className="text-right">
            <span className="inline-block text-sm font-medium cursor-pointer text-primary">
              Forgot password
            </span>
          </div>
        </FieldGroup>
        <Button
          className="w-full bg-primary"
          type="submit"
          isLoading={isSubmitting}
        >
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
