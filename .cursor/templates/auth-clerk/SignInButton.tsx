"use client";

import { useRouter } from "next/navigation";
import { SignInButton as ClerkSignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@/components/ui/button";

interface SignInButtonProps extends Omit<ButtonProps, "onClick"> {
  afterSignInUrl?: string;
  mode?: "modal" | "redirect";
  children?: React.ReactNode;
}

/**
 * Pulsante di accesso personalizzato che utilizza Clerk
 * Compatibile con shadcn/ui
 */
export function SignInButton({
  afterSignInUrl,
  mode = "redirect",
  children = "Accedi",
  ...props
}: SignInButtonProps) {
  const router = useRouter();

  return (
    <ClerkSignInButton
      mode={mode}
      afterSignInUrl={afterSignInUrl}
      signUpUrl="/sign-up"
    >
      <Button {...props}>{children}</Button>
    </ClerkSignInButton>
  );
}

/**
 * Pulsante di registrazione personalizzato che utilizza Clerk
 * Compatibile con shadcn/ui
 */
export function SignUpButton({
  afterSignUpUrl,
  mode = "redirect",
  children = "Registrati",
  ...props
}: SignInButtonProps & { afterSignUpUrl?: string }) {
  return (
    <ClerkSignInButton mode={mode} afterSignInUrl={afterSignUpUrl}>
      <Button {...props} variant={props.variant || "outline"}>
        {children}
      </Button>
    </ClerkSignInButton>
  );
}
