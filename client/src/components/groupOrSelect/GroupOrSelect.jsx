import React from 'react';

const GroupOrSelect = ({participants, setResults}) => {

const groupParticipants = () => {
  const groupSize = document.getElementById('groupByInput').value;

  let arr = [...participants];
  for (let i = arr.length - 1; i > 0; i--)
  {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  let results = [];

  for(let i =0; i < arr.length; i++){
    let curr = [];
    while(curr.length < groupSize && i < arr.length){
      curr.push(arr[i++]);
    }

    results.push(curr);
    i--;
  }

  setResults(results);
};
const selectParticipants = () => {
  const groupSize = parseInt(document.getElementById('selectRandomInput').value,10);

  let results = [];
  let arr = [...participants];
  for (let i = arr.length - 1; i > 0; i--)
  {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  for( let i=0; i < groupSize; i++) {
    results.push(arr[i]);
  }
  setResults(results);

};

  return(
    <div className='groupOrSelect'>
        <div id="groupBy">
        <div>
            Create Sub-Groups
            </div>
          <div id="groupByText">
            Group By <input type="number" id="groupByInput" min="2" max={participants.length}></input>
          </div>
          <button onClick={groupParticipants}>Sort Into Groups</button>
        </div>
        <div id="selectRandom">
        <div>
            Randomly Select
            </div>
          <div id="selectRandomText">
            Select <input type="number" min="1" max={participants.length}id="selectRandomInput"></input>
          </div>
          <button onClick={selectParticipants}>Random Select</button>
        </div>
    </div>
  )
};

export default GroupOrSelect;