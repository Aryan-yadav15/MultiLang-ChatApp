import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";
import { adminDb } from "./firebase-admin";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    session: {
        strategy: "jwt",
    },
};
