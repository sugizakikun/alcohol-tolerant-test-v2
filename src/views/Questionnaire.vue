<template>
  <div class="home" style="text-align:left; max-width:720px; margin:auto;">
    <div class="inputGroup mb-6">
      <div v-for="(qstItem, idx) in questionnaireItems" :key="idx" class="pb-4">
        <div class="questionHeader pb-2" style="text-align: left">
          {{qstItem.statement}}
        </div>
        <div class="inputAnswer row">
          <label class="answer col-4 px-2" :for="idx+'_a'">
            <input class="answer-option" type="radio" :name="'q-'+idx" value=1 :id="idx+'_a'" v-model="userAnswers[idx]">
            <span class="answer-text">いつも出る</span>
          </label>
          <label class="answer col-4 px-2" :for="idx+'_b'">
            <input class="answer-option" type="radio" :name="'q-'+idx" value=2 :id="idx+'_b'" v-model="userAnswers[idx]">
            <span class="answer-text">時々出る</span>
          </label>
          <label class="answer col-4 px-2" :for="idx+'_c'">
            <input class="answer-option" type="radio" :name="'q-'+idx" value=3 :id="idx+'_c'" v-model="userAnswers[idx]">
            <span class="answer-text">出ない</span>
          </label>
        </div>
      </div>
    </div>

    <button @click="submit">submit</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import axios from 'axios'

export default class Questionnaire extends Vue {
  public questionnaireItems: [] = []
  public userAnswers: [] = []

  public getQuestionnaireItems () {
    return axios.get('https://xxxxxxxx.execute-api.us-east-1.amazonaws.com/questionnaire_items').then((res) => {
      this.questionnaireItems = res.data.body
    })
  }

  public submit () {
    console.log(this.userAnswers)
  }

  mounted () {
    this.getQuestionnaireItems()
  }
}
</script>
