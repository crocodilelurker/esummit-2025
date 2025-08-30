"use client";

import { usePathname } from "next/navigation";
export default function NotFound()
{
    const pathName = usePathname();
    const memberId = pathName.split("/")[2]
    return <div>Sorry - Member Not valid {memberId}</div>
}