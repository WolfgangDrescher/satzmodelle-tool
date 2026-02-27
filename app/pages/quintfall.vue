 <script setup>
 const { t } = useI18n();
</script>

<template>
    <UContainer>
        <div class="flex flex-col gap-8">
            <h1 class="text-3xl font-bold">Quintfall</h1>
        <h2>Diatonischer Quintfall, mit Gegenschrittmodell 3-6 in Außenstimmen</h2>
        <VerovioCanvas view-mode="horizontal" url="/krn/quintfall-dia-3-bass.krn" :scale="35" :page-margin="20" />
        <!-- <MidiPlayer url="/krn/quintfall-dia-3-bass.krn" class="text-2xl"/> -->
        </div>
    </UContainer>
</template>