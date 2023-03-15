import adapter from '@sveltejs/adapter-node'
import preprocess from 'svelte-preprocess';3

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
        postcss: true
    })
  ],
  kit: {
    adapter: adapter(), 
  }
}

export default config