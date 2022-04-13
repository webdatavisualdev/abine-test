import SystemCard from "../components/SystemCard";

const MainPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 500,
      }}
    >
      <SystemCard
        cardIndex={1}
        title="Centurra Systems"
        description="Centurra Systems is the master organization, created on"
        creationDate="October 12, 2021"
        members="305"
      />
    </div>
  );
};

export default MainPage;
