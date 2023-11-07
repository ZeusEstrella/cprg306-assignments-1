"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    const handleSignIn = async () => { 
        await gitHubSignIn();
    }

    const handleSignOut = async () => {
        await firebaseSignOut();
    }

    return (
        <main>
            
            <Link href='/' className="hover:underline ">
                    🏠Home
            </Link>

            {user? (
                <p>Logged in as {user?.displayName} with email {user?.email}</p>
            ) : (
                <p>Not logged in</p>
            )
            }

            <br/>
            
            { user ? (
                
                <div className="m-2 p-2 flex flex-col w-32 "> 
                    <button 
                        onClick={handleSignOut}
                        className="btn btn-outline btn-error flex-initial "
                    >
                        Sign Out
                    </button>

                    <div>
                        <Link 
                            href='/week8/shopping-list' 
                            className="btn btn-outline btn-ghost"
                        >
                            🛒Shopping List
                        </Link>
                    </div>
                </div>
            ) : (
                <button 
                    onClick={handleSignIn}
                    className="btn btn-outline btn-success"
                >
                    Sign In
                </button>
            )}

        </main>
    );
}
