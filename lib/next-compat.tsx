import React from 'react';

export function Link({ href, children, className, ...props }: any) {
  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith('/') && !href.startsWith('//')) {
      e.preventDefault();
      window.history.pushState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <a href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

export function usePathname() {
  const [pathname, setPathname] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return pathname;
}
