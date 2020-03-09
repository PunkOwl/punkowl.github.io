import React, { useState, useEffect } from 'react';
import { useDencrypt } from "use-dencrypt-effect";

export default function Header() {

    const textList = [
        'jeb4ited ¯\\_(ツ)_/¯',
        '(つ °□° )つ ur dlution@l',
        '(っˆ_ˆς) k4waii',
        '(つ ◕_◕ )つ giff l0v3',
    ]

    const { result, dencrypt } = useDencrypt();
    
    React.useEffect(() => {
        let i = 0;
    
        const action = setInterval(() => {
          dencrypt(textList[i]);
    
          i = i === textList.length - 1 ? 0 : i + 1;
        }, 2750);
    
        return () => clearInterval(action);
      }, []);

    return(
        <div className="header-space">
            <div className="header-text">
                {result}
            </div>
        </div>
    );

}