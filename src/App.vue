<template>
  <div class="wrapper">
    <!-- Navbar -->
    <MainHeader :page="name" />
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <MainSidebar brand="Alaa Dashboard" :user="name" />

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0">Starter Page</h1>
            </div>
            <!-- /.col -->
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Starter Page</li>
              </ol>
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->

      <!-- Main content -->
      <router-view />
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <!-- Control Sidebar -->
    <ControlSidebar />
    <!-- /.control-sidebar -->

    <!-- Main Footer -->
    <Mainfooter />
  </div>
  <!-- ./wrapper -->
</template>

<script>
// main component
import MainHeader from "./components/global/MainHeader.vue";
import MainSidebar from "./components/global/MainSidebar.vue";
import ControlSidebar from "./components/global/ControlSidebar.vue";
import Mainfooter from "./components/global/Mainfooter.vue";

export default {
  name: "App",
  components: {
    MainHeader,
    MainSidebar,
    ControlSidebar,
    Mainfooter,
  },
  data() {
    return {
      name: "Alaa",
    };
  },
};
</script>
