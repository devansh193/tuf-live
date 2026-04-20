import { BottomSection } from "../sections/bottom-section";
import { TopSection } from "../sections/top-section";

export const MainView = () => {
  return (
    <div className="h-screen bg-white w-full p-8">
      <TopSection />
      <BottomSection />
    </div>
  );
};
