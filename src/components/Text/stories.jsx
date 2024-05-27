import { TextContent } from '.';
 
export default {
    title: 'TextContent',
    component: 'TextContent',
    args: {
        children: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi atque doloremque voluptas exercitationem provident veritatis officiis laboriosam cum assumenda enim fuga vitae, ipsam in ipsa sapiente rerum. Voluptatibus, architecto illo.`,
    },
    argstypes: {
        children: {type: 'string'},
    },
};
export const Template = ( args ) => {
    return (
        <div>
            <TextContent {...args} />
        </div>
    );
};