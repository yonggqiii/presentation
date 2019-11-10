<template>
  <div style="height: 100%; width: 100%">
    <div class="loadercontainer">
      <div class="containermeow">
        <div class="box1" />
        <div class="box2" />
        <div class="box3" />
      </div>
    </div>
    <div class="spacer" />
    <div class="message">
      Please hold while we load the slides...
    </div>
  </div>
</template>

<script>

export default {
  name: 'Loading',
  transition: 'fadein',
  layout: 'view'
}
</script>
<style scoped>

.message {
  padding: 1vmin;
  text-align: center;
  font-size: 3vmin;
  margin: auto;
  font-family: Raleway;
  color: white;
  width: 65vmin;
  background: rgb(255, 54, 54);
  border-radius: 2vmin;
}

.loadercontainer {
  padding-top: 20vmin;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0px;
}

.containermeow {
  width: 30vmin;
  height: 30vmin;
  margin: auto;
}

.containermeow .box1,
.containermeow .box2,
.containermeow .box3 {
  box-sizing: border-box;
  position: absolute;
  display: block;
}

.containermeow .box1 {
  border: 4vmin solid #4793da;
}

.containermeow .box2 {
  border: 4vmin solid #b650ca;
}

.containermeow .box3 {
  border: 4vmin solid #ec4678;
}

.containermeow .box1 {
  width: 30vmin;
  height: 13vmin;
  margin-top: 17vmin;
  margin-left: 0px;
  -webkit-animation: anime1 4s 0s forwards ease-in-out infinite;
          animation: anime1 4s 0s forwards ease-in-out infinite;
}
.containermeow .box2 {
  width: 13vmin;
  height: 13vmin;
  margin-top: 0px;
  margin-left: 0px;
  -webkit-animation: anime2 4s 0s forwards ease-in-out infinite;
          animation: anime2 4s 0s forwards ease-in-out infinite;
}
.containermeow .box3 {
  width: 13vmin;
  height: 13vmin;
  margin-top: 0px;
  margin-left: 17vmin;
  -webkit-animation: anime3 4s 0s forwards ease-in-out infinite;
          animation: anime3 4s 0s forwards ease-in-out infinite;
}
@-webkit-keyframes anime1 {
  0% {
    width: 30vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 0px;
  }
  12.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 0px;
  }
  25% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 0px;
  }
  37.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 0px;
  }
  50% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 0px;
  }
  62.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 0px;
  }
  75% {
    width: 13vmin;
    height: 30vmin;
    margin-top: 0px;
    margin-left: 0px;
  }
  87.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 0px;
  }
  100% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 0px;
  }
}
@keyframes anime1 {
  0% {
    width: 30vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 0px;
  }
  12.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 0px;
  }
  25% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 0px;
  }
  37.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 0px;
  }
  50% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 0px;
  }
  62.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 0px;
  }
  75% {
    width: 13vmin;
    height: 30vmin;
    margin-top: 0px;
    margin-left: 0px;
  }
  87.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 0px;
  }
  100% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 0px;
  }
}
@-webkit-keyframes anime2 {
  0% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 0px;
  }
  12.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 0px;
  }
  25% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 0px;
  }
  37.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 0px;
  }
  50% {
    width: 30vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 0px;
  }
  62.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 17vmin;
  }
  75% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 17vmin;
  }
  87.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 17vmin;
  }
  100% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 17vmin;
  }
}
@keyframes anime2 {
  0% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 0px;
  }
  12.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 0px;
  }
  25% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 0px;
  }
  37.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 0px;
  }
  50% {
    width: 30vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 0px;
  }
  62.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 17vmin;
  }
  75% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 17vmin;
  }
  87.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 17vmin;
  }
  100% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 17vmin;
  }
}
@-webkit-keyframes anime3 {
  0% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 17vmin;
  }
  12.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 17vmin;
  }
  25% {
    width: 13vmin;
    height: 30vmin;
    margin-top: 0px;
    margin-left: 17vmin;
  }
  37.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 17vmin;
  }
  50% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 17vmin;
  }
  62.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 17vmin;
  }
  75% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 17vmin;
  }
  87.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 17vmin;
  }
  100% {
    width: 30vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 0px;
  }
}
@keyframes anime3 {
  0% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 17vmin;
  }
  12.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 0px;
    margin-left: 17vmin;
  }
  25% {
    width: 13vmin;
    height: 30vmin;
    margin-top: 0px;
    margin-left: 17vmin;
  }
  37.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 17vmin;
  }
  50% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 17vmin;
  }
  62.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 17vmin;
  }
  75% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 17vmin;
  }
  87.5% {
    width: 13vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 17vmin;
  }
  100% {
    width: 30vmin;
    height: 13vmin;
    margin-top: 17vmin;
    margin-left: 0px;
  }
}
</style>
