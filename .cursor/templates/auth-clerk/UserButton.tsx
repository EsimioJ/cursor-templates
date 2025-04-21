"use client";

import { useState } from "react";
import { UserButton as ClerkUserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

interface UserNavProps {
  items?: {
    label: string;
    href: string;
  }[];
}

/**
 * Componente di navigazione utente che mostra un pulsante utente
 * con menu a discesa e opzioni personalizzate
 * Compatibile con shadcn/ui
 */
export function UserNav({ items = [] }: UserNavProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { user, isSignedIn } = useUser();

  // Se l'utente non è autenticato, non mostrare nulla
  if (!isSignedIn) {
    return null;
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <ClerkUserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                userButtonAvatarBox: "h-8 w-8",
              },
            }}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user?.fullName || "Utente"}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.primaryEmailAddress?.emailAddress || ""}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map((item) => (
          <DropdownMenuItem
            key={item.href}
            onClick={() => {
              router.push(item.href);
              setOpen(false);
            }}
          >
            {item.label}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            router.push("/user-profile");
            setOpen(false);
          }}
        >
          Profilo
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
