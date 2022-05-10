<script>
  import Footer from '$lib/Footer.svelte';
  import {onMount} from 'svelte';

onMount (() => {
  (function() {
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
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();
})
</script>


<svelte:head>
  <title>Reyml | Reynol Martínez</title>
</svelte:head>
<div class="">
  <div id="parallax" class=''>
    <h1 class="text-center translate-y-52 text-8xl text-white ">I MAKE THINGS</h1>
  </div>
</div>
<div class="border-t-2">
  <!-- <img src="/star.jpeg" alt="" class="mb-2 h-screen w-full"> -->
</div>
<!-- <Footer /> -->


<style>
#parallax {
  position: relative;
  width: 100%;
  height: 95vh;
  background-image: 
  url(/parallax/3.png),
  url(/parallax/1.png),
  url(/parallax/2.png);
  /* url(https://raw.githubusercontent.com/oscicen/oscicen.github.io/master/img/depth-3.png), 
  url(https://raw.githubusercontent.com/oscicen/oscicen.github.io/master/img/depth-2.png), 
  url(https://raw.githubusercontent.com/oscicen/oscicen.github.io/master/img/depth-1.png); */
  background-repeat: no-repeat;
  background-position: center;
  background-position: 50% 50%;
}
</style>