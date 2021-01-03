<template>
  <div>
    <div class="flex">
      <div class="form-field">
        <h2>Информация о себе</h2>
        <div
          class="form-group"
          v-for="(fieldValue, fieldLabel, index) in formFields"
          :key="index"
        >
          <label :for="fieldLabel">{{ fieldLabel }}</label>
          <input
            type="text"
            :id="fieldLabel"
            v-model="formFields[fieldLabel]"
          />
        </div>
        <button type="submit">Сохранить</button>
      </div>
      <div class="user-info">
        <h2>Препросмотр</h2>
        <p v-for="(fieldValue, fieldLabel, index) in formFields" :key="index">
          {{ `${fieldLabel}: ${fieldValue}` }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userForm",
  data() {
    return {
      formFields: {
        firstName: "",
        secondName: "",
        lastName: "",
      },
    };
  },
};
</script>