import { Menu } from '.';

import LinksMock from '../NavLinks/mock';

export default {
    title: 'Menu',
    component: Menu,
    args: {
        links: LinksMock,
        logoData: {
            text: 'Logo',
            link: '#target',
            image: ''
        }
    },
    argstypes: {
        children: {type: ''},
    },
};
export const Template = ( args ) => {
    return (
        <div>
            <Menu {...args} />
        </div>
    );
};