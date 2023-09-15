import Link from 'next/link';

export default function StudentInfo() {
    return (
        <div>
            <p>Name: Sergio Nicolas Martinez Valencia</p>
            <p>Course Section: CPRG 306 A</p>
            <Link href='https://github.com/Maikiby/cprg306-assignments'>
                <img src='/github-mark-white.png' alt='Github Logo' className='h-12 w-12' />
            </Link>
        </div>
    )

}
