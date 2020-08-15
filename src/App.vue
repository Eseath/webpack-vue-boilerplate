<template>
    <div>
        <h1>{{ title }}</h1>
        {{ formatDate(new Date()) }}
    </div>
</template>

<script>
import { formatDate } from './helpers';

export default {
    name: 'Application',

    data: () => ({
        title: 'Hello, World!',
    }),

    methods: {
        formatDate,
    },
};
</script>

<style lang="scss">
    h1 {
        text-align: center;
    }
</style>
