import { ITextProps, FormControl, Input } from "native-base";
import { TextInputMask } from 'react-native-masked-text';
import { ReactNode } from "react";

interface InputTextProps extends ITextProps {
    label: ReactNode,
    placeholder: string
    secureTextEntry?: boolean
    date?: boolean
    value?: string
    onChangeText?: (text: string) => void;
}

export function InputText({label, placeholder, secureTextEntry, date, value, onChangeText, ...rest}: InputTextProps){
    return (
        <FormControl mt={3}>
            <FormControl.Label>
                {label}
            </FormControl.Label>

            {date ? (
                <TextInputMask
                    type={'datetime'}
                    options={{
                      format: 'DD/MM/YYYY'
                    }}
                    value={value}
                    onChangeText={onChangeText}
                    style={{borderRadius: 5, padding: 10, backgroundColor: 'gray.100', width: '100%', marginBottom: 10, borderColor: 'lightgray', borderWidth: 1}}  
                    placeholder={placeholder}
                />
            ) : (
                <Input 
                    placeholder={placeholder} 
                    secureTextEntry={secureTextEntry}
                    size="lg" 
                    w="100%" 
                    borderRadius={"lg"} 
                    bgColor={"gray.100"}
                    {...rest}
                    value={value}
                    onChangeText={onChangeText}
                />
            )}
        </FormControl>
    )
}