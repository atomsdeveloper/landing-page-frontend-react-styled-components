import { SectionBackground } from '.';

export default {
    title: 'SectionBackground',
    component: SectionBackground,
    args: {
        children : (
            <div>
                <h1> SectionBackground </h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis hic tenetur ea voluptatum doloremque iste quam. Provident perspiciatis placeat laborum itaque autem! Fuga hic adipisci neque provident itaque praesentium voluptate! </p>
            </div>
        ),
    },
    argTypes : {
        children: { type: '' }
    }
};
export const Template = ( args ) => {
    return (
        <div>
            <SectionBackground {...args} />
        </div>
    );
};