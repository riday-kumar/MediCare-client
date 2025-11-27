import { useUser } from "@clerk/nextjs";

const useUserHook = () => {
  const { user, isSignedIn } = useUser();

  return { user, isSignedIn };
};

export default useUserHook;
