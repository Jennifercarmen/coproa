<template>
  <div class="page">
        <Navbar></Navbar>
            <b-container class="form-data">
                <table class="table table-hover text-center">
                  <thead>
                    <tr>
                      <th class="text-center">#</th>
                      <th class="text-center">Name</th>
                      <th class="text-center">Status</th>
                      <th class="text-center">Start Date</th>
                      <th class="text-center">End Date</th>
                      <th class="text-center">Amount</th>
                      <th class="text-center">year</th>
                      <th class="text-center">Update</th>
                      <th class="text-center">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>First</td>
                      <td>Active</td>
                      <td>07/01/2017</td>
                      <td>06/04/2017</td>
                      <td>$40</td>
                      <td>2017</td>
                      <td><a href="#!" class="btn btn-success btn-raised btn-xs"><i class="zmdi zmdi-refresh"></i></a></td>
                      <td><a href="#!" class="btn btn-danger btn-raised btn-xs"><i class="zmdi zmdi-delete"></i></a></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Second</td>
                      <td>Active</td>
                      <td>07/04/2017</td>
                      <td>06/08/2017</td>
                      <td>$40</td>
                      <td>2017</td>
                      <td><a href="#!" class="btn btn-success btn-raised btn-xs"><i class="zmdi zmdi-refresh"></i></a></td>
                      <td><a href="#!" class="btn btn-danger btn-raised btn-xs"><i class="zmdi zmdi-delete"></i></a></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Third</td>
                      <td>Active</td>
                      <td>07/08/2017</td>
                      <td>06/12/2017</td>
                      <td>$40</td>
                      <td>2017</td>
                      <td><a href="#!" class="btn btn-success btn-raised btn-xs"><i class="zmdi zmdi-refresh"></i></a></td>
                      <td><a href="#!" class="btn btn-danger btn-raised btn-xs"><i class="zmdi zmdi-delete"></i></a></td>
                    </tr>
                  </tbody>
                </table>
      </b-container>
    </div>
</template>

<script>
import Navbar from "./Navbar";
export default {
components: {
  Navbar
  }
}
</script>