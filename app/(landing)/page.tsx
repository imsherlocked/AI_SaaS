import { UserButton } from "@clerk/nextjs";

const LandingPage=()=>{

    return(
        <div>
            Landing Page(Unprotected)
            <UserButton/>
        </div>
    )
}

export default LandingPage;