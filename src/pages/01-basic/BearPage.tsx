import { useShallow } from 'zustand/shallow';
import { WhiteCard } from '../../components';
import useBearStore from '../../stores/bears/bears.store';

const BlackBears = () => {
  const blackBears = useBearStore(state => state.blackBears);
  const increaseBlackBears = useBearStore(state => state.increaseBlackBears);

  return (
    <WhiteCard centered>
      <h2>Osos Negros</h2>
      <div className="flex flex-col md:flex-row">
        <button onClick={() => increaseBlackBears(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10">{blackBears}</span>
        <button onClick={() => increaseBlackBears(-1)}> -1</button>
      </div>
    </WhiteCard>
  )
}

const PolarBears = () => {
  const polarBears = useBearStore(state => state.polarBears);
  const increasePolarBears = useBearStore(state => state.increasePolarBears);

  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>
      <div className="flex flex-col md:flex-row">
        <button onClick={() => increasePolarBears(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10">{polarBears}</span>
        <button onClick={() => increasePolarBears(-1)}> -1</button>
      </div>
    </WhiteCard>
  )
}

const PandaBears = () => {
  const pandaBears = useBearStore(state => state.pandaBears);
  const increasePandaBears = useBearStore(state => state.increasePandaBears);
  
  return (
    <WhiteCard centered>
      <h2>Osos Panda</h2>
      <div className="flex flex-col md:flex-row">
        <button onClick={() => increasePandaBears(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10">{pandaBears}</span>
        <button onClick={() => increasePandaBears(-1)}> -1</button>
      </div>
    </WhiteCard>
  )
}

const DoNothing = () => {  
  const bears = useBearStore(state => state.bears);
  // const bears = useBearStore(useShallow(state => state.bears));
  const doNothing = useBearStore(state => state.doNothing);

  return(
    <WhiteCard centered>
      <pre>
        {JSON.stringify(bears)}
      </pre>
      <button onClick={() => doNothing()}>Do nothing</button>
    </WhiteCard>
  )
}

export const BearPage = () => {

  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <BlackBears />
        <PolarBears />
        <PandaBears />
        <DoNothing />
      </div>
    </>
  );
};