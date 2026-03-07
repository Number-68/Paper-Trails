import PullTab from "./pullTab";

export default function pullNav() {


    // todo: idea. make sure the pull tab brings down a long paper to cover the screen. 
    // as the pull condition is successful, it will close down, and then come back up. 
    // as the page comes back up, the thing underneath will be loaded kinda like curtains
    // to a theatre...
    return (
        <nav className="paper-nav">
            <PullTab label="Home" route="/" color="#c7ae8e"/>
            <PullTab label="Test" route="/testDirection" color="#c7ae8e"/>
            <PullTab label="alvin" route="/testDirection" color="#c7ae8e"/>
       

        </nav>
        
    )

}
