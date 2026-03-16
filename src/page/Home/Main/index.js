import Careers from "./Careers";
import CoreFeatures from "./CoreFeatures";
import Experts from "./Experts";
import FormContact from "./FormContact";
import OurGoal from "./OurGoal";
import Preview from "./Preview";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
import ViewInAction from "./ViewInAction";
import './Main.scss'
const Main = () => {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <OurGoal />
      <CoreFeatures />
      <Careers />
      <Experts />
      <Preview />
      <ViewInAction />
      <FormContact />
    </>
  );
};
export default Main;
