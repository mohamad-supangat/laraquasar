<script setup>
import { Head, Link } from "@inertiajs/vue3";
import { Dark } from "quasar";
import { ref, watch } from "vue";
import EssentialLink from "@/Components/EssentialLink.vue";

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

const count = ref(0);
const min = -5;
const max = 5;

const darkMode = ref(Dark.isActive);
watch(darkMode, (value) => {
    Dark.set(value);
});

const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value;
}

const linksList = [
    {
        title: "Github",
        caption: "https://github.com/laraquasar",
        icon: "code",
        link: "https://github.com/laraquasar",
    },
    {
        title: "Packagist",
        caption: "https://packagist.org/packages/laraquasar/laraquasar",
        icon: "code",
        link: "https://packagist.org/packages/laraquasar/laraquasar",
    },
    {
        title: "Docs Quasar",
        caption: "quasar.dev",
        icon: "school",
        link: "https://quasar.dev",
    },
    {
        title: "Docs Laravel",
        caption: "laravel.com/docs",
        icon: "school",
        link: "https://laravel.com/docs",
    },
];
</script>

<template>
    <Head>
        <title>Welcome to laravel + quasar</title>
    </Head>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-btn
                    flat
                    dense
                    round
                    icon="menu"
                    aria-label="Menu"
                    @click="toggleLeftDrawer"
                />

                <q-toolbar-title>Laravel + Vite + Quasar</q-toolbar-title>
                <template v-if="canLogin">
                    <Link
                        v-if="$page.props.auth.user"
                        :href="route('dashboard')"
                    >
                    </Link>

                    <template v-else>
                        <Link :href="route('login')">
                            <q-btn
                                label="Log in"
                                color="white"
                                textColor="black"
                            />
                        </Link>
                        <Link
                            class="q-ml-sm"
                            v-if="canRegister"
                            :href="route('register')"
                        >
                            <q-btn
                                label="Register"
                                color="white"
                                textColor="black"
                            />
                        </Link>
                    </template>
                </template>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
            <q-list>
                <q-item-label header>Essential Links</q-item-label>

                <EssentialLink
                    v-for="link in linksList"
                    :key="link.title"
                    v-bind="link"
                />
            </q-list>

            <q-separator spaced />
            <div class="text-center">Quasar v{{ $q.version }}</div>
        </q-drawer>

        <q-page-container>
            <q-page class="column flex-center">
                <div class="flex q-gutter-lg justify-center items-center">
                    <q-img
                        width="100px"
                        fit
                        src="https://cdn.quasar.dev/logo-v2/svg/logo.svg"
                        alt="Quasar Logo"
                    />
                    <q-icon name="favorite" color="red" size="50px" />
                    <q-img
                        fit
                        width="100px"
                        src="https://laravel.com/img/logomark.min.svg"
                        alt="Laravel Logo"
                    />
                </div>

                <div class="q-mt-xl">
                    <q-btn
                        color="primary"
                        dense
                        round
                        label="-"
                        :disable="count === min"
                        @click="count--"
                    />

                    <span class="q-mx-md text-bold">{{ count }}</span>

                    <q-btn
                        color="primary"
                        dense
                        round
                        label="+"
                        :disable="count === max"
                        @click="count++"
                    />
                </div>

                <div class="q-mt-md" style="width: 200px">
                    <q-slider v-model="count" :min="min" :max="max" />
                </div>

                <div>
                    <q-toggle label="Dark Mode" v-model="darkMode" />
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>
