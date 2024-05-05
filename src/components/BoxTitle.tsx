import { ITextProps, Text} from "native-base";
import { ReactNode } from "react";

interface BoxTitleProps extends ITextProps {
    children: ReactNode
}

export function BoxTitle({children, ...rest}: BoxTitleProps){
    return (
        <Text 
            fontSize="18"
            fontWeight="bold"
            color="blue.500"
            textAlign="center"
            marginTop="5"
            marginBottom="2"
            {...rest}
        >
            {children}
        </Text>
    )
}