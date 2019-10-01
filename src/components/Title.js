import React from "react" ; 

const Title = (props) => (
    <div className="titleText"> 
        <h1  >Weather Finder </h1>
        <p> Find out temperature ,  conditions and more ...</p>
        <p className="warning_text">The API does not allow accented letters (English input preferred)</p>
    </div >
);

export default Title ;