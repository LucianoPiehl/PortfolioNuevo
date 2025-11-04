import React from "react";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} Luciano Piehl. {t("footer.rights")}
      </p>
    </footer>
  );
}

export default Footer;
