import "./WelcomeBanner.scss";

function WelcomeBanner() {
  let user = localStorage.getItem("user");
  console.warn(user);

  return (
    <div className="welcome__hero">
      <div className="welcome__text-container">
        <h2 className="welcome__text">Hello, {user && user}</h2>
      </div>
    </div>
  );
}

export default WelcomeBanner;
