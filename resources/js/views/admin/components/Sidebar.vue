<template>
  <ul
    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    <!-- Sidebar - Brand -->
    <router-link
      class="sidebar-brand d-flex align-items-center justify-content-center"
      to="/"
    >
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-duotone fa-bug"></i>
        <!-- <font-awesome-icon icon="fa-duotone fa-bug" /> -->
      </div>
      <div class="sidebar-brand-text mx-3">Ticket System</div>
    </router-link>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Nav Item - Tickets Collapse Menu -->
    <li class="nav-item active">
      <router-link class="nav-link" to="/admin/tickets">
        <i class="fas fa-fw fa-envelope"></i>
        <span>Tickets</span></router-link
      >
    </li>

    <!-- Divider -->
    <!-- <hr class="sidebar-divider" /> -->

    <!-- Nav Item - Users Collapse Menu -->
    <!-- <li class="nav-item active">
      <router-link class="nav-link" to="/admin/users">
        <i class="fas fa-fw fa-user"></i>
        <span>Users</span></router-link
      >
    </li> -->

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>
  </ul>
  <!-- End of Sidebar -->
</template>

<script>
export default {
  name: "Sidebar",
};
</script>
