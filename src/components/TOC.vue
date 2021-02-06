	<template>
    <div>
      <p>hi</p>
      <div v-if="headings.length > 0 && headings[0].depth !== 3">
        <ul v-if="headings.length" class="menu-item submenu">
          <li class="submenu__item" :class="'submenu__item-depth-' + heading.depth" v-for="heading in headings" :key="heading.textContent">
            <a class="submenu__link" :href="'#' + heading.id">
              {{ heading.textContent }}
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
	props: {
		headings: {
			type: Array,
			default: []
		}
  },
 
};
</script>
