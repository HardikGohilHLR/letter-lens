// Theme Toggle
'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const ThemeToggle = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button> & { className?: string }
>(({ className, ...props }, ref) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      ref={ref}
      variant="ghost"
      type="button"
      size="icon"
      className={cn('h-10 w-10 cursor-pointer', className)}
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      {...props}
    >
      <SunIcon className="size-5! text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden size-5! text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
});

ThemeToggle.displayName = 'ThemeToggle';
