<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});

const submit = () => {
    form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation"),
    });
};

const inputs = [
    {
        label: "Name",
        key: "name",
    },
    {
        label: "E-Mail",
        key: "email",
        type: "email",
    },
    {
        label: "Password",
        key: "password",
        type: "password",
    },
    {
        label: "Confirm Password",
        key: "password_confirmation",
        type: "password",
    },
];
</script>

<template lang="pug">
Head(title="Register")
GuestLayout
    q-page.flex.bg-image.flex-center
        q-form(@submit="submit")
            q-card(style="width: 400px")
                q-card-section
                    .text-h5 Register Page
                    div(v-for='input in inputs')
                        q-input(v-model="form[input.key]" :label="input.label" :rules='[$rules.required()]' :key="input.key")
                        InputError(:message="form.errors[input.key]")

                q-card-actions
                    q-btn.full-width(color="primary" type="submit" label="Register" push)
</template>
