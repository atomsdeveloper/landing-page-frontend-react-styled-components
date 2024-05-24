// Passando as configurações do componente para o Storybook
import { Heading } from '.';

export default {
    title: 'Heading',
    component: Heading,
    args: {
        children: 'Texto'
    },
    argTypes: {
        children: {type: 'string'}
    }
}
export const Template = (args) => {
    return <Heading {...args} />; 
}