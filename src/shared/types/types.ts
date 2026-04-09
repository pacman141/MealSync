import React from "react";
import { TextInputProps, StyleProp, TextStyle } from "react-native";

export type BackgroundVariant = "linear" | string;
export interface ScreenContainerProps {
    children: React.ReactNode;
    safeAreaTop?: boolean;
    safeAreaBottom?: boolean;
    bgColor?: BackgroundVariant;
}

export interface InputProps extends TextInputProps {
    style?: StyleProp<TextStyle>;
}

export type ButtonVariant = "light" | "color" | "linear";
export interface ButtonTextProps {
    color: ButtonTextColor;
}
export type ButtonTextColor = "light" | "dark";
export interface ButtonCustomProps {
    title: string;
    type?: ButtonVariant;
    style?: object;
    titleColor?: ButtonTextColor;
    onPress(): void;
}
