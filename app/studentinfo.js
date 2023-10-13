import Link from 'next/link';
import Image from 'next/image';

export default function StudentInfo() {
    return (
        <div>
            <p>Name: Sergio Nicolas Martinez Valencia</p>
            <p>Course Section: CPRG 306 A</p>
            <Link href='https://github.com/Maikiby/cprg306-assignments'>
                <Image src='/github-mark-white.png' alt='Github Logo' className='h-12 w-12 btn btn-square glass' width={50} height={50}/>
            </Link>
        </div>
    )

}
