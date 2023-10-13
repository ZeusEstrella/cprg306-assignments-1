import Link from 'next/link';


export default function Page() {
    return(
        <main>
            <Link href='/' className="hover:underline ">
                🏠Home
            </Link>
        </main>
    );
}