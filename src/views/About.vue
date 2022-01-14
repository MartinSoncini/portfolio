<template>
  <div class="flex flex-col">
    <div>
      <p class="subtitle">Skills</p>
      <div class="flex flex-wrap">
        <AboutCard
          v-for="skill in skills"
          :key="skill.name"
          v-bind="skill"
          class="mr-5"
        />
      </div>
    </div>
    <div>
      <p class="subtitle">Tools</p>
      <div class="flex flex-wrap">
        <AboutCard
          v-for="tool in tools"
          :key="tool.name"
          v-bind="tool"
          class="mr-5"
        />
      </div>
    </div>
  </div>
</template>

<script>
import skills from "@/data/skills.json";
import tools from "@/data/tools.json";
import AboutCard from "@/components/AboutCard.vue";
export default {
  name: "About",
  components: {
    AboutCard,
  },
  data() {
    return {
      skills,
      tools,
    };
  },
};
</script>

<style lang="postcss" scoped>
.subtitle {
  @apply uppercase text-lg font-bold;
}
</style>
