import { ITextProps, Text} from "native-base";
import { ReactNode } from "react";
import { Title } from "./Title";

interface SectionTitleProps extends ITextProps {
    children: ReactNode
}

export function SectionTitle({children, ...rest}: SectionTitleProps){
    return (
        <Title 
            color={'blue.500'}
            textAlign='left' 
            m={5} 
            width='100%' 
            marginTop={10}
            {...rest}
            >
            {children}
        </Title>
    )
}