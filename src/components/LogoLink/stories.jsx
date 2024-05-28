import {LogoLink} from '.';

export default {
    title: 'LogoLink',
    component: LogoLink,
    args: {
        children: 'LogoLink',
    },
    argstypes: {
        children: {type: ''},
    },
};
export const Template = ( args ) => {
    return (
        <div>
            <LogoLink {...args} />
        </div>
    );
};