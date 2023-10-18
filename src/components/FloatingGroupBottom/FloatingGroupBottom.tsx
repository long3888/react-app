import "./styles.css";
import GroupLeft from "./GroupLeft";
import LogoBottom from "/LogoBottom.png";

const FloatingGroupBottom = () => {
  return (
    <div id="floating-group-bottom">
      <GroupLeft />
      <div></div>
      <img src={LogoBottom} alt="LogoBottom" />
    </div>
  );
};

export default FloatingGroupBottom;
