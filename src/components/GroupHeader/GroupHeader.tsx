import "./styles.css";
import LogoTop from "/LogoTop.png";
import GroupRight from "./GroupRight";

const GroupHeader = () => {
  return (
    <div id="group-header">
      <img src={LogoTop} alt="LogoTop" />
      <GroupRight />
    </div>
  );
};

export default GroupHeader;
