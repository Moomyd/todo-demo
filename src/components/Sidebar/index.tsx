import React from 'react'
import './index.css'

const Siderbar: React.FC = () => {
    return (
        <div className="right">
            <h3>ECMAScript 6</h3>
            <span>
                <h5>Vanilla ES6 Example</h5>
                <a href="https://github.com/tastejs/todomvc/tree/gh-pages/examples/vanilla-es6">
                    Source
                </a>
            </span>
            <hr />
            <blockquote className="quote speech-bubble">
                <p>
                    The ECMAScript 6 (ES2015) standard was ratified in 2015 following years of work
                    standardizing improvements to ECMAScript 3. The committee introduced a wide
                    variety of improvements such as arrow functions, const declarations, and native
                    Promises.
                </p>
                <footer>
                    <a href="http://developer.mozilla.org/en-US/docs/JavaScript">ECMAScript 6</a>
                </footer>
            </blockquote>
            <footer>
                <hr />
                <em>
                    If you have other helpful links to share, or find any of the links above no
                    longer work, please let us know.
                </em>
            </footer>
        </div>
    )
}

export default Siderbar
