import * as React from 'react';

import { cn } from '@/lib/utils';

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'border-input focus-visible:ring-ring disabled:opacity-50-sm bg-dark-gray light:placeholder:text-secondary flex min-h-[60px] w-full resize-none rounded-2xl border px-4 py-6 text-base font-medium focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed dark:placeholder:text-white',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
