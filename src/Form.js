import { FormText } from "./FormText";
import { FormEmail } from "./FormEmail";
import { FormMessage } from "./FormMessage";
import { FormCheckbox } from "./FormCheckbox";
import { Send } from "./FormSend";
export const Form =()=>{
        return(
            <form>
                <FormText/>
                <FormEmail />
                <FormMessage />
                <FormCheckbox />
                <Send />
            </form>
        );
    }