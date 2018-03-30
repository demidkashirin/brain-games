import game from '..';

export default () => {
  const gameCondition = 'What number is missing from the progression?';
  const questionGenerate = () => {
    const start = Math.floor(Math.random() * 99) + 1;
    const step = Math.floor(Math.random() * 9) + 1;
    const target = Math.floor(Math.random() * 10);
    const makeProgression = (startElement, stepper) => {
      const progression = [startElement];
      for (let counter = 0; counter < 10; counter += 1) {
        progression.push(startElement + (counter * stepper));
      }
      return progression;
    };
    const answer = start + (step * (target - 1));
    const progression = makeProgression(start, step);
    progression[target] = '..';
    return [progression.join(' '), answer];
  };
  return game(questionGenerate, gameCondition);
};
