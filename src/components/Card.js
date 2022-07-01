import React from "react";
import { animated, interpolate } from "react-spring/hooks";

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, cards, bind, objs } = this.props;
    const { name, age, enjoys, image } = objs[i];

    return (
      <animated.div
        key={i}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div
          {...bind(i)}
          style={{
            transform: interpolate([rot, scale], trans)
          }}
        >
          <div className="card">
            <img src={image} alt="profilePicture" />
            <h2>{name},</h2>
            <h2>{age}</h2>
            <h5>{enjoys}</h5>
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

export default Card;
