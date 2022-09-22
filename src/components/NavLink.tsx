import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className: string | ((obj: { isActive: boolean }) => string);
  to: string;
  end?: boolean;
};

const getPath = () => {
  if (typeof window === 'undefined') {
    return '';
  }

  return window.location.pathname;
};

export default function NavLink({ children, className, to }: Props) {
  const isActive = getPath().endsWith(to) || false;

  const href = import.meta.env.BASE_URL.slice(0, -1) + to;

  return (
    <a
      href={href}
      className={
        typeof className === 'string' ? className : className({ isActive })
      }
    >
      {children}
    </a>
  );
}
