import PullTab from "./pullTab";

export default function pullNav() {

    return (
        <nav>
            <PullTab label="Home" route="/" />
            <PullTab label="Test" route="/testDirection" />
            
        </nav>
        
    )

}
