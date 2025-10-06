<script>
import modelCard from "@/components/modelCard.vue"; 
import headerComponent from "@/components/header.vue";
import { fetchModels } from "@/utils/fetchModels.js";

export default {
  components: {
    modelCard, 
    headerComponent
  },
  data() {
    return {
      models: []
    };
  },
  async mounted() {
    this.models = await fetchModels(8);
  },
};
</script>

<template>
  <div>
    <headerComponent/>
    <div class="cardWrapper">
    <model-card
      v-for="(x, index) in models"
      :key="index"
      :modelName="x.modelName"
      :modelDescription="x.modelDescription"
      :image="x.imageUrl"
    />
    </div>
  </div>
</template>

<style>
body {
  background-color: rgba(45, 43, 3, 1);
  padding-bottom: 2rem;
}
</style>

<style scoped>
.cardWrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
}
</style>

