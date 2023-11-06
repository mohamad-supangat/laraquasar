<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
</script>

<template lang="pug">
Head(title="Register")
AuthenticatedLayout
    q-page(padding)
        .row
            .col-12.col-md-4
                q-card
                    q-card-section.text-center
                        .text-h6 Welcome to LaraQuasar

</template>
