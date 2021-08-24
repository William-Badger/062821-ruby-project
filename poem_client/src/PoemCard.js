import React from 'react';

const PoemCard = () => {

    fetch("http://localhost:9292")
    .then(res => res.json())
    .then(data => console.log(data))

    return (
        <div>
            <div id="poem-card" className="ui container">
                <div id="nav-bar" class="ui three item menu">
                    <a class="item">New Poem</a>
                    <a class="item">View Comments</a>
                    <a class="item">Other?</a>
                </div>
                <div class="ui segments">
                    <div class="ui segment">
                        <h1>Ruby on Rails</h1>
                    </div>
                    <div class="ui segments">
                        <div class="ui segment">
                            <p>By William Badger</p>
                        </div>
                        <div class="ui black segment">
                            <p>Roses are red</p>
                            <p>Violets are pale</p>
                            <p>I can't for ruby</p>
                            <p>To be on a rail</p>
                        </div>
                            <div class="ui black segment">
                                <div class="ui form">
                                    <div class="field">
                                        <input type="text" placeholder="Comment" maxLength="20"/>
                                    </div>
                                    <div class="ui submit button">Submit</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default PoemCard;
