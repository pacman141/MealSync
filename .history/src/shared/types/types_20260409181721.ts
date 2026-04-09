import React from "react";

export type backgroundColorType = "linear" | string;

export interface ScreenContainerProps {
    children: React.ReactNode;
    safeAreaTop?: boolean;
    safeAreaBottom?: boolean;
    bgColor?: backgroundColorType;
}

export interface InputProps {
    placeholder?: string;
    onChangeText?(): void;
}
