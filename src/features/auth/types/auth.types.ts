import { ScrollViewPropsAndroid } from "react-native"

export type NamesForm = "login" | "register" | "forgotPassword" | null

export interface LoginFormProps {
    onClickRegister(): void
    onClickForgotPassword(): void
} 

export interface RegisterFormProps {
    onClickLogin(): void
    onClickForgotPassword(): void
} 

export interface ForgotPasswordFormProps {
    onClickLogin(): void
} 