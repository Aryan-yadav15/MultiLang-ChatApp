import NextAuth  ,{DefaultSession} from "next-auth";

//we are eextending the session here so that we can calm the TS the fuck downn

declare module 'next-auth'{
    interface Session{
        firebaseToken?: string
        user:{
            id:string,
        } & DefaultSession ["user"]
    }
}