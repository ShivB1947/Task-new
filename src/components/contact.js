import React from 'react';
import { SocialIcon } from 'react-social-icons'

const Contact = () => {
  return (
<div class="bg-light">

    <div class="container mb-5">
    <header
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-5 border-bottom">
        <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <b>Mediartrade</b>
        </a>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">Prossime Aste</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">Private Sale</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">Accedi</a></li>
        <div class="dropdown text-end mt-2">
            <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown"
            aria-expanded="false">
            IT
            </a>
            <ul class="dropdown-menu text-small">
            <li><a class="dropdown-item" href="#">exampe</a></li>
            </ul>
        </div>
        </ul>
    </header>

    <main class="mt-5">
        <div class="row g-5">
     

        <div class="col-md-7 col-lg-8">
            <h4 class="mb-3 text-center"><strong> Contattaci </strong></h4>
            <form class="needs-validation" novalidate>
            <div class="row g-3">
                <div class="col-sm-6">
                <label for="firstName" class="form-label">First name</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                <div class="invalid-feedback">
                    Valid first name is required.
                </div>
                </div>

                <div class="col-sm-6">
                <label for="lastName" class="form-label">Last name</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                <div class="invalid-feedback">
                    Valid last name is required.
                </div>
                </div>

                <div class="col-sm-6">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="" value="" required />
                <div class="invalid-feedback">
                    Email name is required.
                </div>
                </div>

                <div class="col-sm-6">
                <label for="telephone" class="form-label">Telephone</label>
                <input type="text" class="form-control" id="telephone" placeholder="" value="" required />
                <div class="invalid-feedback">
                    Valid Telephone is required.
                </div>
                </div>

                <div class="col-md-12">
                <label for="country" class="form-label">Richiesta Valutazione</label>
                <select class="form-select" id="country" required>
                    <option value="">Choose...</option>
                    <option>Example 1</option>
                    <option>Example 2</option>
                </select>
                <div class="invalid-feedback">
                    Please select a valid .
                </div>
                </div>

                <div class="col-sm-12">
                <textarea class="form-control" name="" id="" cols="30" rows="10"
                    placeholder="Come possiamo aiutaria"></textarea>
                <div class="invalid-feedback">
                    Valid Telephone is required.
                </div>
                </div>

            </div>

            <button class="w-100 btn btn-dark btn-lg mt-3" type="submit">INVIA MESSAGIO</button>
            </form>
        </div>
        <div class="col-md-5 col-lg-4 order-md-last mt-5" style={{ borderLeft: '1px solid' }}>
       

       <div class="side" style={{ marginTop: '5rem' }}>
       <div class="upper-side">
       {/* <i class="fa fa-whatsapp"></i> */}
       <SocialIcon url="www.whatsapp.com"     style={{ 
           
              marginLeft: "160px"
            }}  />
           <p class="text-center">Preferisci usare WhatsApp?</p>
           <p class="text-center"> <strong> +39 331 9467237 </strong></p>
       </div>
       </div>
   </div>
        </div>
    </main>

    </div>

</div>

  );
}

export default Contact;