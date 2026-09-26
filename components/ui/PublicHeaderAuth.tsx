'use client'

import { useSession } from "@/lib/auth-client";
import { User as UserIcon } from 'lucide-react';
import { Button } from '../shadcn/button';
import Link from "next/link";

function PublicHeaderAuth() {
    const { data } = useSession();
    console.log('PublicHeader session:', data);
    const isLoggedIn = !!data?.session
    const userRole = data?.session?.role;
    const dashboardLink = userRole === 'driver' ? `/${data?.session.activeOrganizationSlug}/driver/dashboard` : `/${data?.session.activeOrganizationSlug}/dashboard`;

    if (isLoggedIn) {
        return (
            <Button
                size="sm"
                variant="outline"
                className="gap-2 rounded-full"
                asChild
            >
                <Link href={dashboardLink} className="flex items-center gap-2">
                    Dashboard
                </Link>
            </Button>
        )
    }

    return (
        <Button
            variant="ghost"
            size="sm"
            className="gap-2"
            asChild
        >
            <Link href="/login" className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                Login
            </Link>
        </Button>
    )
}

export default PublicHeaderAuth