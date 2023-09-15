import StudentInfo from './studentinfo'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href='/week2'>
        <p> Week 2 </p> 
      </Link>
    </div>
  )
}
