let canVote = (input) => {
  if (input >= 18) {
    return true;
  } else {
    return false;
  }
};
console.log(canVote(20));
console.log(canVote(18));
console.log(canVote(17));
