import {LogoLink} from '.';

export default {
    title: 'LogoLink',
    component: LogoLink,
    args: {
        text: 'LogoLink',
        image: 'assets/images/logo.svg',
        link: 'http://localhost'
    },
};
export const ImageOnly = ( args ) => {
    return (
        <div>
            <LogoLink {...args} />
        </div>
    );
};

export const TextOnly = ( args ) => {
    return (
        <div>
            <LogoLink {...args} />
        </div>
    );
};
TextOnly.args = {
    image: '',
};