<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import InputError from "@/Components/InputError.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: "",
    password: "",
    remember: false,
});

const submit = () => {
    form.post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};
</script>

<template lang="pug">
Head(title="Login")
GuestLayout
    q-page.flex.bg-image.flex-center
        q-form(@submit="submit")
            q-card(style="width: 400px")
                q-card-section
                    .text-h5 Login
                    div
                        q-input(v-model="form.email" label="Email" :rules='[$rules.required()]')
                        InputError(:message="form.errors.email")
                    div
                        q-input(v-model="form.password" label="Password" :rules='[$rules.required()]')
                        InputError(:message="form.errors.password")
                    div
                        q-checkbox(v-model="form.remember" label="Remember me")

                q-card-actions
                    q-btn.full-width(color="primary" type="submit" label="Log in" push :loading="form.processing")
                q-card-section.text-center
                    Link(v-if="canResetPassword" :href="route('password.request')") Forgot your password?

</template>
