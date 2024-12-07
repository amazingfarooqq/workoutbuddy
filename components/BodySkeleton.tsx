import React from 'react'
import { motion } from 'framer-motion'

interface BodySkeletonProps {
  selectedPart: string
}

const BodySkeleton: React.FC<BodySkeletonProps> = ({ selectedPart }) => {
  return (
    <svg width="200" height="400" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head and Neck */}
      <motion.circle
        cx="100" cy="40" r="35"
        fill={selectedPart === 'Neck' ? 'red' : 'currentColor'}
        animate={{ scale: selectedPart === 'Neck' ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <path d="M85 50 Q100 70 115 50" stroke="currentColor" strokeWidth="2" fill="none" />
      <motion.path
        d="M90 75 L90 90 L110 90 L110 75"
        stroke={selectedPart === 'Neck' ? 'red' : 'currentColor'}
        strokeWidth="20" fill="none"
        animate={{ scale: selectedPart === 'Neck' ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Torso */}
      <motion.path
        d="M70 90 L70 220 Q100 240 130 220 L130 90 Z"
        fill={selectedPart === 'Abs' || selectedPart === 'Obliques' ? 'red' : 'currentColor'}
        animate={{ scale: selectedPart === 'Abs' || selectedPart === 'Obliques' ? 1.05 : 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Upper Arms */}
      <motion.path
        d="M70 100 Q40 140 50 200"
        stroke={selectedPart === 'Biceps' || selectedPart === 'Triceps' ? 'red' : 'currentColor'}
        strokeWidth="20" fill="none"
        animate={{ scale: selectedPart === 'Biceps' || selectedPart === 'Triceps' ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.path
        d="M130 100 Q160 140 150 200"
        stroke={selectedPart === 'Biceps' || selectedPart === 'Triceps' ? 'red' : 'currentColor'}
        strokeWidth="20" fill="none"
        animate={{ scale: selectedPart === 'Biceps' || selectedPart === 'Triceps' ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Forearms */}
      <motion.path
        d="M50 200 Q55 220 40 250"
        stroke={selectedPart === 'Forearms' ? 'red' : 'currentColor'}
        strokeWidth="15" fill="none"
        animate={{ scale: selectedPart === 'Forearms' ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.path
        d="M150 200 Q145 220 160 250"
        stroke={selectedPart === 'Forearms' ? 'red' : 'currentColor'}
        strokeWidth="15" fill="none"
        animate={{ scale: selectedPart === 'Forearms' ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Hands */}
      <motion.circle
        cx="40" cy="260" r="10"
        fill={selectedPart === 'Forearms' ? 'red' : 'currentColor'}
        animate={{ scale: selectedPart === 'Forearms' ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.circle
        cx="160" cy="260" r="10"
        fill={selectedPart === 'Forearms' ? 'red' : 'currentColor'}
        animate={{ scale: selectedPart === 'Forearms' ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Upper Legs */}
      <motion.path
        d="M70 220 Q60 280 70 320"
        stroke={selectedPart === 'Quadriceps' || selectedPart === 'Hamstrings' ? 'red' : 'currentColor'}
        strokeWidth="25" fill="none"
        animate={{ scale: selectedPart === 'Quadriceps' || selectedPart === 'Hamstrings' ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.path
        d="M130 220 Q140 280 130 320"
        stroke={selectedPart === 'Quadriceps' || selectedPart === 'Hamstrings' ? 'red' : 'currentColor'}
        strokeWidth="25" fill="none"
        animate={{ scale: selectedPart === 'Quadriceps' || selectedPart === 'Hamstrings' ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Lower Legs */}
      <motion.path
        d="M70 320 Q75 350 60 390"
        stroke={selectedPart === 'Calves' ? 'red' : 'currentColor'}
        strokeWidth="20" fill="none"
        animate={{ scale: selectedPart === 'Calves' ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.path
        d="M130 320 Q125 350 140 390"
        stroke={selectedPart === 'Calves' ? 'red' : 'currentColor'}
        strokeWidth="20" fill="none"
        animate={{ scale: selectedPart === 'Calves' ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Feet */}
      <motion.path
        d="M50 390 Q60 400 70 390"
        stroke={selectedPart === 'Calves' ? 'red' : 'currentColor'}
        strokeWidth="10" fill="none"
        animate={{ scale: selectedPart === 'Calves' ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.path
        d="M130 390 Q140 400 150 390"
        stroke={selectedPart === 'Calves' ? 'red' : 'currentColor'}
        strokeWidth="10" fill="none"
        animate={{ scale: selectedPart === 'Calves' ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Shoulders */}
      <motion.circle
        cx="70" cy="100" r="15"
        fill={selectedPart === 'Shoulders' ? 'red' : 'currentColor'}
        animate={{ scale: selectedPart === 'Shoulders' ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.circle
        cx="130" cy="100" r="15"
        fill={selectedPart === 'Shoulders' ? 'red' : 'currentColor'}
        animate={{ scale: selectedPart === 'Shoulders' ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Chest */}
      <motion.path
        d="M75 120 Q100 140 125 120"
        stroke={selectedPart === 'Chest' ? 'red' : 'currentColor'}
        strokeWidth="5" fill="none"
        animate={{ scale: selectedPart === 'Chest' ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Back */}
      <motion.rect
        x="85" y="110" width="30" height="40"
        fill={selectedPart === 'Upper Back' ? 'red' : 'currentColor'}
        animate={{ scale: selectedPart === 'Upper Back' ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.rect
        x="85" y="150" width="30" height="40"
        fill={selectedPart === 'Lower Back' ? 'red' : 'currentColor'}
        animate={{ scale: selectedPart === 'Lower Back' ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Glutes and Hip Flexors */}
      <motion.path
        d="M70 200 Q100 230 130 200"
        stroke={selectedPart === 'Glutes' || selectedPart === 'Hip Flexors' ? 'red' : 'currentColor'}
        strokeWidth="5" fill="none"
        animate={{ scale: selectedPart === 'Glutes' || selectedPart === 'Hip Flexors' ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
    </svg>
  )
}

export default BodySkeleton

