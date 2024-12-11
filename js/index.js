weather("alexandria");

async function weather(location) {
  {
    let response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=ec9a952291204a0bb5803549240912&q=${location}&days=3`
    );

    let responData = await response.json();
    allLocation = [responData];
    displayData();
  }
}

async function search(query) {
  let searchR = await fetch(
    `https://api.weatherapi.com/v1/search.json?key=ec9a952291204a0bb5803549240912&q=${query}`
  );

  let searchData = await searchR.json();

  if (searchData.length > 0) {
    weather(searchData[0].name);
  }
}

let x = document.getElementById("inputForm");
x.addEventListener("input", function () {
  let inputValue = x.value.trim();
  if (inputValue.length > 0) {
    search(inputValue);
  }
});

function displayData() {
  let cartona = "";
  for (let i = 0; i < allLocation.length; i++) {
    let isDay = allLocation[i].current.is_day;
    let icon = allLocation[i].current.condition.icon;
    if (isDay === 0) {
      icon = `https://cdn.weatherapi.com/weather/64x64/night/113.png`;
    } else {
      icon = `https://cdn.weatherapi.com/weather/64x64/day/113.png`;
    }
    let iconHTML = `<img src="${icon}" alt="Weather Icon">`;

    cartona += ` 

          <div id="today" class="today col-lg-4 g-0">
        <div class="day d-flex justify-content-between p-2">
         <div> ${new Date(allLocation[i].location.localtime).toLocaleDateString(
           "en-US",
           { weekday: "long" }
         )}</div>
   <div> ${new Date(allLocation[i].location.localtime).toLocaleDateString(
     "en-US",
     { day: "numeric", month: "long" }
   )}
   </div>
            

                </div>
                <div class="today-weather text-white py-4">
                  <div class="location text-white mx-3">${
                    allLocation[i].location.name
                  }</div>
                  <div class="num my-4 fw-bolder m-4">${allLocation[
                    i
                  ].current.temp_c.toFixed(1)}<sup>o</sup>C</div>
                  <span class="fs-1 mx-4">
                  ${iconHTML}
                    
                  </span>
                    
                  
                  <p class="m-3 mist"> ${
                    allLocation[i].current.condition.text
                  }</p>
                  <div class="info mx-2">
                    <span class="mx-1 fs-6"
                      ><i class="fa-solid fa-umbrella"></i> ${
                        allLocation[i].current.humidity
                      }%</span
                    >
                    <span class="mx-1 fs-6"
                      ><i class="fa-solid fa-wind"></i> ${
                        allLocation[i].current.cloud
                      }km/h</span
                    >
                    <span class="mx-1 fs-6"
                      ><i class="fa-regular fa-compass"></i> ${
                        allLocation[i].current.wind_dir
                      }</span
                    >
                  </div>
                  
                </div>
                </div>



                   <div class="col-lg-4 text-center g-0 day-two-head">
                <div id class="day-two py-2">
                  <div> ${new Date(
                    allLocation[i].forecast.forecastday[1].date
                  ).toLocaleDateString("en-US", {
                    weekday: "long",
                  })}</div>
                </div>
                <div
                  class="d-flex justify-content-center align-items-center flex-column"
                >
                  <span class="mt-5"
                    >
                     <img src=" ${
                       allLocation[i].forecast.forecastday[1].day.condition.icon
                     }" alt="">
                   
                  </span>
                  <div class="mt-4 h4 fw-bold">${
                    allLocation[i].forecast.forecastday[1].day.maxtemp_c
                  }<sup>o</sup>C</div>
                  <div>${
                    allLocation[i].forecast.forecastday[1].day.mintemp_c
                  }<sup>O</sup></div>
                  <div class="mt-4 py-lg-0 py-4 sunny">${
                    allLocation[i].forecast.forecastday[1].day.condition.text
                  }</div>
                </div>
              </div>



               <div class="col-lg-4 text-center g-0 day-three-head">
                <div class="day-three py-2">
                  <div>
                   ${new Date(
                     allLocation[i].forecast.forecastday[2].date
                   ).toLocaleDateString("en-US", {
                     weekday: "long",
                   })}
                  </div>
                </div>
                <div
                  class="d-flex justify-content-center align-items-center flex-column text-white"
                >
                  <span class="mt-5"
                    >
                    <img src=" ${
                      allLocation[i].forecast.forecastday[2].day.condition.icon
                    }" alt="">
                    </span>
                  <div class="mt-4 h4 fw-bold">${
                    allLocation[i].forecast.forecastday[2].day.maxtemp_c
                  }<sup>o</sup>C</div>
                  <div>${
                    allLocation[i].forecast.forecastday[2].day.mintemp_c
                  }<sup>O</sup></div>
                  <div class="mt-4 cloudy py-lg-0 py-4">${
                    allLocation[i].forecast.forecastday[2].day.condition.text
                  }</div>
                </div>
              </div>
              
                
                
        `;
  }
  document.getElementById("row-head").innerHTML = cartona;
}

