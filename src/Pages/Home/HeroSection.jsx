export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Lydia Kimwilu</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software Developer</span>{" "}
            <br />
          </h1>
          <p className="hero--section-description">
            I have 1+ years of experience in front-end and back-end development, creating responsive, user-friendly applications. 
            <br /> Let's build something amazing together!
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
