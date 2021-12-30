import {store} from "./store"

const CustockRedux = (() => {
    return {
      getStore: (s) => store.getState()[s],
      dispatch: (action) => store.dispatch(action),
    };
  })();

  export default CustockRedux;