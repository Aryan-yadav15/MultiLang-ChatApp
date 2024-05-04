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
import { signIn } from "next-auth/react"


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
                        image="https://github.com/shadcn.png"
                        name={session.user?.name}
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}

export default UserButton