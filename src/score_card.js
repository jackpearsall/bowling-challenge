function scoreCard() {
  this.scores = [[]];
  this.frameIndex = 0;
}

scoreCard.prototype.bowl = function bowl(pins) {
  if (this.scores[this.frameIndex].length === 2 || this.scores[this.frameIndex][0] === 10) {
    /* if current frame index score array has 2 scores in
     it then push the next score to a new nested array */
    this.scores.push([pins]);
    this.frameIndex += 1;
  } else {
    /* else push the score to the current array */
    this.scores[this.frameIndex].push(pins);
  }
};

module.exports = scoreCard;
