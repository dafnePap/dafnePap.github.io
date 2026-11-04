import "./App.css";

// Small decorative stars in the sky.
function Sparkle({ className = "" }) {
  return <span className={`sparkle ${className}`} aria-hidden="true" />;
}

// The GIF handles the character animation; CSS moves it across the grass.
function PixelWalker() {
  return (
    <div className="walker-track" aria-hidden="true">
      <div className="walker">
        <img
          src={`${import.meta.env.BASE_URL}mymagician.gif`}
          alt=""
          className="walker-gif"
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="site">
      <main>
        <section className="hero" id="home">
          <div className="sky-grain" aria-hidden="true" />

          {/* My pixel-art clouds, drawn in Piskel. */}
          <div className="cloud-scene" aria-hidden="true">
            <img
              src={`${import.meta.env.BASE_URL}cloud-1.png`}
              alt=""
              className="my-pixel-cloud cloud-one"
            />
            <img
              src={`${import.meta.env.BASE_URL}cloud-2.png`}
              alt=""
              className="my-pixel-cloud cloud-two"
            />
          </div>

          <Sparkle className="sparkle-one" />
          <Sparkle className="sparkle-two" />
          <Sparkle className="sparkle-three" />
          <Sparkle className="sparkle-four" />
          <Sparkle className="sparkle-five" />

          <div className="hero-content">
            <p className="eyebrow">HELLO THERE!</p>
            <h2>
              <span className="hero-italic">Welcome to my website!!!</span>
            </h2>
          </div>

          {/* The grass and moving magician sit in front of the sky. */}
          <div className="ground" aria-hidden="true">
            <div className="grass-back" />
            <div className="grass-front" />
            <div className="ground-flowers">
              <span>✿</span>
              <span>✿</span>
              <span>✿</span>
              <span>✿</span>
              <span>✿</span>
            </div>
            <PixelWalker />
          </div>
        </section>

        {/* One gradient runs behind every section below the grass. */}
        <div className="misty-content">
          <section className="misty-section" id="about">
            <div className="section-intro">
              <h2>
                <br />
                <em>About me</em>
              </h2>
            </div>
            <div className="section-copy">
              <p>
                My name is Dafni Papadaki, and I just graduated with a degree in
                Electrical and Computer Engineering in Technical University of
                Crete. I enjoy coding, and learning how things work behind the
                scenes. I'm particularly interested in machine learning and
                exploring what we can do with it. Outside of programming, I love
                the world of film and animation, and I like discovering the
                creative side of technology.
              </p>
            </div>
          </section>

          <section className="misty-section" id="thesis">
            <div className="section-intro">
              <h2>
                <em>My thesis</em>
              </h2>
            </div>
            <div className="section-copy">
              <p>
                <strong>
                  <span className="lime-text">
                    A Comparison of Federated Learning Techniques in PyTorch.
                  </span>
                </strong>
              </p>
              <p>
                <strong>Federated learning</strong> is a machine learning approach
                that allows the edge devicesof clients', to collaboratively train
                a model without sharing their raw data. Instead, clients train
                locally and share model updates, which are then aggregated to
                improve a global model.
              </p>
              <p>
                For my thesis, I developed <strong>a common experimental framework </strong>
                to implement and compare several federated learning algorithms,
                including FedAvg, FedProx, SCAFFOLD, FedAdam, and FDA-OPT.
              </p>
              <p>
                I evaluated their performance across different datasets, models,
                and data distributions, focusing on accuracy, training time, and
                communication cost.
              </p>
              <p>
                The results revealed different trade-offs between the algorithms.
                FedAdam generally achieved faster convergence in terms of training
                time, while FDA-OPT offered advantages in overall communication
                efficiency. However, under more homogeneous data distributions,
                simpler algorithms without adaptive server-side optimization
                could perform just as well, highlighting how the best choice
                depends on the experimental setting.
              </p>
            </div>
          </section>

          <section className="misty-section" id="experience">
            <div className="section-intro">
              <h2>
                <em>Background</em>
              </h2>
            </div>
            <div className="section-copy">
              <p>
                I've spent a few summers working in customer facing jobs, where
                I had the opportunity to work with people from different
                backgrounds, experiences, and priorities.
              </p>
              <p>
                These experiences helped mold me into a team player who values
                everyone's individual strengths. They also taught me to take
                initiative, adapt to unexpected situations, and stay calm under
                pressure.
              </p>
              <p>
                I try to bring that same mindset to everything I do, with a
                willingness to learn, take on new challenges, and keep improving.
              </p>
            </div>
          </section>

          <section className="misty-section" id="contact">
            <div className="section-intro">
              <h2>
                <em>Get in touch</em>
              </h2>
            </div>
            <div className="section-copy">
              <p>
                My CV further describes my technical skills and professional
                experience.{" "}
                <a
                  className="text-link"
                  href={`${import.meta.env.BASE_URL}Dafni_Papadaki.pdf`}
                  target="_blank"
                  rel="noreferrer"
                >
                  CV
                </a>
              </p>

              <div className="social-links">
                <a href="mailto:dafnh101@gmail.com">Email</a>
                <a
                  href="https://www.linkedin.com/in/dafni-papadaki-605597266/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/dafnePap/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
