import './css/sky.css';

const Sky = ({ stars }) => {
  // const createStar = () => {
  //   console.log('creating a star');
  //   const star = document.getElementById('shooting-star');
  //   star.classList.remove('starfall');
  //   star.style.left = `${Math.random() * 880}px`;
  //   star.classList.add('starfall');
  // };

  // setTimeout(() => {
  //   requestAnimationFrame(() => createStar());
  // }, Math.random() * 5000 + 5000);

  const starElements = stars.map((star) => (
    <div
      className="prevent-select"
      key={star[2]}
      style={{
        position: 'absolute',
        top: `${star[0]}px`,
        left: `${star[1]}px`,
      }}
    >
      ⭐
    </div>
  ));

  return (
    <div className="sky">
      <div>{starElements}</div>
      {/* <div id="shooting-star">🌠</div>; */}
    </div>
  );
};

export default Sky;
