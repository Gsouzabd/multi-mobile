import { ITextProps, FormControl, Input} from "native-base";
import { ReactNode } from "react";

interface InputTextProps extends ITextProps {
    label: ReactNode,
    placeholder: string
    secureTextEntry?: boolean
}

export function InputText({label, placeholder, secureTextEntry, ...rest}: InputTextProps){
    return (
        <FormControl mt={3}>

            <FormControl.Label>
                {label}
            </FormControl.Label>

            <Input 
                placeholder={placeholder} 
                secureTextEntry={secureTextEntry}
                size="lg" 
                w="100%" 
                borderRadius={"lg"} 
                bgColor={"gray.100"}
                {...rest}
            />
        </FormControl>
    )
}