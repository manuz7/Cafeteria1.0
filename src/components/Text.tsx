import React from "react";
import { Text, StyleSheet } from "react-native";

export type TextProps = {
    children: React.ReactNode;
    style?: object;
}

export default function TextStyle({ children, style }: TextProps) {
    return(
        <Text style={style}>{children}</Text>
    )
}

const style = StyleSheet.create({
    text: {
        fontSize: 16,
        color: "#000",
    }
});