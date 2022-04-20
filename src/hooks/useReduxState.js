import { useContext, useState, useEffect } from 'react';
import ReduxContext from '../contexts/ReduxContext';

export default function useReduxState() {
  const store = useContext(ReduxContext);
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => {
      setState( store.getState() );
    })
  }, [ store ])

  return state;
}