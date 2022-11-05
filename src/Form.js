import { FormText } from "./FormText";
export const Form =()=>{
        return(
            <form>
                <FormText/>
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder="yourname@email.com" id="email" className="input"/>
                </div>
                <div class="form-group">
                    <label>Message</label>
                    <textarea type="text" required placeholder="Send me a message and I'll reply you as soon as possible..." id="messgae" class="user" rows="5"></textarea>
                </div>
                <div className="checkbox">
                    <input type="checkbox" name="" id="checkbox"/>
                    <p>You agree to providing your data to Niffyboy who may contact you.</p>
                </div>
                <div className="">
                    <input type="submit" className="submit" value="Send Message" id="btn__submit"/>
                </div>
            </form>
        );
    }