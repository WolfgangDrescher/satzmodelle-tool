<script setup>
const { data } = await useAsyncData('satzmodelle', () => queryCollection('satzmodelle').all())
const localePath = useLocalePath();

 const { t } = useI18n();
</script>

<template>
    <div class="flex flex-col items-center gap-8 mt-8">
        <UButton to="/tool" trailing-icon="i-lucide-arrow-right" size="xl">Let's go!</UButton>
    </div>
    <div class="flex flex-col items-center gap-8 mt-8">
        <UButton :to="localePath('/satzmodelle')" size="xl" trailing-icon="i-lucide-arrow-right">Überblick über die Satzmodelle</UButton>
    </div>
</template>

<!-- <template>
    <UCard v-for="satzmodelle in data">
        <div class="flex flex-col gap-8">
            <h1 class="text-3xl font-bold">Satzmodelle</h1>
            <h2>French augmented Sixth</h2>
        <div class="ml-auto">
            <NuxtLink :to="localePath('/satzmodelle/' + satzmodelle.slug)" class="flex flex-col gap-4">
                    {{ satzmodelle.title }}
                    <VerovioCanvas  view-mode="horizontal" :url="satzmodelle.scorePath" :scale="35" :page-margin="20" />
            </NuxtLink>
        </div>
        </div>
    </UCard>
</template> -->