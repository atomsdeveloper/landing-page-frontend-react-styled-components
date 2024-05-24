// Passando as configurações do componente para o Storybook
import Heading from './Heading';

export default {
    title: 'Heading',
    component: Heading,
    args: {
        children: 'Texto está claro',
        light: false
    },
    argTypes: {
        children: {type: 'string'},
        light: {type: 'boolean'}
    },
    parameters: {
        backgrounds: {
            default: 'dark'
        }
    }
}
export const Dark = (args) => {
    return <Heading {...args} light={false} />; 
}


export const Light = (args) => {
    return <Heading {...args} light={true} />; 
}
Light.parameters = {
    backgrounds: {
        default: 'light',
    },
};

Light.args = {
    children: 'Texto está escuro',
    light: true
};