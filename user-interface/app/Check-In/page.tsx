"use client";
import { Layout, LayoutItem } from "../_components/elements/LayoutSystem";
import { Button, Input, makeStyles } from '@fluentui/react-components';

const useStyleList = makeStyles({
    'row': {
        'display': 'flex',
        'gap': '0.5rem',
        'alignItems': 'center',
        'width': '100%'
    },
    'userIDEntry': {
        'width': '70%'
    }
});

/**
 * Check in page.
 * @returns Rendered check in page.
 */
export default function Page(): React.ReactNode {
    const styleList = useStyleList();

    return (
        <Layout>
            <>
                Hello
                 </>
                <Layout >
                    <LayoutItem className={ styleList.row }>
                        <Input className={ styleList.userIDEntry } aria-label="Check in input" placeholder="Enter value" />
                        <Button  appearance="primary" type="submit">Submit</Button>
                    </LayoutItem>

                </Layout>
           
        </Layout>
    );
}
