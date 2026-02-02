'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { Icon } from '@iconify/react';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-current/30 hover:bg-current/10 transition-all duration-300"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme === 'dark' ? (
                <Icon icon="solar:sun-linear" width="16" height="16" />
            ) : (
                <Icon icon="solar:moon-linear" width="16" height="16" />
            )}
        </button>
    );
}
