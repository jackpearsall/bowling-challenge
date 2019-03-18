const ScoreCard = require('../src/score_card');

describe('Bowling Challenge!', () => {
  describe('Scorecard set up tests', () => {
    it('There is a scorecard object', () => {
      const scoreCard = new ScoreCard();
      expect(scoreCard).toBeInstanceOf(Object);
    });
    it('Has an empty scores array', () => {
      const scoreCard = new ScoreCard();
      expect(scoreCard).toHaveProperty('scores', [[]]);
    });
    it('Has an frame index starting at 0', () => {
      const scoreCard = new ScoreCard();
      expect(scoreCard).toHaveProperty('frameIndex', 0);
    });
  });
  describe('Testing bowl method', () => {
    it('Adds a single score to the first nested array', () => {
      const scoreCard = new ScoreCard();
      scoreCard.bowl(5);
      expect(scoreCard.scores).toEqual([[5]]);
    });
    it('Starts a new nested array after the second roll', () =>{
      const scoreCard = new ScoreCard();
      scoreCard.scores = [[2]];
      scoreCard.bowl(5);
      expect(scoreCard.scores).toEqual([[2, 5]]);
      scoreCard.bowl(7);
      expect(scoreCard.scores).toEqual([[2, 5], [7]]);
    });
    it('Test if there has been a strike rolled and the correct scoring behaviour', () => {
      const scoreCard = new ScoreCard();
      scoreCard.bowl(10);
      console.log(scoreCard.scores);
      expect(scoreCard.scores).toEqual([[10]]);
      scoreCard.bowl(10);
      console.log(scoreCard.scores);
      expect(scoreCard.scores).toEqual([[10], [10]]);
    });
  });
});
