'use client';

import { Card, CardHeader, CardPreview, Subtitle1, Text, Title1 } from '@fluentui/react-components';
import { Layout, LayoutItem } from '../_components/elements/LayoutSystem';
import { RenderMarkdown } from '../_components/elements/RenderMarkdown';
import { markdownTester } from '../_components/utilities/markdowntester';
import { useStyleList } from '../_components/styles/pages/Home';
import { makeStyles, tokens } from '@fluentui/react-components';

/** List of CSS styles for the markdown test page. */
const useMarkdownTestPageStyleList = makeStyles({
    'scrollContainer': {
        'height': '100%',
        'overflowY': 'auto',
        'paddingBottom': tokens.spacingVerticalXL,
        'width': '100%'
    }
});

/**
 * Renders the standalone markdown renderer test page.
 * @returns Rendered markdown test page.
 */
export default function MarkdownTestPage(): React.ReactNode {
    /** Compiled CSS styles for the page. */
    const computedStyles = useStyleList();

    /** Page-level styles used to control scrolling behavior. */
    const pageStyleList = useMarkdownTestPageStyleList();

    return (
        <Layout align="start" className={ pageStyleList.scrollContainer } justify="start">
            <LayoutItem>
                <Title1>Markdown Renderer Test</Title1>
            </LayoutItem>
            <LayoutItem>
                <Card className={ computedStyles.markdownTestCard }>
                    <CardHeader
                        header={ <Subtitle1>CommonMark Markdown Renderer Test</Subtitle1> }
                        description={ <Text>Use this page to validate standard markdown behavior.</Text> }
                    />
                    <CardPreview>
                        <RenderMarkdown content={ markdownTester } />
                    </CardPreview>
                </Card>
            </LayoutItem>
        </Layout>
    );
}
