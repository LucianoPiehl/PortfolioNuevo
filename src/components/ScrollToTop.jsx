import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // 👈 hace el desplazamiento suave
    });
  }, [pathname]); // se ejecuta cada vez que cambia la ruta

  return null;
}

export default ScrollToTop;
