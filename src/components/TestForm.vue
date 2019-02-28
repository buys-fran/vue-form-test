<template>
  <v-container>
    <v-card>
      <v-card-title class="title">Test Form</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="submit" v-model="valid" ref="form">
          <v-text-field
            label="Your Name"
            v-model="name"
            color="primary"
            :rules="rule"
            required
            ref="name"
          />
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      name: "",
      rule: [v => v.length > 0 || "Required"]
    };
  },
  methods: {
    submit() {
      console.log("Submitted");
    }
  }
};
</script>
