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
  width: 294px;
  height: 486px;
  border-radius: 10px;
}

.modelNameClass {
  color: rgba(0, 0, 0, 1);
  padding: 1rem 0.1rem 0 1rem;
  text-align: left;
  font-family: JetBrains Mono;
  font-weight: 800;
  font-style: ExtraBold;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: 0%;
}

.modelDescriptionClass {
  color: rgba(0, 0, 0, 1);
  padding: 1rem 0.1rem 0 1rem;
  text-align: left;
  font-family: JetBrains Mono;
  font-weight: 400;
  font-style: Regular;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: 0%;
}

img {
  border-radius: 10px;
}
</style>
