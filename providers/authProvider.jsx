"use client";

import { SessionProvider } from "next-auth/react";
import { StrictMode } from "react";

const AuthProvider = ({ children, session }) => {
    return (
        <StrictMode>
            <SessionProvider session={ session }>
                { children }
            </SessionProvider>
        </StrictMode>
    )
}
export default AuthProvider;