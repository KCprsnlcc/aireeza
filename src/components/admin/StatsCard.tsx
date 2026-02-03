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
    <div className={`relative border rounded-2xl p-8 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 overflow-hidden group ${
      theme === 'dark'
        ? 'bg-neutral-900/50 border-neutral-800 hover:bg-neutral-900/70'
        : 'bg-white border-neutral-200 hover:shadow-neutral-200'
    }`}>
      {/* Vogue-style background decoration */}
      <div className={`absolute top-0 right-0 w-24 h-24 opacity-5 transition-all duration-700 group-hover:opacity-10 ${
        theme === 'dark' ? 'text-white' : 'text-black'
      }`}>
        <div className="text-6xl font-black tracking-tighter">
          {value}
        </div>
      </div>
      
      <div className="flex items-start justify-between relative z-10">
        <div className="flex-1">
          <p className={`text-xs font-black uppercase tracking-[0.3em] mb-4 leading-relaxed ${
            theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'
          }`}>{title}</p>
          <p className={`text-3xl md:text-4xl font-black tracking-tighter leading-[0.8] mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>{value}</p>
          {trend && (
            <p className={`text-xs font-light uppercase tracking-wide flex items-center gap-2 transition-all duration-500 ${
              trend.isPositive ? 'text-emerald-600' : 'text-red-600'
            }`}>
              <Icon 
                icon={trend.isPositive ? 'solar:arrow-up-linear' : 'solar:arrow-down-linear'} 
                className="w-4 h-4 transition-transform duration-500 group-hover:scale-125" 
              />
              <span className="font-black">{Math.abs(trend.value)}%</span>
              <span className="opacity-70">from last week</span>
            </p>
          )}
        </div>
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 ${
          theme === 'dark' ? 'bg-neutral-800 group-hover:bg-neutral-700' : 'bg-neutral-100 group-hover:bg-neutral-200'
        }`}>
          <Icon icon={icon} className={`w-7 h-7 transition-all duration-700 ${
            theme === 'dark' ? 'text-neutral-400 group-hover:text-white' : 'text-neutral-600 group-hover:text-black'
          }`} />
        </div>
      </div>
      
      {/* Vogue-style decorative line */}
      <div className={`absolute bottom-0 left-0 h-px w-full transition-all duration-700 ${
        theme === 'dark' 
          ? 'bg-neutral-800 group-hover:bg-white group-hover:w-3/4' 
          : 'bg-neutral-200 group-hover:bg-black group-hover:w-3/4'
      }`}></div>
    </div>
  )
}
