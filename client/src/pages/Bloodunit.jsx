import "./Bloodunit.module.css"
export default function Bloodunit(){
    
    return(
        <>
<div class="cardm">
  <div class="card">
    <svg class="weather" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" xml:space="preserve">  <image id="image0" width="100" height="100" x="0" y="0" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLnKKXlYFOIZ8vBeEQFFgwKVV_K6di9xLhGg&s"></image>
    </svg>
    <div class="main">500 U</div>
    {/* <div class="mainsub">Dunmore, Ireland</div> */}

  </div>

  <div class="card2">
    <div class="upper">
      <div class="humidity">
        <div class="bgroup">30 U</div>
        <svg xml:space="preserve" viewBox="0 0 30 30" height="30px" width="30px" y="0px" x="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1" class="humiditysvg">  <image href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Oqav91bnvCL1x4-xp4-YsT8TYOIuauxisLBGq56jEl7iY81W2j7bBPBsCvA3km1CqvE&usqp=CAU" y="0" x="0" height="40" width="40" id="image0"></image>
          </svg>
      </div>

      <div class="air">
        <div class="bgroup">80 U</div>
          <svg class="airsvg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 30 30" xml:space="preserve">  <image id="image0" width="30" height="30" x="0" y="0" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHeAh2Z4UE-5Lh-ctD5SFPc4wuRYyUeI7XlaaUC2W6TS-wg3mU9WX3l5jBEXXzPE5AVSw&usqp=CAU"></image>
        </svg>
      </div>
    </div>

    <div class="lower">
      <div class="aqi">
        <svg class="aqisvg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  width="40px" height="40px" viewBox="0 0 20 20" xml:space="preserve">  <image id="image0" width="30" height="30" x="0" y="0" href="https://thebloodconnection.org/wp-content/uploads/2020/02/Blood-Types-v01_AB-Positive-1-300x285.png"></image>
        </svg>
        <div class="bgroup">30 U</div>
      </div>

      <div class="realfeel">
        <svg class="rfsvg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 20 20" xml:space="preserve">  <image id="image0" width="30" height="30" x="0" y="0" href="data:image/png;base64,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"></image>
        </svg>
        <div class="bgroup">200 U </div>
      </div>

      <div class="pressure">
        <svg class="pressuresvg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 20 20" xml:space="preserve">  <image id="image0" width="20" height="20" x="0" y="0" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_rtUNb--UqBVXQWyVqZVy2F5toiFJkVriw&s"></image>
        </svg>
        <div class="bgroup">100 U</div>
      </div>
      <div class="card3">
      Healthy
      </div>
    </div>
  </div>
</div>        </>
    )
}