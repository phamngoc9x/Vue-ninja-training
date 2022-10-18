<template>
  <form @submit.prevent="handleSubmit">
		<h4>Create new Skill List</h4>
		<input type="text" required placeholder="Skill list title" v-model="title">
		<textarea  v-model="description" placeholder="Skill list description..."></textarea>
		<label>Upload skill list cover image</label>
		<input type="file" @change="handleChange">
		<div class="error">{{ fileError }}</div>
		<div class="error"> {{ error }}</div>
		<button>Create</button>
	</form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useStorage from '@/composables/useStorage'
import useCollection from '@/composables/useCollection'
import getUser from '@/composables/getUser'
import { timestamp } from '@/firebase/config'

export default {
	setup() {
		const title = ref('')
		const description = ref('')
		const file = ref(null)
		const fileError = ref(null)

		const { addDoc, error } = useCollection()

		const { uploadImage, filePath, url } = useStorage()

		const handleSubmit = async () => {
			if (file.value) {
				await uploadImage(file.value)
				console.log('image uploaded, url: ', url.value);
			}
		}

		// allowed file type
		const types = ['image/png', 'image/jpeg']

		const handleChange = (e) => {
			const selected = e.target.files[0]
			console.log(selected);
			if (selected && types.includes(selected.type)) {
				file.value = selected
				fileError.value = null
			} else {
				file.value = null
				fileError.value = 'Please select an images file (png and jpg)'
			}
		}

		return { title, description, handleSubmit, handleChange , fileError, error}
	}
}
</script>

<style>
	form {
    background: white;
  }
  input[type="file"] {
    border: 0;
    padding: 0;
  }
  label {
    font-size: 12px;
    display: block;
    margin-top: 30px;
  }
  button {
    margin-top: 20px;
  }

</style>