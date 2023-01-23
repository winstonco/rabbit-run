import './css/rabbit.css';

const Rabbit = ({ pos, vel, bonk }) => {
  const bonkClass = bonk === true ? 'bonk' : '';
  return (
    <>
      <div
        id="main-char"
        className="prevent-select"
        style={{
          top: `${442 - pos}px`,
          transform: `rotate(${-5 * vel}deg)`,
        }}
      >
        <div id="bonk" className={bonkClass}>
          💥
        </div>
        <div id="rabbit" className="flipH">
          🐇
          {/* <div style={{ position: 'absolute', border: '1px solid red', top: '1px' }}></div> */}
        </div>
        <div id="firecracker">🧨</div>
      </div>
    </>
  );
};

export default Rabbit;
