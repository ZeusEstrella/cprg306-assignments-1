import StudentInfo from './studentinfo'
import Link from 'next/link'

export default function Home() {
  
  const weekLinkStyle = 'hover:underline btn btn-primary m-2 p-2';
  return (
    <main className='m-3 p-2'>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      
      <div>
        <div>
          <Link href='/week2' className={weekLinkStyle} >
            week 2 
          </Link>
        </div>
        <div>
          <Link href='/week3' className={weekLinkStyle} >
            week 3 
          </Link>
        </div>
        <div>
          <Link href='/week4' className={weekLinkStyle} >
            week 4 
          </Link>
        </div>
        <div>
          <Link href='/week5' className={weekLinkStyle} >
            week 5 
          </Link>
        </div>
        <div>
          <Link href='/week6' className={weekLinkStyle} >
            week 6 
          </Link>
        </div>
        <div>
          <Link href='/week7' className={weekLinkStyle} >
            week 7 
          </Link>
        </div>
        <div>
          <Link href='/week8' className={weekLinkStyle} >
            week 8 
          </Link>
        </div>
      </div>
      
    </main>
  )
}
