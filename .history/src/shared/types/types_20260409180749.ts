import React from "react";

export type backgroundType = "linear" | "light" | "color";

export interface ScreenContainerProps {
    children: React.ReactNode;
    safeAreaTop?: boolean;
    safeAreaBottom?: boolean;
    type?: backgroundType;
}

export interface InputProps {
    placeholder?: string;
    onChangeText?(): void;
}
