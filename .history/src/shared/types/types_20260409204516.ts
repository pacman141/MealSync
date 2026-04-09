import React from "react";

export type backgroundVariant = "linear" | string;
export interface ScreenContainerProps {
    children: React.ReactNode;
    safeAreaTop?: boolean;
    safeAreaBottom?: boolean;
    bgColor?: backgroundVariant;
}

export interface InputProps {
    placeholder?: string;
    style?: object;
    onChangeText?(): void;
}

export type ButtonVariant = "light" | "color" | "linear";
export type ButtonColor = "white" | "dark";
export interface ButtonCustomProps {
    title: string;
    type?: ButtonVariant;
    style?: object;
    titleColor?: ButtonColor;
    onPress(): void;
}
