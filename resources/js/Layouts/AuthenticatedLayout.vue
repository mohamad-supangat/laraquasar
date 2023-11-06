<script setup>
import { ref } from "vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import { Link } from "@inertiajs/vue3";

const navigationLinks = [
    {
        name: "Dashboard",
        href: "dashboard",
        icon: "mdi-view-dashboard",
    },
];

const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<template lang="pug">
q-layout(view="hHh Lpr lFf")
    q-header.bg-white.text-dark(elevated)
        q-toolbar
            q-btn(flat, dense, round, @click="toggleLeftDrawer", icon="mdi-menu", aria-label="Menu")
            Link(:href="route('dashboard')")
                ApplicationLogo(style="height: 35px")
            q-toolbar-title

            q-space
            .q-gutter-sm.row.items-center.no-wrap
                q-btn(flat)
                    | {{ $page.props.auth.user.name }}
                    q-menu.text-center(style="min-width: 20dp" :offset="[20, 20]")
                        .q-gutter-md.q-pa-md
                            div(style="font-size: 1.3em") {{ $page.props.auth.user.name }}
                            q-separator
                            div
                                Link.btn-clean(:href="route('logout')" method="post" as="button")
                                    q-btn(label="Logout" push color="dark")

    q-drawer.drawer-items(v-model="leftDrawerOpen" show-if-above elevated :width='300')
        q-scroll-area.fit
            q-list
                Link(v-for="navigationLink in navigationLinks" :href="navigationLink.href")
                    q-item(clickable v-ripple :active="route().current(navigationLink.href)")
                        q-item-section(avatar)
                            q-icon(:name="navigationLink.icon")
                        q-item-section
                            q-item-label {{ navigationLink.name }}
    q-page-container.bg-grey-2
       slot
</template>

<style lang="scss" scoped>
.drawer-items {
    line-height: 24px;
    /* border-radius: 0 24px 24px 0; */
    // margin-right: 12px;
    margin: 0 4px;
    .q-item__section--avatar {
        .q-avatar {
            color: #5f6368;
        }
    }

    .q-item,
    .q-expansion-item {
        border-radius: 12px;
    }

    .q-item__label {
        color: #3c4043;
        letter-spacing: 0.01785714em;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.25rem;
    }

    .q-item--active {
        margin: 5px 10px;
        box-shadow: 0 2px 3px #aaa;
        background: var(--q-primary);
        color: white;
        font-weight: bold;

        .q-icon {
            background: white;
            border-radius: 12px;
            padding: 7px;
            color: var(--q-primary);
        }

        .q-item__label {
            color: white;
        }
    }
}
</style>
