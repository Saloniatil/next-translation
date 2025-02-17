import { useTranslations } from 'next-intl'
import { getMessages } from 'next-intl/server';
import React from 'react'

export async function generateMetadata({
  params: {locale},
}: {
    params: {locale: string };
  }) {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  const meassages: any = await getMessages({ locale });
  const title = meassages.NavbarLinks.profileTitle;

  return {
    title,
  };
 }

const ProfilePage = () => {
  const t = useTranslations("AboutPage")
  return (
    <div className='flex w-full items-center justify-center'>
      <h1 className='text-3xl font-bold mt-30'>{t("title")}</h1>
    </div>
  )
}

export default ProfilePage