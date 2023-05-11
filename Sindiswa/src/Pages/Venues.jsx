import React from 'react'
import Header from '../Components/Header'

const Venues = () => {
  return (
    <div>
        <Header/>
        <h1>Venues</h1>

<p>an Event full of Interesting
</p>
            <br></br><br></br>
            <p>Feel that best, Arrange the Best</p>
            <div class="grid-containers">
                <div class="item1">
                <img src ="https://res.cloudinary.com/hynomj8e0/image/upload/tnej5svvkaadopgrvlrf.png"/>               </div>
                <div class="item2">
                <img src="https://media-cdn.tripadvisor.com/media/photo-c/1280x250/0e/02/66/41/testing-wide-angle.jpg"/>
                </div>
                <div class="item3">
                <img src="https://www.casino.co.za/img/land-casino/emperors-palace.jpg"/>
                </div> 
                

                {/* <div class="item4">
                <img src="" alt="" width="200" height="333"/>
                </div>
                <div class="item5">
                <img src="" alt="" width="200" height="333"/>
                </div>


                <div class="item6">
                <img src="" alt="" width="200" height="333"/>
                </div> */}
            </div>
</div>

  )
}

export default Venues