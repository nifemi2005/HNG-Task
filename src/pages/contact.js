import { Header } from "../Header";
export function BookList(){
    
    const Form =()=>{
        return(
            <form action="">
                <div class="row">
                    <div class="text">
                        <label for="firstname">First name</label>
                        <input type="text" class="input" required placeholder="Enter your first name" id="first_name"/>
                    </div>
                    <div class="text">
                        <label for="lastname">Last name</label>
                        <input type="text" class="input" required placeholder="Enter your last name" id="last_name"/>
                    </div>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" required placeholder="yourname@email.com" id="email" class="input"/>
                </div>
                <div class="form-group">
                    <label for="Message">Message</label>
                    <textarea type="text" required placeholder="Send me a message and I'll reply you as soon as possible..." id="messgae" class="user" rows="5"></textarea>
                </div>
                <div class="checkbox">
                    <input type="checkbox" name="" id=""/>
                    <p>You agree to providing your data to nifemi who may contact you.</p>
                </div>
                <div class="">
                    <a href="">
                        <input type="submit" class="submit" value="Send Message" id="btn__submit"/>
                    </a>
                </div>
            </form>
        );
    }
    return (
        <>
            <section>
                <Header />
                <Form />
            </section>

        </>
        
    );
} 