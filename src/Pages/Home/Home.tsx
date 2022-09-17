import './Home.scss';
import { Link } from 'react-router-dom';
import portrait from '../../assets/images/portfolio_portrait.jpg';

function Home(): JSX.Element {
  return (
    <div className='page-content container-sm d-lg-flex'>
      <div className='container'>
        <h1 className='header header-font'>
          <span>W</span><span>e</span><span>l</span><span>c</span><span>o</span><span>m</span><span>e</span><span>!</span>
        </h1>
        <p>My name is Jordy Hertogs, I'm a software developer with a Mediatech degree.
          Currently I'm following the <em>Software Engineering</em> course in Rotterdam University of Applied Sciences.</p>
        <p className='text-secondary'>I'm glad you ended up on my portfolio, for whatever reason you may have; I hope you find what you're
          looking for on here! If not, do no hesitate to send me a message through
          the <Link className='text-secondary' to="/contact">contact</Link> form. You will have my response as soon as possible.</p>
        <p>My name is Jordy Hertogs, I'm a software developer with a Mediatech degree.
          Currently I'm following the <em>Software Engineering</em> course in Rotterdam University of Applied Sciences.</p>
        <p className='text-secondary'>I'm glad you ended up on my portfolio, for whatever reason you may have; I hope you find what you're
          looking for on here!</p>
      </div>

      <div className='text-center m-auto'>
        <img className='portrait img-thumbnail float-right' src={portrait} alt="Portrait" />
      </div>
    </div>
  );
}

export default Home;
