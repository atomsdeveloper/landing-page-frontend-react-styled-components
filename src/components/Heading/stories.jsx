// Passando as configurações do componente Heading para o Storybook
import { Heading } from '.';

export default {
    title: 'Heading',
    component: Heading,
    args: {
        children: 'Fundo está escuro',
    },
    argTypes: {
        children: {type: 'string'},
    },
    parameters: {
        backgrounds: {
            default: 'dark'
        }
    }
}
export const Dark = (args) => {
    return <Heading {...args} />; 
};

export const Light = (args) => {
    return <Heading {...args} light={true} />; 
};
Light.parameters = {
    backgrounds: {
        default: 'light',
    },
};
Light.args = {
    children: 'Fundo está claro',
    light: true
};