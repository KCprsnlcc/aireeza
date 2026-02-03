'use client'

import { Icon } from '@iconify/react'
import { useTheme } from '@/contexts/ThemeContext'

interface StatsCardProps {
  title: string
  value: number | string
  icon: string
  trend?: {
    value: number
    isPositive: boolean
  }
}

export default function StatsCard({ title, value, icon, trend }: StatsCardProps) {
  const { theme } = useTheme()
  
  return (
    <div className={`border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
      theme === 'dark'
        ? 'bg-neutral-900/50 border-neutral-800 hover:bg-neutral-900'
        : 'bg-white border-neutral-200 hover:shadow-neutral-200'
    }`}>
      <div className="flex items-start justify-between">
        <div>
          <p className={`text-sm mb-1 ${
            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
          }`}>{title}</p>
          <p className={`text-2xl font-semibold ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>{value}</p>
          {trend && (
            <p className={`text-xs mt-2 flex items-center gap-1 ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              <Icon 
                icon={trend.isPositive ? 'solar:arrow-up-linear' : 'solar:arrow-down-linear'} 
                className="w-3 h-3" 
              />
              {Math.abs(trend.value)}% from last week
            </p>
          )}
        </div>
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
          theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-100'
        }`}>
          <Icon icon={icon} className={`w-5 h-5 ${
            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
          }`} />
        </div>
      </div>
    </div>
  )
}
