import { Fragment } from 'react';
import Link from 'next/link';

function NewsPage() {
    return (
    <Fragment>
        <h1>news page</h1>
        <ul>
            <li><Link href='news/test1'>test1</Link></li>
            <li><Link href='news/test2'>test2</Link></li>
        </ul>
    </Fragment>
    );
}

export default NewsPage;