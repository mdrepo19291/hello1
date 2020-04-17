import React from 'react';
import {Link} from 'react-router-dom';


export default function Footer(){
    return (
        <>
    <footer class="page-footer text-center text-md-left mt-0 bg-info clearfix">
    <div class="container mb-2">
          <div class="row">
              <div class="col-md-12 my-4 wow fadeIn" data-wow-delay="0.3s" style={{visibility: "visible", animationName: "fadeIn", animationDelay: "0.3s"}}>
                  <div class="footer-socials mt-1 text-center">
                    
                    <a type="button" class="btn-floating waves-effect waves-light p-2 bg-transparent scale-2"><i class="h-50 fab fa-twitter"></i></a>
                    <a type="button" class="btn-floating waves-effect waves-light p-2 bg-transparent scale-2"><i class="h-50 fab fa-facebook-f"></i></a>
                    <a type="button" class="btn-floating waves-effect waves-light p-2 bg-transparent scale-2"><i class="h-50 fab fa-youtube"></i></a>
                    <a type="button" class="btn-floating waves-effect waves-light p-2 bg-transparent scale-2"><i class="h-50 fab fa-instagram"></i></a>
                    
                  </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright text-center py-1">
              © 2019 Copyright: <Link to="/" class="text-light"> SizeEpedia.com </Link>
          </div>
      </footer>
        </>
    )
}