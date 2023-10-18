import JGP from "./JGP";
import NonJGP from "./NonJGP";
import "./styles.css";

const GroupContent = () => {
  return (
    <div id="group-content">
      <div className="group-content-child">
        <NonJGP />
        <NonJGP />
      </div>
      <div className="group-content-child">
        <JGP />
        <JGP />
      </div>
      <div className="group-content-child">
        <JGP />
        <JGP />
      </div>
    </div>
  );
};

export default GroupContent;
