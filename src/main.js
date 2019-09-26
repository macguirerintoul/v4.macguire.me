// Import main scss
import '~/assets/style/style.scss'


// Import zooming library
import Zooming from 'zooming'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {


  document.addEventListener('DOMContentLoaded', function () {
    const zooming = new Zooming()
    zooming.listen('.img-zooming')
  })
}
