import { mount } from 'events/EventsApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current);
    history.listen(onParentNavigate);
  }, []);

  return (<div ref={ref}>
    <div>
        <ng-view></ng-view>
    </div>
    {/* <div class="starter-template"> */}
    {/* </div> */}
  </div>);
};
