const Home = () => {
    return (
    <>
    <body>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://images4.alphacoders.com/130/thumb-1920-1300724.jpg" height="600px" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Fast and furious 8</h5>
              <p>Action/Adventure</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://static.toiimg.com/thumb/msid-72054154,imgsize-631570,width-400,resizemode-4/72054154.jpg" height="600px" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Tanhaji</h5>
              <p>Action/Historical Film</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://dunenewsnet.com/wp-content/uploads/2021/08/Dune-Movie-Official-Poster-banner-feature.jpg" height="600px" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Dune: Part 1</h5>
              <p>Action/Adventure</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.hindustantimes.com/img/2022/04/01/550x309/RRR-Movie-Review_1648825470847_1648825479894.jpg" height="600px" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>RRR</h5>
              <p>Action/Drama</p>
            </div>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br></br>

      <h1 style={{ textAlign: "center" }}>Movies</h1>
      <br></br>

      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://dx35vtwkllhj9.cloudfront.net/paramountpictures/mission-impossible-7/images/regions/us/onesheet.jpg"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Mission Impossible: Dead Reckoning Part 1</h5>
                <p class="card-text">
                Ethan Hunt (Tom Cruise) and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. 
                </p>
                <a href="#" class="btn btn-primary">
                Watch
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Oppenheimer</h5>
                <p class="card-text">
                During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb.
                </p>
                <a href="#" class="btn btn-primary">
                 Watch
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "21.5rem" }}>
              <img
                src="https://m.media-amazon.com/images/M/MV5BOWI5NmU3NTUtOTZiMS00YzA1LThlYTktNDJjYTU5NDFiMDUxXkEyXkFqcGdeQXVyMTUzNjEwNjM2._V1_FMjpg_UX1000_.jpg"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Jawan</h5>
                <p class="card-text">
                An emotional journey of a man who is set to rectify the wrongs in the society, in an attempt to get even with his past, driven by a personal vendetta while keeping up to a promise made years ago. Starring- Shah Rukh Khan,Nayanthara,Deepika Padukone,Vijay Sethupathi
                </p>
                <a href="#" class="btn btn-primary">
                Watch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="container-fluid bg-dark text-light text-center py-3">
      <div class="social-icons">
        
        
      </div>
      <p>&copy; 
Copyright © 2022 SMDB Media & Entertainment. All rights reserved.</p>
    </footer>
      </body>
    </>
    );
  };
  
  export default Home;