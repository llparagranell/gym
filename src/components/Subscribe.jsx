import '../css/Subscribe.css'

function Subscribe() {
  return (
    <>
      <div className="subscribe-container" data-aos="zoom-in-up" data-aos-duration="1000">
        <div className="subscribe">
          <h1 className="font-mid">Subscribe our fitness tips</h1>
          <p className="font-small">
            Clearly comunicate the benifits of subscribing, such as exclusive
            content <br /> and breaking news.
          </p>
          <div className="subscribe-btn">
            <input type="text" placeholder='Enter your email address'/>
            <button>Subscribe</button>
          </div>
        </div>
      </div>

    </>
  );
}

export default Subscribe;
