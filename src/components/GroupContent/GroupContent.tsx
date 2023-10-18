import JGP from "./JGP";
import NonJGP from "./NonJGP";
import "./styles.css";

const GroupContent = () => {
  return (
    <div id="group-content">
      <div>
        <NonJGP />
        <NonJGP />
      </div>
      <div>
        <JGP />
        <JGP />
      </div>
      <div>
        <JGP />
        <JGP />
      </div>
    </div>
  );
};

export default GroupContent;
