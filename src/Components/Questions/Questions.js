import React from "react";
import "./Questions.css";

const Questions = () => {
  return (
    <div className="questions">
      <div className="question-ans">
        <h3>How does React works ?</h3>
        <p>
          React is a declarative,efficient,and flexible javascript library for
          building user interfaces.React allows you to effectively reconstruct
          your DOM in javascript and push only those changes to the DOM which
          have actually occurred. React implements a virtual DOM that is
          basically a DOM tree representation in JavaScript. So when it needs to
          read or write to the DOM, it will use the virtual representation of
          it. Then the virtual DOM will try to find the most efficient way to
          update the browser’s DOM.
        </p>
      </div>
      <div className="question-ans">
        <h3>Difference between Props and State ?</h3>
        <p>
          Props are immutable.State is muitable.Props allow you to pass data
          from one component to other components as an argument.State holds
          information about the components.Props are used to communicate between
          components.State can be sued for rendering dynamic changes with the
          component.Props are external and controlled by whatever renders the
          component.The state is internal and controlled by the react component
          itself.
        </p>
      </div>
      <div className="question-ans">
        <h3>Without data loading what else is used for useEffect?</h3>
        <p>
          The UseEffect Hook allows you to perform side effects in your
          components.Without loading data useEffect hook allow fetching
          data,directly updating the DOM and timers.UeseEffect hook accepts two
          arguments.The second arghument is optional.
        </p>
      </div>
    </div>
  );
};

export default Questions;
