enum RoutesNames {
  HOME = "HOME",
  SIGNUP = "SIGNUP",
  SIGNIN = "SIGNIN",
}
export const routeConfig: Record<RoutesNames, string> = {
  [RoutesNames.HOME]: "/",
  [RoutesNames.SIGNUP]: "/sign-up",
  [RoutesNames.SIGNIN]: "/sign-in",
};
