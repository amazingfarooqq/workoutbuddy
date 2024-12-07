'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ExerciseSuggestion from './ExerciseSuggestion'
import ProgressTracker from './ProgressTracker'

export default function WorkoutBuddy() {
  const [activeTab, setActiveTab] = useState('suggest')

  return (
    
      <Card className="w-full max-w-3xl dark:bg-gray-800/90 backdrop-blur-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-purple-800 dark:text-purple-300">Workout Buddy</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="suggest">Exercise Suggestions</TabsTrigger>
              <TabsTrigger value="progress">Progress Tracker</TabsTrigger>
            </TabsList>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TabsContent value="suggest" className="p-6">
                  <ExerciseSuggestion />
                </TabsContent>
                <TabsContent value="progress" className="p-6">
                  <ProgressTracker />
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </CardContent>
      </Card>
  )
}

