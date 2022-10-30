import { useStore } from '@nanostores/react';
import type { ReactNode } from 'react';
import { isFrameworkVisible } from '../utils/state';
import { humanize } from '../utils/string';
import Fab from '@mui/material/Fab';

const FRAMEWORK_COLOR_MAP = {
  react: 'tw-bg-blue-400',
  svelte: 'tw-bg-orange-400',
  vue: 'tw-bg-green-400',
};

export const HighlighterToggle = () => {
  const visible = useStore(isFrameworkVisible);

  return (
    <Fab
      style={{ position: 'fixed', bottom: 40, right: 40 }}
      color="primary"
      aria-label="Show framework"
      onClick={() => isFrameworkVisible.set(!visible)}
    >
      {visible ? (
        <svg
          className="tw-w-6 tw-h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
          />
        </svg>
      ) : (
        <svg
          className="tw-w-6 tw-h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      )}
    </Fab>
  );
};

type Props = {
  framework: 'react' | 'svelte' | 'vue';
  children: ReactNode;
  className?: string;
};

export const HighlighterWrapper = ({
  children,
  framework,
  className,
}: Props) => {
  const visible = useStore(isFrameworkVisible);
  const color = visible ? FRAMEWORK_COLOR_MAP[framework] : 'tw-bg-inherit';

  const display = visible ? 'tw-visible' : 'tw-invisible';

  return (
    children && (
      <div className={`tw-relative ${className}`}>
        <div className={`tw-p-1 ${color}`}>
          <div className="tw-bg-white tw-rounded m-1">{children}</div>
        </div>

        <span
          className={`tw-w-fit tw-p-1 tw-absolute tw-right-0 tw-bottom-30 tw-z-10 ${color} ${display}`}
        >
          {humanize(framework)}
        </span>
      </div>
    )
  );
};
