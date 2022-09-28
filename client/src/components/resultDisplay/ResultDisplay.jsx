import React from 'react';

const ResultDisplay = ({results}) => {
    return (
    <div className="resultDisplay">
      <div id="results">
      {results.map((result, index) => {
        if(typeof result === 'object') {
          let group = result.join(', ');

          return (
            <div className='result' key={index} data-index={index}>
            <div>
              {index + 1}. {group}
            </div>
            </div>
          )
        }else{
          return (
            <div className='result' key={index} data-index={index}>
            <div>
              {index + 1}. {result}
            </div>
          </div>
          )
        }
      }
      )}
      </div>
    </div>)
};

export default ResultDisplay;