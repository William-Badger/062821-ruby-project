import React from 'react';
import PoemCard from './PoemCard';

const MainContainer = () => {
    return (
        <div id="main-page">
            <div class="ui left fixed vertical menu">
  <div class="item">
  <div class="ui transparent icon input">
      <input type="text" placeholder="Search Poems..."/>
      <i class="search icon"></i>
    </div>
  </div>
  <a class="item">Poem Name</a>
  <a class="item">Poem Name</a>
  <a class="item">Poem Name</a>
</div>
<PoemCard />
        </div>
    );
}

export default MainContainer;
