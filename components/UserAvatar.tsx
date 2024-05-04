import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import Image from "next/image"


const UserAvatar = (
    {
        name,
        image,
        className
    }:{
        name?: string | null,
        image: string | null,
        className?: string
    }
) => {
    return (
        <div>
            <Avatar className={cn('bg-white text-black',className)}>
                {image &&(
                    <Image
                        src={image}
                        alt={name || 'user name'}
                        width={40}
                        height={40}
                        className="rounded-full"
                        // referrerPolicy="no-referrer"
                        // this is for firebase error
                    />
                )}
                {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                <AvatarFallback className="dark:bg-white text-black" delayMs={1000}>
                    {name?.split(" ")
                        .map((part) => part[0])
                        .join("") ?? ""}
                </AvatarFallback>
            </Avatar>

        </div>
    )
}

export default UserAvatar