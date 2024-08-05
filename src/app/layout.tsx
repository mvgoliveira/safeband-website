import type { Metadata } from "next";
import "./globals.css";
import { ReactElement } from "react";

import StyledComponentsRegistry from "../lib/registry";
import ClientThemeWrapper from "./client-theme-wrapper";
import { inter, roboto } from "./fonts";

export const metadata: Metadata = {
    title: "SafeBand",
    description: "Health and Security Dashboard for SafeBand's devices",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>): ReactElement {
    return (
        <html lang="pt-br">
            <body className={`${inter.className} ${roboto.className}`}>
                <StyledComponentsRegistry>
                    <ClientThemeWrapper>{children}</ClientThemeWrapper>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
