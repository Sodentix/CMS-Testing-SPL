<script>
import modelCard from "@/components/modelCard.vue"; 
import { fetchModels } from "@/utils/fetchModels.js";

export default {
  components: {
    modelCard, 
  },
  data() {
    return {
      models: []
    };
  },
  async mounted() {
    this.models = await fetchModels(7);
  },
};
</script>

<template>
  <div>
    <div id="headlineContainer">
      <h1 id="headline">HTL Dornbirn 5bWI</h1>
    </div>
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
}
</style>

<style scoped>
#headline {
  font-family: Jaro;
  color: white;
  font-weight: 400;
  font-style: Regular;
  font-size: 80px;
  line-height: 100%;
  letter-spacing: 0%;
}

#headlineContainer {
  display: flex;
  justify-content: flex-end; 
  margin: 0 2rem;
}

.cardWrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
}
</style>

