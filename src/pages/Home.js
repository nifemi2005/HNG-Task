import { Links } from "../Links";
import { Footer } from "../Footer";
import { Icon } from "../Icon";
import { Profile } from "../Profile";
import { Hr } from "../Hr";
export function Home(){
    return (
        <>
            <h1>Home</h1>
            <Profile/>
            <Links/>
            <Icon/>
            <Hr />
            <Footer/>
        </>
    );
}