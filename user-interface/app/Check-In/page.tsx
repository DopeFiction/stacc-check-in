"use client";
import { Layout, LayoutItem } from "../_components/elements/LayoutSystem";
import { Button, Input, Text, makeStyles, tokens } from '@fluentui/react-components';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue, checkInInputSelector } from '../../store/components/elements/checkIn';
import type { InputProps } from '@fluentui/react-components';

const PATTERN = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;

const useStyleList = makeStyles({
    'row': {
        'display': 'flex',
        'gap': '0.5rem',
        'alignItems': 'center',
        'width': '100%'
    },
    'userIDEntry': {
        'width': '70%'
    },
    'successText': {
        'color': tokens.colorStatusSuccessForeground1
    }
});

/**
 * Check in page.
 * @returns Rendered check in page.
 */
export default function Page(): React.ReactNode {
    const styleList = useStyleList();
    const dispatch = useDispatch();
    const inputValue = useSelector(checkInInputSelector);

    const isValid = PATTERN.test(inputValue);

    const handleChange: InputProps['onChange'] = (_ev, data) => {
        dispatch(setInputValue(data.value));
    };

    return (
        <Layout>
            <>
                Hello
                 </>
                <Layout >
                    <LayoutItem className={ styleList.row }>
                        <Input
                            className={ styleList.userIDEntry }
                            aria-label="Check in input"
                            placeholder="Enter value"
                            value={ inputValue }
                            onChange={ handleChange }
                        />
                        <Button appearance="primary" type="submit" disabled={ !isValid }>Submit</Button>
                    </LayoutItem>
                    { isValid && (
                        <LayoutItem>
                            <Text className={ styleList.successText }>Valid ID entered</Text>
                        </LayoutItem>
                    ) }
                </Layout>
           
        </Layout>
    );
}
