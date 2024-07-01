import { ITextProps, Text} from "native-base";
import { ReactNode } from "react";

interface TitleProps extends ITextProps {
    children: ReactNode
}

export function Title({children, ...rest}: TitleProps){
    return (
        <Text 
            fontSize="md"
            fontWeight="bold"
            color="gray.500"
            marginTop="5"
            {...rest}
            >
            {children}
        </Text>
    )
}