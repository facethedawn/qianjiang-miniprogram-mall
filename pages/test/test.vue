<template>
	<div class='test'>
		test page
	</div>
</template>

<script>
export default {
	name: "test",
	mounted() {
		this.$http.get('/todos/1').then(res => {
			console.log(res)
		})
	}
}
</script>

<style>
</style>