import { Icon } from '@iconify/react'

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
  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-neutral-500 mb-1">{title}</p>
          <p className="text-2xl font-semibold text-neutral-900">{value}</p>
          {trend && (
            <p className={`text-xs mt-2 flex items-center gap-1 ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              <Icon 
                icon={trend.isPositive ? 'ph:arrow-up' : 'ph:arrow-down'} 
                className="w-3 h-3" 
              />
              {Math.abs(trend.value)}% from last week
            </p>
          )}
        </div>
        <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
          <Icon icon={icon} className="w-5 h-5 text-neutral-600" />
        </div>
      </div>
    </div>
  )
}
