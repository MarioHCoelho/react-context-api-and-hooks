import { useEffect} from 'react';
import { useCounterContext } from '../../contexts/CounterContext';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';


export const Home = () => {
  const [state, actions] = useCounterContext();

  const handleError = ( ) =>
  {
    actions.asyncError()
    .then((r)=> console.log)
    .catch ((e)=> console.log (e.name, ':', e.message))
  }

  return (
    <div>
      <Heading/>
      <div>
        <Button onButtonClick={actions.increase}>Increase</Button>
        <Button onButtonClick={actions.decrease}>Decrease</Button>
        <Button onButtonClick={actions.reset}>Reset</Button>
        <Button onButtonClick={()=>actions.setCounter ({counter:10})}>Set Counter to 10</Button>
        <Button onButtonClick={()=>actions.setCounter ({counter:100})}>Set Counter to 100</Button>
        <Button disabled ={state.loading} onButtonClick={()=>actions.asyncIncrease ()}>Async Increase</Button>
        <Button disabled={state.loading} onButtonClick={handleError}>
          async error
        </Button>
      </div>
    </div>
  );
};
export default Home;
