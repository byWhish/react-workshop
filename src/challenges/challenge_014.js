const init = x => x;

const reducer = (state, action) => {
  switch (action.type) {
    case 'prev':
      return (state - 1);
    case 'next':
      return (state + 1);
    case 'set':
      return action.value;
    default:
      return state;
  }
};

const NavComponent = () => {
    const [idx, dispatchIdx] = React.useReducer(reducer, 0, init);

    const handleSelected = (ation) => {
        dispatchIdx(action)
    }

    return (
        <Component onSelected={handleSelected} />
    )
}

const Component = ({ onSelected }) => {
    handlePrev = () => {
        onSelected({ type: 'prev' });
    }

    handleNext = () => {
        onSelected({ type: 'next' });
    }
    
    return <div />
}
