<template>
  <form @submit.prevent="handleSubmit">
		<h4>Create new Characters</h4>
		<input type="text" required placeholder="Characters name" v-model="title">
		<textarea  v-model="description" placeholder="Characters description..."></textarea>
		<label>Upload characters cover image</label>
		<input type="file" @change="handleChange">
		<div class="error">{{ fileError }}</div>
		<div class="error"> {{ error }}</div>
		<button v-if="!isPending">Create</button>
		<button v-else disabled>Saving...</button>
	</form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useStorage from '@/composables/useStorage'
import useCollection from '@/composables/useCollection'
import getUser from '@/composables/getUser'
import { timestamp } from '@/firebase/config'
import { useRouter } from 'vue-router'

export default {
	setup() {
		const title = ref('')
		const description = ref('')
		const file = ref(null)
		const fileError = ref(null)
		const isPending = ref(false)
		const router = useRouter()
	
		const { user } = getUser()
		const { addDoc, error } = useCollection('characters')
		const { uploadImage, filePath, url } = useStorage()
		const handleSubmit = async () => {
			if (file.value) {
				await uploadImage(file.value)
				const res = await addDoc({
					title: title.value,
					description: description.value,
					userId: user.value.uid,
					userName: user.value.displayName,
					coverUrl: url.value,
					filePath: filePath.value,
					skills: [],
					createAt: timestamp()
				})
				if(!error.value) {
					console.log('skill added');
					isPending.value = false
					router.push({name: 'CharactersDetails', params: {id : res.id }})
				}
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

		return { title, description, handleSubmit, handleChange , fileError, error, isPending}
	}
}
</script>

<style scoped>
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