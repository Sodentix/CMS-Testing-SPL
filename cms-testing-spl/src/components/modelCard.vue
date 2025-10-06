<script setup>
defineProps({
  modelName: {
    type: String,
    required: true,
  },
  modelDescription: {
    type: String,
    required: true,
  },
  image: {
    type: String
  }
})
</script>

<template>
  <div id="cardContainer">
    <img :src="image" alt="Image should be here" />
    <h1 class="modelNameClass">{{ modelName }}</h1>
    <p class="modelDescriptionClass">{{ modelDescription }}</p>
  </div>
</template>

<style scoped>
#cardContainer {
  background-color: rgba(217, 217, 217, 1);
  display: flex;
  flex-direction: column;
  width: 294;
  height: 486;
  opacity: 1;
  border-radius: 10px;
  align-items: center;
}

.modelNameClass {
  color: rgba(0, 0, 0, 1);
  padding: 0.1rem 1rem 0 1rem;
  text-align: center;
}

.modelDescriptionClass {
  color: rgba(0, 0, 0, 1);
  text-align: center;
}
</style>
