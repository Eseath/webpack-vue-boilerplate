<template>
    <div>
        <h1>{{ title }}</h1>

        <svg>
            <use xlink:href="#example" />
        </svg>
    </div>
</template>

<script>
export default {
    name: 'Application',

    data: () => ({
        title: 'Hello, World!',
    }),
};
</script>

<style lang="scss">
h1 {
    text-align: center;
}
</style>
