import { useStore } from '@nanostores/react';
import type { ReactNode } from 'react';
import { isFrameworkVisible } from '../utils/state';
import { humanize } from '../utils/string';

const FRAMEWORK_COLOR_MAP = {
  react: 'tw-bg-blue-400',
  svelte: 'tw-bg-orange-400',
  vue: 'tw-bg-green-400',
};

type Props = {
  framework: 'react' | 'svelte' | 'vue';
  children: ReactNode;
};

export const HighlighterToggle = () => {
  const visible = useStore(isFrameworkVisible);

  return (
    <div className="tw-text-white">
      <button
        type="button"
        className="tw-absolute tw-opacity-50 hover:tw-opacity-100 tw-right-10 tw-transition-all tw-drop-shadow-lg hover:tw-drop-shadow-xl tw-bottom-10 tw-text-white tw-bg-blue-500 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-full tw-text-sm tw-p-4 tw-text-center tw-inline-flex tw-items-center tw-mr-2 dark:tw-bg-blue-600 dark:hover:tw-bg-blue-700 dark:focus:tw-ring-blue-800"
        onClick={() => isFrameworkVisible.set(!visible)}
      >
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
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
        <span className="tw-sr-only">Show Framework</span>
      </button>
    </div>
  );
};

export const HighlighterWrapper = ({ children, framework }: Props) => {
  const visible = useStore(isFrameworkVisible);
  const color = visible ? FRAMEWORK_COLOR_MAP[framework] : 'tw-bg-inherit';

  const display = visible ? 'tw-visible' : 'tw-invisible';

  return (
    <div className="tw-relative">
      <div className={`tw-p-1 ${color}`}>
        <div className="tw-bg-white tw-rounded m-1">{children}</div>
      </div>

      <span
        className={`tw-w-fit tw-p-1 tw-absolute tw-right-0 tw-bottom-30 tw-z-10 ${color} ${display}`}
      >
        {humanize(framework)}
      </span>
    </div>
  );
};
