import { mount } from 'events/EventsApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    // const { onParentNavigate } = mount(ref.current, {
    //   initialPath: history.location.pathname,
    //   onNavigate: ({ pathname: nextPathname }) => {
    //     const { pathname } = history.location;

    //     if (pathname !== nextPathname) {
    //       history.push(nextPathname);
    //     }
    //   },
    // });

    // history.listen(onParentNavigate);
    const { onParentNavigate } = mount(ref.current);
    // var base = document.createElement('base');
    // base.href = '/';
    // document.getElementsByTagName('head')[0].appendChild(base);
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
