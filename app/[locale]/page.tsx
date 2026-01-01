"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { usePathname, Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function Home() {
  const t = useTranslations("hello");
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <>
      <Link href={pathname} locale={locale === "en" ? "zh" : "en"}>
        {pathname}
      </Link>

      <Button>{t("world")}</Button>
    </>
  );
}
