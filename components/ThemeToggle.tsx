'use client';

import { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";


function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function ThemeToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', enabled);
  }, [enabled]);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={classNames(
        enabled ? 'bg-orange-400' : 'bg-stone-700',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none'
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none inline-block h-5 w-5 transform bg-orange-50 rounded-full shadow ring-0 transition duration-200 ease-in-out'
        )}
        >

        {enabled ? <SunIcon className="text-orange-400" /> : <MoonIcon className="text-stone-700" />}
      </span>
    </Switch>
  );
}