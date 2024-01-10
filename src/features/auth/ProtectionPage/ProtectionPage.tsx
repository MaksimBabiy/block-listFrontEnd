import { useSessionQuery } from "@/entities/session";
import { routeConfig } from "@/shared/const/routes";
import UIPageSpinner from "@/shared/ui/PageSpinner/ui-page-spinner";
import { useRouter } from "next/router";
import { PropsWithChildren, ReactElement } from "react";

export const ProtectedPage = <P,>(Component: (props: P) => ReactElement) => {
  return (props: PropsWithChildren<P>) => {
    const router = useRouter();
    const { isLoading, isError } = useSessionQuery();
    if (isLoading) return <UIPageSpinner className="w-20 h-20" />;
    if (isError) {
      router.replace(routeConfig.SIGNIN);
    }

    return <Component {...props} />;
  };
};
