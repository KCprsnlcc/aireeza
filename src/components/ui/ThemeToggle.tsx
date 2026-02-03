'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { Icon } from '@iconify/react';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center gap-1 text-[8px] transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme === 'dark' ? (
                <Icon icon="solar:sun-linear" width="10" height="10" />
            ) : (
                <Icon icon="solar:moon-linear" width="10" height="10" />
            )}
        </button>
    );
}
