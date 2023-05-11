import React from 'react'
import Header from '../Components/Header'

const Events = () => {
  return (
    <div><Header/>

<h1>Events</h1>

<p>Everyday is a fashion show and the world is your runway.
</p>
            <br></br><br></br>
            <p>organised by a group of fashion designers to display their new clothing designs</p>
            <div class="grid-containers">
                <div class="item1">
                <img src="https://styleflyers.com/wp-content/uploads/2016/07/Fashion-Show-PSD-Flyer-Template-e1480335667816-372x537.jpg" alt="" width="200" height="333"/>
                </div>
                <div class="item2">
                <img src="https://www.bellanaijastyle.com/wp-content/uploads/2023/01/ARISE-Fashin-Week-Flyer.jpg"/>
                </div>
                <div class="item3">
                <img src="https://www.springtx.com/news-queue/news_images/2023_02_15_10_42_3896776.png"/>
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

export default Events