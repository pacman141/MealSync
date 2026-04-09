import React from "react";

export type bgScreenContainerType = "linear" | string;
export interface ScreenContainerProps {
    children: React.ReactNode;
    safeAreaTop?: boolean;
    safeAreaBottom?: boolean;
    bgColor?: bgScreenContainerType;
}

export interface InputProps {
    placeholder?: string;
    style?: object;
    onChangeText?(): void;
}

export type ButtonCustomType = "light" | "color" | "linear";
export interface ButtonCustomProps {
    title: string;
    type?: ButtonCustomType;
    style?: object;
    onPress(): void;
}
