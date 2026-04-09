import React from "react";

export interface ScreenContainerProps {
    children: React.ReactElement;
}

export interface InputProps {
    placeholder: string;
    onChangeText?(): void;
}
