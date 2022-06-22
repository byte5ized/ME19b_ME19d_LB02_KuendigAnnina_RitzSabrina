<!--demo-01a: Implementing and Adding a Message Feed Page Using Vue Router -->
<template>
  <div>
    <h1>Unser Angebot</h1>
    <b-container fluid>
      <h2>Tauchkurse</h2>
      <div>
        <b-table striped hover :items="$store.getters.tauchen"></b-table>
      </div>
      <h2>Stand-Up-Paddle-Kurse</h2>
      <b-table striped hover :items="$store.getters.abu"></b-table>
      <h2>Surfkurse</h2>
      <div>
        <b-table striped hover :items="$store.getters.egk"></b-table>
      </div>
    </b-container>
  </div>
</template>

<style>
table {
  margin-left: auto;
  margin-right: auto;
}
</style>