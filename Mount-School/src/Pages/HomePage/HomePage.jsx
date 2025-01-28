import '../HomePage/HomePage.css';
import Comp1 from '../../Component/Home/Sliding-First-Page/HomeC1';
import Comp2 from '../../Component/Home/HomeC2';
import Comp3 from '../../Component/Home/HomeC3';
import Comp4 from '../../Component/Home/HomeC4';
import Comp5 from '../../Component/Home/HomeC5';
import Comp6 from '../../Component/Home/HomeC6';
import Comp7 from '../../Component/Home/HomeC7';
import Comp8 from '../../Component/Home/HomeC8';
import Comp9 from '../../Component/Home/HomeC9';
import Comp10 from '../../Component/Home/HomeC10';

const Home = ({toggleForm})=>{

  return (
    <div className="Component">
      <div className="HomeComponent">
        <Comp1 />
        <Comp2 />
        <Comp3 />
        <Comp4  toggleForm={toggleForm}  />
        <Comp5 />
        <Comp6 />
        <Comp7 />
        <Comp8 />
        <Comp9 />
        <Comp10 />
      </div>
      <button className="fixed-button"  onClick={toggleForm}>
        ENQUIRE FOR ADMISSION
      </button>
    </div>
  );
}

export default Home;
