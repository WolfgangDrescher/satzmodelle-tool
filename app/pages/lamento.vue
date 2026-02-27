<script setup>
 const { t } = useI18n();
</script>

<template>
    <UContainer>
        <h1 class="text-3xl font-bold">Lamentobässe</h1>
            <div class="flex flex-col gap-8">
                <div>
                    <h2>Lamentobass, 7-6-Konsekutive</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/lam-7-6consecutive.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/lam-7-6consecutive.krn" class="text-2xl"/> -->
                </div>
                <div class="flex flex-col gap-8">
                    <h2>Chromatischer Lamentobass, 7-6-Konsekutive</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/lam-chrom-7-6consecutive.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/lam-chrom-7-6consecutive.krn" class="text-2xl"/> -->
                </div>
                <div class="flex flex-col gap-8">
                    <h2>Chromatischer Lamentobass</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/lam-chrom.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/lam-chrom.krn" class="text-2xl"/> -->
                </div>
                <div class="flex flex-col gap-8">
                    <h2>Lamentobass, homophon</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/lam-homophon.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/lam-homophon.krn" class="text-2xl"/> -->
                </div>
            </div>
    </UContainer>
</template>