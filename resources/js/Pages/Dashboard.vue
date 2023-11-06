<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";

const links = [
    {
        icon: "mdi-github",
        label: "Gihub LaraQuasar",
        href: "https://github.com/laraquasar/laraquasar",
    },
];
</script>

<template lang="pug">
Head(title="Dashboard")
AuthenticatedLayout
    q-page(padding)
        .row
            .col-12.col-md-4
                q-card
                    q-card-section.text-center
                        .text-h6 Welcome to LaraQuasar
                        .text-body2 Tank for using LaraQuasar
                        | Laraquasar is a Laravel template that use Quasar Framework and utilities for your Laravel project. With Laraquasar, you can quickly and easily integrate Quasar components into your Laravel.
                    q-list
                        q-item(v-for="link in links" :href="link.href" target="_blank")
                            q-item-section(avatar)
                                q-icon(:name="link.icon")
                            q-item-section() {{ link.label }}

</template>
