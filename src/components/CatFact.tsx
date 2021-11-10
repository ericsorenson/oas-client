import { useAppState } from '../presenter/presenter';
import React from 'react';

export const CatFact = () => {
  const { catFact } = useAppState();
  return <p>Cat Fact: {catFact}</p>;
};
