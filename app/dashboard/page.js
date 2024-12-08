import { getKindeServerSession, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default function DashboardPage() {
    const { getUser } = getKindeServerSession();
    const user = getUser();
    return (
        <div>

            <div className='flex justify-center items-center min-h-screen text-black'>
                <div>
                    <h1 className='text-3xl font-bold my-4'>Termox User Dashboard [Testing login/sign-up...update soon]</h1>
                    <h3 className='text-xl font-bold'>
                        Hey {user.given_name} {user.family_name} - {user.email}
                    </h3>
                     <LogoutLink><button className="btnLogin-popup bg-orange-300 font-bold mx-auto border rounded-md border-gray-300 px-4 py-2 ml-4 text-gray-600 hover:bg-gray-800 hover:text-white transition">
                        Logout
                    </button></LogoutLink>
                </div>

            </div>

        </div>
    )
}