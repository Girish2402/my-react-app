import React from 'react';


const Rainbow = (WrappedContent) => {
    const colors = ['red', 'green', 'blue', 'pink', 'orange', 'yellow'];
    const className = `${colors[Math.round(Math.random() * 5)]}-text container main-container`;

    return(props) => {
        return(
            <div className={className}>
                <WrappedContent {...props}/>
            </div>
        )
    }
}

export default Rainbow;