let clickR = document.getElementById("contact");

clickR.addEventListener("click", function () {
  document.getElementById("contact-change").innerHTML = `
   <div class="container-md">
            <section id="contact-control"> 
              <div  class="my-0  position-relative adress-round py-3 px-4 rounded-pill ">
              
             <div >
              <a class="change-color text-decoration-none " href="">Home</a>
              <span><i  class="fa-solid fa-arrow-right px-1 fs-6" style="color: #686a6e;"></i></span>
              <span class="text-white"> Contact</span>
             </div>
              </div>
              <div class="row py-5  ">
                <div class=" mx-auto col-lg-5   map d-flex  flex-column justify-content-end rounded-3 ">
<div class="my-3 d-flex" >
  <span ><i class="fa-regular fa-compass mx-3 " style="color: #74C0FC;"></i></span>
<span class="change-color ">Company Name INC. <br>
  2803 Avenue Street, Los Angeles</span>
</div>
<div class="py-3 mx-3 ">
  <span ><i class="fa-solid fa-phone" style="color: #74C0FC;"></i></span><a class="change-color text-decoration-none pe-3" href="">+1 800 314 235</a>
  <span><i class="fa-solid fa-envelope" style="color: #74C0FC;"></i></span> <span><a class="change-color text-decoration-none " href="">contact@companyname.com</a></span>
</div>
                </div>
                <div class="text-white col-lg-5 mx-auto rounded-3 ">
                  <h1 class="">Contact us</h1>
                  <p class="fs-6 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Commodi consectetur inventore ducimus, facilis, numquam id soluta
                      omnis eius recusandae nesciunt vero repellat harum cum. Nisi facilis odit hic, ipsum sed!

                  </p>
                    
                   <div class="d-lg-flex justify-content-between position-relative  ">
                    <div class="mb-3">
                       
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="your name ...">
                    </div>
                  
                
                    <div class="mb-3">
                      <input type="email" class="form-control " id="exampleFormControlInput1" placeholder="your email ...">
                    </div>
                   </div>
                   <div class="d-lg-flex justify-content-between  ">
                    <div class="mb-3">
                       
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="web site ...">
                    </div>
                  
                
                    <div class="mb-3">
                      <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="company name ...">
                    </div>
                   </div>
                   <div>
                    <div class="form-floating">
                      <textarea class="form-control h-75 " placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                     
                    </div>
                    <button class=" x btn  btn-x mt-2  " for="floatingTextarea">submit</button>
                   </div>

                   
                  
                  
                </div>
               
              </div>

        </section>
          </div>`;
  document.querySelector(".weather").style.backgroundImage = "none";
  document.querySelector(".weather").style.backgroundColor = " #1e202b";
  document.getElementById("changeNav").innerHTML = document
    .getElementById("changeNav")
    .innerHTML.replace("Weather", "  Company name");
});
