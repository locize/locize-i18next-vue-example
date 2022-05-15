<template>
  <div class="hello">
    <h1>{{ $t('welcome') }}</h1>
    <p v-html="$t('descr')"></p>
    <i>{{ $t('new.key', 'this will be added automatically') }}</i>
    <hr />
    <div>
      <div v-if="languages">
        <span v-for="(lng, index) in Object.keys(languages)" :key="lng">
          <a v-if="$i18next.resolvedLanguage !== lng" v-on:click="$i18next.changeLanguage(lng)">
            {{ languages[lng].nativeName }}
          </a>
          <strong v-if="$i18next.resolvedLanguage === lng">
            {{ languages[lng].nativeName }}
          </strong>
          <span v-if="index < (Object.keys(languages).length - 1)">&nbsp;|&nbsp;</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import i18next from 'i18next'

export default {
  name: 'TranslationShowCase',
  data () {
    return {
      languages: []
    }
  },
  async mounted () {
    this.languages = await i18next.services.backendConnector.backend.getLanguages()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
