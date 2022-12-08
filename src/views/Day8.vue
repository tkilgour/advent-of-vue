<template>
  <main class="flex flex-col justify-center h-full mx-auto max-w-600px">
    <section class="flex flex-col items-center leading-loose text-center">
      <div class="text-3xl">
        <span class="i-twemoji-christmas-tree"></span>
        {{ $t('happyHolidays') }}
        <span class="i-twemoji-world-map"></span>
      </div>
      <div>
        {{
            $t('christmasIsComing', { date: $d(christmasDate, 'long'), time: $t('day', { count: daysUntilChristmas }) })
        }}
      </div>
      <div>
        {{ $t('flag') }} {{ $t('language') }}
      </div>
      <button @click="randomLang" class="bg-green-light mt-8 px-4 py-2 rounded-lg">{{ $t('randomLanguage') }}</button>
      <!-- Flags - the current locale -->
    </section>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { locale, availableLocales } = useI18n({ useScope: 'global' })

// See the README about tricky timezone issues!
// I figured since this is i18n-friendly, we'd wanna
// make sure the timezones were right :-)
const christmasDate = new Date('2022/12/25')
const daysUntilChristmas = Math.ceil((christmasDate - new Date()) / (1000 * 60 * 60 * 24))

const randomLang = () => {
  const otherLocales = availableLocales.filter(availableLocale => availableLocale !== locale.value)
  locale.value = (otherLocales[Math.floor(Math.random() * otherLocales.length)]);
}
</script>
