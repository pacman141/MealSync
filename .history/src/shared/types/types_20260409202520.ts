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
    onChangeText?(): void;
    style?: object;
}

export type ButtonCustomType = "light" | "color" | "linear";
export interface ButtonCustomProps {
    title: string;
    onPress(): void;
    type: ButtonCustomType;
}
