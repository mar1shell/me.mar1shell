import { useEffect } from "react";
import useLocalStorage from "../useLocalStorage/useLocalStorage";

export default function useDarkMode() {
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
    "dark-theme",
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false,
  );

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return [isDarkMode, setDarkMode] as const;
}
