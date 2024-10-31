import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const navigateSetTimeout = setTimeout(() => {
      navigate("/");
    }, 1000);

    return () => {
      clearTimeout(navigateSetTimeout);
    };
  }, []);

  return <h1>Error 404!</h1>;
}

export default NotFound;
