import { MenuLink } from '.';

export default {
    title: 'MenuLink',
    component: 'MenuLink',
    args: {
        children: 'MenuLink',
        link: 'https://www.google.com.br/'
    },
    argstypes: {
        children: {type: 'string'},
    },
};
export const Template = ( args ) => {
    return (
        <div style={{ display: "flex" }}>
            <MenuLink {...args} />
        </div>
    );
};