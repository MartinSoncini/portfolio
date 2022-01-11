<template>
  <div>
    <img :src="image" alt="profile image" />
    <div>
      <p>Martin Soncini</p>
      <p>
        Hello! I’m Martin. I'm a front-end developer who is passionate about
        VUE, building great user experiences, fighting for simplicity over
        complexity and constantly learning. When I'm not coding, you'll find me
        playing football or singing with my guitar.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  computed: {
    image() {
      return "https://i.ibb.co/MPf1ySG/profile-Image.jpg";
    },
  },
};
</script>
