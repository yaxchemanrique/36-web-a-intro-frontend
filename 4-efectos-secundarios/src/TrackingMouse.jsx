import React, { useEffect, useState } from 'react'

function TrackingMouse() {
  const [mousePosition, setMousePosition] = useState({x: 0, y:0,});
  const styles = {
    background: 'plum',
    fontSize: '2rem'
  }

  useEffect(()=> {
    function handleMouseMove(event) {
      console.log('moviendose!')
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      })
    }

    /* const interval = window.setInterval(()=> {
      // ...
    }, 10) */


    window.addEventListener('mousemove', handleMouseMove);

    //Event Listener, setInterval, setTimeout
    return ()=> {
      window.removeEventListener('mousemove', handleMouseMove);
      // window.clearInterval(interval);
      // window.clearSeTimeout(timeout);
    }

  }, []);

  return (
    <div style={styles}>x: {mousePosition.x} / y:{mousePosition.y}</div>
  )
}

export default TrackingMouse