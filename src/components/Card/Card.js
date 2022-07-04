import React from "react";
import ModalComponent from '../Modal/ModalComponent'
import styles from '../Modal/styles.module.css'
import { animated, to as interpolate } from '@react-spring/web'


function Card(props) {
  const [modalShow, setModalShow] = React.useState(false);
  let {i, x, y, cat, rot, scale, trans, bind} = props

  return (
    <div>
       <animated.div className={styles.deck} key={i} style={{ x, y }}>
        <ModalComponent
        cat={cat}
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
          <animated.div
            {...bind(i)}
            onDoubleClick={() => setModalShow(true)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cat.image})`,
            }}
          />
        </animated.div>
    </div>
  );
}

export default Card;
