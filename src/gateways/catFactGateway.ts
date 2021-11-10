import axios from 'axios';

const url = 'https://cat-fact.herokuapp.com/facts';

export const getCatFact = async (): Promise<string> => {
  const results = await axios.get(url);
  return results.data[0].text;
};
