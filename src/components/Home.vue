<template>
  <div>
    <div class="container">
      
      <alert type="success">
        <strong>Well Done!</strong>
        You successfully read this important alert message.
      </alert>
      <alert type="info">
        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
      </alert>
      <alert type="danger" dismissable>
        <strong>Oh snap!</strong> Change a few things up and try submitting again.
      </alert>
      <alert type="warning" dismissable>
        <strong>Warning!</strong> Better check yourself, you're not looking too good.
      </alert>
      <alert :show.sync="showRight" placement="top-right" duration="3000"
        type="success" width="400px" dismissable
      >
        <span class="icon-ok-circled alert-icon-float-left"></span>
        <strong>Well Done!</strong>
        <p>You successfully read this important alert message.</p>
      </alert>
      <alert :show.sync="showTop" placement="top" duration="3000"
        type="danger" width="400px" dismissable
      >
        <span class="icon-info-circled alert-icon-float-left"></span>
        <strong>Heads up!</strong>
        <p>This alert needs your attention.</p>
      </alert>

      <alert :show.sync="showRight" placement="top-right" duration="3000" type="success" width="400px" dismissable>
        <span class="icon-ok-circled alert-icon-float-left"></span>
        <strong>Well Done!</strong>
        <p>You successfully read this important alert message.</p>
      </alert>

      <alert :show.sync="showTop" placement="top" duration="3000" type="danger" width="400px" dismissable>
        <span class="icon-info-circled alert-icon-float-left"></span>
        <strong>Heads up!</strong>
        <p>This alert needs your attention.</p>
      </alert>
      <button type="button" @click="showAlert()">fuyru</button>
    </div>
  </div>
</template>
<script>
import vueStrap from 'vue-strap'
export default {
  data () {
    return {
      alertIsOpen: false,
      message: 'Hello World',
      showRight: false,
      showTop: false,
      value: false
    }
  },
  methods: {
    showAlert: function () {
      this.value = true
    }
  },
  components: {
    alert: vueStrap.alert
  }
}
</script>
