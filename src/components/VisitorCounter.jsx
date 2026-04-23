import React, { useEffect, useState } from 'react'
import { Eye } from 'lucide-react'

const STORAGE_KEY = 'matheus_portfolio_visits'

export default function VisitorCounter() {
  const [totalVisits, setTotalVisits] = useState(0)

  useEffect(() => {
    try {
      const current = Number(localStorage.getItem(STORAGE_KEY) || '0')
      const next = current + 1
      localStorage.setItem(STORAGE_KEY, String(next))
      setTotalVisits(next)
    } catch {
      setTotalVisits(1)
    }
  }, [])

  return (
    <div className="visitor-counter-fixed">
      <div className="visitor-counter visitor-counter--simple">
        <div className="visitor-stat">
          <div className="visitor-stat-icon">
            <Eye size={14} />
          </div>
          <span className="visitor-stat-value">{totalVisits}</span>
          <span className="visitor-stat-label">visitas</span>
        </div>
      </div>
    </div>
  )
}
