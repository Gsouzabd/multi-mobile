import { ITextProps, Text} from "native-base";
import { ReactNode } from "react";

interface CardTitleProps extends ITextProps {
    children: ReactNode
}

export function CardTitle({children, ...rest}: CardTitleProps){
    return (
        <Text 
            color={'gray.500'}
            fontSize={16} 
            fontWeight={'bold'}
            {...rest}
        >
            {children}
        </Text>
    )
}