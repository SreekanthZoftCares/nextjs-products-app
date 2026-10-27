"use client";

import { useRouter } from "next/navigation";
import React, { PropsWithChildren } from "react";

type RouteGuardProps = PropsWithChildren & {
  mode: "public" | "private";
};

export default function RouteGuard({ mode, children }: RouteGuardProps) {
  const [isChecking, setIsChecking] = React.useState(true);
  const router = useRouter();

  React.useEffect(() => {
    const isAuth = localStorage.getItem("isAuth") === "true";

    if (isAuth && mode === "public") {
      router.replace("/products");
      return;
    } else if (!isAuth && mode === "private") {
      router.replace("/login");
      return;
    } else {
      const id = requestAnimationFrame(() => {
        setIsChecking(false);
      });

      return () => cancelAnimationFrame(id);
    }
  }, [mode, router]);

  if (isChecking) {
    return <p>Checking authentication...</p>;
  }

  return <>{children}</>;
}
