import React from "react";

export type BackgroundVariant = "linear" | string;
export interface ScreenContainerProps {
    children: React.ReactNode;
    safeAreaTop?: boolean;
    safeAreaBottom?: boolean;
    bgColor?: BackgroundVariant;
}

export interface InputProps {
    placeholder?: string;
    style?: object;
    secureTextEntry?: boolean
    onChangeText?(): void;
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
