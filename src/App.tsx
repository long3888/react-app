import GroupHeader from "./components/GroupHeader/GroupHeader";
import FloatingGroupBottom from "./components/FloatingGroupBottom/FloatingGroupBottom";
import FloatingGroupLeft from "./components/FloatingGroupLeft/FloatingGroupLeft";
import { ModalContentProvider } from "./components/FloatingGroupLeft/ModalContentProvider";
import GroupContent from "./components/GroupContent/GroupContent";

const App = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <GroupHeader />
        <ModalContentProvider>
          <div style={{ display: "flex" }}>
            <FloatingGroupLeft />
            <GroupContent />
          </div>
          <FloatingGroupBottom />
        </ModalContentProvider>
      </div>
    </>
  );
};

export default App;
