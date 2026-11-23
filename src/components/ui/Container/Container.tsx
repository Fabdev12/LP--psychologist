import type { HTMLAttributes, ReactNode } from 'react';
type Props=HTMLAttributes<HTMLDivElement>&{children:ReactNode};
export function Container({children,className='',...props}:Props){return <div className={`section-shell ${className}`} {...props}>{children}</div>}
