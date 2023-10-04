import Link from "next/link";
import NewItem from "./new-item";

export default function Page() {

    return(
        <main>
            <div>
                <Link href='/' className="hover:underline ">
                    Home
                </Link>
                <NewItem/>
            </div>
        </main>
    )
}