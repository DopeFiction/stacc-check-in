'use client';

import { makeStyles, tokens } from '@fluentui/react-components';

/** List of CSS styles for the Home page. */
export const useStyleList = makeStyles({
    'card': {
        'backgroundColor': tokens.colorNeutralBackground2,
        'marginLeft': tokens.spacingHorizontalM,
        'width': '250px'
    },
    'markdownTestCard': {
        'backgroundColor': tokens.colorNeutralBackground2,
        'marginTop': tokens.spacingVerticalXL,
        'maxWidth': '760px',
        'padding': tokens.spacingHorizontalM,
        'width': '100%'
    }
});
