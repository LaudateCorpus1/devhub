import React from 'react';
import { Helmet } from 'react-helmet';
import { getNestedText } from '../utils/get-nested-text';

export default ({ nodeData: { children } }) => (
    <Helmet>
        <meta name="description" content={getNestedText(children)} />
    </Helmet>
);
