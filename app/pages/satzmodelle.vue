 <script setup>
</script>

<template>
    <UContainer>
        <div class="flex flex-col gap-8">
            <Heading>Stücke</Heading>
            <div class="grid grid-cols-4 gap-4">
                <UFormField :label="$t('deg')">
                    <USelect v-model="filters.deg" :items="degItems" class="w-full" />
                </UFormField>
                <UFormField :label="$t('composer')">
                    <USelect v-model="filters.composer" :items="composerItems" class="w-full" />
                </UFormField>
                <UFormField :label="$t('genre')">
                    <USelect v-model="filters.genre" :items="genreItems" class="w-full" />
                </UFormField>
                <UFormField label="&nbsp;">
                    <UButton @click="resetFilters">{{ $t('resetFilters') }}</UButton>
                </UFormField>
            </div>
            <UTable v-model:sorting="sorting" :data="filteredPieces" :columns="columns" class="mt-8">
                <template #audio-cell="{ row, cell, column }">
                    <MidiPlayer :url="row.original.localRawFile" class="text-2xl"/>
                </template>
                <template #actions-cell="{ row }">
                    <div class="flex gap-1 justify-end">
                        <UButton size="sm" color="primary" variant="solid" :label="t('vhv')" :to="`https://verovio.humdrum.org/?file=${encodeURIComponent(`https://github.com/WolfgangDrescher/schubert-dances/blob/master/kern/${row.original.filename}.krn`)}`" target="_blank" />
                        <UButton size="sm" color="primary" variant="solid" :label="t('view')" :to="localePath({ name: 'piece-id', params: { id: row.original.slug } })" />
                    </div>
                </template>
            </UTable>
        </div>
    </UContainer>
</template>