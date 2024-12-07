'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function ProgressTracker() {
  const [weight, setWeight] = useState('')
  const [progressData, setProgressData] = useState([])

  useEffect(() => {
    const storedData = localStorage.getItem('workoutProgress')
    if (storedData) {
      setProgressData(JSON.parse(storedData))
    }
  }, [])

  const addProgress = () => {
    if (weight) {
      const newData = [...progressData, { date: new Date().toLocaleDateString(), weight: parseFloat(weight) }]
      setProgressData(newData)
      localStorage.setItem('workoutProgress', JSON.stringify(newData))
      setWeight('')
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="weight">Weight (kg)</Label>
        <Input
          id="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter your weight"
          className="dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <Button onClick={addProgress} className="w-full">Add Progress</Button>
      <AnimatePresence>
        {progressData.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-6"
          >
            <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">Weight Progress</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}