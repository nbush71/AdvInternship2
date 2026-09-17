

function Footer() {
  return (
   <section id="footer">
      <div class="grid grid-cols-4 gap-4">
        <div class="flex flex-1 ">
          <div class="footer__top--wrapper">
            <div class="footer__block">
              <div class="footer__link--title">Actions</div>
              <div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Summarist Magazine</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Cancel Subscription</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Help</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Contact us</a>
                </div>
              </div>
            </div>

            <div className="block gap-6 justify-between">
              <div className="footer__link--title">Useful Links</div>
              <div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Pricing</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Summarist Business</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Gift Cards</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Authors & Publishers</a>
                </div>
              </div>
            </div>

            <div className="footer__block">
              <div className="footer__link--title">Company</div>
              <div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">About</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Careers</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Partners</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Code of Conduct</a>
                </div>
              </div>
            </div>

            <div className="footer__block">
              <div className="footer__link--title">Other</div>
              <div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Sitemap</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Legal Notice</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Terms of Service</a>
                </div>
                <div className="footer__link--wrapper">
                  <a className="footer__link">Privacy Policies</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center content-center ">
            <div className="flex flex-1 w-full content-center text-2xl font-bold text-brand-darkteal">
              Copyright &copy; 2023 Summarist.
            </div>
          </div>
        </div>
      </div>
    </section> 
  )
}

export default Footer;