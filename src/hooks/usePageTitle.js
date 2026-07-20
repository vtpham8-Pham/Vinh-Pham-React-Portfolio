import { useEffect } from "react";

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `Vinh Pham | ${title}` : "Vinh Pham";
  }, [title]);
}
