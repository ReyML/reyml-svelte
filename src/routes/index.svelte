<script>
  import Footer from '$lib/Footer.svelte';
  import {onMount} from 'svelte';

onMount (() => {
  let particles = Particles.init({
      selector: '.background',
      color: ['#DA0463', '#F8BBD0', '#B2FEFA'],
      connectParticles: false,
      speed: 0.1,
      sizeVariations: 20,
    })

  /* (function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        elem.style.backgroundPosition = x;
    }
})(); */

}) 

const handleClick = () => {
  scroll(1, 1)
}
</script>


<svelte:head>
  <title>Reyml | Reynol Martínez</title>
  
</svelte:head>
<div class="border-0">
  <div id="parallax" class='flex justify-center items-center '>
    <div class="flex flex-col gap-y-5 -translate-y-40">   
      <button class="text-center text-xl text-gray-200 inter underline underline-offset-4" on:click={handleClick}>Go down ↓</button>
    </div>
  </div>
</div>
<canvas class="background "></canvas>
<div class="border-t-2">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.2/particles.min.js"></script>
  <script src="path/to/particles.min.js"></script>
</div>
<!-- <Footer /> -->


<style>
 #parallax {
/*   position: relative; */
  width: 100%;
  height: 94vh;
  /* background-image: 
  url(/parallax/cool.png); */
  /* background-repeat: repeat;
  background-position: center;
  background-position: 50% 50%;
 */
}

.background {
  position: absolute; 
  display: block;
  top: 0;
  left: 0;
  z-index: 0;
}

</style>