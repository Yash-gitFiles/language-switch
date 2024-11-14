import React from "react";
import { useTranslation } from "react-i18next";

function MainContent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("forgot_password")}</p>
      <p>{t("otp_message")}</p>
    </div>
  );
}

export default MainContent;
