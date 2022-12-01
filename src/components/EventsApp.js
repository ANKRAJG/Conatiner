import { mount } from 'events/EventsApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const onNavigate = ({ pathname: nextPathname }) => {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    }

    const { onParentNavigate } = mount(ref.current, {
      onNavigate
    });

    history.listen(onParentNavigate);
  }, []);

  return (<div id="_angularjs-dev-root" ref={ref}>
    <div>
        <ng-view></ng-view>
    </div>
    {/* <div class="starter-template"> */}
    {/* </div> */}
  </div>);
};
