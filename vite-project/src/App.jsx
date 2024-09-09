function App() {
  return (
      <div className="app">
        <section id="content">
          <header>
            <div>
              <h1>KPOP Albums</h1>
              <div>
              <button className="icon-btn">
                <span>&#128722;</span>
                <span className="badge">3</span>
              </button>
              <button className="icon-btn">
                <span>&#129293;</span>
                <span className="badge">1</span>
              </button>
            </div>
            </div>
           
           <div>
            <nav>
              <button>Home</button>
              <button>Catalog</button>
              <button>All Products</button>
              <button>Wishlist</button>
            </nav>
            <form>
              <input type="search" placeholder="search"/>
              <button type="button">Go</button>
            </form>
           </div>

          </header>
          <main>
            <div className="product">
              <img src="https://images.genius.com/7f06bbf0e2500ffcb1857e26ee94f477.1000x1000x1.jpg" alt="boysbe" />
              <p className="pr-name">Boys Be</p>
              <p className="pr-price">$25</p>
            </div>

            <div className="product">
              <img src="https://images.genius.com/3457285bb83cc0df04a2ae983b7dfbfd.1000x1000x1.jpg" alt="anode" />
              <p className="pr-name">An Ode</p>
              <p className="pr-price">$40</p>
            </div>

            <div className="product">
              <img src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e3/76/df/e376df28-c05b-00fd-72de-9d42377a306b/196922628580_Cover.jpg/1200x1200bf-60.jpg" alt="svtheaven" />
              <p className="pr-name">Seventeenth Heaven</p>
              <p className="pr-price">$35</p>
            </div>

            <div className="product">
              <img src="https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/dd/d4/d4/ddd4d456-4696-06b8-2054-6d1bb6ae6718/192641682551_Cover.jpg/1200x1200bf-60.jpg" alt="attaca" />
              <p className="pr-name">Attaca</p>
              <p className="pr-price">$45</p>
            </div>

            <div className="product">
              <img src="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/f/b/4/5/580831496317902.jpg" alt="A16" />
              <p className="pr-name">A16</p>
              <p className="pr-price">$32</p>
            </div>

            <div className="product">
              <img src="https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/3a/a8/58/3aa8588c-0af9-a0f0-08b5-9d1baf0f5736/196922060847_Cover.jpg/1200x1200bf-60.jpg" alt="facethesun" />
              <p className="pr-name">Face The Sun</p>
              <p className="pr-price">$42</p>
            </div>

            <div className="product">
              <img src="https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/d1/66/eb/d166eb7e-7210-b3ff-be39-638cd37bfc89/196922401282_Cover.jpg/1200x1200bf-60.jpg" alt="fml" />
              <p className="pr-name">FML</p>
              <p className="pr-price">$40</p>
            </div>


          </main>
        </section>
        <footer>
          <div>
            <h3>Who We Are</h3>
            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Sell With Us</a></li>
            </ul>
          </div>

          <div>
            <h3>Our Policies</h3>
            <ul>
              <li><a href="">Return Policy</a></li>
              <li><a href="">Shipping Policy</a></li>
              <li><a href="">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3>Our Products</h3>
            <ul>
              <li><a href="">Home Page</a></li>
              <li><a href="">Search</a></li>
              <li><a href="">Catalog</a></li>
            </ul>
          </div>
        </footer>

      </div>
  );
}

export default App;
