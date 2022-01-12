<template>
  <div class="flex flex-col">
    <div>
      <p>Skills</p>
      <div class="flex justify-between">
        <AboutCard v-for="skill in skills" :key="skill.name" v-bind="skill" />
      </div>
    </div>
    <div>
      <p>Tools</p>
      <div class="flex justify-between">
        <AboutCard v-for="tool in tools" :key="tool.name" v-bind="tool" />
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
