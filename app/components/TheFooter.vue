<script setup>
const localePath = useLocalePath();

const { t } = useI18n();

const columns = [
    {
        label: t('pages'),
        children: [
            {
                label: t('home'),
                to: localePath('index'),
            },
            {
                label: t('sequences'),
                to: localePath('sequences'),
            },
            {
                label: t('faq'),
                to: localePath('faq'),
            },
        ],
    },
    {
        label: t('sitemap'),
        children: [
            {
                label: t('legalNotice'),
                to: localePath('legal-notice'),
            },
        ],
    },
];
</script>

<template>
    <UFooter class="bg-pattern">
        <template #top>
            <UContainer>
                <UFooterColumns :columns="columns" :ui="{
                    list: 'grid grid-cols-2 gap-x-2 space-y-0 mt-3',
                    link: 'text-white text-base',
                    label: 'text-white text-lg',
                }">
                </UFooterColumns>
            </UContainer>
        </template>
    </UFooter>
</template>