// import { ModeToggle } from '@/components/node-toggle'
import WorkoutBuddy from '@/components/WorkoutBuddy'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-300">
      {/* <div className="absolute top-4 right-4">
        <ModeToggle />
      </div> */}
      <WorkoutBuddy />
    </main>
  )
}

