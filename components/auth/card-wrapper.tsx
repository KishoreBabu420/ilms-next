'use client';

import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

import { Header } from './header';
import { Social } from './social';
import { BackButton } from './back-button';

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className='w-[400px] shadow-none border-0'>
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>

      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardContent>{children}</CardContent>

      <CardFooter>
        <BackButton
          label={backButtonLabel}
          href={backButtonHref}
        />
      </CardFooter>
    </Card>
  );
};
