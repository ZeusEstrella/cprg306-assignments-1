import Link from "next/link";

export default function Page() {

    return(
        <main>
            <div>
                <Link href='/' className="hover:underline ">
                    Home
                </Link>
            </div>
        </main>
    )
}