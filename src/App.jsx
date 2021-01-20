import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => (
      <div >
        <img src="src/assets/logo.png" class="logo"/>
        <h1 class="title"></h1>
      </div>
    )
  }
})
