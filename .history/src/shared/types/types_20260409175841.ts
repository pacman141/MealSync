import React from "react";

export interface ScreenContainerProps {
    children: React.ReactElement;
    safeAreaTop?: boolean;
    safeAreaBottom?: boolean;
}

export interface InputProps {
    placeholder?: string;
    onChangeText?(): void;
}
