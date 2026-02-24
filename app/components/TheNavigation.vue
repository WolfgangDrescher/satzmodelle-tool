<script setup>
const { t } = useI18n();
const localePath = useLocalePath();

const items = [
    {
        label: t('start'),
        to: localePath({name: 'index'}),
    },
    {
        label: t('about'),
        to: localePath({name: 'about'}),
    },
    {
        label: t(''),
        to: localePath({name: 'sequences'}),
    },
    {
        label: t('faq'),
        to: localePath({name: 'faq'}),
    },
];
</script>

<template>
    <UNavigationMenu :items="items" class="border-b border-gray-200 dark:border-gray-800 px-2"/>
</template>