import React, {ReactElement} from 'react';

const Foo = (): ReactElement => {
    const url = import.meta.env.VITE_WEBSITE_BASE + '/search?q=foo+bar';

    return (
        <div data-testid="app">
            <a href={url}>Klick me</a>
        </div>
    );
}

export default Foo;
