import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = ` Nooote - ${title}`;
  }, [title]);
};
export default useTitle;