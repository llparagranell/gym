import "../css/Join.css";

function Join() {
  return (
    <>
      <div className="join-container">
        <div className="join-img">
          <img
            src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="join-text">
          <h1 className="font-large">Hey, Join now</h1>

          <form >
          <div>
            <label className="font-small">Name</label>
            <input type="text" placeholder="Enter Your Name" />
          </div>
          <div>
            <label className="font-small">Email</label>
            <input type="text" placeholder="Enter Your Email" />
          </div>
          <div>
            <label className="font-small">Weight</label>
            <input type="text" placeholder="Enter Weight in KiloGram" />
          </div>
          </form>
          <article class="dropdown">
            <button class="dropbtn">Select Plans</button>
            <div class="dropdown-content">
              <a href="#">Plan 1</a>
              <a href="#">Plan 2</a>
              <a href="#">Plan 3</a>
              <a href="#">Plan 4</a>
            </div>
          </article>
          <button className="join-btn">Submit</button>
        </div>
      </div>
    </>
  );
}

export default Join;
