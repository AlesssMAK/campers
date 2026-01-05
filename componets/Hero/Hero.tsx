import css from './Hero.module.css';
import HeroButton from './HeroButton/HeaderButton';

const Hero = () => {
  return (
    <section className={css.hero}>
      <div className="container">
        <div className={css.heroContainer}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.text}>
            You can find everything you want in our catalog
          </p>
          <HeroButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
