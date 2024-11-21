import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
 

export async function generateMetadata({
  params: {locale},
}: {
    params: {locale: string };
  }) {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  const meassages: any = await getMessages({ locale });
  const title = meassages.NavbarLinks.homeTitle;

  return {
    title,
  };
 }

export default function Home() {
  const t = useTranslations("HomePage")
  return (
    <div className="flex w-full items-center justify-center">
      <div className="text-3xl font-bold mt-20">
        {t("title")}
      </div>
  </div>
  );
}
