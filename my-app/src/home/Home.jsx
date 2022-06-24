import './home.css'
 
import '../global.css'


export default function Home() {
    return (

        <div className='container home '>
            <div className="row header ">
                <div className="col-md-5  ">
                    <div className="logo">
                        <h2 className='h2'>Pizza Hut</h2>
                    </div>
                </div>
                <div className="col-md-7  ">
                    <div className="navigation">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Menu</a>
                        <a href="">Expert</a>
                        <a href="">Endoresment</a>
                        <a href="">Contact</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="main">
                        <h1>Eat Good, Do Good</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam animi inventore veniam tenetur natus provident eum magni praesentium ipsam, consequuntur ducimus qui dolor. Doloremque nam ratione quo commodi corrupti, odit facere ut repudiandae
                            nihil quaerat atque !</p>

                    </div>
                </div>
            </div>

            {/* <h1>Catchy Fast Food Names</h1> */}
          <div className="title">
            <div className="t-wrapper">
              <div className="t-item">But Karai</div>
              <div className="t-item">Chicken Roast</div>
              <div className="t-item">Kabli Polaw</div>
              <div className="t-item">Beaf Karai</div>
              <div className="t-item">Pizza Hut</div>
            </div>
          </div>
            <div className="row">
                <div className="col-md-12"><div className="bottom">
                    <button type="button" class="btn btn-success">Our Menu</button>
                </div></div>
            </div>



        </div>
    )
}
