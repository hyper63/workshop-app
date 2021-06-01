<script>
    export let color
  
  </script>
  <div class="hyper-border-box">
    <div class="hyper-color-box bg-{color}">
      &nbsp;
    </div>
    <h3 class="text-xl">{color}</h3>
  </div>
  <style>
    .hyper-border-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 16px;
  
      width: 165px;
      height: 168px;
      left: 0px;
      top: 2047.81px;
  
      background: #FFFFFF;
      box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.11);
      border-radius: 20px;
    }
  
    .hyper-color-box {
      position: static;
      width: 133px;
      height: 93px;
      left: 16px;
      top: 16px;
  
      border-radius: 20px;
  
      /* Inside Auto Layout */
  
      flex: none;
      order: 0;
      flex-grow: 0;
      margin: 16px 0px;
    }
  </style>
  