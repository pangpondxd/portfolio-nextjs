import React from 'react'
import Link from 'next/link'


class Header extends React.Component {
    render(){
        return(
            <React.Fragment>
            <p className="customClass">I am style</p>
            <p className="customClassFromFile">I am style P element</p>
            <Link href="/">
                <a style={{'fontSize': '30px'}}>Home</a>
            </Link>
            <Link href="/about">
            <a>About</a>
                </Link>
             <Link href="/portfolios">
                <a>Portfolio</a>
             </Link>
                <Link href="/blog">
                 <a>Blog</a>
                </Link>
                <Link href="/cv">
                <a>CV</a>
            </Link>
            <style jsx global>
                {`
                    .customClass {
                        color: red;
                    }
                `}
            </style>
            </React.Fragment>
        )
    }
}

export default Header