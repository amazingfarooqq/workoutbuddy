'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Dumbbell } from 'lucide-react'
import BodySkeleton from './BodySkeleton'

const bodyParts = [
  'Chest', 'Upper Back', 'Lower Back', 'Quadriceps', 'Hamstrings', 'Calves',
  'Shoulders', 'Biceps', 'Triceps', 'Forearms', 'Abs', 'Obliques',
  'Glutes', 'Hip Flexors', 'Neck'
] as const
type BodyPart = typeof bodyParts[number]

const exerciseTypes: Record<BodyPart, string[]> = {
  'Chest': ['Push-ups', 'Bench Press', 'Chest Flyes', 'Dips'],
  'Upper Back': ['Pull-ups', 'Rows', 'Lat Pulldowns', 'Face Pulls'],
  'Lower Back': ['Deadlifts', 'Good Mornings', 'Hyperextensions', 'Superman Holds'],
  'Quadriceps': ['Squats', 'Leg Press', 'Lunges', 'Leg Extensions'],
  'Hamstrings': ['Romanian Deadlifts', 'Leg Curls', 'Glute-Ham Raises', 'Nordic Curls'],
  'Calves': ['Calf Raises', 'Jump Rope', 'Box Jumps', 'Seated Calf Raises'],
  'Shoulders': ['Overhead Press', 'Lateral Raises', 'Front Raises', 'Reverse Flyes'],
  'Biceps': ['Bicep Curls', 'Hammer Curls', 'Preacher Curls', 'Chin-ups'],
  'Triceps': ['Tricep Extensions', 'Skull Crushers', 'Diamond Push-ups', 'Dips'],
  'Forearms': ['Farmer\'s Walks', 'Wrist Curls', 'Reverse Curls', 'Plate Pinches'],
  'Abs': ['Crunches', 'Planks', 'Leg Raises', 'Ab Wheel Rollouts'],
  'Obliques': ['Russian Twists', 'Side Planks', 'Woodchoppers', 'Bicycle Crunches'],
  'Glutes': ['Hip Thrusts', 'Glute Bridges', 'Step-ups', 'Bulgarian Split Squats'],
  'Hip Flexors': ['Leg Raises', 'Mountain Climbers', 'Scissor Kicks', 'High Knees'],
  'Neck': ['Neck Flexion', 'Neck Extension', 'Lateral Neck Flexion', 'Isometric Holds']
}

interface WorkoutSuggestion {
  exercise: string
  sets: number
  reps: number
  rest: number
}

export default function ExerciseSuggestion() {
  const [bodyPart, setBodyPart] = useState<BodyPart>('Chest')
  const [duration, setDuration] = useState(30)
  const [suggestion, setSuggestion] = useState<WorkoutSuggestion | null>(null)

  const generateSuggestion = () => {
    const exercise = exerciseTypes[bodyPart][Math.floor(Math.random() * exerciseTypes[bodyPart].length)]
    const sets = Math.floor(Math.random() * 3) + 3 // 3-5 sets
    const reps = Math.floor(Math.random() * 8) + 8 // 8-15 reps
    const rest = Math.floor(Math.random() * 30) + 30 // 30-60 seconds rest

    setSuggestion({ exercise, sets, reps, rest })
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="bodyPart">Target Body Part</Label>
            <select
              id="bodyPart"
              value={bodyPart}
              onChange={(e) => setBodyPart(e.target.value as BodyPart)}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            >
              {bodyParts.map((part) => (
                <option key={part} value={part}>{part}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="duration">Workout Duration (minutes)</Label>
            <Slider
              id="duration"
              min={10}
              max={60}
              step={5}
              value={[duration]}
              onValueChange={(value) => setDuration(value[0])}
            />
            <div className="text-right">{duration} minutes</div>
          </div>
          <Button onClick={generateSuggestion} className="w-full">
            <Dumbbell className="mr-2 h-4 w-4" /> Generate Workout
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
          <BodySkeleton selectedPart={bodyPart} />
        </div>
      </div>
      <AnimatePresence>
        {suggestion && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-4 p-4 bg-purple-100 dark:bg-purple-900 rounded-lg"
          >
            <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200">Suggested Workout for {bodyPart}:</h3>
            <p className="text-purple-600 dark:text-purple-300">Exercise: {suggestion.exercise}</p>
            <p className="text-purple-600 dark:text-purple-300">Sets: {suggestion.sets}</p>
            <p className="text-purple-600 dark:text-purple-300">Reps: {suggestion.reps}</p>
            <p className="text-purple-600 dark:text-purple-300">Rest between sets: {suggestion.rest} seconds</p>
            <p className="text-purple-600 dark:text-purple-300 mt-2">
              Total estimated time: {Math.round((suggestion.sets * (suggestion.reps * 3 + suggestion.rest)) / 60)} minutes
            </p>
            <p className="text-purple-600 dark:text-purple-300 mt-2">
              Perform this exercise for the suggested sets and reps. If you have remaining time in your {duration}-minute workout,
              rest for 2-3 minutes and repeat the exercise or choose a new one.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

