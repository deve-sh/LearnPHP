import React from 'react';

// Component to render Code Blocks on the webpage.

const CodeBlock = (props) => {
    return (
        <div className='codeblock'>
            <pre>
                <code>
                    {props.children}
                </code>
            </pre>
        </div>
    );
}

export default CodeBlock;