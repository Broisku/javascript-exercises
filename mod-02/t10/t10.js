'use strict';

const candidate_amount = parseInt(prompt('Enter the amount of candidates'))

const candidates = [];

for (let i = 1; i <= candidate_amount; i++) {
  const candidate = {
    name: prompt(`Enter name of candidate ${i}`),
    votes: 0
  };
  candidates.push(candidate);
}

const voter_amount = parseInt(prompt('Enter the amount of voters'))

for (let i = 1; i <= voter_amount; i++) {
  const vote = prompt(`Voter ${i}: Enter the name of the candidate you wish to vote`)
  const candidate = candidates.find(candidate => candidate.name === vote)
  if (candidate) {
    candidate.votes += 1
  }
  else {
    alert('Invalid candidate name')
  }
}

candidates.sort((a, b) => b.votes - a.votes);

console.log(`Winner: ${candidates[0].name} with ${candidates[0].votes} votes!`)

console.log('Final results:');
candidates.forEach(c => console.log(`${c.name}: ${c.votes} votes`));