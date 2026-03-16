import ft1 from '../../../../assets/image/features1.jpg';
import { FaPalette, FaRegHandPointUp, FaUsers } from "react-icons/fa";
import './SectionTwo.scss'
const SectionTwo=()=>{
  return (
    <>
    <div className="section-two">
        <div className="container">
            <div className="section-two__wrap">
                <div className="section-two__image">
                    <img src={ft1} alt="ft1"/>
                </div>
                <div className="section-two__content">
                    <h3 className="section-two__sub-title">
                        Core Features
                    </h3>
                    <h2 className="section-two__title">
                        Best Business Software Solution
                    </h2>
                    <div className="section-two__list">
                        <div className="section-two__item">
                            <FaPalette className='icon'/>
                            <span>Design</span>
                        </div>
                        <div className="section-two__item">
                            <FaRegHandPointUp className='icon'/>
                            <span>Usage</span>
                        </div>
                        <div className="section-two__item">
                            <FaUsers className='icon'/>
                            <span>Testing</span>
                        </div>
                    </div>
                    <div className="section-two__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan porttitor egestas fermentum
                        nulla.
                    </div>
                    <div className="button button-two">
                        Read More
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
export default SectionTwo;