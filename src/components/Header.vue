<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">
            <img class="logo" src="/Images/vueInv.png" alt="Invoices Logo">
          </a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="/"><span class="glyphicon glyphicon-user" aria-hidden="true"></span><br>Accounts</a></li>
            <li><a href="/"><span class="glyphicon glyphicon-comment" aria-hidden="true"></span><br>Contacts</a></li>
            <li><a href="/invoices"><span class="glyphicon glyphicon-folder-open" aria-hidden="true"></span><br>Invoices</a></li>
            <li><a href="/"><span class="glyphicon glyphicon-credit-card" aria-hidden="true"></span><br>Payments</a></li>
            <li><a href="/"><span class="glyphicon glyphicon-book" aria-hidden="true"></span><br>About</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
