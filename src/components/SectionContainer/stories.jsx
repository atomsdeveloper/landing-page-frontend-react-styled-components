import { SectionContainer } from '.';

export default {
    title: 'SectionContainer',
    component: SectionContainer,
    args: {
        children: (
            <div>
                <h1> Section Container </h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, minima itaque. Eius aliquam et aliquid neque dolores harum quaerat, quod autem ipsam voluptatum commodi impedit porro est pariatur praesentium totam. </p>
            </div>
        ),
    },
    argTypes: {
        children: {type: ''},
    },
};
export const Template = ( args ) => {
    return (
        <div>
            <SectionContainer {...args} />
        </div>
    );
};