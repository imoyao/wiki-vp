export default ({ router }) => {
  if (typeof window !== "undefined") {

    (function() {
      function insertBadge(){
        setTimeout(() =>{
          const a = document.querySelector(".theme-default-content h1 a");
          a && a.insertAdjacentHTML('afterend', `<img src="${BADGES[Math.floor(Math.random() * BADGES.length)]}">`);
        },0)
      }

      let count = 0
      window.onload = function() {
        insertBadge();
        count++;
      }

      router.afterEach(function (to, from) {
        if (to && from && to.path === from.path || !count) {
          return
        }
        insertBadge()
      })

    })()

  }
}