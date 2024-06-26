"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UserAvatar from "./UserAvatar"
import { Session } from "next-auth"
import { Button } from "./ui/button"
import { signIn, signOut } from "next-auth/react"


const UserButton = ({session}:{session:Session | null}) => {
    if (!session) {
        return (
            <Button 
                variant={"outline"}
                onClick={()=>signIn()}
                >
                Sign in
            </Button>
        )
    }

    return session && (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <UserAvatar
                        image={session.user?.image}
                        name={session.user?.name}
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {/* <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem> */}
                    <DropdownMenuItem onClick={(()=> signOut())}>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}

export default UserButton