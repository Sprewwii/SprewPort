import React from 'react'
import ActivitiyCard from "./ActivitiyCard"
import { Experiences } from '../commons/Experience'

function ActivityPage() {
  const ExperienceList = Experiences
  return (
    <div className="mt-28 mb-10">
            <h1 className="text-center text-5xl font-black text-gray-700 z-50">ACTIVITIES</h1>
            
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-4 py-12 mx-16">
            {ExperienceList.map((experience, i) => <ActivitiyCard  experience={experience} index={i} key={i} />)}
        </div>
        </div>
  )
}

export default ActivityPage