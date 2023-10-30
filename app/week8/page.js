"use client";

import { useUserAuth } from "./auth-context";

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
            
            {user? (
                <p>Logged in as {user?.displayName} with email {user?.email}</p>
            ) : (
                <p>Not logged in</p>
            )
            }

            <br/>
            
            { user ? (
                <button 
                    onClick={handleSignOut}
                    className="btn btn-outline btn-error"
                >
                    Sign Out
                </button>
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
