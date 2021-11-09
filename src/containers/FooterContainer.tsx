import React from 'react';

interface ShowTextProps {
    show: boolean;
    title: string;
}

function FooterContainer ({ show, title }: ShowTextProps): JSX.Element | null {
    if(show) {
        return(
            <>
                <div style={{padding: '3rem', textAlign: 'center', backgroundColor: '#000', color: '#fff'}}>{title}</div>
            </>
        )
    }
    return null;
}

export default FooterContainer;