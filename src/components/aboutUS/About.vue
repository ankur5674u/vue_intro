<template>
  <div id="about">
    <div>
      <detail msg="Hello From Parent Component"></detail>
      <h1>Hello World!</h1>
      <p>Resize the browser window to see the effect.</p>
      <p>The columns will automatically stack on top of each other when the screen is less than 768px wide.</p>
      <div class="row">
        <div class="col-sm-4" style="background-color:lavender;">.col-sm-4</div>
        <div class="col-sm-4" style="background-color:lavenderblush;">.col-sm-4</div>
        <div class="col-sm-4" style="background-color:lavender;">.col-sm-4</div>
      </div>
    </div>
  </div>
</template>

<<script>
import detail from '@/components/aboutUS/detail'
export default {
  name: 'about',
  components: {
    detail
  }
}
</script>
