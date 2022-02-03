import '../css/styles.css';
import Footer from "./partials/footer"
import Head from "./partials/head"
import Header from "./partials/header"

function editProduct() {


    
    return (
      <body className="body-index">
        <Head />
        <Header />
        <section className="container-banner">
          <div className="banner"> </div>
        </section>
        <main className="main-upload-products">
          <section className="section-formulario-register">

            <form action="/editProduct/<%= producto.id %>?_method=PUT" method="POST" class="form-registro" enctype="multipart/form-data">
              <p className="iniciar-sesion-tamañano">Editar producto </p>
                <br />
              
                <div className="control-form">
                    <input type="text" name="modelo" class="control" placeholder="Modelo" />  
                </div>

                <div className="control-form">
                    <select name="marca" >
                        <option value="1)Logitech">Logitech</option>
                        <option value="2)Asus">Asus</option>
                        <option value="3)AMD radeon Software">AMD radeon Software</option>
                        <option value="4)G.skill">G.skill</option>
                        <option value="5)Nvidia Corporation">Nvidia Corporation</option>
                        <option value="6)Gigabyte Technologies">Gigabyte Technologies</option>
                        <option value="7)Cooler Master">Cooler Master</option>
                        <option value="8)Apple Inc.">Apple Inc.</option>
                        <option value="9)Kingston Technologies Company">Kingston Technologies Company</option>
                        <option value="10)Intel Corporation">Intel Corporation</option>
                        <option value="11)AMD Radeon Software">AMD Radeon Software</option>
                        <option value="12)Micron Technology inc">Micron Technology inc</option>
                        <option value="13)PNY technologies Inc">PNY technologies Inc</option>
                        <option value="14)Astro Gamin">Astro Gamin</option>
                        <option value="15)Akracing">Akracing</option>
                        <option value="16)Ideon Inc.">Ideon Inc.</option>
                        <option value="17)Samsung">Samsung</option>
                        <option value="18)Benq">Benq</option>
                        <option value="19)WPhillips">Phillips</option>
                        <option value="20)Nvidia Corporation">Nvidia Corporation</option>
                        <option value="21)ASRock">ASRock</option>
                        <option value="22)AFoc">AFoc</option>
                        <option value="23)Razer">Razer</option>
                        <option value="24)Corsair Gaming Inc.">Corsair Gaming Inc.</option>
                        <option value="25)Apple Inc.">Apple Inc.</option>
                        <option value="26)The Cable Company">The Cable Company</option>
                        <option value="27)Western Digital Corp.">Western Digital Corp.</option>
                        <option value="28)Aerocool">Aerocool</option>
                        <option value="29)Otros">Otros</option>
                    </select>
                </div>

                <div className="control-form">
                    <select name="tipoProducto" >
                        <option value="1)Almacenamiento">Almacenamiento</option>
                        <option value="2)Auriculares">Auriculares</option>
                        <option value="3)Cables">Cables</option>
                        <option value="4)Coolers">Coolers</option>
                        <option value="5)Fuentes de poder">Fuentes de poder</option>
                        <option value="6)Gabinetes">Gabinetes</option>
                        <option value="7)Memorias ram">Memorias ram</option>
                        <option value="8)Microfonos">Microfonos</option>
                        <option value="9)Microprocesadores">Microprocesadores</option>
                        <option value="10)Monitores y televisores">Monitores y televisores</option>
                        <option value="11)Motherboards">Motherboards</option>
                        <option value="12)Mouses">Mouses</option>
                        <option value="13)Notebooks">Notebooks</option>
                        <option value="14)Parlantes">Parlantes</option>
                        <option value="15)Placas de video">Placas de video</option>
                        <option value="16)Sillas gamer">Sillas gamer</option>
                        <option value="17)Teclados">Teclados</option>
                        <option value="18)Webcams">Webcams</option>
                        <option value="19)Otros">Otros</option>
                    </select>
                </div>
                
                <div className="control-form">
                    <input type="file" name="avatar" accept=".jpg" placeholder="Imagen del Producto" />
                </div>
    
                <div className="control-form">
                    <input type="text" name="precio" class="control" placeholder="Precio" />
                </div>

                <div className="iniciar-sesion-tamañano"> Stock disponible</div>

                <div className="control-form">
                    <select name="stockBooleano">
                        <option value="Si">Sí</option>
                        <option value="No">No</option>
                    </select>
                </div>

                <div className="control-form">
                    <input type="text" name="stockCant" class="control" placeholder="Stock actual: " />
                </div>

                <div className="iniciar-sesion-tamañano"> En Oferta </div>

                <div className="control-form">
                    <select name="ofertaBooleano">
                        <option value="Si">Sí</option>
                        <option value="No">No</option>
                    </select>
                </div>

                <div className="control-form">
                    <input type="text" name="ofertaPorcentaje" class="control" placeholder="Porcentaje de oferta actual: " />
                </div>
    
                <div className="control-form">
                    <input type="text" name="especificaciones" class="control" placeholder="Especificaciones: " />
                </div>
    
                <div class="control-form">
                    <button type="submit" class="botton">Editar Producto</button>
                </div>


            </form>

          </section>

        </main>
        <br />
        <Footer />
      </body>
    );
  }
  
  export default editProduct ;