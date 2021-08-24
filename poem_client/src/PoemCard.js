import React from 'react';

const PoemCard = () => {

    fetch("http://localhost:9292")
    .then(res => res.json())
    .then(data => console.log(data))
    
    return (
        <div>
            <div id="poem-card" class="ui container">
                <p></p>
            </div>
        </div>
    );
}

export default PoemCard;
