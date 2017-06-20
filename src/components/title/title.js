import {h} from 'preact';

const Title = ({onInput, title}) => (
  <div className='title'>
    <input onInput={onInput} type='text' />
    <h1>{title}</h1>
  </div>
);

export default Title;
