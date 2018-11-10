<template>
    <div class="header">
        <Navbar></Navbar>
          <div class="container-fluid">
            <div class="page-header">
              <h1 class="text-titles"><i class="zmdi zmdi-timer zmdi-hc-fw"></i> Proceso Administrativo Disciplinario <small>COPROA</small></h1>
            </div>
			      <p class="lead">este proceso se realiza solo a profesores</p>
		</div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-xs-12">
        <b-tabs>
          <b-tab title="Nuevo Rgistro" active>
            <br><form action="">
									    	<!-- EXpediente -->
									    	<div class="form-group label-floating">
											  <label class="control-label">N° Expediente</label>
											  <input class="form-control" type="text">
											</div>
											<!-- Lugar -->
											<div class="form-group label-floating">
											  <label class="control-label">Lugar</label>
											  <input class="form-control" type="text">
											</div>
											<!-- Presunto autor -->
											<div class="form-group label-floating">
											  <label class="control-label">Presunto Autor</label>
											  <input class="form-control" type="text">
											</div>
                                            <!-- Presunto Asunto -->
                                            <div class="form-group label-floating">
											  <label class="control-label">I.E</label>
											  <input class="form-control" type="text">
											</div>
                                            <!-- Presunto Asunto -->
                                            	<div class="form-group label-floating">
											  <label class="control-label">Agraviada</label>
											  <input class="form-control" type="text">
											</div>
                                            <!-- Presunto Asunto -->

											<div class="form-group">
										      <label class="control-label">Falta</label>
										        <select class="form-control">
										          <option>Acoso Sexual</option>
										          <option>Vioelencia Fisica</option>
										          <option>Malversacion de Fondos</option>
										          <option>Robo de Dinero</option>
										        </select>
										    </div>
											<div class="form-group">
											  <label class="control-label">Fecha de Ocurrencia</label>
											  <input class="form-control" type="date">
											</div>
											<div class="form-group">
											  <label class="control-label">Fecha de Ingreso de Expediente</label>
											  <input class="form-control" type="date">
											</div>
											
											<form name="formulario" method="post" action="http://pagina.com/send.php"
     											 enctype="multipart/form-data"> <!-- ¡No olvides el enctype! -->
  												<!-- Campo de selección de archivo -->
  												<input type="file" name="adjunto" accept=".pdf,.jpg,.png" multiple>
											</form>


												
											<div class="row">
													   <div class="col-xs-3">
													   <p class="text-center">
										    	<button href="#!" class="btn btn-info btn-raised btn-sm"><i class="zmdi zmdi-floppy"></i> Grbar</button>
										    </p>								  
													  </div>
		                                             <div class="col-xs-4">
													  <p class="text-center">
										    	<button href="#!" class="btn btn-info btn-raised btn-sm"><i class="zmdi zmdi-floppy"></i> Editar</button>
										    </p>							  
													  </div>

													   <div class="col-xs-5">
													   
													   <p class="text-center">
										    	<button href="#!" class="btn btn-info btn-raised btn-sm"><i class="zmdi zmdi-floppy"></i> Imprimir</button>
										    </p>
													 </div>
											  
									          </div>
                                            

									    </form>
          </b-tab>
          <b-tab title="Listar" >
            <br>
            	<div class="table-responsive">
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
								<ul class="pagination pagination-sm">
								  	<li class="disabled"><a href="#!">«</a></li>
								  	<li class="active"><a href="#!">1</a></li>
								  	<li><a href="#!">2</a></li>
								  	<li><a href="#!">3</a></li>
								  	<li><a href="#!">4</a></li>
								  	<li><a href="#!">5</a></li>
								  	<li><a href="#!">»</a></li>
								</ul>
							</div>
          </b-tab>
     
        </b-tabs>
					
					
				</div>
			</div>
		</div>

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

<style>
.header{
  background-color: white;
}
.header img{
  width: 200px;
}
</style>